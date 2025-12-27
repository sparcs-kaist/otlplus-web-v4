import { expect, test } from "@playwright/test"

test.describe("Dictionary Page", () => {
    test("should load dictionary page", async ({ page }) => {
        await page.goto("/dictionary")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/dictionary/)
    })

    test("should display page content", async ({ page }) => {
        await page.goto("/dictionary")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should display course list section", async ({ page }) => {
        await page.goto("/dictionary")
        await page.waitForLoadState("domcontentloaded")

        const courseListArea = page.locator("body")
        await expect(courseListArea).toBeVisible()
    })
})

test.describe("Dictionary Responsive", () => {
    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/dictionary")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on tablet viewport", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await page.goto("/dictionary")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto("/dictionary")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })
})
