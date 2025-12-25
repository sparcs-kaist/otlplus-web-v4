import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"

import StyledDivider from "@/common/components/StyledDivider"
import { type SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import CustomTimeTableGrid from "@/features/timetable/components/CustomTimeTableGrid"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"
import LectureListSection from "@/features/timetable/sections/LectureListSection"
import TabButtonRow from "@/features/timetable/sections/TabsRowSubSection/TabButtonRow"
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

const ContentsAreaWrapper = styled(FlexWrapper)`
    border-radius: 12px;
    width: fit-content;
`

const Block = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
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

    const searchAreaRef = useRef<HTMLDivElement>(null)
    const contentsAreaRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)

    const [hover, setHover] = useState<Lecture[] | null>(null)
    const [selected, setSelected] = useState<Lecture | null>(null)

    // Time filter state for search area
    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

    // Current timetable ID (placeholder - should come from timetable selection logic)
    const [currentTimetableId, setCurrentTimetableId] = useState<number | null>(null)
    const [currentTimetableName, setCurrentTimetableName] = useState<string>("")
    const [year, setYear] = useState<number>(-1)
    const [semesterEnum, setSemesterEnum] = useState<SemesterEnum>(1)
    const [contentsAreaHeight, setContentsAreaHeight] = useState<number>(0)

    const { query: timetable } = useAPI("GET", `/timetables/${currentTimetableId}`, {
        enabled: currentTimetableId !== null,
    })
    const { query: myTimetable, setParams: setMyTimetableParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
        {
            enabled: currentTimetableId === null,
        },
    )

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
        function matchHeight() {
            if (contentsAreaRef.current) {
                setContentsAreaHeight(contentsAreaRef.current.offsetHeight)
            }
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

    useEffect(() => {
        setSelected(null)
        setHover(null)
        if (year !== -1) {
            setMyTimetableParams({ year: year, semester: semesterEnum })
        }
    }, [year, semesterEnum])

    useEffect(() => {
        setSelected(null)
        setHover(null)
    }, [currentTimetableId])

    useEffect(() => {
        console.log(contentsAreaHeight)
    }, [contentsAreaHeight])

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
                        timetableLectures={
                            currentTimetableId === null
                                ? (myTimetable.data?.lectures ?? [])
                                : (timetable.data?.lectures ?? [])
                        }
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
                        year={year}
                        semester={semesterEnum}
                    />
                </LectureInfoArea>
            </SearchAreaWrapper>
            <ContentsAreaWrapper direction="column" gap={0} align="stretch">
                {/* 시간표 탭 */}
                <TabButtonRow
                    timeTableLectures={
                        currentTimetableId === null
                            ? (myTimetable.data?.lectures ?? [])
                            : (timetable.data?.lectures ?? [])
                    }
                    currentTimetableId={currentTimetableId}
                    setCurrentTimetableId={setCurrentTimetableId}
                    setCurrentTimetableName={setCurrentTimetableName}
                    year={year}
                    semester={semesterEnum}
                    setYear={setYear}
                    setSemester={setSemesterEnum}
                />
                <Block
                    direction="row"
                    gap={30}
                    align="stretch"
                    justify="flex-start"
                    padding="16px"
                    flex="1 0 0"
                >
                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="stretch"
                        ref={contentsAreaRef}
                    >
                        <CustomTimeTableGrid
                            cellWidth={100}
                            fullHeight={contentsAreaHeight - 36}
                            lectureSummary={
                                currentTimetableId === null
                                    ? (myTimetable.data?.lectures ?? [])
                                    : (timetable.data?.lectures ?? [])
                            }
                            setTimeFilter={setTimeFilter}
                            hover={hover}
                            setHover={setHover}
                            selected={selected}
                            setSelected={setSelected}
                            removeFunction={
                                currentTimetableId === null
                                    ? undefined
                                    : (lectureId: number) => {
                                          removeLectureFunction({
                                              action: "delete",
                                              lectureId: lectureId,
                                          })
                                      }
                            }
                        />
                    </FlexWrapper>
                    <StyledDivider direction="column" />
                    {/*시간표 정보 영역*/}
                    <TimetableInfoSection
                        timetableName={currentTimetableName}
                        timetableLectures={
                            currentTimetableId === null
                                ? (myTimetable.data?.lectures ?? [])
                                : (timetable.data?.lectures ?? [])
                        }
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
