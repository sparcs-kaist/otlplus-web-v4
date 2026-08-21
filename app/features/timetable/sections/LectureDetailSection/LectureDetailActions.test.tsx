import { afterEach, describe, expect, it, vi } from "vitest"

import type { Lecture } from "@/common/schemas/lecture"
import { fireEvent, render, screen } from "@/test/test-utils"

import LectureDetailActions from "./LectureDetailActions"

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

vi.mock("@/libs/mixpanel", () => ({ trackEvent: vi.fn() }))

const lecture: Lecture = {
    id: 1,
    courseId: 10,
    classNo: "A",
    name: "Algorithms",
    subtitle: "",
    code: "CS300",
    department: { id: 1, name: "Computer Science" },
    type: "Major",
    limitPeople: 100,
    numPeople: 20,
    classDuration: 3,
    expDuration: 0,
    credit: 3,
    creditAU: 0,
    averageGrade: 10,
    averageLoad: 10,
    averageSpeech: 10,
    isEnglish: false,
    professors: [],
    classes: [],
    examTimes: [],
}

const defaultProps = {
    lecture,
    onAdd: vi.fn(),
    onClose: vi.fn(),
    onRemove: vi.fn(),
    onToggleWishlist: vi.fn(),
    timetableLectures: [],
    wishListIds: [],
} as const

afterEach(() => {
    vi.restoreAllMocks()
})

describe("LectureDetailActions", () => {
    it("explains why a lecture cannot be added from My Timetable", () => {
        const alert = vi.fn()
        const onAdd = vi.fn()
        const onClose = vi.fn()
        vi.stubGlobal("alert", alert)

        render(
            <LectureDetailActions
                {...defaultProps}
                currentTimetableId={null}
                onAdd={onAdd}
                onClose={onClose}
                status="success"
            />,
        )

        const addButton = screen.getByRole("button", {
            name: "timetable.addToTimetable",
        })
        expect(addButton).toHaveAttribute("aria-disabled", "true")
        fireEvent.click(addButton)

        expect(alert).toHaveBeenCalledWith("timetable.myTimeTableLectureAddWarning")
        expect(onAdd).not.toHaveBeenCalled()
        expect(onClose).not.toHaveBeenCalled()
    })

    it("hides timetable actions for lectures in read-only My Timetable", () => {
        render(
            <LectureDetailActions
                {...defaultProps}
                currentTimetableId={null}
                onRemove={undefined}
                status="success"
                timetableLectures={[lecture]}
            />,
        )

        expect(
            screen.queryByRole("button", { name: "timetable.removeFromTimetable" }),
        ).not.toBeInTheDocument()
        expect(
            screen.queryByRole("button", { name: "timetable.addToTimetable" }),
        ).not.toBeInTheDocument()
    })

    it("adds locally for anonymous users and closes after success", () => {
        const onAdd = vi.fn()
        const onClose = vi.fn()

        render(
            <LectureDetailActions
                {...defaultProps}
                currentTimetableId={null}
                onAdd={onAdd}
                onClose={onClose}
                status="idle"
            />,
        )

        fireEvent.click(screen.getByRole("button", { name: "timetable.addToTimetable" }))

        expect(onAdd).toHaveBeenCalledWith(lecture)
        expect(onClose).toHaveBeenCalledOnce()
    })
})
