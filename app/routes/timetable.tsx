import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"

import StyledDivider from "@/common/components/StyledDivider"
import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import TabButtonRow from "@/common/components/timetable/TabButtonRow"
import { type SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"
import LectureListSection from "@/features/timetable/sections/LectureListSection"
import TimetableInfoSection from "@/features/timetable/sections/TimetableInfoSection"
import { useAPI } from "@/utils/api/useAPI"

const TimetableWrapper = styled(FlexWrapper)`
    min-height: 0;
    padding: 0 20px 12px 20px;
`

const SearchAreaWrapper = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
`

const ContentsAreaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    width: fit-content;
    min-height: 100%;
    align-items: flex-start;
`

const Block = styled.div`
    display: flex;
    flex-grow: 1;
    //height: fit-content;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    align-items: center;
    justify-content: flex-start;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px;
    flex-direction: row;
    gap: 30px;
`

const TimetableGridArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LectureInfoArea = styled.div`
    width: 380px;
    height: 100%;
    display: flex;
`

const LectureListArea = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
`

export default function Timetable() {
    const queryClient = useQueryClient()

    const { query: semester } = useAPI("GET", "/semesters")

    const searchAreaRef = useRef<HTMLDivElement>(null)
    const contentsAreaRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)

    const [hover, setHover] = useState<Lecture[] | null>(null)
    const [selected, setSelected] = useState<Lecture | null>(null)

    // Time filter state for search area
    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

    // Current timetable ID (placeholder - should come from timetable selection logic)
    const [currentTimetableId, setCurrentTimetableId] = useState<number | null>(null)
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [semesterEnum, setSemesterEnum] = useState<SemesterEnum>(1)

    const { query: timetable } = useAPI("GET", `/timetables/${currentTimetableId}`, {
        enabled: currentTimetableId !== null,
    })

    const { requestFunction: removeLectureFunction } = useAPI(
        "PATCH",
        `/timetables/${currentTimetableId}`,
        {
            onSuccess: () => {
                queryClient
                    .invalidateQueries({
                        queryKey: [`/timetables/${currentTimetableId}`],
                    })
                    .then(() => {
                        setSelected(null)
                        setHover(null)
                    })
            },
        },
    )

    useEffect(() => {
        const semesters = semester.data?.semesters
        if (semesters && semesters.length > 0) {
            const lastSemester = semesters[semesters.length - 1]
            if (lastSemester) {
                setYear(lastSemester.year)
                setSemesterEnum(lastSemester.semester)
            }
        }
    }, [semester.data])

    // 양 쪽의 높이를 일정하게 맞추기 위함 - 스크롤이 들어가는 경우도 있어서 css 스타일만으로 구현 불가,,?
    useEffect(() => {
        function matchHeight() {
            if (searchAreaRef.current && contentsAreaRef.current) {
                searchAreaRef.current.style.height = `${contentsAreaRef.current.offsetHeight}px`
            }
        }

        matchHeight()
        window.addEventListener("resize", matchHeight)
        return () => window.removeEventListener("resize", matchHeight)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchAreaRef.current &&
                !searchAreaRef.current.contains(event.target as Node) &&
                contentsAreaRef.current &&
                !contentsAreaRef.current.contains(event.target as Node) &&
                outerRef.current &&
                outerRef.current.contains(event.target as Node)
            ) {
                setSelected(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <TimetableWrapper
            direction="row"
            align="stretch"
            justify="center"
            gap={12}
            flex="1 0 0"
        >
            <SearchAreaWrapper direction="row" align="flex-start" gap={12}>
                {/*과목 목록 영역*/}
                <LectureListArea>
                    <LectureListSection
                        year={year}
                        semester={semesterEnum}
                        hoveredLecture={hover}
                        selectedLecture={selected}
                        setSelectedLecture={setSelected}
                        setHoveredLecture={setHover}
                        timeFilter={timeFilter}
                        setTimeFilter={setTimeFilter}
                        currentTimetableId={currentTimetableId}
                    />
                </LectureListArea>
                <StyledDivider direction="column" />
                {/*과목 정보 영역*/}
                <LectureInfoArea>
                    <LectureDetailSection
                        selectedLecture={
                            selected ? selected : hover?.length == 1 ? hover[0] : null
                        }
                    />
                </LectureInfoArea>
            </SearchAreaWrapper>
            <ContentsAreaWrapper ref={contentsAreaRef}>
                {/* 시간표 탭 */}
                <TabButtonRow
                    currentTimetableId={currentTimetableId}
                    setCurrentTimetableId={setCurrentTimetableId}
                    year={year}
                    semester={semesterEnum}
                    setYear={setYear}
                    setSemester={setSemesterEnum}
                />
                <Block>
                    {/* 시간표 그리드 */}
                    <TimetableGridArea>
                        <CustomTimeTableGrid
                            cellWidth={100}
                            lectureSummary={timetable.data?.lectures ?? []}
                            setTimeFilter={setTimeFilter}
                            hover={hover}
                            setHover={setHover}
                            selected={selected}
                            setSelected={setSelected}
                            removeFunction={(lectureId: number) => {
                                removeLectureFunction({
                                    action: "delete",
                                    lectureId: lectureId,
                                })
                            }}
                        />
                    </TimetableGridArea>
                    <StyledDivider direction="column" />
                    {/*시간표 정보 영역*/}
                    <TimetableInfoSection
                        timetableLectures={timetable.data?.lectures || []}
                        hover={hover}
                        setHover={setHover}
                        year={year}
                        semester={semesterEnum}
                    />
                </Block>
            </ContentsAreaWrapper>
        </TimetableWrapper>
    )
}
