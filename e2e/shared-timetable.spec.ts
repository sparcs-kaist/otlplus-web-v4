import { expect, test } from "@playwright/test"

test("selects one shared timetable per semester independently of the main timetable", async ({
    page,
}) => {
    const shared = new Map<number, number | null>()
    let homeId: number | null = 1
    let rejectShare = false
    let timetables = [1, 2, 3].map((id) => ({
        id,
        name: `시간표 ${id}`,
        year: 2026,
        semester: id === 3 ? 1 : 3,
        timeTableOrder: id - 1,
    }))
    const requests: string[] = []
    const block = {
        id: 20,
        block_name: "공유 일정",
        place: "도서관",
        day: 0,
        begin: 600,
        end: 660,
    }
    await page.route(
        (url) => url.pathname.startsWith("/api/"),
        async (route) => {
            const request = route.request()
            const url = new URL(request.url())
            const path = url.pathname.replace("/api/v2", "")
            requests.push(path)
            const method = request.method()
            const term =
                method === "PATCH"
                    ? request.postDataJSON().semester
                    : Number(url.searchParams.get("semester")) || 3
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
                json = {
                    semesters: [
                        { year: 2026, semester: 1 },
                        { year: 2026, semester: 3 },
                    ],
                }
            } else if (path === "/semesters/current") {
                json = { year: 2026, semester: 3 }
            } else if (path === "/timetables/shared") {
                if (method === "PATCH") {
                    if (rejectShare)
                        return route.fulfill({
                            status: 400,
                            json: { message: "Rejected" },
                        })
                    shared.set(term, request.postDataJSON().timetableId)
                }
                json = {
                    year: 2026,
                    semester: term,
                    timetableId: shared.get(term) ?? null,
                    source: shared.get(term) == null ? "enrolled" : "saved",
                    name: "Shared",
                    lectures: [],
                    timetableItems: [],
                }
            } else if (path === "/timetables/home") {
                if (method === "PATCH") homeId = request.postDataJSON().timetableId
                json = {
                    year: 2026,
                    semester: term,
                    timetableId: homeId,
                    source: homeId === null ? "enrolled" : "saved",
                    name: "Main",
                    lectures: [],
                    timetableItems: [],
                }
            } else if (path === "/timetables") {
                if (method === "DELETE") {
                    const id = request.postDataJSON().id
                    timetables = timetables.filter((table) => table.id !== id)
                    for (const [semester, selected] of shared)
                        if (selected === id) shared.set(semester, null)
                }
                json = {
                    timetables: timetables.filter((table) => table.semester === term),
                }
            } else if (path === "/friends") {
                json = {
                    checkedAt: new Date().toISOString(),
                    friends: [
                        { id: 7, name: "친구", isFavorite: false, hasScheduleNow: false },
                    ],
                }
            } else if (path === "/friends/7/timetables") {
                json = {
                    timetables: timetables.filter(
                        (table) => table.id === shared.get(term),
                    ),
                }
            } else if (path === "/friends/7/timetables/my-timetable") {
                json = { lectures: [], timetableItems: [] }
            } else if (/^\/friends\/7\/timetables\/\d+$/.test(path)) {
                json = { lectures: [], timetableItems: [{ kind: "custom", data: block }] }
            } else if (path.startsWith("/timetables/")) {
                json = { lectures: [], timetableItems: [] }
            } else if (path.includes("/lectures") || path.includes("/wishlist")) {
                json = { courses: [] }
            } else if (path.includes("/reviews")) {
                json = { reviews: [] }
            } else if (path.endsWith("/departments")) {
                json = { departments: [] }
            } else if (path.includes("/api/users/")) {
                json = []
            }
            await route.fulfill({ json })
        },
    )
    await page.addInitScript(() => {
        localStorage.setItem("i18nextLng", "ko")
        localStorage.setItem("theme", "dark")
    })
    await page.goto("/timetable")
    await page.emulateMedia({ reducedMotion: "reduce" })
    const share = page.getByRole("button", {
        name: "친구 공유용 시간표로 지정",
        exact: true,
    })
    const selectedShare = page.getByRole("button", {
        name: "친구 공유용 시간표",
        exact: true,
    })
    await page.getByText("시간표 1", { exact: true }).click()
    await expect(
        page.getByRole("button", { name: "메인 시간표", exact: true }),
    ).toHaveAttribute("aria-pressed", "true")
    await expect(share.locator("svg")).toHaveCSS("fill", "none")
    await expect(
        page
            .locator('[data-timetable-tab="academic"]')
            .getByRole("img", { name: "친구 공유용 시간표", exact: true }),
    ).toBeVisible()
    await share.click()
    await expect(selectedShare).toHaveAttribute("aria-pressed", "true")
    await expect(selectedShare.locator("svg")).not.toHaveCSS("fill", "none")
    await expect(page.locator('[data-timetable-tab="1"] button')).toHaveCount(4)
    expect(
        await page
            .locator('[data-timetable-tab="1"] button')
            .evaluateAll((buttons) =>
                buttons.map((button) => button.getAttribute("aria-label")),
            ),
    ).toEqual([
        "메인 시간표",
        "친구 공유용 시간표",
        "현재 시간표 복제",
        "현재 시간표 삭제 (선택된 항목이 없을 때)",
    ])
    await page.getByText("시간표 2", { exact: true }).click()
    await expect(
        page.getByRole("img", { name: "친구 공유용 시간표", exact: true }),
    ).toBeVisible()
    await expect(
        page.getByRole("img", { name: "친구 공유용 시간표", exact: true }).locator("svg"),
    ).not.toHaveCSS("fill", "none")
    await page
        .locator('[data-timetable-tab="2"]')
        .locator("..")
        .screenshot({ path: "test-results/shared-timetable-icon-states.png" })
    rejectShare = true
    page.once("dialog", (dialog) => dialog.accept())
    await share.click()
    await expect(share).toBeEnabled()
    expect(shared.get(3)).toBe(1)
    rejectShare = false
    await share.click()
    await expect(selectedShare).toHaveAttribute("aria-pressed", "true")
    expect(shared.get(3)).toBe(2)
    expect(homeId).toBe(1)
    await expect(
        page.getByRole("img", { name: "친구 공유용 시간표", exact: true }),
    ).toHaveCount(0)
    await page.reload()
    await page.getByText("시간표 2", { exact: true }).click()
    await expect(selectedShare).toHaveAttribute("aria-pressed", "true")
    await page.screenshot({ path: "test-results/shared-timetable-desktop.png" })
    await page
        .locator('[data-timetable-tab="2"]')
        .locator("..")
        .screenshot({ path: "test-results/shared-timetable-tabs.png" })
    await page.setViewportSize({ width: 390, height: 844 })
    await expect(selectedShare).toBeInViewport()
    await page.screenshot({ path: "test-results/shared-timetable-mobile.png" })
    await page.getByRole("button", { name: "이전 학기", exact: true }).click()
    await page.getByText("시간표 3", { exact: true }).click()
    await share.click()
    await expect(selectedShare).toHaveAttribute("aria-pressed", "true")
    expect(shared.get(1)).toBe(3)
    expect(shared.get(3)).toBe(2)
    await selectedShare.click()
    expect(shared.get(1)).toBe(3)
    const academic = page.locator('[data-timetable-tab="academic"]')
    await academic.getByText("학사 시간표", { exact: true }).click()
    await share.click()
    await expect(
        academic.getByRole("button", { name: "친구 공유용 시간표", exact: true }),
    ).toHaveAttribute("aria-pressed", "true")
    expect(shared.get(1)).toBeNull()
    await page.getByRole("button", { name: "다음 학기", exact: true }).click()
    await page.getByText("시간표 2", { exact: true }).click()
    await expect(selectedShare).toHaveAttribute("aria-pressed", "true")
    await page.goto("/friends?friendId=7&year=2026&semester=3")
    await expect(
        page.getByRole("tab", { name: "시간표 2", exact: true }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(page.getByRole("tab", { name: "수강 시간표", exact: true })).toHaveCount(
        0,
    )
    await expect(page.locator(".block-title", { hasText: "공유 일정" })).toBeVisible()
    expect(requests).not.toContain("/friends/7/timetables/my-timetable")
    await page.goto("/timetable")
    await page.getByText("시간표 2", { exact: true }).click()
    await page
        .getByRole("button", {
            name: "현재 시간표 삭제 (선택된 항목이 없을 때)",
            exact: true,
        })
        .click()
    await expect(page.getByText("시간표 2", { exact: true })).toHaveCount(0)
    expect(shared.get(3)).toBeNull()
    expect(homeId).toBe(1)
    await page.goto("/friends?friendId=7&year=2026&semester=3")
    await expect(
        page.getByRole("tab", { name: "수강 시간표", exact: true }),
    ).toHaveAttribute("aria-selected", "true")
    expect(requests).toContain("/friends/7/timetables/my-timetable")
    await expect(page.locator(".block-title", { hasText: "공유 일정" })).toHaveCount(0)
})
