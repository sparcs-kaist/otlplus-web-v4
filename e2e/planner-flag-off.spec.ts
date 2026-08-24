import { expect, test } from "@playwright/test"

test.describe("planner feature flag default-off", () => {
    test("hides the planner nav link in the desktop header", async ({ page }) => {
        await page.goto("/")
        await expect(page.getByRole("link", { name: "졸업플래너" })).toHaveCount(0)
    })

    test("redirects direct /planner visits back home", async ({ page }) => {
        await page.goto("/planner")

        await expect(page).toHaveURL(
            new RegExp(
                `${process.env.PLANNER_TEST_BASE_URL ?? "http://localhost:5173"}/?$`,
            ),
        )
        await expect(page.getByRole("heading", { name: "학기별 이수 계획" })).toHaveCount(
            0,
        )
        await expect(page.getByRole("heading", { name: "Semester Plan" })).toHaveCount(0)
    })
})
