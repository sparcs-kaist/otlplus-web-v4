import { expect, test } from "@playwright/test"

test.describe("Timetable Page", () => {
    test("should load timetable page", async ({ page }) => {
        await page.goto("/timetable")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/timetable/)
    })

    test("should display page content", async ({ page }) => {
        await page.goto("/timetable")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("shows one temporary timetable without account-only controls", async ({
        page,
    }) => {
        await page.goto("/timetable")

        const temporaryTimetable = page.locator('[data-timetable-tab="temporary"]')
        await expect(temporaryTimetable).toHaveCount(1)
        await expect(temporaryTimetable).toContainText(/^(시간표|Timetable)$/)
        await expect(page.locator('[data-timetable-tab="academic"]')).toHaveCount(0)
        await expect(
            page.getByRole("button", { name: /^(빈 시간표 추가|Add empty timetable)$/ }),
        ).toHaveCount(0)
    })
})

test.describe("Timetable Responsive", () => {
    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/timetable")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on tablet viewport", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await page.goto("/timetable")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto("/timetable")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })
})
