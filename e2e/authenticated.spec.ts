import { type Page, expect, test } from "@playwright/test"
import { z } from "zod"

const UserInfoSchema = z.object({ name: z.string() })

async function openAuthenticatedPage(page: Page, path: string): Promise<string> {
    const userInfoResponse = page.waitForResponse(
        (response) =>
            response.url().includes("/api/v2/users/info") && response.status() === 200,
    )

    await page.goto(path)

    const response = await userInfoResponse
    const { name } = UserInfoSchema.parse(await response.json())
    await expect(page.getByText("Sign in", { exact: true })).toHaveCount(0)

    return name
}

test.describe("Authenticated user flows", () => {
    test("opens account details after SSO login", async ({ page }) => {
        const userName = await openAuthenticatedPage(page, "/")
        await page.getByText(userName, { exact: true }).click()

        await expect(page.getByText(/^(내 정보|My Account)$/)).toBeVisible()
        await expect(page.getByText(/^(이름|Name)$/)).toBeVisible()
        await expect(page.getByText(/^(메일|Email)$/)).toBeVisible()
        await expect(page.getByText(/^(학번|School ID)$/)).toBeVisible()
        await expect(page.getByText(/^(로그아웃|Logout)$/)).toBeVisible()
    })

    test("opens write reviews without the login gate", async ({ page }) => {
        await openAuthenticatedPage(page, "/write-reviews")

        await expect(page.getByText("로그인하러가기", { exact: true })).toHaveCount(0)
        await expect(page.getByText(/^(내가 들은 과목|Taken Lectures)$/)).toBeVisible({
            timeout: 15000,
        })
        await expect(page.getByText(/^(작성 후기|My Reviews)$/)).toBeVisible()
        await expect(page.getByText(/^(추천|likes)$/)).toBeVisible()
    })

    test("loads the authenticated timetable controls", async ({ page }) => {
        await openAuthenticatedPage(page, "/timetable")

        await expect(page.getByText(/^(내 시간표|My Timetable)$/)).toBeVisible({
            timeout: 15000,
        })
        await expect(
            page.getByRole("button", { name: /^(이미지로 복사하기|Copy as Image)$/ }),
        ).toBeVisible()
        await expect(
            page.getByRole("button", { name: /^(이미지로 내보내기|Export as Image)$/ }),
        ).toBeVisible()
        await expect(
            page.getByRole("button", {
                name: /^(캘린더로 내보내기|Export as Calendar)$/,
            }),
        ).toBeVisible()
    })
})
