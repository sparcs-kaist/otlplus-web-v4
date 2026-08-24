import { type Page, expect, test } from "@playwright/test"

import { PLANNER_STORAGE_KEY } from "../app/features/planner/domain/persistence"
import {
    createPlanner,
    csCourse,
    csMajorTrack,
    generalTrack,
} from "../app/features/planner/domain/testFixtures"

const futureItem = {
    id: -2,
    item_type: "FUTURE" as const,
    is_excluded: false,
    year: 2023,
    semester: 1 as const,
    course: csCourse,
}

const planners = [
    createPlanner({ future_items: [futureItem] }),
    createPlanner({ id: -3, arrange_order: 1 }),
]
const plannerBaseUrl = process.env.PLANNER_TEST_BASE_URL ?? "http://localhost:5173"
const plannerUrl = new URL("/planner", plannerBaseUrl).toString()

async function preparePlannerPage(page: Page): Promise<void> {
    await page.route("**/api/v2/users/info", async (route) => {
        await route.fulfill({ status: 401, json: {} })
    })
    await page.route("**/api/tracks", async (route) => {
        await route.fulfill({
            json: {
                general: [generalTrack],
                major: [csMajorTrack],
                additional: [],
            },
        })
    })
    await page.goto(plannerBaseUrl)
    const storageValue = JSON.stringify({ version: 1, planners })
    await page.evaluate(
        ({ key, value }) => {
            window.localStorage.setItem("i18nextLng", "en")
            window.localStorage.setItem(key, value)
        },
        { key: PLANNER_STORAGE_KEY, value: storageValue },
    )
    await page.goto(plannerUrl)
    await expect(page.getByRole("heading", { name: "Semester Plan" })).toBeVisible()
}

async function boundingBox(locator: ReturnType<Page["locator"]>) {
    const box = await locator.boundingBox()
    expect(box).not.toBeNull()
    if (box === null) throw new Error("Expected the planner element to be visible")
    return box
}

test.describe("Graduation planner responsive layout", () => {
    test("uses a top navigation and timeline-first document order", async ({ page }) => {
        await preparePlannerPage(page)

        await expect(
            page.getByRole("navigation", { name: "Graduation Planner" }),
        ).toBeVisible()
        const sectionHeadings = await page
            .getByRole("heading", { level: 2 })
            .allTextContents()

        expect(sectionHeadings.indexOf("Semester Plan")).toBeLessThan(
            sectionHeadings.indexOf("Search and Add Courses"),
        )
        expect(sectionHeadings.indexOf("Search and Add Courses")).toBeLessThan(
            sectionHeadings.indexOf("Planner Settings"),
        )
        expect(sectionHeadings.indexOf("Planner Settings")).toBeLessThan(
            sectionHeadings.indexOf("Requirement Summary"),
        )
    })

    test("keeps the semester plan dominant beside a bounded support rail on desktop", async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1280, height: 900 })
        await preparePlannerPage(page)

        const semester = await boundingBox(
            page.locator('section[aria-labelledby="semester-grid-title"]'),
        )
        const settings = await boundingBox(
            page
                .getByRole("heading", { name: "Planner Settings" })
                .locator("xpath=ancestor::form[1]"),
        )
        const summary = await boundingBox(
            page.locator('section[aria-labelledby="planner-summary-title"]'),
        )

        const spring = await boundingBox(
            page.getByRole("heading", { name: "Spring" }).first().locator("xpath=.."),
        )
        const summer = await boundingBox(
            page.getByRole("heading", { name: "Summer" }).first().locator("xpath=.."),
        )
        const actionRows = await page
            .getByRole("article")
            .filter({ hasText: "Programming Basics" })
            .locator("button, select")
            .evaluateAll((elements) =>
                elements.map((element) => {
                    const rect = element.getBoundingClientRect()
                    return rect.y + rect.height / 2
                }),
            )

        expect(semester.x + semester.width).toBeLessThanOrEqual(settings.x)
        expect(semester.width).toBeGreaterThan(settings.width)
        expect(Math.abs(settings.x - summary.x)).toBeLessThanOrEqual(1)
        expect(summer.height).toBeLessThan(spring.height)
        expect(Math.max(...actionRows) - Math.min(...actionRows)).toBeLessThanOrEqual(1)
    })

    test("collapses into a compact timeline-first flow on tablet", async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 900 })
        await preparePlannerPage(page)

        const navigation = await boundingBox(
            page.getByRole("navigation", { name: "Graduation Planner" }),
        )
        const semester = await boundingBox(
            page.getByRole("heading", { name: "Semester Plan" }),
        )
        const search = await boundingBox(
            page.getByRole("heading", { name: "Search and Add Courses" }),
        )
        const settings = await boundingBox(
            page.getByRole("heading", { name: "Planner Settings" }),
        )
        const summary = await boundingBox(
            page.getByRole("heading", { name: "Requirement Summary" }),
        )

        expect(navigation.height).toBeLessThanOrEqual(96)
        expect(semester.y).toBeLessThan(search.y)
        expect(search.y).toBeLessThan(settings.y)
        expect(settings.y).toBeLessThan(summary.y)
    })

    test("stacks search controls and contains item actions on mobile", async ({
        page,
    }) => {
        await page.setViewportSize({ width: 375, height: 812 })
        await preparePlannerPage(page)

        const navigation = await boundingBox(
            page.getByRole("navigation", { name: "Graduation Planner" }),
        )
        const keyword = await boundingBox(
            page.getByRole("textbox", { name: "Course keyword" }),
        )
        const search = await boundingBox(page.getByRole("button", { name: "Search" }))
        const article = page
            .getByRole("article")
            .filter({ hasText: "Programming Basics" })
        const articleBox = await boundingBox(article)
        const semesterSelect = await boundingBox(
            article.getByRole("combobox", { name: "Change semester" }),
        )
        const actionBoxes = await article
            .locator("button, select")
            .evaluateAll((elements) =>
                elements.map((element) => {
                    const rect = element.getBoundingClientRect()
                    return { left: rect.left, right: rect.right }
                }),
            )

        expect(navigation.height).toBeLessThanOrEqual(160)
        expect(search.y).toBeGreaterThan(keyword.y)
        expect(semesterSelect.width).toBeGreaterThanOrEqual(96)
        for (const actionBox of actionBoxes) {
            expect(actionBox.left).toBeGreaterThanOrEqual(articleBox.x)
            expect(actionBox.right).toBeLessThanOrEqual(articleBox.x + articleBox.width)
        }
        expect(
            await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        ).toBe(true)
    })
})
