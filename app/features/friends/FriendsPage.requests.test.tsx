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
    default: ({ overlappedLectureIds }: { overlappedLectureIds: number[] }) => (
        <output data-testid="overlapped-lectures">
            {overlappedLectureIds.join(" ")}
        </output>
    ),
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
    const requests: { url: string; year: number; semester: number }[] = []
    vi.mocked(axiosClient.request).mockImplementation(async ({ url, params }) => {
        const term = params as { year: number; semester: number } | null
        if (term) {
            requests.push({
                url: url!,
                year: term.year,
                semester: term.semester,
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
                    semesters:
                        friendId === 7
                            ? [
                                  { year: 2026, semester: 3 },
                                  { year: 2024, semester: 1 },
                              ]
                            : [{ year: 2025, semester: 3 }],
                },
            }
        }
        if (url === "/api/v2/timetables/shared") {
            return {
                data: {
                    timetableType: "timetable",
                    lectures: [{ id: term?.year, classes: [] }],
                    customBlocks: [],
                },
            }
        }
        if (url?.endsWith("/shared")) {
            if (friendId === 8) await friendBResponse
            return {
                data: {
                    name: `Shared ${friendId} ${term?.year}`,
                    timetableType: "timetable",
                    lectures: [{ id: term?.year, classes: [] }],
                    customBlocks: [],
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

it("keeps both shared requests in sync with the selected semester", async () => {
    const { requests } = setup()
    await screen.findByText("Shared 7 2026")
    fireEvent.click(screen.getByRole("tab", { selected: false }))
    await screen.findByText("Shared 7 2024")
    await waitFor(() =>
        expect(screen.getByTestId("overlapped-lectures")).toHaveTextContent("2024"),
    )

    expect(requests.filter(({ year }) => year === 2024)).toEqual(
        expect.arrayContaining([
            { url: "/api/v2/timetables/shared", year: 2024, semester: 1 },
            { url: "/api/v2/friends/7/timetables/shared", year: 2024, semester: 1 },
        ]),
    )
    expect(requests.filter(({ year }) => year === 2024)).toHaveLength(2)
    expect(
        requests.every(
            ({ year, semester }) =>
                (year === 2026 && semester === 3) || (year === 2024 && semester === 1),
        ),
    ).toBe(true)
})

it("consumes an overlap link while mounted and loads the target friend's shared semester", async () => {
    let releaseFriendB!: () => void
    const pendingFriendB = new Promise<void>((resolve) => {
        releaseFriendB = resolve
    })
    const { router, requests } = setup(pendingFriendB)
    await screen.findByText("Shared 7 2026")
    const initialRequestCount = requests.length

    await act(() => router.navigate("/friends?friendId=8&year=2025&semester=3"))
    await waitFor(() =>
        expect(requests.slice(initialRequestCount)).toEqual(
            expect.arrayContaining([
                { url: "/api/v2/timetables/shared", year: 2025, semester: 3 },
                { url: "/api/v2/friends/8/timetables/shared", year: 2025, semester: 3 },
            ]),
        ),
    )
    expect(requests.slice(initialRequestCount)).toHaveLength(2)
    expect(screen.getByRole("tablist", { name: "Friend B" })).toBeInTheDocument()
    expect(screen.getAllByRole("tab", { selected: true })).toHaveLength(1)
    expect(screen.queryByText("Shared 7 2026")).not.toBeInTheDocument()
    expect(router.state.location.search).toBe("")

    await act(async () => releaseFriendB())
    await screen.findByText("Shared 8 2025")
    await waitFor(() =>
        expect(screen.getByTestId("overlapped-lectures")).toHaveTextContent("2025"),
    )
    expect(screen.queryByText("Shared 7 2026")).not.toBeInTheDocument()
})

it("ignores an older friend's pending response after switching back", async () => {
    let releaseFriendB!: () => void
    const pendingFriendB = new Promise<void>((resolve) => {
        releaseFriendB = resolve
    })
    const { requests } = setup(pendingFriendB)
    await screen.findByText("Shared 7 2026")
    fireEvent.click(screen.getByRole("button", { name: /Friend B/ }))
    await waitFor(() =>
        expect(requests.some(({ url }) => url.includes("/friends/8/"))).toBe(true),
    )
    fireEvent.click(screen.getByRole("button", { name: /Friend A/ }))
    await act(async () => releaseFriendB())
    await screen.findByText("Shared 7 2026")
    expect(screen.queryByText("Shared 8 2025")).not.toBeInTheDocument()
    await waitFor(() =>
        expect(screen.getByTestId("overlapped-lectures")).toHaveTextContent("2026"),
    )
    expect(
        requests.every(({ url, year, semester }) => {
            if (url.includes("/friends/7/")) return year === 2026 && semester === 3
            if (url.includes("/friends/8/")) return year === 2025 && semester === 3
            return (year === 2026 || year === 2025) && semester === 3
        }),
    ).toBe(true)
})
