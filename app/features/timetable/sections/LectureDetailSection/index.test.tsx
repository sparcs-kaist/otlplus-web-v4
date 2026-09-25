import { MemoryRouter } from "react-router"
import { afterEach, expect, it, vi } from "vitest"

import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { fireEvent, render, screen } from "@/test/test-utils"
import useIsDevice from "@/utils/useIsDevice"

import LectureDetailSection from "."

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => (key === "timetable.numSelected" ? "개 과목 선택됨" : key),
    }),
}))
vi.mock("@/utils/api/useAPI", () => ({
    useAPI: () => ({ query: {}, setParams: vi.fn(), requestFunction: vi.fn() }),
}))
vi.mock("@/utils/useIsDevice", () => ({ default: vi.fn(() => false) }))
vi.mock("@/libs/mixpanel", () => ({ trackEvent: vi.fn() }))
vi.mock("./LectureInfoSubsection", () => ({
    default: () => <div>Lecture details</div>,
}))
vi.mock("./LectureReviewSubsection", () => ({ default: () => null }))

const lecture = {
    id: 11,
    courseId: 3,
    name: "Calculus",
    subtitle: "I",
    code: "MAS101",
    classNo: "A",
    professors: [{ id: 1, name: "Prof Kim" }],
    department: { name: "Mathematics" },
    credit: 3,
} as Lecture
const custom: TimetableItem = {
    kind: "custom",
    data: {
        id: 11,
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

afterEach(() => {
    vi.mocked(useIsDevice).mockReturnValue(false)
    useTimetableUIStore.setState(useTimetableUIStore.getInitialState())
})

function renderSelection(
    selectedItems: TimetableItem[],
    hoveredLectures: Lecture[] = [],
    onMobileModalClose?: () => void,
) {
    useTimetableUIStore.setState({ selectedItems, hoveredLectures })
    return render(
        <MemoryRouter>
            <LectureDetailSection
                addLectures={vi.fn()}
                timetableLectures={[]}
                onMobileModalClose={onMobileModalClose}
            />
        </MemoryRouter>,
    )
}

it("shows a lecture and custom block with the same ID as two selected items", () => {
    renderSelection([{ kind: "lecture", data: lecture }, custom])
    expect(screen.getByText("2개 과목 선택됨")).toBeInTheDocument()
    expect(screen.getByText("Calculus I")).toBeInTheDocument()
    expect(screen.getByText(/Prof Kim.*Mathematics/)).toBeInTheDocument()
    expect(screen.getByText("Study")).toBeInTheDocument()
    expect(screen.getByText("Library")).toBeInTheDocument()
    expect(screen.queryByText("Lecture details")).not.toBeInTheDocument()
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
})

it("keeps a single selected custom block visible instead of a hovered lecture", () => {
    renderSelection([custom], [lecture])
    expect(screen.getByText("1개 과목 선택됨")).toBeInTheDocument()
    expect(screen.getByText("Study")).toBeInTheDocument()
    expect(screen.getByText("Library")).toBeInTheDocument()
    expect(screen.queryByText("Lecture details")).not.toBeInTheDocument()
    expect(screen.queryByText(/Calculus/)).not.toBeInTheDocument()
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
        expect(screen.getByText("Lecture details")).toBeInTheDocument()
        expect(screen.queryByText(/개 과목 선택됨/)).not.toBeInTheDocument()
    },
)
