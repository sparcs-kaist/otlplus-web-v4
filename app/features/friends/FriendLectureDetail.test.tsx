import { MemoryRouter } from "react-router-dom"
import { beforeEach, describe, expect, it, vi } from "vitest"

import type { Lecture } from "@/common/schemas/lecture"
import { render, screen } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"

import FriendLectureDetail from "./FriendLectureDetail"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))
vi.mock(
    "@/features/timetable/sections/LectureDetailSection/LectureInfoSubsection",
    () => ({
        default: () => <div>lecture information</div>,
    }),
)

const lecture = {
    id: 1,
    courseId: 1,
    name: "Test lecture",
    subtitle: "",
    code: "CS101",
    classNo: "A",
} as Lecture

describe("friend lecture details", () => {
    const query = {
        isPending: false,
        isError: false,
        data: {
            sameLecture: [{ id: 2, name: "Test friend", isFavorite: false }],
            sameCourseDifferentSection: [],
            previousSemesterSameProfessor: [],
        },
    }

    beforeEach(() => {
        query.isPending = false
        query.isError = false
        vi.mocked(useAPI).mockReturnValue({ query } as unknown as ReturnType<
            typeof useAPI
        >)
    })

    const renderDetail = () =>
        render(
            <MemoryRouter>
                <FriendLectureDetail lecture={lecture} />
            </MemoryRouter>,
        )

    it("shows each overlap group before the verbose lecture information", () => {
        renderDetail()

        expect(screen.getByText("Test friend")).toBeInTheDocument()
        for (const group of [
            "friends.sameLecture",
            "friends.sameCourseDifferentSection",
            "friends.previousSemesterSameProfessor",
        ]) {
            expect(
                screen
                    .getByText(group)
                    .compareDocumentPosition(screen.getByText("lecture information")) &
                    Node.DOCUMENT_POSITION_FOLLOWING,
            ).toBeTruthy()
        }
    })

    it("shows loading instead of empty or stale friend groups while pending", () => {
        query.isPending = true
        renderDetail()

        expect(screen.getByRole("status")).toHaveTextContent("friends.loadingOverlaps")
        expect(screen.queryByText("friends.nobody")).not.toBeInTheDocument()
        expect(screen.queryByText("Test friend")).not.toBeInTheDocument()
    })

    it("shows an error without claiming there are no friends", () => {
        query.isError = true
        renderDetail()

        expect(screen.getByRole("alert")).toHaveTextContent("friends.loadError")
        expect(screen.queryByText("friends.nobody")).not.toBeInTheDocument()
        expect(screen.queryByText("Test friend")).not.toBeInTheDocument()
    })
})
