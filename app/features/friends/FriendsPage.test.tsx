import type { Window as HappyDOMWindow } from "happy-dom"
import { MemoryRouter } from "react-router-dom"
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
        <div data-testid="overlap-detail">{lecture?.name}</div>
    ),
}))
vi.mock("@/features/timetable/sections/TabsRowSubSection/SemesterButton", () => ({
    default: () => <span>2026 Fall</span>,
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
const timetables = { timetables: [] }
const testWindow = window as unknown as HappyDOMWindow
const originalViewport = { width: window.innerWidth, height: window.innerHeight }

describe("mobile friend timetable navigation", () => {
    beforeEach(() => {
        testWindow.happyDOM.setViewport({ width: 390, height: 844 })
        vi.mocked(useAPI).mockImplementation(
            (_method, path) =>
                ({
                    query: {
                        data:
                            path === "/friends"
                                ? friends
                                : path.endsWith("my-timetable")
                                  ? lectures
                                  : timetables,
                        isSuccess: true,
                        isFetching: false,
                        isPending: false,
                        isError: false,
                    },
                    mutation: { isPending: false, isError: false },
                    setParams: vi.fn(),
                    requestFunction: vi.fn(),
                }) as unknown as ReturnType<typeof useAPI>,
        )
    })

    afterEach(() => testWindow.happyDOM.setViewport(originalViewport))

    it("opens friend selection, switches timetable and closes when selecting the same friend again", async () => {
        render(
            <MemoryRouter>
                <FriendsPage />
            </MemoryRouter>,
        )
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
        render(
            <MemoryRouter>
                <FriendsPage />
            </MemoryRouter>,
        )
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
        render(
            <MemoryRouter>
                <FriendsPage />
            </MemoryRouter>,
        )
        fireEvent.pointerDown(
            screen.getByRole("button", { name: "Tile: Fluid mechanics" }),
            { pointerType: "touch" },
        )
        expect(
            within(screen.getByRole("dialog")).getByTestId("overlap-detail"),
        ).toHaveTextContent("Fluid mechanics")
    })
})
