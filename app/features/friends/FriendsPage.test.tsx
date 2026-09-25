import userEvent from "@testing-library/user-event"
import type { Window as HappyDOMWindow } from "happy-dom"
import { Link, MemoryRouter, useLocation, useNavigate } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { CustomBlock } from "@/common/schemas/customBlock"
import type { FriendListItem } from "@/common/schemas/friend"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import FriendsPage from "@/routes/friends"
import { act, fireEvent, render, screen, waitFor, within } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
const authentication = vi.hoisted(() => ({ status: "success" }))
vi.mock("@/utils/zustand/useUserStore", () => ({
    default: () => ({ status: authentication.status, user: { id: 1, name: "Me" } }),
}))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string, options?: { count?: number }) =>
            key === "friends.friendList" ? `${key} (${options?.count})` : key,
    }),
}))
vi.mock("@/features/friends/FriendInviteModal", () => ({ default: () => null }))
vi.mock("@/features/friends/FriendLectureDetail", () => ({
    default: ({ lecture }: { lecture: Lecture | null }) => (
        <div data-testid="overlap-detail">
            {lecture?.name}
            <Link to="/friends?friendId=7&year=2024&semester=3&timetableId=43">
                Matched friend timetable
            </Link>
        </div>
    ),
}))
vi.mock("@/common/components/timetable/CustomTimeTableGrid", () => ({
    default: ({
        timetableItems,
        needTimeFilter,
        needLectureDeletable,
        onLectureSelect,
        onCustomBlockSelect,
        selectedCustomBlock,
        selectedLectures,
        overlappedLectureIds,
        displayedDayCount,
    }: {
        timetableItems: TimetableItem[]
        needTimeFilter: boolean
        needLectureDeletable: boolean
        onLectureSelect: (lecture: Lecture) => void
        onCustomBlockSelect: (block: CustomBlock) => void
        selectedCustomBlock: CustomBlock | null
        selectedLectures: Lecture[]
        overlappedLectureIds: readonly number[]
        displayedDayCount: 5 | 7
    }) => (
        <div
            data-testid="timetable-grid"
            data-time-filter={needTimeFilter}
            data-deletable={needLectureDeletable}
            data-selected-custom-block={selectedCustomBlock?.id ?? ""}
            data-selected-lectures={selectedLectures.map(({ id }) => id).join(" ")}
            data-overlapped-lectures={overlappedLectureIds.join(" ")}
            data-displayed-days={displayedDayCount}
        >
            {timetableItems.map((item) =>
                item.kind === "lecture" ? (
                    <button
                        key={`lecture-${item.data.id}`}
                        type="button"
                        onPointerDown={() => onLectureSelect(item.data)}
                    >
                        Tile: {item.data.name}
                    </button>
                ) : (
                    <button
                        key={`custom-${item.data.id}`}
                        type="button"
                        aria-label={`Custom tile: ${item.data.block_name}`}
                        onPointerDown={() => onCustomBlockSelect(item.data)}
                    >
                        {item.data.block_name}
                    </button>
                ),
            )}
        </div>
    ),
}))

const lecture = { id: 1, name: "Fluid mechanics", subtitle: "", classNo: "A" } as Lecture
const friend = { id: 7, name: "Test friend", isFavorite: false }
const friends = { friends: [friend] }
let friendsResponse: { checkedAt?: string; friends: FriendListItem[] } = friends
let friendsQueryState = { isSuccess: true, isFetching: false, isError: false }
const refetchFriends = vi.fn()
const lectures = {
    lectures: [lecture],
    timetableItems: [{ kind: "lecture", data: lecture }],
}
let ownActualResponse: { timetableItems: TimetableItem[] }
let ownAllSavedResponse: { id: number; lectures: { id: number }[] }[]
let friendSavedResponse: { timetableItems: TimetableItem[] }
const timetables = {
    timetables: [
        { id: 42, name: "Saved timetable" },
        { id: 43, name: "Earlier timetable" },
    ],
}
let timetablesResponse = timetables
const semesters = {
    semesters: [
        { year: 2024, semester: 1 },
        { year: 2024, semester: 3 },
        { year: 2025, semester: 1 },
        { year: 2025, semester: 3 },
        { year: 2026, semester: 1 },
        { year: 2026, semester: 3 },
    ],
}
const savedLectures = {
    lectures: [{ ...lecture, name: "Legacy lecture should not be shown" }],
    timetableItems: [
        { kind: "lecture", data: { ...lecture, name: "Saved fluid mechanics" } },
        {
            kind: "custom",
            data: {
                id: 1,
                block_name: "Club meeting",
                place: "Student center",
                day: 0,
                begin: 600,
                end: 660,
                times: [
                    { day: 0, begin: 600, end: 660 },
                    { day: 2, begin: 840, end: 900 },
                ],
            },
        },
    ],
}
const earlierLectures = {
    lectures: [{ ...lecture, name: "Earlier fluid mechanics" }],
    timetableItems: [
        { kind: "lecture", data: { ...lecture, name: "Earlier fluid mechanics" } },
    ],
}
const parameterSetters = new Map<string, ReturnType<typeof vi.fn>>()
const testWindow = window as unknown as HappyDOMWindow
const originalViewport = { width: window.innerWidth, height: window.innerHeight }

function NavigationProbe() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <output data-testid="location">{location.pathname + location.search}</output>
            <button type="button" onClick={() => navigate(-1)}>
                Browser back
            </button>
        </>
    )
}

function renderPage(entry = "/friends") {
    return render(
        <MemoryRouter initialEntries={[entry]}>
            <FriendsPage />
            <NavigationProbe />
        </MemoryRouter>,
    )
}

const currentParams = () =>
    new URL(screen.getByTestId("location").textContent!, "https://otl.test").searchParams

describe("mobile friend timetable navigation", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        authentication.status = "success"
        friendsResponse = friends
        timetablesResponse = timetables
        ownActualResponse = lectures as typeof ownActualResponse
        ownAllSavedResponse = [{ id: 42, lectures: [{ id: lecture.id }] }]
        friendSavedResponse = savedLectures as typeof friendSavedResponse
        friendsQueryState = { isSuccess: true, isFetching: false, isError: false }
        parameterSetters.clear()
        testWindow.happyDOM.setViewport({ width: 390, height: 844 })
        vi.mocked(useAPI).mockImplementation((_method, path) => {
            if (!parameterSetters.has(path)) parameterSetters.set(path, vi.fn())
            return {
                query: {
                    data:
                        path === "/friends"
                            ? friendsResponse
                            : path === "/semesters"
                              ? semesters
                              : path === "/users/1/timetables"
                                ? ownAllSavedResponse
                                : path === "/timetables/my-timetable"
                                  ? ownActualResponse
                                  : path.endsWith("my-timetable")
                                    ? lectures
                                    : path === "/friends/7/timetables/42"
                                      ? friendSavedResponse
                                      : path.endsWith("/42")
                                        ? savedLectures
                                        : path.endsWith("/43")
                                          ? earlierLectures
                                          : timetablesResponse,
                    isSuccess: true,
                    isFetching: false,
                    isPending: false,
                    isError: false,
                    refetch: refetchFriends,
                    ...(path === "/friends" ? friendsQueryState : {}),
                },
                mutation: { isPending: false, isError: false },
                setParams: parameterSetters.get(path),
                requestFunction: vi.fn(),
            } as unknown as ReturnType<typeof useAPI>
        })
    })

    afterEach(() => {
        testWindow.happyDOM.setViewport(originalViewport)
        vi.useRealTimers()
        vi.restoreAllMocks()
    })

    it.each([390, 1440])(
        "pins my timetable above friends, outside the friend count and search filter at width %i",
        (width) => {
            testWindow.happyDOM.setViewport({ width, height: 844 })
            renderPage("/friends?year=2026&semester=3")
            if (width === 390)
                fireEvent.click(
                    screen.getByRole("button", { name: "friends.selectFriend" }),
                )

            const ownRow = screen.getByRole("button", { name: "friends.myTimetable" })
            const list = ownRow.parentElement!
            expect(list.firstElementChild).toBe(ownRow)
            expect(ownRow).toHaveAttribute("type", "button")
            expect(ownRow).toHaveAttribute("aria-pressed", "true")
            expect(ownRow).toHaveStyle({ background: "#EBEBEB" })
            expect(within(ownRow).queryByRole("button")).not.toBeInTheDocument()
            expect(within(ownRow).queryByRole("img")).not.toBeInTheDocument()
            expect(
                screen.getByRole("heading", { name: "friends.friendList (1)" }),
            ).toBeInTheDocument()
            expect(
                within(list).getByRole("button", { name: /Test friend/ }),
            ).toBeInTheDocument()

            fireEvent.change(
                screen.getByRole("textbox", { name: "friends.searchPlaceholder" }),
                { target: { value: "unmatched" } },
            )
            expect(screen.getByRole("button", { name: "friends.myTimetable" })).toBe(
                ownRow,
            )
            expect(list.firstElementChild).toBe(ownRow)
            expect(
                within(list).queryByRole("button", { name: /Test friend/ }),
            ).not.toBeInTheDocument()
            expect(
                screen.getByRole("heading", { name: "friends.friendList (1)" }),
            ).toBeInTheDocument()
        },
    )

    it.each([390, 1440])(
        "selects my timetable and clears the friend and saved table at width %i",
        (width) => {
            testWindow.happyDOM.setViewport({ width, height: 844 })
            renderPage("/friends?friendId=7&year=2025&semester=3&timetableId=42")
            if (width === 390)
                fireEvent.click(
                    screen.getByRole("button", { name: "friends.selectFriend" }),
                )

            const ownRow = screen.getByRole("button", { name: "friends.myTimetable" })
            expect(ownRow).toHaveAttribute("aria-pressed", "false")
            fireEvent.click(ownRow)
            expect(currentParams().has("friendId")).toBe(false)
            expect(currentParams().has("timetableId")).toBe(false)
            expect(currentParams().get("year")).toBe("2025")
            expect(currentParams().get("semester")).toBe("3")
            expect(
                screen.getByRole("tablist", { name: "friends.myTimetable" }),
            ).toBeInTheDocument()
            expect(
                screen.getByRole("tab", { name: "friends.actualTimetable" }),
            ).toHaveAttribute("aria-selected", "true")
            if (width === 390) {
                expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
                fireEvent.click(
                    screen.getByRole("button", { name: "friends.selectFriend" }),
                )
            }
            expect(
                screen.getByRole("button", { name: "friends.myTimetable" }),
            ).toHaveAttribute("aria-pressed", "true")
        },
    )

    it.each([
        [390, " "],
        [1440, "{Enter}"],
    ] as const)(
        "supports my timetable keyboard selection at width %i with %s",
        async (width, key) => {
            const user = userEvent.setup()
            testWindow.happyDOM.setViewport({ width, height: 844 })
            renderPage("/friends?friendId=7&year=2025&semester=3&timetableId=42")
            if (width === 390) {
                fireEvent.click(
                    screen.getByRole("button", { name: "friends.selectFriend" }),
                )
                await waitFor(() =>
                    expect(
                        screen.getByRole("button", { name: "common.search.close" }),
                    ).toHaveFocus(),
                )
            }

            screen.getByRole("button", { name: "friends.myTimetable" }).focus()
            await act(async () => user.keyboard(key))
            expect(currentParams().has("friendId")).toBe(false)
            expect(currentParams().has("timetableId")).toBe(false)
            if (width === 390)
                expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
        },
    )

    it.each([390, 1440])(
        "shows only a schedule icon for busy friends at width %i",
        (width) => {
            testWindow.happyDOM.setViewport({ width, height: 844 })
            friendsResponse = {
                checkedAt: new Date().toISOString(),
                friends: [
                    { ...friend, hasScheduleNow: true },
                    { id: 8, name: "No event", isFavorite: true, hasScheduleNow: false },
                    { id: 9, name: "Unknown", isFavorite: false, hasScheduleNow: null },
                    { id: 10, name: "Old response", isFavorite: false },
                ],
            }
            renderPage()
            if (width === 390)
                fireEvent.click(
                    screen.getByRole("button", { name: "friends.selectFriend" }),
                )

            const icon = screen.getByRole("img", { name: "friends.scheduleNow" })
            expect(icon).toHaveAttribute("title", "friends.scheduleNow")
            expect(
                within(screen.getByRole("button", { name: /Test friend/ })).getByRole(
                    "img",
                ),
            ).toBe(icon)
            expect(screen.queryByText("friends.scheduleNow")).not.toBeInTheDocument()
            for (const name of ["No event", "Unknown", "Old response"])
                expect(
                    within(
                        screen.getByRole("button", { name: new RegExp(name) }),
                    ).queryByRole("img"),
                ).not.toBeInTheDocument()

            expect(
                screen
                    .getAllByRole("button", { name: "friends.favorite" })
                    .map((button) => button.closest('[role="button"]')?.textContent),
            ).toEqual(["Test friend", "No event", "Unknown", "Old response"])
        },
    )

    it.each(["missing", "invalid", "expired", "future", "error"])(
        "does not display stale or unavailable schedule information: %s",
        (state) => {
            testWindow.happyDOM.setViewport({ width: 1440, height: 844 })
            friendsResponse = {
                checkedAt:
                    state === "missing"
                        ? undefined
                        : state === "invalid"
                          ? "not a date"
                          : new Date(
                                Date.now() +
                                    (state === "expired"
                                        ? -120_000
                                        : state === "future"
                                          ? 120_000
                                          : 0),
                            ).toISOString(),
                friends: [{ ...friend, hasScheduleNow: true }],
            }
            friendsQueryState = {
                isSuccess: state !== "error",
                isFetching: false,
                isError: state === "error",
            }
            renderPage()
            expect(screen.queryByRole("img", { name: "friends.scheduleNow" })).toBeNull()
            expect(
                screen.getByRole("button", { name: /Test friend/ }),
            ).toBeInTheDocument()
        },
    )

    it("keeps a fresh icon visible while a background refresh is in flight", () => {
        testWindow.happyDOM.setViewport({ width: 1440, height: 844 })
        friendsResponse = {
            checkedAt: new Date().toISOString(),
            friends: [{ ...friend, hasScheduleNow: true }],
        }
        friendsQueryState.isFetching = true
        renderPage()
        expect(
            screen.getByRole("img", { name: "friends.scheduleNow" }),
        ).toBeInTheDocument()
    })

    it("expires a schedule icon after two minutes without a fresh response", () => {
        vi.useFakeTimers()
        testWindow.happyDOM.setViewport({ width: 1440, height: 844 })
        friendsResponse = {
            checkedAt: new Date().toISOString(),
            friends: [{ ...friend, hasScheduleNow: true }],
        }
        renderPage()
        expect(
            screen.getByRole("img", { name: "friends.scheduleNow" }),
        ).toBeInTheDocument()
        act(() => vi.advanceTimersByTime(120_000))
        expect(screen.queryByRole("img", { name: "friends.scheduleNow" })).toBeNull()
    })

    const latestListOptions = () =>
        vi
            .mocked(useAPI)
            .mock.calls.filter(([, path]) => path === "/friends")
            .at(-1)?.[2]

    it("keeps mobile initial loading enabled but refreshes only while the list is open", () => {
        renderPage()
        expect(latestListOptions()).toMatchObject({
            enabled: true,
            refetchInterval: false,
            refetchOnWindowFocus: false,
        })
        fireEvent(window, new Event("focus"))
        expect(refetchFriends).not.toHaveBeenCalled()

        fireEvent.click(screen.getByRole("button", { name: "friends.selectFriend" }))
        expect(refetchFriends).toHaveBeenCalledTimes(1)
        expect(latestListOptions()).toMatchObject({
            enabled: true,
            refetchInterval: 60_000,
            refetchOnWindowFocus: true,
        })
        fireEvent(window, new Event("focus"))
        expect(refetchFriends).toHaveBeenCalledTimes(2)

        fireEvent.click(screen.getByRole("button", { name: /Test friend/ }))
        expect(latestListOptions()).toMatchObject({ refetchInterval: false })
        fireEvent(window, new Event("focus"))
        expect(refetchFriends).toHaveBeenCalledTimes(2)
    })

    it("pauses desktop polling in a hidden tab and resumes when visible", () => {
        testWindow.happyDOM.setViewport({ width: 1440, height: 844 })
        const visibility = vi.spyOn(document, "visibilityState", "get")
        visibility.mockReturnValue("visible")
        renderPage()
        expect(latestListOptions()).toMatchObject({
            refetchInterval: 60_000,
            refetchOnWindowFocus: true,
        })
        visibility.mockReturnValue("hidden")
        fireEvent(document, new Event("visibilitychange"))
        expect(latestListOptions()).toMatchObject({ refetchInterval: false })
        fireEvent(window, new Event("focus"))
        expect(refetchFriends).not.toHaveBeenCalled()

        visibility.mockReturnValue("visible")
        fireEvent(document, new Event("visibilitychange"))
        expect(latestListOptions()).toMatchObject({ refetchInterval: 60_000 })
        fireEvent(window, new Event("focus"))
        expect(refetchFriends).toHaveBeenCalledTimes(1)
    })

    it("does not poll or refresh a logged-out friend's list", () => {
        authentication.status = "idle"
        testWindow.happyDOM.setViewport({ width: 1440, height: 844 })
        renderPage()
        expect(latestListOptions()).toMatchObject({
            enabled: false,
            refetchInterval: false,
        })
        fireEvent(window, new Event("focus"))
        expect(refetchFriends).not.toHaveBeenCalled()
    })

    it("opens friend selection, switches timetable and closes when selecting the same friend again", async () => {
        renderPage()
        fireEvent.click(screen.getByRole("button", { name: "friends.selectFriend" }))
        const list = screen.getByRole("dialog", { name: "friends.title" })
        fireEvent.click(within(list).getByRole("button", { name: /Test friend/ }))
        await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
        expect(screen.getByRole("tablist", { name: "Test friend" })).toBeInTheDocument()
        fireEvent.click(screen.getByRole("button", { name: "friends.selectFriend" }))
        fireEvent.click(
            within(screen.getByRole("dialog")).getByRole("button", {
                name: /Test friend/,
            }),
        )
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })

    it("shows classmates through the explicit lecture list without touching small timetable tiles", () => {
        renderPage()
        expect(screen.queryByTestId("overlap-detail")).not.toBeInTheDocument()
        fireEvent.click(screen.getByRole("button", { name: "friends.viewOverlaps" }))
        const dialog = screen.getByRole("dialog", { name: "friends.viewOverlaps" })
        fireEvent.click(
            within(dialog).getByRole("button", { name: "Fluid mechanics (A)" }),
        )
        expect(screen.getAllByTestId("overlap-detail")).toHaveLength(1)
        expect(within(dialog).getByTestId("overlap-detail")).toHaveTextContent(
            "Fluid mechanics",
        )
        expect(
            within(dialog).getByRole("button", { name: "friends.chooseAnotherLecture" }),
        ).toHaveFocus()
        fireEvent.click(
            within(dialog).getByRole("button", { name: "friends.chooseAnotherLecture" }),
        )
        expect(
            within(dialog).getByRole("button", { name: "Fluid mechanics (A)" }),
        ).toHaveFocus()
        fireEvent.click(
            within(dialog).getByRole("button", { name: "common.search.close" }),
        )
        expect(screen.queryByTestId("overlap-detail")).not.toBeInTheDocument()
    })

    it("still opens mobile detail on a lecture tile pointer interaction", () => {
        renderPage()
        fireEvent.pointerDown(
            screen.getByRole("button", { name: "Tile: Fluid mechanics" }),
            { pointerType: "touch" },
        )
        expect(
            within(screen.getByRole("dialog")).getByTestId("overlap-detail"),
        ).toHaveTextContent("Fluid mechanics")
    })

    it("opens a saved timetable deep link without replacing its older semester or selection", () => {
        renderPage("/friends?friendId=7&year=2025&semester=3&timetableId=42")

        expect(
            screen.getByRole("button", { name: "Tile: Saved fluid mechanics" }),
        ).toBeInTheDocument()
        expect(parameterSetters.get("/friends/7/timetables")).toHaveBeenLastCalledWith({
            year: 2025,
            semester: 3,
        })
        expect(vi.mocked(useAPI).mock.calls).toContainEqual([
            "GET",
            "/friends/7/timetables/42",
            expect.objectContaining({ enabled: true }),
        ])
        expect(currentParams().get("timetableId")).toBe("42")
        expect(currentParams().get("year")).toBe("2025")
    })

    it.each([390, 1440])(
        "marks exact shared lectures from all my saved and enrolled timetables in the seven-day friend grid at width %i",
        (width) => {
            testWindow.happyDOM.setViewport({ width, height: 844 })
            ownAllSavedResponse = [
                { id: 42, lectures: [{ id: 90 }] },
                { id: 43, lectures: [{ id: 2 }, { id: 6 }] },
                { id: 44, lectures: [{ id: 2 }] },
            ]
            ownActualResponse = {
                timetableItems: [
                    { kind: "lecture", data: { ...lecture, id: 3 } as Lecture },
                    { kind: "lecture", data: { ...lecture, id: 99 } as Lecture },
                    {
                        kind: "custom",
                        data: { id: 4, block_name: "My custom block" } as CustomBlock,
                    },
                ],
            }
            friendSavedResponse = {
                timetableItems: [
                    {
                        kind: "lecture",
                        data: { ...lecture, id: 2, name: "Saved only" } as Lecture,
                    },
                    {
                        kind: "lecture",
                        data: { ...lecture, id: 3, name: "Enrolled only" } as Lecture,
                    },
                    {
                        kind: "lecture",
                        data: {
                            ...lecture,
                            id: 4,
                            name: "Custom ID collision",
                        } as Lecture,
                    },
                    {
                        kind: "lecture",
                        data: { ...lecture, id: 5, classNo: "B" } as Lecture,
                    },
                    {
                        kind: "custom",
                        data: { id: 6, block_name: "Friend custom block" } as CustomBlock,
                    },
                    {
                        kind: "custom",
                        data: {
                            id: 2,
                            block_name: "Shared ID custom block",
                        } as CustomBlock,
                    },
                ],
            }

            renderPage("/friends?friendId=7&year=2025&semester=3&timetableId=42")

            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-overlapped-lectures",
                "2 3",
            )
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-displayed-days",
                "7",
            )
            expect(vi.mocked(useAPI).mock.calls).toContainEqual([
                "GET",
                "/users/1/timetables",
                expect.objectContaining({ enabled: true, apiPrefix: "/api" }),
            ])
            expect(vi.mocked(useAPI).mock.calls).toContainEqual([
                "GET",
                "/timetables/my-timetable",
                expect.objectContaining({ enabled: true }),
            ])
            for (const path of [
                "/users/1/timetables",
                "/timetables/my-timetable",
                "/friends/7/timetables",
                "/friends/7/timetables/my-timetable",
            ]) {
                expect(parameterSetters.get(path)).toHaveBeenLastCalledWith({
                    year: 2025,
                    semester: 3,
                })
            }
        },
    )

    it.each(["", "&timetableId=42"])(
        "does not mark my own timetable as shared or fetch all my saved timetables (%s)",
        (timetableParam) => {
            renderPage(`/friends?year=2026&semester=3${timetableParam}`)

            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-overlapped-lectures",
                "",
            )
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-displayed-days",
                "7",
            )
            expect(vi.mocked(useAPI).mock.calls).toContainEqual([
                "GET",
                "/users/1/timetables",
                expect.objectContaining({ enabled: false, apiPrefix: "/api" }),
            ])
        },
    )

    it.each([null, 7])(
        "uses one item response for lectures and read-only custom blocks (friend %s)",
        (friendId) => {
            renderPage(
                `/friends?year=2026&semester=3&timetableId=42${friendId ? `&friendId=${friendId}` : ""}`,
            )
            expect(screen.getByText("Club meeting")).toBeInTheDocument()
            expect(screen.queryByText(/Legacy lecture/)).not.toBeInTheDocument()
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-time-filter",
                "false",
            )
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-deletable",
                "false",
            )
            expect(
                vi
                    .mocked(useAPI)
                    .mock.calls.some(([, path]) => path.includes("custom-blocks")),
            ).toBe(false)

            fireEvent.click(screen.getByRole("button", { name: "friends.viewOverlaps" }))
            const dialog = screen.getByRole("dialog")
            expect(
                within(dialog).getByRole("button", { name: "Saved fluid mechanics (A)" }),
            ).toBeInTheDocument()
            expect(within(dialog).queryByText("Club meeting")).not.toBeInTheDocument()
        },
    )

    it.each([390, 1440])(
        "shows No Title for unnamed timetable tabs and custom block details at width %i",
        (width) => {
            testWindow.happyDOM.setViewport({ width, height: 844 })
            timetablesResponse = { timetables: [{ id: 42, name: "" }] }
            renderPage("/friends?friendId=7&year=2026&semester=3")

            fireEvent.click(screen.getByRole("tab", { name: "No Title" }))
            expect(currentParams().get("timetableId")).toBe("42")
            fireEvent.pointerDown(
                screen.getByRole("button", { name: "Custom tile: Club meeting" }),
            )
            expect(
                within(
                    screen.getByRole("region", { name: "friends.customBlockDetail" }),
                ).getByText("No Title"),
            ).toBeInTheDocument()
        },
    )

    it.each([390, 1440])(
        "opens read-only custom block details and switches back to a lecture at width %i",
        (width) => {
            testWindow.happyDOM.setViewport({ width, height: 844 })
            renderPage("/friends?friendId=7&year=2026&semester=3&timetableId=42")
            fireEvent.pointerDown(
                screen.getByRole("button", { name: "Custom tile: Club meeting" }),
            )
            const detail = screen.getByRole("region", {
                name: "friends.customBlockDetail",
            })
            expect(within(detail).getByText("Club meeting")).toBeInTheDocument()
            expect(within(detail).getByText("Saved timetable")).toBeInTheDocument()
            expect(within(detail).getByText("Student center")).toBeInTheDocument()
            expect(within(detail).getByText(/10:00/)).toBeInTheDocument()
            expect(within(detail).getByText(/02:00/)).toBeInTheDocument()
            expect(within(detail).queryByRole("textbox")).not.toBeInTheDocument()
            expect(
                within(detail).queryByText("timetable.customBlock.save"),
            ).not.toBeInTheDocument()
            expect(within(detail).queryByLabelText(/Delete/)).not.toBeInTheDocument()
            expect(
                within(detail).queryByRole("button", { name: "common.search.reset" }),
            ).not.toBeInTheDocument()
            expect(screen.queryByTestId("overlap-detail")).not.toBeInTheDocument()
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-selected-custom-block",
                "1",
            )
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-selected-lectures",
                "",
            )
            expect(
                vi
                    .mocked(useAPI)
                    .mock.calls.some(([, path]) => path.includes("custom-blocks")),
            ).toBe(false)

            if (width === 390) {
                expect(
                    screen.getByRole("dialog", { name: "friends.customBlockDetail" }),
                ).toContainElement(detail)
                fireEvent.click(
                    screen.getByRole("button", { name: "common.search.close" }),
                )
            }
            fireEvent.pointerDown(
                screen.getByRole("button", { name: "Tile: Saved fluid mechanics" }),
            )
            expect(
                screen.queryByRole("region", { name: "friends.customBlockDetail" }),
            ).not.toBeInTheDocument()
            expect(screen.getByTestId("overlap-detail")).toHaveTextContent(
                "Saved fluid mechanics",
            )
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-selected-custom-block",
                "",
            )
            expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
                "data-selected-lectures",
                "1",
            )
        },
    )

    it("clears block details and tile selection when closing the desktop detail or changing timetable", () => {
        testWindow.happyDOM.setViewport({ width: 1440, height: 844 })
        renderPage("/friends?friendId=7&year=2026&semester=3&timetableId=42")
        const tile = screen.getByRole("button", { name: "Custom tile: Club meeting" })
        fireEvent.pointerDown(tile)
        fireEvent.click(
            within(screen.getByRole("region")).getByRole("button", {
                name: "common.search.close",
            }),
        )
        expect(
            screen.queryByRole("region", { name: "friends.customBlockDetail" }),
        ).not.toBeInTheDocument()
        expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
            "data-selected-custom-block",
            "",
        )

        fireEvent.pointerDown(tile)
        fireEvent.click(screen.getByRole("tab", { name: "Earlier timetable" }))
        expect(
            screen.queryByRole("region", { name: "friends.customBlockDetail" }),
        ).not.toBeInTheDocument()
        expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
            "data-selected-custom-block",
            "",
        )
    })

    it("opens the lecture picker from the mobile classmates action after viewing a custom block", () => {
        renderPage("/friends?friendId=7&year=2026&semester=3&timetableId=42")
        fireEvent.pointerDown(
            screen.getByRole("button", { name: "Custom tile: Club meeting" }),
        )
        fireEvent.click(screen.getByRole("button", { name: "common.search.close" }))
        fireEvent.click(screen.getByRole("button", { name: "friends.viewOverlaps" }))
        const dialog = screen.getByRole("dialog", { name: "friends.viewOverlaps" })
        expect(
            within(dialog).getByRole("button", { name: "Saved fluid mechanics (A)" }),
        ).toBeInTheDocument()
        expect(within(dialog).queryByRole("region")).not.toBeInTheDocument()
        expect(screen.getByTestId("timetable-grid")).toHaveAttribute(
            "data-selected-custom-block",
            "",
        )
    })

    it("opens an official timetable at the linked past semester", () => {
        renderPage("/friends?friendId=7&year=2025&semester=1")

        expect(
            screen.getByRole("button", { name: "Tile: Fluid mechanics" }),
        ).toBeInTheDocument()
        expect(
            parameterSetters.get("/friends/7/timetables/my-timetable"),
        ).toHaveBeenLastCalledWith({
            year: 2025,
            semester: 1,
        })
        expect(currentParams().has("timetableId")).toBe(false)
        expect(currentParams().get("year")).toBe("2025")
    })

    it("closes mobile detail on a same-friend overlap link and restores the previous target on back", async () => {
        renderPage("/friends?friendId=7&year=2025&semester=3&timetableId=42")
        fireEvent.pointerDown(
            screen.getByRole("button", { name: "Tile: Saved fluid mechanics" }),
        )
        fireEvent.click(
            within(screen.getByRole("dialog")).getByRole("link", {
                name: "Matched friend timetable",
            }),
        )

        await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
        expect(
            screen.getByRole("button", { name: "Tile: Earlier fluid mechanics" }),
        ).toBeInTheDocument()
        expect(parameterSetters.get("/friends/7/timetables")).toHaveBeenLastCalledWith({
            year: 2024,
            semester: 3,
        })
        expect(currentParams().get("timetableId")).toBe("43")

        fireEvent.click(screen.getByRole("button", { name: "Browser back" }))
        expect(
            screen.getByRole("button", { name: "Tile: Saved fluid mechanics" }),
        ).toBeInTheDocument()
        expect(currentParams().get("year")).toBe("2025")
        expect(currentParams().get("timetableId")).toBe("42")
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })

    it("keeps manual timetable and semester selection in the URL", () => {
        renderPage("/friends?friendId=7&year=2025&semester=3")
        fireEvent.click(screen.getByRole("tab", { name: "Saved timetable" }))
        expect(currentParams().get("timetableId")).toBe("42")
        expect(screen.getByRole("tab", { name: "Saved timetable" })).toHaveAttribute(
            "aria-selected",
            "true",
        )

        fireEvent.click(screen.getByRole("tab", { name: "friends.actualTimetable" }))
        expect(currentParams().has("timetableId")).toBe(false)
        expect(currentParams().get("friendId")).toBe("7")
        expect(
            screen.getByRole("tab", { name: "friends.actualTimetable" }),
        ).toHaveAttribute("aria-selected", "true")

        fireEvent.click(screen.getByRole("tab", { name: "Saved timetable" }))
        fireEvent.click(screen.getByRole("button", { name: "friends.previousSemester" }))
        expect(currentParams().get("year")).toBe("2025")
        expect(currentParams().get("semester")).toBe("1")
        expect(currentParams().has("timetableId")).toBe(false)
        expect(parameterSetters.get("/users/1/timetables")).toHaveBeenLastCalledWith({
            year: 2025,
            semester: 1,
        })
        expect(parameterSetters.get("/timetables/my-timetable")).toHaveBeenLastCalledWith(
            {
                year: 2025,
                semester: 1,
            },
        )
        expect(
            screen.getByRole("button", { name: "Tile: Fluid mechanics" }),
        ).toBeInTheDocument()
    })

    it("closes mobile detail even when an overlap points to the currently open timetable", () => {
        renderPage("/friends?friendId=7&year=2024&semester=3&timetableId=43")
        fireEvent.pointerDown(
            screen.getByRole("button", { name: "Tile: Earlier fluid mechanics" }),
        )
        fireEvent.click(
            within(screen.getByRole("dialog")).getByRole("link", {
                name: "Matched friend timetable",
            }),
        )

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
        expect(currentParams().get("timetableId")).toBe("43")
        expect(currentParams().get("year")).toBe("2024")
        expect(
            screen.getByRole("button", { name: "Tile: Earlier fluid mechanics" }),
        ).toBeInTheDocument()
    })

    it("falls back to the latest official timetable for invalid link parameters", () => {
        renderPage("/friends?friendId=-7&year=invalid&semester=9&timetableId=-42")

        expect(parameterSetters.get("/timetables/my-timetable")).toHaveBeenLastCalledWith(
            {
                year: 2026,
                semester: 3,
            },
        )
        expect(
            screen.getByRole("button", { name: "Tile: Fluid mechanics" }),
        ).toBeInTheDocument()
        expect(
            vi
                .mocked(useAPI)
                .mock.calls.some(
                    ([, path, options]) => path === "/timetables/-42" && options?.enabled,
                ),
        ).toBe(false)
    })
})
