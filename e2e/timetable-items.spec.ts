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
    await page.goto("/timetable")
    await expect(page.locator(".block-title", { hasText: "Study time" })).toBeVisible()
    await expect(page.locator(".lecture-title", { hasText: "Algorithms" })).toHaveCount(2)
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
    await page.goto("/")
    const selector = page.getByRole("combobox", {
        name: /Timetable shown on home|홈에 표시할 시간표/,
    })
    await expect(selector).toBeEnabled()
    await selector.selectOption("1")
    await expect(page.locator(".block-title", { hasText: "Study time" })).toBeVisible()
    expect(state.getHomeId()).toBe(1)
    await page.reload()
    await expect(selector).toHaveValue("1")
    await expect(page.locator(".block-title", { hasText: "Study time" })).toBeVisible()
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
    await page.goto("/timetable")
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
    await page.keyboard.press("Control+a")
    await page.keyboard.press("Delete")
    await expect(page.locator(".block-title")).toHaveCount(0)
    await expect(page.locator(".lecture-title")).toHaveCount(0)
    expect(state.tables.get(1)).toHaveLength(0)
})
