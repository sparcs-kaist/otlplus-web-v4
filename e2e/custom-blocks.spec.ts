import { type Page, expect, test } from "@playwright/test"
import { readFile } from "node:fs/promises"

import type { CustomBlock } from "../app/common/schemas/customBlock"

async function dragTime(page: Page, day: number, beginSlot: number, endSlot: number) {
    const begin = page.locator(
        `.background-grid-block[data-day-idx="${day}"][data-time-idx="${beginSlot}"]`,
    )
    const end = page.locator(
        `.background-grid-block[data-day-idx="${day}"][data-time-idx="${endSlot}"]`,
    )
    const beginBox = await begin.boundingBox()
    const endBox = await end.boundingBox()
    if (!beginBox || !endBox) throw new Error("Timetable cells are not visible")

    await page.mouse.move(
        beginBox.x + beginBox.width / 2,
        beginBox.y + beginBox.height / 2,
    )
    await page.mouse.down()
    await page.mouse.move(endBox.x + endBox.width / 2, endBox.y + endBox.height / 2, {
        steps: 5,
    })
    await page.mouse.up()
}

test("creates, edits, exports, and deletes one custom block with multiple time slots", async ({
    page,
}) => {
    let blocks: CustomBlock[] = []
    let patchBody: Partial<CustomBlock> | null = null

    await page.route("**/api/v2/**", async (route) => {
        const request = route.request()
        const path = new URL(request.url()).pathname
        const method = request.method()

        if (path.endsWith("/users/info")) {
            await route.fulfill({
                json: {
                    id: 1,
                    name: "Tester",
                    mail: "tester@example.com",
                    studentNumber: 20260001,
                    degree: "Master",
                    majorDepartments: [],
                    interestedDepartments: [],
                },
            })
            return
        }
        if (path.endsWith("/semesters")) {
            await route.fulfill({
                json: {
                    semesters: [
                        {
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
                        },
                    ],
                },
            })
            return
        }
        if (path.endsWith("/timetables/1/items") && method === "PATCH") {
            const { changes } = request.postDataJSON()
            const results = changes.map((change: any, index: number) => {
                if (change.op === "add") {
                    const id =
                        blocks.reduce((max, block) => Math.max(max, block.id), 9) + 1
                    blocks.push({ id, ...change.data })
                    return { index, kind: "custom", id }
                }
                if (change.op === "update") {
                    patchBody = change.data
                    blocks = blocks.map((block) =>
                        block.id === change.id ? { ...block, ...change.data } : block,
                    )
                } else {
                    blocks = blocks.filter((block) => block.id !== change.id)
                }
                return { index, kind: "custom", id: change.id }
            })
            await route.fulfill({
                json: {
                    timetableItems: blocks.map((data) => ({ kind: "custom", data })),
                    results,
                },
            })
            return
        }
        if (path.endsWith("/timetables/my-timetable")) {
            await route.fulfill({ json: { lectures: [], timetableItems: [] } })
            return
        }
        if (path.endsWith("/timetables/1")) {
            await route.fulfill({
                json: {
                    lectures: [],
                    timetableItems: blocks.map((data) => ({ kind: "custom", data })),
                },
            })
            return
        }
        if (path.endsWith("/timetables")) {
            await route.fulfill({
                json: {
                    timetables: [
                        {
                            id: 1,
                            name: "Test timetable",
                            year: 2026,
                            semester: 1,
                            timeTableOrder: 0,
                        },
                    ],
                },
            })
            return
        }
        if (path.includes("/lectures") || path.includes("/wishlist")) {
            await route.fulfill({ json: { courses: [] } })
            return
        }
        if (path.endsWith("/departments")) {
            await route.fulfill({ json: { departments: [] } })
            return
        }
        await route.fulfill({ json: {} })
    })

    await page.addInitScript(() => {
        localStorage.setItem("theme", "dark")
        const exportedTexts: string[] = []
        const originalFillText = CanvasRenderingContext2D.prototype.fillText
        Object.assign(window, { __timetableExportTexts: exportedTexts })
        CanvasRenderingContext2D.prototype.fillText = function (text, x, y, maxWidth) {
            exportedTexts.push(String(text))
            return maxWidth === undefined
                ? originalFillText.call(this, text, x, y)
                : originalFillText.call(this, text, x, y, maxWidth)
        }
    })

    await Promise.all([
        page.waitForResponse(/\/api\/v2\/timetables\/1(?:\?|$)/),
        page.goto("/timetable"),
    ])

    const addButton = page.getByRole("button", {
        name: /Add Custom Block|커스텀 블록 추가/,
    })
    await expect(addButton).toBeEnabled()
    await addButton.click()

    await page.getByPlaceholder(/Name|일정 이름/).fill("Focus time")
    await page.getByPlaceholder(/Place|장소/).fill("Library")
    await dragTime(page, 0, 4, 6)
    await dragTime(page, 0, 12, 13)
    await dragTime(page, 2, 4, 6)
    await page.getByRole("button", { name: /Add time slot|시간대 추가/ }).click()
    const lastTime = page.getByRole("group", { name: /Time slot 4|시간대 4/ })
    await lastTime.getByRole("combobox", { name: /Day|요일/ }).selectOption("6")
    await lastTime.getByRole("combobox", { name: /Start|시작/ }).selectOption("1380")
    await lastTime.getByRole("combobox", { name: /End|종료/ }).selectOption("1440")
    await page.getByText(/Add to Timetable|시간표에 추가하기/, { exact: true }).click()

    await expect(page.locator(".block-title", { hasText: "Focus time" })).toHaveCount(4)
    expect(blocks).toHaveLength(1)
    expect(blocks[0]).toMatchObject({
        day: 0,
        begin: 600,
        end: 690,
        times: [
            { day: 0, begin: 600, end: 690 },
            { day: 0, begin: 840, end: 900 },
            { day: 2, begin: 600, end: 690 },
            { day: 6, begin: 1380, end: 1440 },
        ],
    })
    await page.reload()
    await expect(page.locator(".block-title", { hasText: "Focus time" })).toHaveCount(4)

    await page.getByRole("button", { name: /Copy as Image|이미지로 복사하기/ }).click()
    await expect
        .poll(() =>
            page.evaluate(
                () =>
                    (
                        window as unknown as Window & {
                            __timetableExportTexts: string[]
                        }
                    ).__timetableExportTexts,
            ),
        )
        .toContain("Focus time")

    await page.waitForTimeout(600)
    const imageDownloadPromise = page.waitForEvent("download")
    await page.getByRole("button", { name: /Export as Image|이미지로 내보내기/ }).click()
    const imageDownload = await imageDownloadPromise
    expect(imageDownload.suggestedFilename()).toBe("Test timetable.png")

    await page.waitForTimeout(600)
    const calendarDownloadPromise = page.waitForEvent("download")
    await page
        .getByRole("button", { name: /Export as Calendar|캘린더로 내보내기/ })
        .click()
    const calendarDownload = await calendarDownloadPromise
    const calendarPath = await calendarDownload.path()
    if (!calendarPath) throw new Error("Calendar download is unavailable")
    const calendarContents = await readFile(calendarPath, "utf8")
    expect(calendarContents).toContain("SUMMARY:Focus time")
    expect(calendarContents).toContain("LOCATION:Library")
    expect(calendarContents.match(/BEGIN:VEVENT/g)).toHaveLength(4)

    await page.locator(".block-title", { hasText: "Focus time" }).nth(1).click()
    await expect(page.getByRole("group", { name: /Time slot|시간대/ })).toHaveCount(4)
    for (const tile of await page.locator(".custom-block-tile").all())
        await expect(tile).toHaveCSS("opacity", "1")
    await expect(
        page.getByRole("button", { name: "Delete custom block" }).locator("div").first(),
    ).toHaveCSS("color", "rgb(189, 189, 189)")
    await expect(
        page
            .getByRole("button", { name: "Close custom block editor" })
            .locator("div")
            .first(),
    ).toHaveCSS("color", "rgb(189, 189, 189)")
    await page.getByPlaceholder(/Name|일정 이름/).fill("Focus time updated")
    const firstTime = page.getByRole("group", { name: /Time slot 1|시간대 1/ })
    await firstTime.getByRole("combobox", { name: /Day|요일/ }).selectOption("1")
    await firstTime.getByRole("combobox", { name: /Start|시작/ }).selectOption("720")
    await firstTime.getByRole("combobox", { name: /End|종료/ }).selectOption("810")
    await page.getByRole("button", { name: /Remove time slot 2|시간대 2 삭제/ }).click()
    await page.getByText(/Save|저장하기/, { exact: true }).click()

    await expect(
        page.locator(".block-title", { hasText: "Focus time updated" }),
    ).toHaveCount(3)
    expect(patchBody).toMatchObject({
        day: 1,
        begin: 720,
        end: 810,
        times: [
            { day: 1, begin: 720, end: 810 },
            { day: 2, begin: 600, end: 690 },
            { day: 6, begin: 1380, end: 1440 },
        ],
    })

    await page.locator(".block-title", { hasText: "Focus time updated" }).last().click()
    await page.getByRole("button", { name: "Delete custom block" }).click()
    await expect(page.locator(".block-title")).toHaveCount(0)
    expect(blocks).toHaveLength(0)
    await page.keyboard.press("Control+z")
    await expect(
        page.locator(".block-title", { hasText: "Focus time updated" }),
    ).toHaveCount(3)
    expect(blocks).toHaveLength(1)
})
