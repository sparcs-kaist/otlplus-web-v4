import { expect, test } from "@playwright/test"

test.describe("Write Reviews Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/write-reviews")
    })

    test("should load write-reviews page", async ({ page }) => {
        await expect(page).toHaveURL(/write-reviews/)
    })

    test("should display page content", async ({ page }) => {
        await page.waitForLoadState("networkidle")
        await expect(page.locator("body")).toBeVisible()
    })
})

test.describe("Write Reviews Responsive", () => {
    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/write-reviews")
        await page.waitForLoadState("networkidle")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on tablet viewport", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await page.goto("/write-reviews")
        await page.waitForLoadState("networkidle")
        await expect(page.locator("body")).toBeVisible()
    })
})
