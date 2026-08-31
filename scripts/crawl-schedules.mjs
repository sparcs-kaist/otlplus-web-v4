#!/usr/bin/env node
/**
 * KAIST 학사일정 크롤러 (참조 구현 / 의존성 없음)
 *
 * 소스: https://www.kaist.ac.kr/kr/html/edu/03110101.html  (본교, groups=university)
 *       https://www.kaist.ac.kr/kr/html/edu/03110102.html  (경영대학)
 *
 * 페이지는 서버 렌더링이다. 월 탭은 form POST지만 GET으로도 동일하게 동작한다.
 * 단 month는 반드시 2자리 zero-padded여야 한다 (`09` O, `9` X — 1자리면 빈 목록이 온다).
 * month를 비우면 "전체"가 아니라 현재 월로 폴백하므로 01~12를 각각 요청한다.
 *
 * 사용법:
 *   node scripts/crawl-schedules.mjs --out <path.ts>   # 크롤링 후 TS 모듈 생성
 *   node scripts/crawl-schedules.mjs                   # stdout으로 출력
 *   node scripts/crawl-schedules.mjs --test   # 네트워크 없이 파서 검증
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs"
import { dirname } from "node:path"

const BASE_URL = "https://www.kaist.ac.kr/kr/html/edu/03110101.html"
const GROUPS = "university"

const ENTITIES = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&nbsp;": " ",
    "&middot;": "·",
}

function decodeEntities(text) {
    return text.replace(/&(?:amp|lt|gt|quot|#39|apos|nbsp|middot);/g, (m) => ENTITIES[m])
}

/** td 안의 태그를 걷어내고 공백을 정규화한다. */
function cellText(html) {
    return decodeEntities(html.replace(/<[^>]*>/g, ""))
        .replace(/\s+/g, " ")
        .trim()
}

// "09-02(수)" 또는 "09-08(화) ~ 10-16(금)"
const DATE_CELL = /^(\d{2})-(\d{2})\([^)]*\)(?:\s*~\s*(\d{2})-(\d{2})\([^)]*\))?$/

/**
 * 한 달치 페이지 HTML에서 상세일정 항목을 뽑는다.
 * 마크업 변경에 덜 민감하도록 CSS 선택자 대신 텍스트 패턴에 의존한다.
 */
export function parseSchedulePage(html, year) {
    const table = html.match(
        /<table[^>]*class="[^"]*schedule_table[^"]*"[^>]*>([\s\S]*?)<\/table>/i,
    )
    if (!table) return []

    const schedules = []
    for (const [, row] of table[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
        const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((c) =>
            cellText(c[1]),
        )
        if (cells.length < 2) continue // thead/colgroup 등

        const matched = DATE_CELL.exec(cells[0])
        const name = cells[1]
        if (!matched || !name) continue

        const [, fromMonth, fromDay, toMonth = fromMonth, toDay = fromDay] = matched
        // 12-28 ~ 01-05 처럼 해를 넘기는 구간은 종료일이 다음 해다.
        const toYear = Number(toMonth) < Number(fromMonth) ? year + 1 : year

        schedules.push({
            year,
            from: new Date(year, Number(fromMonth) - 1, Number(fromDay)),
            to: new Date(toYear, Number(toMonth) - 1, Number(toDay)),
            name,
        })
    }
    return schedules
}

/** 여러 달에 걸친 일정은 각 월 페이지에 중복 등장하므로 제거한다. */
export function dedupe(schedules) {
    const seen = new Map()
    for (const s of schedules) {
        seen.set(`${s.from.getTime()}|${s.to.getTime()}|${s.name}`, s)
    }
    return [...seen.values()].sort(
        (a, b) => a.from - b.from || a.name.localeCompare(b.name),
    )
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Node의 fetch는 기본 타임아웃이 사실상 없다(undici 300s). 걸어두지 않으면
// KAIST가 연결만 받고 응답하지 않을 때 CI 빌드가 그대로 매달린다.
const REQUEST_TIMEOUT_MS = 10_000

/** KAIST가 잠깐 흔들려도 배포가 깨지지 않도록 월 단위로 재시도한다. */
async function fetchMonth(year, month, fetchImpl, retries = 3) {
    const params = new URLSearchParams({
        groups: GROUPS,
        year: String(year),
        month: String(month).padStart(2, "0"), // 반드시 2자리
    })
    for (let attempt = 1; ; attempt++) {
        try {
            const response = await fetchImpl(`${BASE_URL}?${params}`, {
                signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
            })
            if (!response.ok) throw new Error(`HTTP ${response.status}`)
            return await response.text()
        } catch (error) {
            if (attempt >= retries) {
                throw new Error(
                    `${year}-${String(month).padStart(2, "0")}: ${error.message}`,
                    { cause: error },
                )
            }
            await sleep(attempt * 500)
        }
    }
}

export async function crawlYear(year, fetchImpl = fetch) {
    const all = []
    for (let month = 1; month <= 12; month++) {
        all.push(...parseSchedulePage(await fetchMonth(year, month, fetchImpl), year))
    }
    return dedupe(all)
}

/** 연말에 다음 해 일정이 비지 않도록 올해와 내년을 함께 긁는다. */
export async function crawlYears(years, fetchImpl = fetch) {
    const all = []
    for (const year of years) {
        const schedules = await crawlYear(year, fetchImpl)
        console.error(`  ${year}: ${schedules.length}건`)
        all.push(...schedules)
    }
    return dedupe(all)
}

// ---------------------------------------------------------------------------
// 실제 응답(2026-09, 본교)에서 그대로 잘라온 픽스처로 파서를 검증한다.
// 네트워크 없이 `node scripts/crawl-schedules.mjs --test` 로 실행.
// ---------------------------------------------------------------------------

const FIXTURE = `
                <table class="schedule_table">
                    <!-- <caption>상세일정</caption> -->
                    <colgroup>
                        <col style="width:32%">
                        <col style="width:68%">
                    </colgroup>
					<tr>
						<td>09-02(수) ~ 09-04(금)</td>
						<td>학사과정 가을학기 학점인정시험</td>
					</tr>

					<tr>
						<td>09-07(월)</td>
						<td>가을학기 수강신청 변경 마감</td>
					</tr>

					<tr>
						<td>09-08(화) ~ 10-16(금)</td>
						<td>학사과정 2006 이전 학번 및 학·석·박사과정 2009 이후 학번 가을학기 수강신청 취소</td>
					</tr>

					<tr>
						<td>09-24(목) ~ 09-26(토)</td>
						<td>추석 연휴</td>
					</tr>
                </table>`

const ROLLOVER_FIXTURE = `<table class="schedule_table">
    <tr><td>12-28(월) ~ 01-05(화)</td><td>겨울학기 수강신청 취소</td></tr>
    <tr><td>12-25(금)</td><td>성탄절 &amp; 휴강</td></tr>
</table>`

function runTests() {
    const failures = []
    const check = (label, actual, expected) => {
        const a = JSON.stringify(actual)
        const e = JSON.stringify(expected)
        if (a === e) return console.log(`  ok  ${label}`)
        failures.push(label)
        console.log(`  FAIL ${label}\n       expected ${e}\n       actual   ${a}`)
    }
    const ymd = (d) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`

    const parsed = parseSchedulePage(FIXTURE, 2026)

    check("colgroup/주석을 항목으로 세지 않는다", parsed.length, 4)
    check(
        "단일 날짜는 from == to",
        [ymd(parsed[1].from), ymd(parsed[1].to), parsed[1].name],
        ["2026-09-07", "2026-09-07", "가을학기 수강신청 변경 마감"],
    )
    check(
        "기간과 요일 표기를 분리한다",
        [ymd(parsed[0].from), ymd(parsed[0].to)],
        ["2026-09-02", "2026-09-04"],
    )
    check(
        "달을 넘는 기간을 유지한다",
        [ymd(parsed[2].from), ymd(parsed[2].to)],
        ["2026-09-08", "2026-10-16"],
    )
    check(
        "가운뎃점이 포함된 이름을 보존한다",
        parsed[2].name.includes("학·석·박사과정"),
        true,
    )

    const rollover = parseSchedulePage(ROLLOVER_FIXTURE, 2026)
    check(
        "12-28 ~ 01-05 는 종료일이 다음 해",
        [ymd(rollover[0].from), ymd(rollover[0].to)],
        ["2026-12-28", "2027-01-05"],
    )
    check("HTML 엔티티를 디코딩한다", rollover[1].name, "성탄절 & 휴강")

    check("빈/미매칭 HTML은 빈 배열", parseSchedulePage("<html>없음</html>", 2026), [])

    const deduped = dedupe([...parsed, ...parsed])
    check("중복 등장하는 일정을 제거한다", deduped.length, 4)
    check(
        "시작일 오름차순 정렬",
        deduped.map((s) => ymd(s.from)),
        ["2026-09-02", "2026-09-07", "2026-09-08", "2026-09-24"],
    )

    const generated = toTypeScript(parseSchedulePage(FIXTURE, 2026))
    check(
        "TS 모듈로 직렬화한다 (month는 1부터, 타임존 밀림 없음)",
        generated.includes("from: day(2026, 9, 2),") &&
            generated.includes("to: day(2026, 9, 4),") &&
            generated.includes('name: "학사과정 가을학기 학점인정시험",'),
        true,
    )
    check(
        "1월 1일이 전년 12월 31일로 밀리지 않는다",
        toTypeScript([
            {
                year: 2026,
                from: new Date(2026, 0, 1),
                to: new Date(2026, 0, 1),
                name: "신정",
            },
        ]).includes("from: day(2026, 1, 1),"),
        true,
    )
    check(
        "일정이 없어도 유효한 TS를 낸다",
        toTypeScript([]).trimEnd().endsWith("export const schedules: Schedule[] = []"),
        true,
    )

    console.log(failures.length ? `\n${failures.length} failed` : "\n전체 통과")
    return failures.length === 0
}

const HEADER = `// 이 파일은 scripts/crawl-schedules.mjs가 생성합니다. 직접 수정하지 마세요.
// 갱신: pnpm crawl:schedules

export type Schedule = {
    year: number
    from: Date
    to: Date
    name: string
}

/**
 * month는 1부터. 로컬 자정 기준 Date를 만든다.
 *
 * ISO 문자열로 두면 KST 자정이 전날 15:00Z로 밀려서, 빌드 머신과 브라우저의
 * 타임존이 다를 때 하루씩 어긋난다. 생성 시점에 Date로 굳혀서 런타임 파싱을 없앤다.
 */
const day = (year: number, month: number, date: number) => new Date(year, month - 1, date)

export const schedules: Schedule[] = `

/** prettier(printWidth 90, semi false, tabWidth 4)와 충돌하지 않도록 항상 펼쳐서 쓴다. */
export function toTypeScript(schedules) {
    const entries = schedules.map((s) => {
        const d = (date) =>
            `day(${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()})`
        return [
            "    {",
            `        year: ${s.year},`,
            `        from: ${d(s.from)},`,
            `        to: ${d(s.to)},`,
            `        name: ${JSON.stringify(s.name)},`,
            "    },",
        ].join("\n")
    })
    if (entries.length === 0) return HEADER + "[]\n"
    return HEADER + "[\n" + entries.join("\n") + "\n]\n"
}

/** `--out` / `--ensure` 뒤의 경로를 읽는다. 플래그만 주고 경로를 빠뜨리면 조용히 넘어가지 않는다. */
function readPathArg(args, flag) {
    const index = args.indexOf(flag)
    if (index === -1) return null

    const path = args[index + 1]
    if (!path || path.startsWith("-")) {
        console.error(`${flag} 뒤에는 파일 경로가 필요합니다.`)
        process.exit(2)
    }
    return path
}

if (process.argv[1]?.endsWith("crawl-schedules.mjs")) {
    const args = process.argv.slice(2)

    if (args[0] === "--test") {
        process.exit(runTests() ? 0 : 1)
    }

    // --ensure: 네트워크 없이 "파일이 존재함"만 보장한다. 생성 파일을 git에 두지 않으므로,
    // 새로 클론했거나 CI가 build 없이 typecheck만 돌 때 import가 깨지는 걸 막는다.
    const ensurePath = readPathArg(args, "--ensure")
    if (ensurePath) {
        const path = ensurePath
        if (!existsSync(path)) {
            mkdirSync(dirname(path), { recursive: true })
            writeFileSync(path, toTypeScript([]))
            console.error(
                `학사일정 데이터가 비어 있습니다. 실제 데이터는 \`pnpm crawl:schedules\`로 채우세요.`,
            )
        }
        process.exit(0)
    }

    const outPath = readPathArg(args, "--out")
    const thisYear = new Date().getFullYear()
    const years = [thisYear, thisYear + 1]

    console.error(`KAIST 학사일정 크롤링: ${years.join(", ")}`)
    try {
        const schedules = await crawlYears(years)
        if (schedules.length === 0) throw new Error("항목이 하나도 파싱되지 않음")

        if (!outPath) {
            console.log(toTypeScript(schedules))
        } else {
            mkdirSync(dirname(outPath), { recursive: true })
            writeFileSync(outPath, toTypeScript(schedules))
            console.error(`총 ${schedules.length}건 → ${outPath}`)
        }
    } catch (error) {
        // KAIST가 죽었다고 배포까지 막지는 않는다. 직전 결과가 있으면 유지하고,
        // 없으면 빈 파일을 쓴다 (위젯은 "일정 없음"으로 degrade).
        console.error(`\n[!] 학사일정 크롤링 실패: ${error.message}`)
        if (!outPath) process.exit(1)

        if (existsSync(outPath)) {
            console.error(`[!] 기존 ${outPath}를 그대로 사용합니다.`)
        } else {
            mkdirSync(dirname(outPath), { recursive: true })
            writeFileSync(outPath, toTypeScript([]))
            console.error(
                `[!] 빈 ${outPath}를 생성했습니다. 주요 일정 위젯이 비어 보입니다.`,
            )
        }
    }
}
