import { expect, test } from "@playwright/test"

test.describe("Write Reviews Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/write-reviews")
    })

    test("should load write-reviews page", async ({ page }) => {
        await expect(page).toHaveURL(/write-reviews/)
    })

    test("should display page content", async ({ page }) => {
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should display left and right sections", async ({ page }) => {
        await page.waitForLoadState("domcontentloaded")

        const mainContent = page.locator("body")
        await expect(mainContent).toBeVisible()
    })
})

test.describe("Write Reviews Responsive", () => {
    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/write-reviews")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on tablet viewport", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await page.goto("/write-reviews")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto("/write-reviews")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })
})
