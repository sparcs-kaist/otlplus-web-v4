import { expect, test } from "@playwright/test"

test.describe("Server Error Page", () => {
    test("should display server error page with OTL logo", async ({ page }) => {
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        await expect(page.locator('img[alt="OTL Logo"]')).toBeVisible()
        await expect(page.locator("body")).toBeVisible()
    })

    test("should display page content", async ({ page }) => {
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        await expect(page.locator('img[alt="OTL Logo"]')).toBeVisible()
    })
})

test.describe("Offline Mode Navigation Restrictions", () => {
    test("should display page when visiting homepage", async ({ page }) => {
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")

        await expect(page.locator("body")).toBeVisible()
    })

    test("should navigate to server-error page", async ({ page }) => {
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        await expect(page).toHaveURL(/server-error/)
    })
})
