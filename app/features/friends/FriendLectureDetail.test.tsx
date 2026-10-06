import { MemoryRouter, useLocation } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { OverlapFriend } from "@/common/schemas/friend"
import type { Lecture } from "@/common/schemas/lecture"
import LectureInfoSubsection from "@/features/timetable/sections/LectureDetailSection/LectureInfoSubsection"
import { act, fireEvent, render, screen } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

import FriendLectureDetail from "./FriendLectureDetail"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("@/utils/api/useInfiniteAPI", () => ({ useInfiniteAPI: vi.fn() }))
vi.mock("react-router", async (importOriginal) => ({
    ...(await importOriginal<typeof import("react-router")>()),
    useNavigate: (await import("react-router-dom")).useNavigate,
}))
vi.mock("react-intersection-observer", () => ({
    useInView: () => ({ ref: vi.fn(), inView: false }),
}))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))
const lecture: Lecture = {
    id: 1,
    courseId: 1,
    name: "Test lecture",
    subtitle: "",
    code: "CS101",
    classNo: "A",
    department: { id: 1, name: "Computer Science" },
    professors: [{ id: 17, name: "Professor Kim" }],
    type: "Major Required",
    limitPeople: 40,
    numPeople: 20,
    classDuration: 3,
    expDuration: 1,
    credit: 3,
    creditAU: 0,
    averageGrade: 4.5,
    averageLoad: 3,
    averageSpeech: 2,
    isEnglish: true,
    classes: [],
    examTimes: [],
}

const setReviewParams = vi.fn()

function LocationProbe() {
    const location = useLocation()
    return <div data-testid="location">{location.pathname + location.search}</div>
}

describe("friend lecture details", () => {
    const query = {
        isPending: false,
        isError: false,
        data: {
            sameLecture: [
                {
                    id: 2,
                    name: "Test friend",
                    isFavorite: false,
                    timetable: { id: 42, year: 2025, semester: 3 },
                },
            ],
            sameCourseDifferentSection: [] as OverlapFriend[],
            previousSemesterSameProfessor: [] as OverlapFriend[],
        },
    }

    beforeEach(() => {
        vi.useFakeTimers()
        vi.clearAllMocks()
        query.isPending = false
        query.isError = false
        query.data.sameCourseDifferentSection = []
        query.data.previousSemesterSameProfessor = []
        vi.mocked(useAPI).mockImplementation(
            (_method, path) =>
                ({
                    query: path.includes("/overlaps") ? query : { data: undefined },
                    requestFunction: vi.fn(),
                }) as unknown as ReturnType<typeof useAPI>,
        )
        vi.mocked(useInfiniteAPI).mockReturnValue({
            query: { hasNextPage: false },
            setParams: setReviewParams,
            data: {
                averageGrade: 4.5,
                averageLoad: 3,
                averageSpeech: 2,
                reviews: [
                    {
                        id: 8,
                        courseId: 1,
                        courseName: "Test lecture",
                        lectureId: 1,
                        professors: lecture.professors,
                        year: 2025,
                        semester: 3,
                        content: "This is the lecture review.",
                        like: 2,
                        grade: 5,
                        load: 4,
                        speech: 3,
                        isDeleted: false,
                        likedByUser: false,
                    },
                ],
            },
        } as unknown as ReturnType<typeof useInfiniteAPI>)
    })

    afterEach(() => vi.useRealTimers())

    const renderDetail = () =>
        render(
            <MemoryRouter>
                <FriendLectureDetail lecture={lecture} year={2025} semester={3} />
                <LocationProbe />
            </MemoryRouter>,
        )

    it("uses the shared information and review components in Figma order", () => {
        renderDetail()
        act(() => vi.advanceTimersByTime(1000))

        const information = screen.getByText("common.search.type")
        const courseMetrics = screen.getByText("common.numClasses")
        const ratings = screen.getByText("A", { selector: '[type="Bigger"]' })
        const overlaps = screen.getByText("friends.currentLectureFriends")
        const review = screen.getByText("This is the lecture review.")
        for (const [before, after] of [
            [information, courseMetrics],
            [courseMetrics, ratings],
            [ratings, overlaps],
            [overlaps, review],
        ] as const) {
            expect(
                before.compareDocumentPosition(after) & Node.DOCUMENT_POSITION_FOLLOWING,
            ).toBeTruthy()
        }
        expect(screen.getByText("common.numLabs")).toBeInTheDocument()
        expect(courseMetrics.parentElement).toHaveStyle({ height: "29px" })
        expect(screen.getByText("common.credit")).toBeInTheDocument()
        expect(screen.queryByText("common.language")).not.toBeInTheDocument()
        expect(screen.queryByText("timetable.competitionRate")).not.toBeInTheDocument()
        expect(setReviewParams).toHaveBeenCalledWith({
            mode: "default",
            courseId: 1,
            professorId: 17,
        })
        expect(screen.queryByText("timetable.add")).not.toBeInTheDocument()
        expect(screen.queryByText("common.wishlist")).not.toBeInTheDocument()
    })

    it("shows only the two Figma groups and preserves classifications on the buttons", () => {
        query.data.sameCourseDifferentSection = [
            {
                id: 3,
                name: "Different section friend",
                isFavorite: false,
                timetable: { id: 43, year: 2025, semester: 3 },
            },
        ]
        query.data.previousSemesterSameProfessor = [
            {
                id: 4,
                name: "Past semester friend",
                isFavorite: false,
                timetable: { id: null, year: 2024, semester: 1 },
            },
        ]
        renderDetail()

        const friendButton = screen.getByRole("button", { name: "Test friend" })
        expect(friendButton).toHaveAttribute("type", "button")
        expect(friendButton).not.toHaveAttribute("href")
        expect(screen.getByText("friends.currentLectureFriends")).toBeInTheDocument()
        expect(screen.getByText("friends.pastLectureFriends")).toBeInTheDocument()
        for (const [name, description] of [
            ["Test friend", "friends.sameLecture"],
            ["Different section friend", "friends.sameCourseDifferentSection"],
            ["Past semester friend", "friends.previousSemesterSameProfessor"],
        ] as const) {
            expect(screen.queryByText(description)).not.toBeInTheDocument()
            expect(screen.getByRole("button", { name })).toHaveAttribute(
                "title",
                description,
            )
            expect(screen.getByRole("button", { name })).toHaveAttribute(
                "aria-description",
                description,
            )
        }
        fireEvent.click(friendButton)
        expect(screen.getByTestId("location")).toHaveTextContent(
            "/friends?friendId=2&year=2025&semester=3&timetableId=42",
        )
    })

    it("deduplicates current friends and prefers the same-section timetable", () => {
        query.data.sameCourseDifferentSection = [
            {
                id: 2,
                name: "Test friend",
                isFavorite: false,
                timetable: { id: 99, year: 2025, semester: 3 },
            },
        ]
        renderDetail()

        const [button] = screen.getAllByRole("button", { name: "Test friend" })
        expect(screen.getAllByRole("button", { name: "Test friend" })).toHaveLength(1)
        expect(button).toHaveAttribute("title", "friends.sameLecture")
        fireEvent.click(button!)
        expect(screen.getByTestId("location")).toHaveTextContent(
            "/friends?friendId=2&year=2025&semester=3&timetableId=42",
        )
    })

    it("opens syllabus for the displayed friend's term, independent of my timetable", () => {
        renderDetail()

        expect(screen.getByRole("link", { name: "header.dictionary" })).toHaveAttribute(
            "href",
            "/dictionary?courseId=1",
        )
        const syllabus = screen.getByRole("link", { name: "header.syllabus" })
        const url = new URL(syllabus.getAttribute("href")!)
        expect(JSON.parse(atob(url.searchParams.get("params")!))).toEqual({
            syy: "2025",
            smtDivCd: "3",
            subjtCd: "CS101",
            syllabusOpenYn: "0",
        })
    })

    it("opens the course dictionary from a simple review without edit or like controls", () => {
        renderDetail()
        act(() => vi.advanceTimersByTime(1000))

        const review = screen.getByRole("button", { name: /This is the lecture review/ })
        expect(review).toHaveAttribute("type", "button")
        expect(screen.queryByTestId("FavoriteBorderOutlinedIcon")).not.toBeInTheDocument()
        fireEvent.click(review)
        expect(screen.getByTestId("location")).toHaveTextContent(
            "/dictionary?courseId=1&professorId=17",
        )
    })

    it("leaves the original timetable enrollment metrics unchanged by default", () => {
        render(<LectureInfoSubsection selectedLecture={lecture} />)

        expect(screen.getByText("common.language")).toBeInTheDocument()
        expect(screen.getByText("timetable.competitionRate")).toBeInTheDocument()
        expect(screen.getByText("common.language").parentElement).not.toHaveStyle({
            height: "29px",
        })
        expect(screen.queryByText("common.numClasses")).not.toBeInTheDocument()
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
