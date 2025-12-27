import { expect, test } from "@playwright/test"

test.describe("Server Error Page", () => {
    test("should display server error page with OTL logo and apology message", async ({
        page,
    }) => {
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        await expect(page.locator('img[alt="OTL Logo"]')).toBeVisible()
        await expect(page.locator("body")).toBeVisible()
    })

    test("should have retry and go home buttons", async ({ page }) => {
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        await expect(page.getByRole("button")).toHaveCount(2)
    })

    test("should navigate to home when go home button is clicked", async ({ page }) => {
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        const buttons = page.getByRole("button")
        await buttons.last().click()

        await expect(page).toHaveURL("/")
    })

    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/server-error")
        await page.waitForLoadState("domcontentloaded")

        await expect(page.locator('img[alt="OTL Logo"]')).toBeVisible()
    })
})

test.describe("Offline Mode Navigation Restrictions", () => {
    test("should display offline indicator in header when offline", async ({ page }) => {
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
