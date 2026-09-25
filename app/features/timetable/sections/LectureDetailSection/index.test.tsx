import { MemoryRouter } from "react-router"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { act, fireEvent, render, screen } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import LectureDetailSection from "."

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("@/utils/useIsDevice", () => ({ default: vi.fn() }))
vi.mock("@/libs/mixpanel", () => ({ trackEvent: vi.fn() }))
vi.mock("@/common/components/timetable/Tile", () => ({
    flattenTimeTableColors: () => ["#fff"],
}))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => (key === "timetable.numSelected" ? "개 과목 선택됨" : key),
    }),
}))
vi.mock("./LectureInfoSubsection", () => ({
    default: () => <div>lecture information</div>,
}))
vi.mock("./LectureReviewSubsection", () => ({
    default: () => <div>lecture reviews</div>,
}))
vi.mock("@/common/components/Credits", () => ({
    default: () => <div>credits</div>,
}))

const lecture: Lecture = {
    id: 101,
    courseId: 1,
    name: "Calculus",
    subtitle: "I",
    code: "CS101",
    classNo: "A",
    department: { id: 1, name: "Mathematics" },
    professors: [{ id: 1, name: "Prof Kim" }],
    type: "Major Required",
    limitPeople: 30,
    numPeople: 20,
    classDuration: 3,
    expDuration: 0,
    credit: 3,
    creditAU: 0,
    averageGrade: 0,
    averageLoad: 0,
    averageSpeech: 0,
    isEnglish: true,
    classes: [],
    examTimes: [],
}
const otherLecture = { ...lecture, id: 202, name: "Other lecture" }
const custom: TimetableItem = {
    kind: "custom",
    data: {
        id: lecture.id,
        block_name: "Study",
        place: "Library",
        day: 0,
        begin: 540,
        end: 600,
        times: [
            { day: 0, begin: 540, end: 600 },
            { day: 2, begin: 540, end: 600 },
        ],
    },
}

const overlapCalls = () =>
    vi.mocked(useAPI).mock.calls.filter(([, path]) => path.startsWith("/friends/"))

beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useIsDevice).mockReturnValue(false)
    useUserStore.setState({ user: { id: 7, name: "Viewer" }, status: "success" })
    useTimetableUIStore.setState({
        selectedItems: [{ kind: "lecture", data: lecture }],
        hoveredLectures: [],
        year: 2026,
    })
    const wishlist = { courses: [] }
    vi.mocked(useAPI).mockImplementation((_, path) => {
        const lectureId = path.match(/^\/friends\/lectures\/(\d+)\/overlaps$/)?.[1]
        return {
            query: {
                isPending: false,
                isError: false,
                data: lectureId
                    ? {
                          sameLecture: [{ id: 11, name: `Same section ${lectureId}` }],
                          sameCourseDifferentSection: [
                              { id: 12, name: "Different section" },
                          ],
                          previousSemesterSameProfessor: [
                              { id: 13, name: "Previous semester" },
                          ],
                      }
                    : wishlist,
            },
            setParams: vi.fn(),
            requestFunction: vi.fn(),
        } as unknown as ReturnType<typeof useAPI>
    })
})

afterEach(() => {
    vi.mocked(useIsDevice).mockReturnValue(false)
    useTimetableUIStore.setState(useTimetableUIStore.getInitialState())
    useUserStore.setState(useUserStore.getInitialState())
})

function renderDetail(props = {}) {
    return render(
        <MemoryRouter>
            <LectureDetailSection
                addLectures={vi.fn()}
                currentTimetableId={42}
                timetableLectures={[]}
                {...props}
            />
        </MemoryRouter>,
    )
}

function renderSelection(
    selectedItems: TimetableItem[],
    hoveredLectures: Lecture[] = [],
    onMobileModalClose?: () => void,
) {
    useTimetableUIStore.setState({ selectedItems, hoveredLectures })
    return renderDetail({ onMobileModalClose })
}

it("shows a lecture and custom block with the same ID as two selected items", () => {
    renderSelection([{ kind: "lecture", data: lecture }, custom])
    expect(screen.getByText("2개 과목 선택됨")).toBeInTheDocument()
    expect(screen.getByText("Calculus I")).toBeInTheDocument()
    expect(screen.getByText(/Prof Kim.*Mathematics/)).toBeInTheDocument()
    expect(screen.getByText("Study")).toBeInTheDocument()
    expect(screen.getByText("Library")).toBeInTheDocument()
    expect(screen.queryByText("lecture information")).not.toBeInTheDocument()
    expect(overlapCalls()).toHaveLength(0)
})

it("counts selected custom blocks rather than their time slots", () => {
    renderSelection([
        custom,
        {
            kind: "custom",
            data: { ...custom.data, id: 12, block_name: "Exercise", place: "Gym" },
        },
    ])
    expect(screen.getByText("2개 과목 선택됨")).toBeInTheDocument()
    expect(screen.getAllByText("Study")).toHaveLength(1)
    expect(screen.getByText("Exercise")).toBeInTheDocument()
    expect(screen.getByText("Gym")).toBeInTheDocument()
    expect(overlapCalls()).toHaveLength(0)
})

it("keeps a single selected custom block visible instead of a hovered lecture", () => {
    renderSelection([custom], [lecture])
    expect(screen.getByText("1개 과목 선택됨")).toBeInTheDocument()
    expect(screen.getByText("Study")).toBeInTheDocument()
    expect(screen.getByText("Library")).toBeInTheDocument()
    expect(screen.queryByText("lecture information")).not.toBeInTheDocument()
    expect(screen.queryByText(/Calculus/)).not.toBeInTheDocument()
    expect(overlapCalls()).toHaveLength(0)
})

it("lets mobile users close the selected items list", () => {
    vi.mocked(useIsDevice).mockReturnValue(true)
    const onClose = vi.fn()
    renderSelection([custom], [], onClose)
    fireEvent.click(screen.getByRole("button", { name: "Close selected items" }))
    expect(onClose).toHaveBeenCalledOnce()
})

it.each(["selected", "hovered"] as const)(
    "preserves a single %s lecture detail",
    (mode) => {
        renderSelection(
            mode === "selected" ? [{ kind: "lecture", data: lecture }] : [],
            mode === "hovered" ? [lecture] : [],
        )
        expect(screen.getByText("lecture information")).toBeInTheDocument()
        expect(screen.queryByText(/개 과목 선택됨/)).not.toBeInTheDocument()
    },
)

describe("timetable lecture friend overlaps", () => {
    it.each([false, true])(
        "shows all friend groups for a selected lecture (mobile: %s)",
        (mobile) => {
            vi.mocked(useIsDevice).mockReturnValue(mobile)
            renderDetail()

            expect(overlapCalls()).toContainEqual([
                "GET",
                "/friends/lectures/101/overlaps",
                expect.any(Object),
            ])
            expect(screen.getByText("Same section 101")).toBeInTheDocument()
            expect(screen.getByText("Different section")).toBeInTheDocument()
            expect(screen.getByText("Previous semester")).toBeInTheDocument()
            for (const title of [
                "friends.sameLecture",
                "friends.sameCourseDifferentSection",
                "friends.previousSemesterSameProfessor",
            ]) {
                const group = screen.getByText(title)
                expect(
                    screen
                        .getByText("lecture information")
                        .compareDocumentPosition(group) &
                        Node.DOCUMENT_POSITION_FOLLOWING,
                ).toBeTruthy()
                expect(
                    group.compareDocumentPosition(screen.getByText("lecture reviews")) &
                        Node.DOCUMENT_POSITION_FOLLOWING,
                ).toBeTruthy()
            }
        },
    )

    it.each([
        { name: "hover only", selected: [], hovered: [lecture], status: "success" },
        {
            name: "multiple selection",
            selected: [lecture, otherLecture],
            hovered: [lecture],
            status: "success",
        },
        { name: "empty selection", selected: [], hovered: [], status: "success" },
        { name: "logged out", selected: [lecture], hovered: [], status: "idle" },
        { name: "auth loading", selected: [lecture], hovered: [], status: "loading" },
    ] as const)(
        "does not request or show overlaps for $name",
        ({ selected, hovered, status }) => {
            useTimetableUIStore.setState({
                selectedItems: selected.map((data) => ({ kind: "lecture", data })),
                hoveredLectures: [...hovered],
            })
            useUserStore.setState({ status })
            renderDetail()

            expect(overlapCalls()).toHaveLength(0)
            expect(screen.queryByText("friends.sameLecture")).not.toBeInTheDocument()
            expect(screen.queryByText("Same section 101")).not.toBeInTheDocument()
        },
    )

    it("changes the lookup with the selected lecture and removes it for hover-only previews", () => {
        renderDetail()
        act(() =>
            useTimetableUIStore.setState({
                selectedItems: [{ kind: "lecture", data: otherLecture }],
            }),
        )

        expect(overlapCalls().at(-1)?.[1]).toBe("/friends/lectures/202/overlaps")
        expect(screen.getByText("Same section 202")).toBeInTheDocument()
        expect(screen.queryByText("Same section 101")).not.toBeInTheDocument()

        vi.mocked(useAPI).mockClear()
        act(() =>
            useTimetableUIStore.setState({
                selectedItems: [],
                hoveredLectures: [lecture],
            }),
        )
        expect(overlapCalls()).toHaveLength(0)
        expect(screen.queryByText("friends.sameLecture")).not.toBeInTheDocument()
    })

    it("shows overlaps after login and removes them when the user logs out", () => {
        useUserStore.setState({ user: null, status: "idle" })
        renderDetail()
        expect(overlapCalls()).toHaveLength(0)

        act(() => useUserStore.getState().setUser({ id: 7, name: "Viewer" }))
        expect(screen.getByText("Same section 101")).toBeInTheDocument()

        vi.mocked(useAPI).mockClear()
        act(() => useUserStore.getState().clearUser())
        expect(overlapCalls()).toHaveLength(0)
        expect(screen.queryByText("friends.sameLecture")).not.toBeInTheDocument()
    })

    it.each([false, true])(
        "preserves the mobile timetable action (already added: %s)",
        (alreadyAdded) => {
            vi.mocked(useIsDevice).mockReturnValue(true)
            const addLectures = vi.fn()
            const removeLectures = vi.fn()
            const onMobileModalClose = vi.fn()
            renderDetail({
                addLectures,
                removeLectures,
                onMobileModalClose,
                timetableLectures: alreadyAdded ? [lecture] : [],
            })

            expect(screen.getByText("Same section 101")).toBeInTheDocument()
            expect(screen.getByText("timetable.addToWishlist")).toBeInTheDocument()
            fireEvent.click(
                screen.getByText(
                    alreadyAdded
                        ? "timetable.removeFromTimetable"
                        : "timetable.addToTimetable",
                ),
            )

            if (alreadyAdded) {
                expect(removeLectures).toHaveBeenCalledWith(lecture.id)
                expect(addLectures).not.toHaveBeenCalled()
            } else {
                expect(addLectures).toHaveBeenCalledWith([lecture])
                expect(removeLectures).not.toHaveBeenCalled()
            }
            expect(onMobileModalClose).toHaveBeenCalledOnce()
        },
    )
})
