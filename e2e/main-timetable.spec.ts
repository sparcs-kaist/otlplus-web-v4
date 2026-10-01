import { expect, test } from "@playwright/test"

test("sets, creates, and deletes the main timetable from the timetable tabs", async ({
    page,
}) => {
    let homeId: number | null = null
    let rejectHomeChange = false
    let timetables = [1, 2, 3].map((id) => ({
        id,
        name: `시간표 ${id}`,
        year: 2026,
        semester: 3,
        timeTableOrder: id - 1,
    }))
    const homeWrites: unknown[] = []
    const creates: unknown[] = []
    const semester = {
        year: 2026,
        semester: 3,
        beginning: "2026-09-01",
        end: "2026-12-20",
        courseDesciptionSubmission: "2026-08-01",
        courseRegistrationPeriodStart: "2026-08-01",
        courseRegistrationPeriodEnd: "2026-08-05",
        courseAddDropPeriodEnd: "2026-09-06",
        courseDropDeadline: "2026-10-01",
        courseEvaluationDeadline: "2026-12-30",
        gradePosting: "2027-01-01",
    }
    const block = {
        id: 20,
        block_name: "메인 일정",
        place: "도서관",
        day: 0,
        begin: 600,
        end: 660,
    }
    await page.route("**/api/v2/**", async (route) => {
        const request = route.request()
        const path = new URL(request.url()).pathname.replace("/api/v2", "")
        const method = request.method()
        let json: unknown = {}
        if (path === "/users/info") {
            json = {
                id: 1,
                name: "Tester",
                mail: "tester@example.com",
                studentNumber: 20260001,
                degree: "Master",
                majorDepartments: [],
                interestedDepartments: [],
            }
        } else if (path === "/semesters") {
            json = { semesters: [semester] }
        } else if (path === "/semesters/current") {
            json = semester
        } else if (path === "/timetables/home") {
            if (method === "PATCH") {
                if (rejectHomeChange) {
                    await route.fulfill({ status: 400, json: { message: "Rejected" } })
                    return
                }
                homeWrites.push(request.postDataJSON())
                homeId = request.postDataJSON().timetableId
            }
            json = {
                source: homeId === null ? "enrolled" : "saved",
                timetableId: homeId,
                year: 2026,
                semester: 3,
                name: "Main",
                lectures: [],
            }
        } else if (path === "/timetables") {
            if (method === "POST") {
                creates.push(request.postDataJSON())
                const id = 4
                timetables.push({
                    id,
                    name: `시간표 ${id}`,
                    year: 2026,
                    semester: 3,
                    timeTableOrder: 3,
                })
                json = { id }
            } else if (method === "DELETE") {
                const { id } = request.postDataJSON()
                timetables = timetables.filter((timetable) => timetable.id !== id)
                if (homeId === id) homeId = null
            } else {
                json = { timetables }
            }
        } else if (path.endsWith("/custom-blocks")) {
            json = { custom_blocks: path.includes("/2/") ? [block] : [] }
        } else if (path.startsWith("/timetables/")) {
            json = { lectures: [] }
        } else if (path.includes("/lectures") || path.includes("/wishlist")) {
            json = { courses: [] }
        } else if (path.includes("/reviews")) {
            json = { reviews: [] }
        } else if (path.endsWith("/departments")) {
            json = { departments: [] }
        }
        await route.fulfill({ json })
    })
    await page.addInitScript(() => {
        localStorage.setItem("i18nextLng", "ko")
        localStorage.setItem("theme", "dark")
    })
    await page.goto("/timetable")
    const deleteButton = page.getByRole("button", {
        name: "현재 시간표 삭제 (선택된 과목이 없을 시)",
        exact: true,
    })
    const setHomeButton = page.getByRole("button", {
        name: "메인 시간표로 지정",
        exact: true,
    })
    await expect(deleteButton).toHaveCount(1)
    await page.getByText("시간표 2", { exact: true }).click()
    await setHomeButton.click()
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toHaveAttribute("aria-pressed", "true")
    expect(homeWrites).toEqual([{ year: 2026, semester: 3, timetableId: 2 }])
    expect(creates).toHaveLength(0)

    await page.getByText("시간표 1", { exact: true }).click()
    const mainStar = page.getByRole("img", { name: "메인 시간표", exact: true })
    await expect(mainStar).toHaveCSS("color", "rgb(229, 76, 101)")
    await expect(deleteButton).toHaveCount(1)
    const tabOrder = () =>
        page.getByText(/^시간표 [1234]$/, { exact: true }).allTextContents()
    expect(await tabOrder()).toEqual(["시간표 2", "시간표 1", "시간표 3"])

    rejectHomeChange = true
    page.once("dialog", (dialog) => dialog.accept())
    await setHomeButton.click()
    await expect(setHomeButton).toBeEnabled()
    await expect(mainStar).toBeVisible()
    expect(homeId).toBe(2)
    rejectHomeChange = false

    await page.reload()
    await page.getByText("시간표 1", { exact: true }).click()
    await expect(mainStar).toBeVisible()
    expect(await tabOrder()).toEqual(["시간표 2", "시간표 1", "시간표 3"])
    await page.keyboard.press("3")
    await expect(page.getByText("시간표 3", { exact: true })).toHaveCSS(
        "color",
        "rgb(229, 76, 101)",
    )

    await page.setViewportSize({ width: 375, height: 812 })
    const academic = page.getByText("학사 시간표", { exact: true }).first()
    await academic.click()
    await expect(deleteButton).toHaveCount(0)
    const academicBox = await academic.boundingBox()
    const yearBox = await page.getByText("2026", { exact: true }).boundingBox()
    expect(academicBox!.x + academicBox!.width).toBeLessThan(yearBox!.x)
    expect(yearBox!.x + yearBox!.width).toBeLessThan(375)
    await page.screenshot({ path: "test-results/main-timetable-mobile.png" })
    await page.getByRole("button", { name: "언어", exact: true }).click()
    await expect(
        page.getByText("Academic Timetable", { exact: true }).first(),
    ).toBeVisible()
    await expect(page.getByText("2026", { exact: true }).locator("..")).toBeInViewport({
        ratio: 1,
    })
    await page.getByRole("button", { name: "Language", exact: true }).click()
    await page
        .getByRole("button", {
            name: "학사 시간표를 복사해 메인 시간표로 지정",
            exact: true,
        })
        .click()
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toBeVisible()
    expect(creates).toEqual([{ year: 2026, semester: 3, lectureIds: [] }])
    expect(homeId).toBe(4)
    expect(await tabOrder()).toEqual(["시간표 4", "시간표 1", "시간표 2", "시간표 3"])

    await deleteButton.click()
    await expect(page.getByText("시간표 4", { exact: true })).toHaveCount(0)
    await expect(page.getByRole("img", { name: "메인 시간표", exact: true })).toHaveCount(
        0,
    )
    expect(homeId).toBeNull()

    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.getByText("시간표 2", { exact: true }).click()
    await setHomeButton.click()
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toBeEnabled()
    await page.getByText("시간표 1", { exact: true }).click()
    await page.screenshot({ path: "test-results/main-timetable-desktop.png" })
    await page.goto("/")
    await expect(page.locator(".block-title", { hasText: "메인 일정" })).toBeVisible()
    await expect(page.getByRole("button", { name: /메인 시간표로 지정/ })).toHaveCount(0)
})
