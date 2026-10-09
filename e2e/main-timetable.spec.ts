import { expect, test } from "@playwright/test"

test("sets, creates, and deletes the main timetable from the timetable tabs", async ({
    page,
}) => {
    let homeId: number | null = 1
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
    let nextTimetableId = 4
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
                timetableItems: homeId === 2 ? [{ kind: "custom", data: block }] : [],
            }
        } else if (path === "/timetables/shared") {
            json = {
                year: 2026,
                semester: 3,
                timetableId: null,
                source: "enrolled",
                name: "Enrolled",
                lectures: [],
                timetableItems: [],
            }
        } else if (path === "/timetables") {
            if (method === "POST") {
                creates.push(request.postDataJSON())
                const id = nextTimetableId++
                timetables.push({
                    id,
                    name: `시간표 ${id}`,
                    year: 2026,
                    semester: 3,
                    timeTableOrder: id - 1,
                })
                if (homeId === null) homeId = id
                json = { id }
            } else if (method === "DELETE") {
                const { id } = request.postDataJSON()
                timetables = timetables.filter((timetable) => timetable.id !== id)
                if (homeId === id) homeId = timetables[0]?.id ?? null
            } else {
                json = { timetables }
            }
        } else if (path.endsWith("/custom-blocks")) {
            json = { custom_blocks: path.includes("/2/") ? [block] : [] }
        } else if (path.startsWith("/timetables/")) {
            json = { lectures: [], timetableItems: [] }
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
        name: "현재 시간표 삭제 (선택된 항목이 없을 때)",
        exact: true,
    })
    const setHomeButton = page.getByRole("button", {
        name: "메인 시간표로 지정",
        exact: true,
    })
    const addButton = page.getByRole("button", { name: "빈 시간표 추가", exact: true })
    await expect(deleteButton).toHaveCount(1)
    await page.getByText("시간표 2", { exact: true }).click()
    const movingTab = page.locator('[aria-roledescription="sortable"]').filter({
        has: page.getByText("시간표 2", { exact: true }),
    })
    expect(
        await movingTab
            .locator("button")
            .evaluateAll((buttons) =>
                buttons.map((button) => button.getAttribute("aria-label")),
            ),
    ).toEqual([
        "메인 시간표로 지정",
        "친구 공유용 시간표로 지정",
        "현재 시간표 복제",
        "현재 시간표 삭제 (선택된 항목이 없을 때)",
    ])
    await movingTab.evaluate((element) => {
        element.addEventListener("transitionstart", (event) => {
            if ((event as TransitionEvent).propertyName === "transform") {
                element.setAttribute(
                    "data-start-x",
                    `${element.getBoundingClientRect().x}`,
                )
            }
        })
        element.addEventListener("transitionend", (event) => {
            if ((event as TransitionEvent).propertyName === "transform") {
                element.setAttribute("data-end-x", `${element.getBoundingClientRect().x}`)
            }
        })
    })
    await setHomeButton.click()
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toHaveAttribute("aria-pressed", "true")
    expect(homeWrites).toEqual([{ year: 2026, semester: 3, timetableId: 2 }])
    expect(creates).toHaveLength(0)
    await expect(movingTab).toHaveAttribute("data-end-x")
    expect(Number(await movingTab.getAttribute("data-end-x"))).toBeLessThan(
        Number(await movingTab.getAttribute("data-start-x")),
    )

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
    await page.getByText("2026", { exact: true }).click()
    await page.keyboard.press("3")
    await expect(page.getByText("시간표 3", { exact: true })).toHaveCSS(
        "color",
        "rgb(229, 76, 101)",
    )

    await page.setViewportSize({ width: 375, height: 812 })
    const academic = page.getByText("학사 시간표", { exact: true }).first()
    await academic.click()
    await expect(deleteButton).toHaveCount(0)
    await expect(setHomeButton).toHaveCount(0)
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toHaveCount(0)
    await expect(addButton).toBeInViewport({ ratio: 1 })
    await expect(addButton).toBeEnabled()
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
    await addButton.click()
    await expect(page.getByText("시간표 4", { exact: true })).toBeVisible()
    expect(homeId).toBe(2)
    await setHomeButton.click()
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toBeVisible()
    expect(creates).toEqual([{ year: 2026, semester: 3, lectureIds: [] }])
    expect(homeId).toBe(4)
    expect(await tabOrder()).toEqual(["시간표 4", "시간표 1", "시간표 2", "시간표 3"])

    await deleteButton.click()
    await expect(page.getByText("시간표 4", { exact: true })).toHaveCount(0)
    expect(homeId).toBe(1)
    await expect(
        page
            .locator('[data-timetable-tab="1"]')
            .getByLabel("메인 시간표", { exact: true }),
    ).toBeVisible()

    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.emulateMedia({ reducedMotion: "reduce" })
    await page.getByText("시간표 2", { exact: true }).click()
    await setHomeButton.click()
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toBeEnabled()
    await expect(movingTab).toHaveCSS("transition-duration", "0s")
    await page.getByText("시간표 1", { exact: true }).click()
    await page.screenshot({ path: "test-results/main-timetable-desktop.png" })

    await page.emulateMedia({ reducedMotion: "no-preference" })
    await page.getByText("시간표 3", { exact: true }).click()
    for (const [source, id, width] of [
        ["1", 5, 1920],
        ["academic", 6, 375],
    ] as const) {
        await page.setViewportSize({ width, height: 1080 })
        const sourceTab = page.locator(`[data-timetable-tab="${source}"]`)
        await sourceTab.locator("[contenteditable], [title]").first().click()
        const sourceBox = await sourceTab.boundingBox()
        await page.getByRole("button", { name: "현재 시간표 복제", exact: true }).click()
        const copyTab = page.locator(`[data-timetable-tab="${id}"]`)
        const ghost = page.locator(`[data-timetable-copy="${id}"]`)
        await expect(ghost).toBeVisible()
        const travel = await ghost.evaluate((element) => {
            const animation = element.getAnimations()[0]!
            animation.pause()
            animation.currentTime = 0
            const start = element.getBoundingClientRect().toJSON()
            animation.currentTime = 275
            const middle = element.getBoundingClientRect().toJSON()
            animation.currentTime = 550
            const end = element.getBoundingClientRect().toJSON()
            animation.finish()
            return { start, middle, end }
        })
        expect(travel.start.x).toBeCloseTo(sourceBox!.x, 0)
        expect(travel.start.y).toBeCloseTo(sourceBox!.y, 0)
        expect(travel.start.width).toBeCloseTo(sourceBox!.width, 0)
        expect(Math.abs(travel.middle.x - travel.start.x)).toBeGreaterThan(10)
        await expect(ghost).toHaveCount(0)
        const destinationBox = await copyTab.boundingBox()
        expect(travel.end.x).toBeCloseTo(destinationBox!.x, 0)
        expect(travel.end.y).toBeCloseTo(destinationBox!.y, 0)
        const copyName = copyTab.getByText(`시간표 ${id}`, { exact: true })
        await expect(copyName).toHaveCSS("color", "rgb(229, 76, 101)")
        await expect(copyName).toBeInViewport()
        expect(homeId).toBe(2)
    }
    expect(creates).toHaveLength(3)
    await page.emulateMedia({ reducedMotion: "reduce" })
    await page.getByRole("button", { name: "현재 시간표 복제", exact: true }).click()
    await expect(page.locator('[data-timetable-tab="7"]')).toBeVisible()
    await expect(page.locator("[data-timetable-copy]")).toHaveCount(0)
    await page.emulateMedia({ reducedMotion: "no-preference" })
    await page.getByText("2026", { exact: true }).click()
    const modifier = await page.evaluate(() =>
        /mac/i.test(navigator.userAgent) ? "Meta" : "Control",
    )
    await page.keyboard.press(`${modifier}+d`)
    await expect(page.locator('[data-timetable-copy="8"]')).toBeVisible()
    await expect(page.locator('[data-timetable-copy="8"]')).toHaveCount(0)
    await expect(page.locator('[data-timetable-tab="8"]')).toBeVisible()
    await page.goto("/")
    await expect(page.locator(".block-title", { hasText: "메인 일정" })).toBeVisible()
    await expect(page.getByRole("button", { name: /메인 시간표로 지정/ })).toHaveCount(0)

    await page.emulateMedia({ reducedMotion: "reduce" })
    await page.goto("/timetable")
    for (const table of [...timetables]) {
        await page.getByText(table.name, { exact: true }).click()
        await deleteButton.click()
        await expect(page.locator(`[data-timetable-tab="${table.id}"]`)).toHaveCount(0)
    }

    const academicTab = page.locator('[data-timetable-tab="academic"]')
    await expect(
        academicTab.getByRole("img", { name: "메인 시간표", exact: true }),
    ).toBeVisible()
    await expect(
        academicTab.getByRole("button", { name: "친구 공유용 시간표", exact: true }),
    ).toHaveAttribute("aria-pressed", "true")
    expect(homeId).toBeNull()
    await page.screenshot({ path: "test-results/academic-selection-defaults.png" })
    await page.getByRole("button", { name: "빈 시간표 추가", exact: true }).click()
    const first = timetables[0]!
    await expect(
        page
            .locator(`[data-timetable-tab="${first.id}"]`)
            .getByRole("button", { name: "메인 시간표", exact: true }),
    ).toHaveAttribute("aria-pressed", "true")
    expect(homeId).toBe(first.id)

    await page.route("**/api/v2/users/info", (route) =>
        route.fulfill({ status: 401, json: {} }),
    )
    await page.goto("/timetable")
    await expect(page.getByRole("button", { name: "Sign in", exact: true })).toBeVisible()
    await expect(addButton).toBeDisabled()
    await expect(addButton).toBeInViewport({ ratio: 1 })
    const semesterControl = page.getByText("2026", { exact: true }).locator("..")
    const semesterBox = await semesterControl.boundingBox()
    const rowBox = await semesterControl.locator("../..").boundingBox()
    expect(semesterBox!.x + semesterBox!.width).toBeCloseTo(rowBox!.x + rowBox!.width, 0)
    await expect(academic).toBeVisible()
    await expect(setHomeButton).toHaveCount(0)
    await page.screenshot({ path: "test-results/main-timetable-guest.png" })
})
