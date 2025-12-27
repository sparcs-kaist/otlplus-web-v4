import { expect, test } from "@playwright/test"

test.describe("License Page", () => {
    test("should load license page", async ({ page }) => {
        await page.goto("/license")
        await page.waitForLoadState("domcontentloaded")
        await expect(page).toHaveURL(/license/)
    })

    test("should display license title", async ({ page }) => {
        await page.goto("/license")
        await page.waitForLoadState("domcontentloaded")

        const title = page.getByText("Licenses")
        await expect(title).toBeVisible()
    })

    test("should display copyright information", async ({ page }) => {
        await page.goto("/license")
        await page.waitForLoadState("domcontentloaded")

        const copyright = page.getByText(/Copyright.*SPARCS OTL Team/)
        await expect(copyright).toBeVisible()
    })
})

test.describe("License Responsive", () => {
    test("should work on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto("/license")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on tablet viewport", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await page.goto("/license")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })

    test("should work on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto("/license")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("body")).toBeVisible()
    })
})
