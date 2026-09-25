import type { Window as HappyDOMWindow } from "happy-dom"
import { Link, MemoryRouter, useLocation, useNavigate } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { Lecture } from "@/common/schemas/lecture"
import FriendsPage from "@/routes/friends"
import { fireEvent, render, screen, waitFor, within } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("@/utils/zustand/useUserStore", () => ({
    default: () => ({ status: "success", user: { name: "Me" } }),
}))
vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))
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
        lectures,
        onLectureSelect,
    }: {
        lectures: Lecture[]
        onLectureSelect: (lecture: Lecture) => void
    }) => (
        <div>
            {lectures.map((lecture) => (
                <button
                    key={lecture.id}
                    type="button"
                    onPointerDown={() => onLectureSelect(lecture)}
                >
                    Tile: {lecture.name}
                </button>
            ))}
        </div>
    ),
}))

const lecture = { id: 1, name: "Fluid mechanics", subtitle: "", classNo: "A" }
const friends = { friends: [{ id: 7, name: "Test friend", isFavorite: false }] }
const lectures = { lectures: [lecture] }
const timetables = {
    timetables: [
        { id: 42, name: "Saved timetable" },
        { id: 43, name: "Earlier timetable" },
    ],
}
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
    lectures: [{ ...lecture, name: "Saved fluid mechanics" }],
}
const earlierLectures = {
    lectures: [{ ...lecture, name: "Earlier fluid mechanics" }],
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
        parameterSetters.clear()
        testWindow.happyDOM.setViewport({ width: 390, height: 844 })
        vi.mocked(useAPI).mockImplementation((_method, path) => {
            if (!parameterSetters.has(path)) parameterSetters.set(path, vi.fn())
            return {
                query: {
                    data:
                        path === "/friends"
                            ? friends
                            : path === "/semesters"
                              ? semesters
                              : path.endsWith("my-timetable")
                                ? lectures
                                : path.endsWith("/42")
                                  ? savedLectures
                                  : path.endsWith("/43")
                                    ? earlierLectures
                                    : timetables,
                    isSuccess: true,
                    isFetching: false,
                    isPending: false,
                    isError: false,
                },
                mutation: { isPending: false, isError: false },
                setParams: parameterSetters.get(path),
                requestFunction: vi.fn(),
            } as unknown as ReturnType<typeof useAPI>
        })
    })

    afterEach(() => testWindow.happyDOM.setViewport(originalViewport))

    it("opens friend selection, switches timetable and closes when selecting the same friend again", async () => {
        renderPage()
        fireEvent.click(screen.getByRole("button", { name: "friends.selectFriend" }))
        const list = screen.getByRole("dialog", { name: "friends.title" })
        fireEvent.click(within(list).getByRole("button", { name: /Test friend/ }))
        await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
        expect(screen.getByText("Test friend")).toBeInTheDocument()
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
        fireEvent.click(screen.getByText("Saved timetable"))
        expect(currentParams().get("timetableId")).toBe("42")

        fireEvent.click(screen.getByText("friends.actualTimetable"))
        expect(currentParams().has("timetableId")).toBe(false)
        expect(currentParams().get("friendId")).toBe("7")

        fireEvent.click(screen.getByText("Saved timetable"))
        fireEvent.click(screen.getByTestId("NavigateBeforeIcon").closest("button")!)
        expect(currentParams().get("year")).toBe("2025")
        expect(currentParams().get("semester")).toBe("1")
        expect(currentParams().has("timetableId")).toBe(false)
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
