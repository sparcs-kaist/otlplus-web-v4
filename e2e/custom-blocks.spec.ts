import { type Page, expect, test } from "@playwright/test"
import { readFile } from "node:fs/promises"

type CustomBlock = {
    id: number
    block_name: string
    place: string
    day: number
    begin: number
    end: number
}

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

test("creates, edits, and deletes a custom block", async ({ page }) => {
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
        if (path.endsWith("/timetables/1/custom-blocks") && method === "GET") {
            await route.fulfill({ json: { custom_blocks: blocks } })
            return
        }
        if (path.endsWith("/timetables/1/custom-blocks") && method === "POST") {
            const body = request.postDataJSON() as Omit<CustomBlock, "id">
            blocks = [{ id: 10, ...body }]
            await route.fulfill({ json: { id: 10 } })
            return
        }
        if (path.endsWith("/timetables/1/custom-blocks/10") && method === "PATCH") {
            patchBody = request.postDataJSON() as Partial<CustomBlock>
            blocks = blocks.map((block) => ({ ...block, ...patchBody }))
            await route.fulfill({ json: blocks[0] })
            return
        }
        if (path.endsWith("/timetables/1/custom-blocks/10") && method === "DELETE") {
            blocks = []
            await route.fulfill({ json: { id: 10 } })
            return
        }
        if (path.endsWith("/timetables/my-timetable")) {
            await route.fulfill({ json: { lectures: [] } })
            return
        }
        if (path.endsWith("/timetables/1")) {
            await route.fulfill({ json: { lectures: [] } })
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

    await page.goto("/timetable")

    const addButton = page.getByRole("button", {
        name: /Add Custom Block|커스텀 블록 추가/,
    })
    await expect(addButton).toBeEnabled()
    await addButton.click()

    await page.getByPlaceholder(/Name|일정 이름/).fill("Focus time")
    await page.getByPlaceholder(/Place|장소/).fill("Library")
    await dragTime(page, 0, 4, 6)
    await page.getByText(/Add to Timetable|시간표에 추가하기/, { exact: true }).click()

    await expect(page.locator(".block-title", { hasText: "Focus time" })).toBeVisible()
    expect(blocks[0]).toMatchObject({ day: 0, begin: 600, end: 690 })

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

    await page.locator(".block-title", { hasText: "Focus time" }).click()
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
    await dragTime(page, 1, 8, 10)
    await page.getByText(/Save|저장하기/, { exact: true }).click()

    await expect(
        page.locator(".block-title", { hasText: "Focus time updated" }),
    ).toBeVisible()
    expect(patchBody).toMatchObject({ day: 1, begin: 720, end: 810 })

    await page.locator(".block-title", { hasText: "Focus time updated" }).click()
    await page.getByRole("button", { name: "Delete custom block" }).click()
    await expect(page.locator(".block-title")).toHaveCount(0)
})
