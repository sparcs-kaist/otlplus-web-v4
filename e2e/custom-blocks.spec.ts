import { expect, test } from "@playwright/test"

test.describe("Custom Block Feature", () => {
    test("should open the custom block modal when '커스텀 블록 추가' button is clicked", async ({ page }) => {
        // Go to timetable page
        await page.goto("/timetable")
        await page.waitForLoadState("domcontentloaded")

        // Wait for the button by finding the text
        const addCustomBlockButton = page.locator('button', { hasText: '커스텀 블록 추가' }).first()
        
        // Ensure the button is visible
        await expect(addCustomBlockButton).toBeVisible()

        // Click the button to open the modal
        await addCustomBlockButton.click()

        // Wait for modal to appear
        const modalTitle = page.locator('text=커스텀 블록 추가').nth(1) // The modal header may contain the same text
        await expect(modalTitle).toBeVisible()

        // Check for modal form fields
        await expect(page.locator('text=일정 이름')).toBeVisible()
        await expect(page.locator('text=장소')).toBeVisible()
        await expect(page.locator('text=요일')).toBeVisible()
        await expect(page.locator('text=시작 시간')).toBeVisible()
        await expect(page.locator('text=종료 시간')).toBeVisible()

        // Ensure Add button is present in the modal
        const addButton = page.locator('button', { hasText: '추가' }).first()
        await expect(addButton).toBeVisible()
    })
})
