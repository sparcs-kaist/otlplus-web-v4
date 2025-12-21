import { useCallback, useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import exampleLectures from "@/api/example/Lectures"
import StyledDivider from "@/common/components/StyledDivider"
import TabButtonRow from "@/common/components/timetable/TabButtonRow"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import CustomTimeTableGrid from "@/features/main/components/CustomTimeTableGrid"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"
import LectureListSection from "@/features/timetable/sections/LectureListSection"
import TimetableInfoSection from "@/features/timetable/sections/TimetableInfoSection"

const TimetableWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    overflow: scroll;
    height: calc(100vh - 75px);
    margin-bottom: 15px;
    width: 100%;
`

const SearchAreaWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    padding: 16px;
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    align-items: flex-start;
    gap: 12px;
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
    const { t } = useTranslation()
    const searchAreaRef = useRef<HTMLDivElement>(null)
    const contentsAreaRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)

    const [index, setIndex] = useState<number>(0)

    // Search/Detail panel states
    const [searchedId, setSearchedId] = useState<number | null>(null)
    const [lectureId, setLectureId] = useState<number | null>(null)

    // Timetable grid states
    const [timetableLectures, setTimetableLectures] = useState<Lecture[]>(
        exampleLectures.slice(0, 3),
    )
    const [hover, setHover] = useState<Lecture | null>(null)
    const [selected, setSelected] = useState<Lecture | null>(null)

    // Time filter state for search area
    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

    // Current timetable ID (placeholder - should come from timetable selection logic)
    const [currentTimetableId, setCurrentTimetableId] = useState<number | null>(1)

    // Callback when a lecture is added to timetable
    const handleLectureAdded = useCallback(() => {
        // Refresh timetable data when a lecture is added
        console.log("Lecture added to timetable")
        // In real implementation, re-fetch timetable data here
    }, [])

    useEffect(() => {
        if (searchedId !== null) {
            setLectureId(searchedId)
        }
    }, [searchedId])

    // Sync timetable grid selection with detail view
    useEffect(() => {
        if (selected !== null) {
            setLectureId(selected.id)
            setSearchedId(null)
        }
    }, [selected])

    // Sync timetable grid hover with detail view
    useEffect(() => {
        if (selected === null && hover !== null) {
            setLectureId(hover.id)
        }
    }, [hover, selected])

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
                setSearchedId(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <TimetableWrapper ref={outerRef}>
            <SearchAreaWrapper ref={searchAreaRef}>
                {/*과목 목록 영역*/}
                <LectureListArea>
                    <LectureListSection
                        selectedLectureId={searchedId}
                        setSelectedLectureId={setSearchedId}
                        timeFilter={timeFilter}
                        setTimeFilter={setTimeFilter}
                        currentTimetableId={currentTimetableId}
                        onLectureAdded={handleLectureAdded}
                    />
                </LectureListArea>
                <StyledDivider direction="column" />
                {/*과목 정보 영역*/}
                <LectureInfoArea>
                    <LectureDetailSection selectedLectureId={lectureId} />
                </LectureInfoArea>
            </SearchAreaWrapper>
            <ContentsAreaWrapper ref={contentsAreaRef}>
                {/* 시간표 탭 */}
                <TabButtonRow rowLength={3} index={index} setIndex={setIndex} />
                <Block>
                    {/* 시간표 그리드 */}
                    <TimetableGridArea>
                        <CustomTimeTableGrid
                            cellWidth={100}
                            lectureSummary={timetableLectures}
                            setTimeFilter={setTimeFilter}
                            hover={hover}
                            setHover={setHover}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </TimetableGridArea>
                    <StyledDivider direction="column" />
                    {/*시간표 정보 영역*/}
                    <TimetableInfoSection timetableLectures={timetableLectures} />
                </Block>
            </ContentsAreaWrapper>
        </TimetableWrapper>
    )
}
