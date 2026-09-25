import { type Locator, type Page, expect, test } from "@playwright/test"

import type { Lecture } from "../app/common/schemas/lecture"
import type { TimetableItem } from "../app/common/schemas/timetableItem"

test.use({ locale: "ko-KR" })

const screenshotDirectory = "/tmp/otl-friends-figma"
const semester = {
    year: 2026,
    semester: 3,
    beginning: "2026-08-31",
    end: "2026-12-18",
    courseDesciptionSubmission: "2026-07-01",
    courseRegistrationPeriodStart: "2026-08-01",
    courseRegistrationPeriodEnd: "2026-08-05",
    courseAddDropPeriodEnd: "2026-09-11",
    courseDropDeadline: "2026-10-01",
    courseEvaluationDeadline: "2026-12-30",
    gradePosting: "2027-01-01",
}
const sharedLecture: Lecture = {
    id: 7,
    courseId: 7,
    classNo: "A",
    name: "소프트웨어 공학 개론",
    subtitle: "",
    code: "CS206",
    department: { id: 1, name: "전산학부", code: "CS" },
    type: "전공필수",
    limitPeople: 50,
    numPeople: 35,
    classDuration: 3,
    expDuration: 1,
    credit: 3,
    creditAU: 0,
    averageGrade: 4.8,
    averageLoad: 4.8,
    averageSpeech: 4.8,
    isEnglish: false,
    professors: [{ id: 1, name: "김교수" }],
    classes: [1, 3].map((day) => ({
        day,
        begin: 600,
        end: 690,
        buildingCode: "E3-1",
        buildingName: "전산학부",
        roomName: "101",
    })),
    examTimes: [{ day: 4, begin: 1140, end: 1305, str: "금요일 19:00 - 21:45" }],
}
const lecture = (
    id: number,
    name: string,
    days: number[],
    begin: number,
    end: number,
): Lecture => ({
    ...sharedLecture,
    id,
    courseId: id,
    name,
    code: `CS${id}00`,
    classes: days.map((day) => ({ ...sharedLecture.classes[0]!, day, begin, end })),
})
const lectures = [
    sharedLecture,
    { ...lecture(9, "자료구조 다른 분반", [0, 2], 510, 600), courseId: 7, classNo: "B" },
    lecture(10, "선형대수학", [1, 3], 510, 600),
    lecture(11, "확률과 통계", [0, 2], 750, 840),
    lecture(12, "프로그래밍 실습", [3], 1110, 1350),
    lecture(13, "인공지능 개론", [0, 2], 840, 930),
]
const items: TimetableItem[] = [
    ...lectures.map((data) => ({ kind: "lecture" as const, data })),
    {
        kind: "custom",
        data: {
            id: 55,
            block_name: "스터디 모임",
            place: "학술문화관 2층",
            day: 5,
            begin: 720,
            end: 810,
            times: [
                { day: 5, begin: 720, end: 810 },
                { day: 6, begin: 720, end: 810 },
            ],
        },
    },
]
const friends = ["김희진", "김교수", "박지수", "이서연", "정민수", "최지훈"].map(
    (name, index) => ({
        id: 7 + index,
        name,
        isFavorite: index === 1,
        hasScheduleNow: index === 0 || index === 2,
    }),
)
const savedTimetables = [{ id: 42, name: "시간표 1", year: 2026, semester: 3 }]

async function setup(page: Page, language = "ko") {
    await page.addInitScript(
        (value) => localStorage.setItem("i18nextLng", value),
        language,
    )
    await page.route(/^https?:\/\/[^/]+\/api\//, async (route) => {
        const path = new URL(route.request().url()).pathname
        let json: unknown = {}
        if (path === "/api/v2/users/info") {
            json = {
                id: 1,
                name: "정테스터",
                mail: "test@example.com",
                studentNumber: 20260001,
                degree: "Bachelor",
                majorDepartments: [],
                interestedDepartments: [],
            }
        } else if (path === "/api/v2/semesters") {
            json = { semesters: [{ ...semester, semester: 1 }, semester] }
        } else if (path === "/api/v2/semesters/current") json = semester
        else if (path === "/api/v2/friends") {
            json = { friends, checkedAt: new Date().toISOString() }
        } else if (path === "/api/users/1/timetables") {
            // The matching lecture lives in a different saved table, not the first.
            json = [
                { id: 1, lectures: [{ id: 99 }] },
                { id: 2, lectures: [{ id: sharedLecture.id }] },
            ]
        } else if (path === "/api/v2/timetables/my-timetable") {
            json = {
                lectures: [lectures[4]],
                timetableItems: [{ kind: "lecture", data: lectures[4] }],
            }
        } else if (/^\/api\/v2\/friends\/\d+\/timetables$/.test(path)) {
            json = { timetables: savedTimetables }
        } else if (
            /^\/api\/v2\/friends\/\d+\/timetables\/(42|my-timetable)$/.test(path)
        ) {
            json = { lectures, timetableItems: items }
        } else if (path === "/api/v2/timetables") {
            json = { timetables: savedTimetables }
        } else if (path.endsWith("/overlaps")) {
            json = {
                sameLecture: [{ ...friends[1], timetable: { ...semester, id: 42 } }],
                sameCourseDifferentSection: [
                    { ...friends[2], timetable: { ...semester, id: null } },
                ],
                previousSemesterSameProfessor: [
                    { ...friends[3], timetable: { id: null, year: 2025, semester: 3 } },
                ],
            }
        } else if (path === "/api/v2/reviews") {
            json = {
                averageGrade: 4.8,
                averageLoad: 4.8,
                averageSpeech: 4.8,
                reviews: [
                    "기본 개념부터 차근차근 설명해 주셔서 이해하기 좋았습니다. 과제도 수업 내용을 복습하는 데 도움이 됩니다.",
                    "자료구조를 직접 구현하며 배울 수 있는 수업입니다. 꾸준히 복습하면 어렵지 않게 따라갈 수 있습니다.",
                ].map((content, index) => ({
                    id: index + 1,
                    courseId: 7,
                    lectureId: 7,
                    courseName: "자료구조",
                    professors: sharedLecture.professors,
                    year: 2025,
                    semester: 3,
                    content,
                    like: index + 2,
                    grade: 5,
                    load: 5,
                    speech: 5,
                    isDeleted: false,
                    likedByUser: false,
                })),
            }
        } else if (path === "/api/v2/users/written-reviews") json = { reviews: [] }
        await route.fulfill({ json })
    })
    await page.goto("/friends?friendId=7&year=2026&semester=3&timetableId=42")
    await expect(page.getByRole("tab", { name: "시간표 1" })).toHaveAttribute(
        "aria-selected",
        "true",
    )
    await expect(page.locator("[data-friend-overlap=true]")).toHaveCount(3)
}

async function expectNoHorizontalOverflow(page: Page) {
    expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBe(true)
}

async function expectSeparateLabelAndTitle(tile: Locator) {
    const badgeBox = await tile.locator(".friend-overlap-label").boundingBox()
    const titleBox = await tile.locator(".lecture-title").boundingBox()
    const tileBox = await tile.boundingBox()
    expect(
        badgeBox!.y + badgeBox!.height <= titleBox!.y ||
            titleBox!.y + titleBox!.height <= badgeBox!.y ||
            badgeBox!.x + badgeBox!.width <= titleBox!.x ||
            titleBox!.x + titleBox!.width <= badgeBox!.x,
        "The overlap label must not cover the lecture title",
    ).toBe(true)
    expect(badgeBox!.x).toBeGreaterThanOrEqual(tileBox!.x)
    expect(badgeBox!.x + badgeBox!.width).toBeLessThanOrEqual(tileBox!.x + tileBox!.width)
    expect(badgeBox!.y).toBeGreaterThanOrEqual(tileBox!.y)
    expect(badgeBox!.y + badgeBox!.height).toBeLessThanOrEqual(
        tileBox!.y + tileBox!.height,
    )
}

test("desktop matches the friends layout and exact-lecture overlap treatment", async ({
    page,
}) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await setup(page)
    await expect(page.getByText("친구 목록 (6)", { exact: true })).toBeVisible()
    await expect(
        page.getByRole("img", { name: "지금 등록된 일정이 있어요" }),
    ).toHaveCount(2)
    await expect(page.getByRole("button", { name: "삭제", exact: true })).toHaveCount(1)
    await expect(
        page.locator("[data-lecture-id='9'] [data-friend-overlap] "),
    ).toHaveCount(0)
    await expect(
        page.locator("[data-lecture-id='7'] [data-friend-overlap] "),
    ).toHaveCount(2)
    const searchBox = page.getByRole("textbox", { name: "검색", exact: true })
    const friendRow = page.getByRole("button", { name: /^김희진 / })
    await expect(friendRow).toHaveCSS("height", "46px")
    await expect(friendRow).toHaveCSS("border-radius", "6px")
    const tab = await page.getByRole("tab", { name: "시간표 1" }).boundingBox()
    expect(tab?.height).toBe(34)
    await page.locator("[data-lecture-id='7'] .lecture-tile").first().click()
    await expect(page.getByText("기본 개념부터", { exact: false })).toBeVisible()
    await expect(page.getByRole("link", { name: "실라버스", exact: true })).toBeVisible()
    await expect(page.getByText("강의시간", { exact: true })).toBeVisible()
    await expect(page.getByText("실험", { exact: true })).toBeVisible()
    await expect(page.getByText("A+", { exact: true })).toHaveCount(3)
    await expect(
        page.getByText("이 수업을 같이 듣는 친구", { exact: true }),
    ).toBeVisible()
    const detailCode = await page.getByText("CS206 (A)", { exact: true }).boundingBox()
    const grid = await page.locator(".custom-timetable").boundingBox()
    expect(detailCode!.x).toBeGreaterThan(grid!.x + grid!.width)
    await expectNoHorizontalOverflow(page)
    await page.mouse.move(1900, 20)
    await page.screenshot({ path: `${screenshotDirectory}/actual-desktop.png` })
    await searchBox.fill("박지수")
    await expect(page.getByRole("button", { name: /^박지수 / })).toBeVisible()
    await expect(friendRow).toHaveCount(0)
    await searchBox.fill("")
    await page.locator(".custom-block-tile").first().click()
    await expect(page.getByRole("region", { name: "일정 상세" })).toContainText(
        "학술문화관 2층",
    )
    await expect(page.locator("[data-lecture-id='9'] .lecture-tile").first()).toHaveCSS(
        "opacity",
        "0.5",
    )
    await expect(page.locator("[data-lecture-id='7'] .lecture-tile").first()).toHaveCSS(
        "opacity",
        "0.5",
    )
    await page.getByRole("button", { name: "이전 학기", exact: true }).click()
    await expect(page).toHaveURL(/semester=1/)
    await expect(page.getByRole("tab", { name: "수강 시간표" })).toHaveAttribute(
        "aria-selected",
        "true",
    )
})

for (const viewport of [
    { name: "mobile", width: 390, height: 844 },
    { name: "tablet", width: 768, height: 1024 },
]) {
    test(`${viewport.name} keeps friend selection, lecture and custom details reachable`, async ({
        page,
    }) => {
        await page.setViewportSize(viewport)
        await setup(page)
        await expectNoHorizontalOverflow(page)
        await page.screenshot({
            path: `${screenshotDirectory}/actual-${viewport.name}.png`,
        })
        const sharedTile = page.locator("[data-lecture-id='7'] .lecture-tile").first()
        await expectSeparateLabelAndTitle(sharedTile)
        await page.getByRole("button", { name: "친구 선택", exact: true }).click()
        const friendDialog = page.getByRole("dialog", { name: "친구 시간표" })
        await expect(friendDialog).toBeVisible()
        await expect(
            friendDialog.getByRole("img", { name: "지금 등록된 일정이 있어요" }),
        ).toHaveCount(2)
        await page.screenshot({
            path: `${screenshotDirectory}/${viewport.name}-friends.png`,
        })
        await friendDialog.getByRole("button", { name: /^김교수 / }).click()
        await expect(friendDialog).toHaveCount(0)
        await expect(page).toHaveURL(/friendId=8/)
        await page.getByRole("tab", { name: "시간표 1" }).click()
        await page.locator("[data-lecture-id='7'] .lecture-tile").first().click()
        const lectureDialog = page.getByRole("dialog", { name: "겹강 확인" })
        await expect(lectureDialog).toBeVisible()
        await expect(lectureDialog.getByText("CS206 (A)", { exact: true })).toBeVisible()
        await expect(
            lectureDialog.getByText("기본 개념부터", { exact: false }),
        ).toBeVisible()
        await expectNoHorizontalOverflow(page)
        await page.screenshot({
            path: `${screenshotDirectory}/${viewport.name}-detail.png`,
        })
        await lectureDialog.getByRole("button", { name: "닫기", exact: true }).click()
        await page.locator(".custom-block-tile").first().click()
        const customDialog = page.getByRole("dialog", { name: "일정 상세" })
        await expect(customDialog).toBeVisible()
        await expect(customDialog).toContainText("학술문화관 2층")
        await expect(customDialog.getByRole("textbox")).toHaveCount(0)
        await customDialog.getByRole("button", { name: "닫기", exact: true }).click()
        await page.getByRole("button", { name: "이전 학기", exact: true }).click()
        await expect(page).toHaveURL(/semester=1/)
        await expectNoHorizontalOverflow(page)
    })
}

for (const viewport of [
    { name: "desktop", width: 1920, height: 1080 },
    { name: "mobile", width: 390, height: 844 },
]) {
    for (const theme of ["light", "dark"] as const) {
        test(`${viewport.name} shared labels preserve course colors and selection in ${theme} mode`, async ({
            page,
        }) => {
            const pageErrors: string[] = []
            page.on("pageerror", (error) => pageErrors.push(error.message))
            await page.setViewportSize(viewport)
            await page.addInitScript(
                (value) => localStorage.setItem("theme", value),
                theme,
            )
            await setup(page, "en")
            await page.mouse.move(viewport.width - 2, 2)
            const sharedTiles = page.locator("[data-lecture-id='7'] .lecture-tile")
            const unsharedTile = page
                .locator("[data-lecture-id='9'] .lecture-tile")
                .first()
            const courseColor = await unsharedTile.evaluate(
                (tile) => getComputedStyle(tile).backgroundColor,
            )
            for (const tile of await sharedTiles.all()) {
                await expect(tile.locator(".lecture-title")).toContainText(
                    "소프트웨어 공학 개론",
                )
                await expect(tile.locator(".friend-overlap-label")).toHaveText("Shared")
                await expect(tile).toHaveCSS("background-color", courseColor)
                await expect(tile).toHaveCSS("opacity", "1")
                await expect(tile).toHaveCSS("box-shadow", "none")
                await expect(tile.locator("..")).toHaveCSS("box-shadow", "none")
                await expectSeparateLabelAndTitle(tile)
            }
            await expectNoHorizontalOverflow(page)
            await page.screenshot({
                path: `/tmp/otl-friends-label-fix/${viewport.name}-${theme}.png`,
            })

            await unsharedTile.click()
            if (viewport.name === "mobile") {
                await expect(
                    page.getByRole("dialog", { name: "Classmates" }),
                ).toBeVisible()
                await page.keyboard.press("Escape")
            }
            await page.mouse.move(viewport.width - 2, 2)
            for (const tile of await sharedTiles.all()) {
                await expect(tile).toHaveCSS("opacity", "0.5")
                await expect(tile).toHaveCSS("background-color", courseColor)
            }
            await page.locator(".custom-block-tile").first().click()
            if (viewport.name === "mobile") {
                await expect(
                    page.getByRole("dialog", { name: "Schedule details" }),
                ).toBeVisible()
                await page.keyboard.press("Escape")
            }
            await page.mouse.move(viewport.width - 2, 2)
            for (const tile of await sharedTiles.all()) {
                await expect(tile).toHaveCSS("opacity", "0.5")
                await expect(tile).toHaveCSS("background-color", courseColor)
            }

            if (viewport.name === "mobile")
                await page
                    .getByRole("button", { name: "Choose friend", exact: true })
                    .click()
            const friendList =
                viewport.name === "mobile" ? page.getByRole("dialog") : page
            const ownRow = friendList.getByRole("button", {
                name: "My Timetable",
                exact: true,
            })
            const firstFriend = friendList.getByRole("button", { name: /^김희진 / })
            const ownBox = await ownRow.boundingBox()
            const firstFriendBox = await firstFriend.boundingBox()
            expect(ownBox!.y + ownBox!.height).toBeLessThanOrEqual(firstFriendBox!.y)
            await expect(
                friendList.getByText("Friends (6)", { exact: true }),
            ).toBeVisible()
            await friendList
                .getByRole("textbox", { name: "Search", exact: true })
                .fill("박지수")
            await expect(ownRow).toBeVisible()
            await expect(firstFriend).toHaveCount(0)
            await ownRow.click()
            const params = new URL(page.url()).searchParams
            expect(params.has("friendId")).toBe(false)
            expect(params.has("timetableId")).toBe(false)
            await expect(
                page.getByRole("tab", { name: "Enrolled timetable" }),
            ).toHaveAttribute("aria-selected", "true")
            await expect(page.locator("[data-friend-overlap=true]")).toHaveCount(0)
            expect(pageErrors).toEqual([])
        })
    }
}
