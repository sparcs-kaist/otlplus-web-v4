import { expect, test } from "@playwright/test"

test.describe("Authenticated user flows", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.getByText("Sign in", { exact: true })).toHaveCount(0)
    })

    test("opens account details after SSO login", async ({ page }) => {
        await page.getByTestId("PersonIcon").locator("..").locator("..").click()

        await expect(page.getByText("내 정보", { exact: true })).toBeVisible()
        await expect(page.getByText("이름", { exact: true })).toBeVisible()
        await expect(page.getByText("메일", { exact: true })).toBeVisible()
        await expect(page.getByText("학번", { exact: true })).toBeVisible()
        await expect(page.getByText("로그아웃", { exact: true })).toBeVisible()
    })

    test("opens write reviews without the login gate", async ({ page }) => {
        await page.goto("/write-reviews")

        await expect(page.getByText("로그인하러가기", { exact: true })).toHaveCount(0)
        await expect(page.getByText("내가 들은 과목", { exact: true })).toBeVisible()
        await expect(page.getByText("작성 후기", { exact: true })).toBeVisible()
        await expect(page.getByText("추천", { exact: true })).toBeVisible()
    })

    test("loads the authenticated timetable controls", async ({ page }) => {
        await page.goto("/timetable")

        await expect(page.getByText("내 시간표", { exact: true })).toBeVisible()
        await expect(
            page.getByRole("button", { name: "이미지로 복사하기" }),
        ).toBeVisible()
        await expect(
            page.getByRole("button", { name: "이미지로 내보내기" }),
        ).toBeVisible()
        await expect(
            page.getByRole("button", { name: "캘린더로 내보내기" }),
        ).toBeVisible()
    })
})
