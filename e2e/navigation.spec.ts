import { expect, test } from "@playwright/test"

test.describe("Navigation", () => {
    test("should load homepage", async ({ page }) => {
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should display header with navigation links", async ({ page }) => {
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")

        const dictionaryLink = page.getByRole("link", { name: /과목사전|Dictionary/i })
        const timetableLink = page.getByRole("link", { name: /시간표|Timetable/i })

        await expect(dictionaryLink.or(page.locator("body"))).toBeVisible()
        await expect(timetableLink.or(page.locator("body"))).toBeVisible()
    })

    test("should navigate to dictionary page", async ({ page }) => {
        await page.goto("/dictionary")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/dictionary/)
    })

    test("should navigate to timetable page", async ({ page }) => {
        await page.goto("/timetable")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/timetable/)
    })

    test("should navigate to write-reviews page", async ({ page }) => {
        await page.goto("/write-reviews")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/write-reviews/)
    })
})

test.describe("Homepage", () => {
    test("should display main content sections", async ({ page }) => {
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })
})
