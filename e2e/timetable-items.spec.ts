import { type Page, expect, test } from "@playwright/test"

import type { Lecture } from "../app/common/schemas/lecture"
import type { TimetableChange, TimetableItem } from "../app/common/schemas/timetableItem"

const semester = {
    year: 2026,
    semester: 1,
    beginning: "2026-02-23",
    end: "2026-06-19",
    courseDesciptionSubmission: "2026-01-01",
    courseRegistrationPeriodStart: "2026-02-01",
    courseRegistrationPeriodEnd: "2026-02-05",
    courseAddDropPeriodEnd: "2026-03-06",
    courseDropDeadline: "2026-04-01",
    courseEvaluationDeadline: "2026-06-30",
    gradePosting: "2026-07-01",
}
const lecture: Lecture = {
    id: 7,
    courseId: 7,
    classNo: "A",
    name: "Algorithms",
    subtitle: "",
    code: "CS300",
    department: { id: 1, name: "CS", code: "CS" },
    type: "Major Required",
    limitPeople: 40,
    numPeople: 20,
    classDuration: 3,
    expDuration: 0,
    credit: 3,
    creditAU: 0,
    averageGrade: 10,
    averageLoad: 10,
    averageSpeech: 10,
    isEnglish: true,
    professors: [],
    examTimes: [],
    classes: [0, 2].map((day) => ({
        day,
        begin: 600,
        end: 690,
        buildingCode: "E3",
        buildingName: "CS",
        roomName: "101",
    })),
}

async function setup(page: Page) {
    const tables = new Map<number, TimetableItem[]>([
        [
            1,
            [
                { kind: "lecture", data: lecture },
                {
                    kind: "custom",
                    data: {
                        id: 7,
                        block_name: "Study time",
                        place: "Library",
                        day: 1,
                        begin: 720,
                        end: 780,
                    },
                },
            ],
        ],
    ])
    let nextBlockId = 20
    let homeId: number | null = null
    const cloneRequests: unknown[] = []
    const home = () => ({
        source: homeId === null ? "enrolled" : "saved",
        timetableId: homeId,
        name: homeId === null ? "Enrolled timetable" : `Saved ${homeId}`,
        year: 2026,
        semester: 1,
        lectures:
            homeId === null
                ? [lecture]
                : tables
                      .get(homeId)!
                      .flatMap((i) => (i.kind === "lecture" ? [i.data] : [])),
        timetableItems:
            homeId === null ? [{ kind: "lecture", data: lecture }] : tables.get(homeId),
    })
    await page.route("**/api/v2/**", async (route) => {
        const request = route.request()
        const path = new URL(request.url()).pathname.replace("/api/v2", "")
        const method = request.method()
        let json: unknown = {}
        if (path === "/users/info")
            json = {
                id: 1,
                name: "Tester",
                mail: "test@example.com",
                studentNumber: 20260001,
                degree: "Master",
                majorDepartments: [],
                interestedDepartments: [],
            }
        else if (path === "/semesters") json = { semesters: [semester] }
        else if (path === "/semesters/current") json = semester
        else if (path === "/timetables/home") {
            if (method === "PATCH") homeId = request.postDataJSON().timetableId
            json = home()
        } else if (path === "/timetables/my-timetable")
            json = {
                lectures: [lecture],
                timetableItems: [{ kind: "lecture", data: lecture }],
            }
        else if (path === "/timetables") {
            if (method === "POST") {
                const body = request.postDataJSON()
                cloneRequests.push(body)
                const items = body.sourceTimetableId
                    ? tables.get(body.sourceTimetableId)!
                    : body.lectureIds.map(() => ({ kind: "lecture", data: lecture }))
                const id = tables.size + 1
                tables.set(
                    id,
                    items.map((item: TimetableItem) =>
                        item.kind === "custom"
                            ? { ...item, data: { ...item.data, id: nextBlockId++ } }
                            : item,
                    ),
                )
                json = { id }
            } else if (method === "DELETE") {
                const id = request.postDataJSON().id
                tables.delete(id)
                if (homeId === id) homeId = null
            } else
                json = {
                    timetables: [...tables.keys()].map((id) => ({
                        id,
                        name: `Saved ${id}`,
                        year: 2026,
                        semester: 1,
                        timeTableOrder: id - 1,
                    })),
                }
        } else if (/^\/timetables\/\d+\/items$/.test(path)) {
            const id = Number(path.split("/")[2])
            let items = [...tables.get(id)!]
            const { changes } = request.postDataJSON() as { changes: TimetableChange[] }
            const results = changes.map((change, index) => {
                let itemId: number
                if (change.op === "add") {
                    itemId = change.kind === "lecture" ? change.lectureId : nextBlockId++
                    items.push(
                        change.kind === "lecture"
                            ? { kind: "lecture", data: lecture }
                            : { kind: "custom", data: { ...change.data, id: itemId } },
                    )
                } else {
                    itemId = change.id
                    if (change.op === "remove")
                        items = items.filter(
                            (item) =>
                                item.kind !== change.kind || item.data.id !== change.id,
                        )
                    else
                        items = items.map((item) =>
                            item.kind === "custom" && item.data.id === change.id
                                ? { ...item, data: { ...item.data, ...change.data } }
                                : item,
                        )
                }
                return { index, kind: change.kind, id: itemId }
            })
            tables.set(id, items)
            json = { timetableItems: items, results }
        } else if (/^\/timetables\/\d+$/.test(path)) {
            const items = tables.get(Number(path.split("/")[2])) ?? []
            json = {
                timetableItems: items,
                lectures: items.flatMap((i) => (i.kind === "lecture" ? [i.data] : [])),
            }
        } else if (path === "/departments") json = { departments: [] }
        else if (path === "/reviews") json = { reviews: [], totalCount: 0 }
        else if (path === "/users/writable-review") json = { lecture: null }
        else if (path.includes("/lectures") || path.includes("/wishlist"))
            json = { courses: [] }
        await route.fulfill({ json })
    })
    return { tables, cloneRequests, getHomeId: () => homeId }
}

test("mixed selection deletes whole items and undo remaps recreated blocks", async ({
    page,
}) => {
    const { tables, cloneRequests } = await setup(page)
    await Promise.all([
        page.waitForResponse(/\/api\/v2\/timetables\/1(?:\?|$)/),
        page.goto("/timetable"),
    ])
    await expect(page.locator(".block-title", { hasText: "Study time" })).toBeVisible()
    await expect(page.locator(".lecture-title", { hasText: "Algorithms" })).toHaveCount(2)
    const lectureTiles = page.locator(".lecture-tile")
    const customTile = page.locator(".custom-block-tile")
    await lectureTiles.first().click()
    for (const tile of await lectureTiles.all())
        await expect(tile).toHaveCSS("opacity", "1")
    await expect(customTile).toHaveCSS("opacity", "0.5")

    await customTile.click()
    await expect(customTile).toHaveCSS("opacity", "1")
    for (const tile of await lectureTiles.all())
        await expect(tile).toHaveCSS("opacity", "0.5")

    await lectureTiles.first().click({ modifiers: ["Control"] })
    for (const tile of await lectureTiles.all())
        await expect(tile).toHaveCSS("opacity", "1")
    await expect(customTile).toHaveCSS("opacity", "1")
    await page.keyboard.press("Escape")
    for (const tile of await lectureTiles.all())
        await expect(tile).toHaveCSS("opacity", "1")
    await expect(customTile).toHaveCSS("opacity", "1")
    await page.keyboard.press("Control+a")
    await page.keyboard.press("Delete")
    await expect(page.locator(".block-title")).toHaveCount(0)
    await expect(page.locator(".lecture-title")).toHaveCount(0)
    expect(tables.has(1)).toBe(true)
    await page.keyboard.press("Control+z")
    await expect(page.locator(".block-title", { hasText: "Study time" })).toBeVisible()
    expect(tables.get(1)!.find((item) => item.kind === "custom")!.data.id).not.toBe(7)
    await page.keyboard.press("Control+Shift+z")
    await expect(page.locator(".block-title")).toHaveCount(0)
    await page.keyboard.press("Control+z")
    await expect(page.locator(".block-title", { hasText: "Study time" })).toBeVisible()
    await page.keyboard.press("Control+d")
    await expect.poll(() => cloneRequests.length).toBe(1)
    expect(cloneRequests[0]).toEqual({ year: 2026, semester: 1, sourceTimetableId: 1 })
    await expect.poll(() => tables.get(2)?.length).toBe(2)
    await expect(page.locator(".block-title", { hasText: "Study time" })).toBeVisible()
})

test("home saves a selected timetable with blocks and falls back to enrolled", async ({
    page,
}) => {
    const state = await setup(page)
    const custom = state.tables.get(1)!.find((item) => item.kind === "custom")!
    if (custom.kind === "custom")
        custom.data.times = [
            { day: custom.data.day, begin: custom.data.begin, end: custom.data.end },
            { day: 4, begin: 720, end: 780 },
        ]
    await Promise.all([
        page.waitForResponse(/\/api\/v2\/timetables\/home(?:\?|$)/),
        page.goto("/"),
    ])
    const selector = page.getByRole("combobox", {
        name: /Timetable shown on home|홈에 표시할 시간표/,
    })
    await expect(selector).toBeEnabled()
    await selector.selectOption("1")
    await expect(page.locator(".block-title", { hasText: "Study time" })).toHaveCount(2)
    expect(state.getHomeId()).toBe(1)
    await page.reload()
    await expect(selector).toHaveValue("1")
    await expect(page.locator(".block-title", { hasText: "Study time" })).toHaveCount(2)
    await selector.selectOption("")
    await expect(page.locator(".block-title")).toHaveCount(0)
    await expect(page.locator(".lecture-title", { hasText: "Algorithms" })).toHaveCount(2)
    expect(state.getHomeId()).toBeNull()
})

test("keeps zero-time lectures and off-grid blocks visible as separate items", async ({
    page,
}) => {
    const state = await setup(page)
    state.tables.set(1, [
        { kind: "lecture", data: { ...lecture, classes: [] } },
        {
            kind: "custom",
            data: {
                id: 21,
                block_name: "Saturday study",
                place: "",
                day: 5,
                begin: 720,
                end: 780,
            },
        },
        {
            kind: "custom",
            data: {
                id: 22,
                block_name: "Sunday study",
                place: "",
                day: 6,
                begin: 720,
                end: 780,
            },
        },
    ])
    await Promise.all([
        page.waitForResponse(/\/api\/v2\/timetables\/1(?:\?|$)/),
        page.goto("/timetable"),
    ])
    await expect(page.locator(".lecture-title", { hasText: "Algorithms" })).toBeVisible()
    const saturday = page.locator('.overflow-grid-wrapper [data-custom-block-id="21"]')
    const sunday = page.locator('.overflow-grid-wrapper [data-custom-block-id="22"]')
    await expect(saturday).toBeVisible()
    await expect(sunday).toBeVisible()
    await expect(saturday).toContainText(/Sat|토/)
    await expect(sunday).toContainText(/Sun|일/)
    const first = await saturday.boundingBox()
    const second = await sunday.boundingBox()
    expect(first).not.toBeNull()
    expect(second).not.toBeNull()

    expect(second!.y).toBeGreaterThanOrEqual(first!.y + first!.height - 1)
    await saturday.locator(".custom-block-tile").click()
    await expect(saturday.locator(".custom-block-tile")).toHaveCSS("opacity", "1")
    await expect(sunday.locator(".custom-block-tile")).toHaveCSS("opacity", "0.5")
    await expect(page.locator(".lecture-tile")).toHaveCSS("opacity", "0.5")
    await page.locator(".lecture-tile").click()
    await expect(page.locator(".lecture-tile")).toHaveCSS("opacity", "1")
    await expect(saturday.locator(".custom-block-tile")).toHaveCSS("opacity", "0.5")
    await expect(sunday.locator(".custom-block-tile")).toHaveCSS("opacity", "0.5")
    await page.keyboard.press("Control+a")
    await page.keyboard.press("Delete")
    await expect(page.locator(".block-title")).toHaveCount(0)
    await expect(page.locator(".lecture-title")).toHaveCount(0)
    expect(state.tables.get(1)).toHaveLength(0)
})

async function setupGroupedBlocks(page: Page) {
    const state = await setup(page)
    const custom = state.tables.get(1)!.find((item) => item.kind === "custom")!
    if (custom.kind !== "custom") throw new Error("Missing custom fixture")
    custom.data.times = [
        { day: 1, begin: 720, end: 780 },
        { day: 4, begin: 720, end: 780 },
        { day: 6, begin: 720, end: 780 },
    ]
    state.tables.get(1)!.push({
        kind: "custom",
        data: {
            id: 8,
            block_name: "Team meeting",
            place: "Study room",
            day: 3,
            begin: 840,
            end: 900,
        },
    })
    return state
}

for (const theme of ["light", "dark"] as const) {
    test(`custom blocks share hover, selection cards, and whole-item delete in ${theme} mode`, async ({
        page,
    }) => {
        const state = await setupGroupedBlocks(page)
        await page.addInitScript((value) => localStorage.setItem("theme", value), theme)
        await Promise.all([
            page.waitForResponse(/\/api\/v2\/timetables\/1(?:\?|$)/),
            page.goto("/timetable"),
        ])
        const group = page.locator('[data-custom-block-id="7"] .custom-block-tile')
        const other = page.locator('[data-custom-block-id="8"] .custom-block-tile')
        const lectures = page.locator(".lecture-tile")
        const deletes = group.locator(
            'button[aria-label="Delete custom block: Study time"]',
        )
        await expect(group).toHaveCount(3)
        await expect(deletes).toHaveCount(3)
        await page.mouse.move(1, 1)
        for (const button of await deletes.all()) await expect(button).toBeHidden()
        const lectureColor = await lectures
            .first()
            .evaluate((tile) => getComputedStyle(tile).backgroundColor)
        const otherColor = await other.evaluate(
            (tile) => getComputedStyle(tile).backgroundColor,
        )
        await lectures.first().hover()
        const hoverColor = await lectures
            .first()
            .evaluate((tile) => getComputedStyle(tile).backgroundColor)
        const titleColor = await lectures
            .first()
            .locator(".lecture-title")
            .evaluate((title) => getComputedStyle(title).color)
        const detailColor = await lectures
            .first()
            .locator(".lecture-info")
            .first()
            .evaluate((detail) => getComputedStyle(detail).color)

        await group.first().hover()
        for (const tile of await group.all()) {
            await expect(tile).toHaveCSS("background-color", hoverColor)
            await expect(tile.locator(".block-title")).toHaveCSS("color", titleColor)
            await expect(tile.locator(".block-info", { hasText: "Library" })).toHaveCSS(
                "color",
                detailColor,
            )
        }
        for (const button of await deletes.all()) await expect(button).toBeVisible()
        await expect(other).toHaveCSS("background-color", otherColor)
        for (const tile of await lectures.all())
            await expect(tile).toHaveCSS("background-color", lectureColor)

        await group.first().click()
        await page.mouse.move(1, 1)
        for (const button of await deletes.all()) await expect(button).toBeVisible()
        await lectures.first().click({ modifiers: ["Control"] })
        await expect(
            page.getByText(/^2(?:개 과목 선택됨| Lectures Selected)$/),
        ).toBeVisible()
        const cards = page.locator("[data-timetable-item-key]")
        await expect(cards).toHaveCount(2)
        await expect(page.locator('[data-timetable-item-key="custom:7"]')).toContainText(
            "Study time",
        )
        await expect(page.locator('[data-timetable-item-key="custom:7"]')).toContainText(
            "Library",
        )
        await expect(page.locator('[data-timetable-item-key="lecture:7"]')).toContainText(
            "Algorithms",
        )
        await other.click({ modifiers: ["Control"] })
        await expect(
            page.getByText(/^3(?:개 과목 선택됨| Lectures Selected)$/),
        ).toBeVisible()
        await expect(cards).toHaveCount(3)

        await page.keyboard.press("Escape")
        await group.first().click()
        await page.keyboard.press("Control+a")
        await expect(cards).toHaveCount(3)
        await expect(page.getByPlaceholder(/Name|일정 이름/)).toHaveCount(0)
        await page.keyboard.press("Escape")
        await group.first().click({ modifiers: ["Control"] })
        await other.click({ modifiers: ["Control"] })
        await expect(
            page.getByText(/^2(?:개 과목 선택됨| Lectures Selected)$/),
        ).toBeVisible()
        await expect(cards).toHaveCount(2)
        await expect(page.locator('[data-timetable-item-key="lecture:7"]')).toHaveCount(0)

        await deletes.first().click()
        await expect(group).toHaveCount(0)
        await expect(lectures).toHaveCount(2)
        await expect(other).toBeVisible()
        await expect(cards).toHaveCount(1)
        await expect(page.locator('[data-timetable-item-key="custom:8"]')).toContainText(
            "Study room",
        )
        expect(state.tables.get(1)).toHaveLength(2)
        await page.keyboard.press("Control+z")
        await expect(page.locator(".block-title", { hasText: "Study time" })).toHaveCount(
            3,
        )
        expect(state.tables.get(1)).toHaveLength(3)

        await page.goto("/")
        await page
            .getByRole("combobox", { name: /Timetable shown on home|홈에 표시할 시간표/ })
            .selectOption("1")
        await expect(page.locator(".block-title", { hasText: "Study time" })).toHaveCount(
            3,
        )
        await page.locator(".custom-block-tile").first().hover({ force: true })
        await expect(
            page.getByRole("button", {
                name: /^Delete custom block:/,
                includeHidden: true,
            }),
        ).toHaveCount(0)
    })
}

test("mobile selection details include custom blocks and can be closed", async ({
    page,
}) => {
    await setupGroupedBlocks(page)
    await Promise.all([
        page.waitForResponse(/\/api\/v2\/timetables\/1(?:\?|$)/),
        page.goto("/timetable"),
    ])
    await page.keyboard.press("Control+a")
    await expect(page.locator("[data-timetable-item-key]")).toHaveCount(3)
    await page.setViewportSize({ width: 390, height: 844 })
    const modal = page.getByRole("dialog")
    await expect(modal).toBeVisible()
    await expect(
        modal.getByText(/^3(?:개 과목 선택됨| Lectures Selected)$/),
    ).toBeVisible()
    await expect(modal.locator("[data-timetable-item-key]")).toHaveCount(3)
    await expect(modal.locator('[data-timetable-item-key="custom:7"]')).toContainText(
        "Library",
    )
    await modal.getByRole("button", { name: "Close selected items" }).click()
    await expect(modal).toHaveCount(0)
    await expect(page.locator(".custom-block-tile").first()).toBeVisible()
    await expect(page.getByText("과목 검색하기", { exact: true })).toBeVisible()

    await page.locator('[data-custom-block-id="7"] .custom-block-tile').first().click()
    await expect(page.getByPlaceholder(/Name|일정 이름/)).toBeVisible()
    await page
        .locator(".lecture-tile")
        .first()
        .click({ modifiers: ["Control"] })
    await expect(modal).toBeVisible()
    await expect(modal.locator("[data-timetable-item-key]")).toHaveCount(2)
    await expect(page.getByPlaceholder(/Name|일정 이름/)).toHaveCount(0)
    await modal.getByRole("button", { name: "Close selected items" }).click()
    await expect(page.getByText("과목 검색하기", { exact: true })).toBeVisible()
})
