import { expect, test as setup } from "@playwright/test"
import path from "node:path"

const authFile = path.join(process.cwd(), "test-results/.auth/user.json")

setup("authenticates through SPARCS SSO", async ({ page, baseURL }) => {
    const email = process.env.TEST_SSO_EMAIL
    const password = process.env.TEST_SSO_PASSWORD

    if (!email || !password) {
        throw new Error("TEST_SSO_EMAIL and TEST_SSO_PASSWORD must be set")
    }
    if (!baseURL) {
        throw new Error("The authenticated E2E base URL must be set")
    }

    await page.goto("/")
    await page.getByText("Sign in", { exact: true }).click()
    await expect(page).toHaveTitle(/SPARCS SSO/)

    await page.getByRole("textbox", { name: "이메일" }).fill(email)
    await page.getByRole("textbox", { name: "비밀번호" }).fill(password)

    const baseOrigin = new URL(baseURL).origin
    const userInfoResponse = page.waitForResponse(
        (response) =>
            response.url().includes("/api/v2/users/info") && response.status() === 200,
        { timeout: 120000 },
    )

    await page.getByRole("button", { name: "이메일로 로그인" }).click()
    await page.waitForURL((url) => url.origin === baseOrigin && url.pathname === "/", {
        timeout: 120000,
    })
    await userInfoResponse
    await expect(page.getByText("Sign in", { exact: true })).toHaveCount(0)

    await page.context().storageState({ path: authFile })
})
