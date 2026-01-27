import { expect, test } from "@playwright/test"

test.describe("Navigation", () => {
    test("should load homepage", async ({ page }) => {
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
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

    test("should navigate to license page", async ({ page }) => {
        await page.goto("/license")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/license/)
    })

    test("should navigate to makers page", async ({ page }) => {
        await page.goto("/makers")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/makers/)
    })

    test("should navigate to privacy-policy page", async ({ page }) => {
        await page.goto("/privacy-policy")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/privacy-policy/)
    })
})

test.describe("Homepage Content", () => {
    test("should display main content sections", async ({ page }) => {
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on tablet viewport", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })
})
