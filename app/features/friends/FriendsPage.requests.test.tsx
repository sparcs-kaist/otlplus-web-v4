import { ThemeProvider } from "@emotion/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { afterEach, expect, it, vi } from "vitest"

import { axiosClient } from "@/libs/axios"
import FriendsPage from "@/routes/friends"
import themes from "@/styles/themes"

vi.mock("@/libs/axios", () => ({ axiosClient: { request: vi.fn() } }))
vi.mock("@/utils/zustand/useUserStore", () => ({
    default: () => ({ status: "success", user: { id: 1, name: "Me" } }),
}))
vi.mock("@/utils/useIsDevice", () => ({
    default: (device: string) => device === "desktop",
}))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { resolvedLanguage: "ko" },
    }),
}))
vi.mock("@/features/friends/FriendInviteModal", () => ({ default: () => null }))
vi.mock("@/features/friends/FriendLectureDetail", () => ({ default: () => null }))
vi.mock("@/common/components/timetable/CustomTimeTableGrid", () => ({
    default: () => null,
}))

const clients: QueryClient[] = []
afterEach(() => {
    cleanup()
    clients.splice(0).forEach((client) => client.clear())
    vi.clearAllMocks()
})

function setup(friendBResponse = Promise.resolve()) {
    const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
    clients.push(client)
    const router = createMemoryRouter([{ path: "/friends", element: <FriendsPage /> }], {
        initialEntries: ["/friends?friendId=7&year=2026&semester=3"],
    })
    const requests: { url: string; year: number; semester: number; search: string }[] = []
    vi.mocked(axiosClient.request).mockImplementation(async ({ url, params }) => {
        const term = params as { year: number; semester: number } | null
        if (term) {
            requests.push({
                url: url!,
                year: term.year,
                semester: term.semester,
                search: router.state.location.search,
            })
        }
        if (url === "/api/v2/friends") {
            return {
                data: {
                    friends: [
                        { id: 7, name: "Friend A", isFavorite: false },
                        { id: 8, name: "Friend B", isFavorite: false },
                    ],
                },
            }
        }
        const friendId = url?.includes("/friends/7/") ? 7 : 8
        if (url?.endsWith("/shared/semesters")) {
            return {
                data: {
                    semesters: [{ year: friendId === 7 ? 2026 : 2025, semester: 3 }],
                },
            }
        }
        if (url === "/api/users/1/timetables") return { data: [] }
        if (url === "/api/v2/timetables/my-timetable") {
            return { data: { timetableItems: [] } }
        }
        if (url?.endsWith("/shared")) {
            if (friendId === 8) await friendBResponse
            return {
                data: {
                    name: `Shared ${friendId} ${term?.year}`,
                    source: "saved",
                    timetableItems: [],
                },
            }
        }
        throw new Error(`Unexpected request: ${url}`)
    })
    render(
        <QueryClientProvider client={client}>
            <ThemeProvider theme={themes.light}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>,
    )
    return { router, requests }
}

it("requests only the available semester when switching friends and revisiting cached semester lists", async () => {
    const { requests } = setup()
    await screen.findByText("Shared 7 2026")
    for (const [name, expected] of [
        ["Friend B", "Shared 8 2025"],
        ["Friend A", "Shared 7 2026"],
        ["Friend B", "Shared 8 2025"],
    ] as const) {
        fireEvent.click(screen.getByRole("button", { name: new RegExp(name) }))
        await screen.findByText(expected)
    }
    expect(
        requests
            .filter(({ url }) => url.endsWith("/shared"))
            .map(({ url, year, semester }) => [url, year, semester]),
    ).toEqual([
        ["/api/v2/friends/7/timetables/shared", 2026, 3],
        ["/api/v2/friends/8/timetables/shared", 2025, 3],
        ["/api/v2/friends/7/timetables/shared", 2026, 3],
        ["/api/v2/friends/8/timetables/shared", 2025, 3],
    ])
    for (const { year, semester, search } of requests) {
        const params = new URLSearchParams(search)
        expect({ year, semester }).toEqual({
            year: Number(params.get("year")),
            semester: Number(params.get("semester")),
        })
    }
})

it("keeps request semesters in sync with rapid URL navigation while an older response is pending", async () => {
    let releaseFriendB!: () => void
    const pendingFriendB = new Promise<void>((resolve) => {
        releaseFriendB = resolve
    })
    const { router, requests } = setup(pendingFriendB)
    await screen.findByText("Shared 7 2026")
    await act(() => router.navigate("/friends?friendId=8&year=2025&semester=3"))
    await waitFor(() =>
        expect(requests.some(({ url }) => url.includes("/friends/8/"))).toBe(true),
    )
    await act(() => router.navigate("/friends?friendId=7&year=2026&semester=3"))
    await act(() => router.navigate("/friends?friendId=8&year=2025&semester=3"))
    await act(() => router.navigate("/friends?friendId=7&year=2026&semester=3"))
    await act(async () => releaseFriendB())
    await screen.findByText("Shared 7 2026")
    expect(screen.queryByText("Shared 8 2025")).not.toBeInTheDocument()
    for (const { year, semester, search } of requests) {
        const params = new URLSearchParams(search)
        expect({ year, semester }).toEqual({
            year: Number(params.get("year")),
            semester: Number(params.get("semester")),
        })
    }
})
