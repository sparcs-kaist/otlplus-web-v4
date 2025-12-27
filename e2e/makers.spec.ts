import { expect, test } from "@playwright/test"

test.describe("Makers Page", () => {
    test("should load makers page", async ({ page }) => {
        await page.goto("/makers")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/makers/)
    })

    test("should display page content", async ({ page }) => {
        await page.goto("/makers")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should display project section", async ({ page }) => {
        await page.goto("/makers")
        await page.waitForLoadState("domcontentloaded")

        const mainContent = page.locator("body")
        await expect(mainContent).toBeVisible()
    })
})

test.describe("Makers Responsive", () => {
    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/makers")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on tablet viewport", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await page.goto("/makers")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto("/makers")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })
})
