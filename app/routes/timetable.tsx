import { useCallback, useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import SearchIcon from "@mui/icons-material/Search"
import { useQueryClient } from "@tanstack/react-query"

import StyledDivider from "@/common/components/StyledDivider"
import { type SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import CustomTimeTableGrid from "@/features/timetable/components/CustomTimeTableGrid"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"
import LectureListSection from "@/features/timetable/sections/LectureListSection"
import TabButtonRow from "@/features/timetable/sections/TabsRowSubSection/TabButtonRow"
import TimetableInfoSection from "@/features/timetable/sections/TimetableInfoSection"
import UtilButtonsSubSection from "@/features/timetable/sections/TimetableInfoSection/UtilButtonsSubSection"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"

const TimetableWrapper = styled(FlexWrapper)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${media.tablet} {
        padding: 8px;
    }
`

const SearchAreaWrapper = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${media.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
    }

    ${media.tablet} {
        flex: 1 0 0;
    }
`

const ContentsAreaWrapper = styled(FlexWrapper)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${media.laptop} {
        max-width: none;
    }

    ${media.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
    }
`

const Block = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px;
    flex: 1;
    min-height: 0;

    ${media.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
    }
`

const LectureInfoArea = styled.div`
    width: 380px;
    height: 100%;
    display: flex;

    ${media.desktop} {
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
    }

    ${media.laptop} {
        width: 300px;
    }
`

const LectureListArea = styled.div`
    width: 300px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${media.desktop} {
        width: 380px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
    }

    ${media.laptop} {
        width: 300px;
    }

    ${media.tablet} {
        width: 100%;
    }
`

const UtilButtonsArea = styled.div`
    ${media.laptop} {
        height: 100px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
    }
`

const TimetableArea = styled(FlexWrapper)`
    flex: 1;
    min-height: 0;

    ${media.laptop} {
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
    }
`

const TimetableInfoArea = styled.div`
    ${media.laptop} {
        height: 100px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
    }

    ${media.tablet} {
        height: auto;
        padding: 8px;
    }
`

const MobileControlBar = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
`

export default function Timetable() {
    const queryClient = useQueryClient()
    const theme = useTheme()

    const isTablet = useIsDevice("tablet")
    const isLaptop = useIsDevice("laptop")
    const isDesktop = useIsDevice("desktop")

    const searchAreaRef = useRef<HTMLDivElement>(null)
    const contentsAreaRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)

    const [hover, setHover] = useState<Lecture[] | null>(null)
    const [selected, setSelected] = useState<Lecture | null>(null)

    // Time filter state for search area
    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

    // Current timetable
    const [currentTimetableId, setCurrentTimetableId] = useState<number | null>(null)
    const [currentTimetableName, setCurrentTimetableName] = useState<string>("")
    const [year, setYear] = useState<number>(-1)
    const [semesterEnum, setSemesterEnum] = useState<SemesterEnum>(1)

    // for timetable area size(temporary)
    const [contentsAreaWidth, setContentsAreaWidth] = useState(0)
    const [contentsAreaHeight, setContentsAreaHeight] = useState<number>(0)

    // Mobile search modal state
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

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

    const currentTimetableLectures =
        currentTimetableId === null
            ? (myTimetable.data?.lectures ?? [])
            : (timetable.data?.lectures ?? [])

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

    const handleRemoveLecture = useCallback(
        (lectureId: number) => {
            removeLectureFunction({
                action: "delete",
                lectureId: lectureId,
            })
        },
        [removeLectureFunction],
    )

    useEffect(() => {
        function matchWidthHeight() {
            if (contentsAreaRef.current) {
                setContentsAreaWidth(contentsAreaRef.current.offsetWidth)
                setContentsAreaHeight(contentsAreaRef.current.offsetHeight)
            }
        }

        matchWidthHeight()
        window.addEventListener("resize", matchWidthHeight)
        return () => window.removeEventListener("resize", matchWidthHeight)
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

    return (
        <TimetableWrapper
            direction={isTablet ? "column-reverse" : "row"}
            align="stretch"
            justify="center"
            gap={12}
            flex="1 0 0"
            ref={outerRef}
        >
            {!mobileSearchOpen && isTablet && (
                <MobileControlBar direction="row" gap={0}>
                    <UtilButtonsSubSection
                        timetableName={currentTimetableName}
                        timetableLectures={currentTimetableLectures}
                        year={year}
                        semester={semesterEnum}
                    />
                    <FlexWrapper
                        direction="row"
                        gap={4}
                        align="center"
                        style={{ height: "100%" }}
                        onClick={() => {
                            setMobileSearchOpen(true)
                        }}
                    >
                        <Icon size={16} color={theme.colors.Highlight.default}>
                            <SearchIcon />
                        </Icon>
                        <Typography type="Normal" color="Highlight.default">
                            과목 검색하기
                        </Typography>
                    </FlexWrapper>
                </MobileControlBar>
            )}
            {(mobileSearchOpen || !isTablet) && (
                <SearchAreaWrapper
                    direction={isDesktop ? "column-reverse" : "row"}
                    align="flex-start"
                    gap={12}
                    ref={searchAreaRef}
                >
                    {!isTablet && isLaptop && (
                        <UtilButtonsArea>
                            <UtilButtonsSubSection
                                timetableName={currentTimetableName}
                                timetableLectures={currentTimetableLectures}
                                year={year}
                                semester={semesterEnum}
                            />
                        </UtilButtonsArea>
                    )}
                    {/*과목 목록 영역*/}
                    <LectureListArea style={!isTablet ? { overflow: "auto" } : undefined}>
                        <LectureListSection
                            timetableLectures={currentTimetableLectures}
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
                    {!isDesktop && <StyledDivider direction="column" />}
                    {/*과목 정보 영역*/}
                    {!isTablet && (
                        <LectureInfoArea
                            style={!isTablet ? { overflow: "auto" } : undefined}
                        >
                            <LectureDetailSection
                                selectedLecture={
                                    selected
                                        ? selected
                                        : hover?.length == 1
                                          ? hover[0]
                                          : null
                                }
                                year={year}
                                semester={semesterEnum}
                            />
                        </LectureInfoArea>
                    )}
                </SearchAreaWrapper>
            )}
            <ContentsAreaWrapper
                direction="column"
                gap={0}
                align="stretch"
                justify="stretch"
            >
                {/* 시간표 탭 */}
                <TabButtonRow
                    timeTableLectures={currentTimetableLectures}
                    currentTimetableId={currentTimetableId}
                    setCurrentTimetableId={setCurrentTimetableId}
                    setCurrentTimetableName={setCurrentTimetableName}
                    year={year}
                    semester={semesterEnum}
                    setYear={setYear}
                    setSemester={setSemesterEnum}
                />
                <Block
                    direction={isLaptop ? "column" : "row"}
                    gap={isLaptop ? 12 : 30}
                    align="stretch"
                    justify="flex-start"
                    flex="1 0 0"
                >
                    <TimetableArea direction="column" gap={0} ref={contentsAreaRef}>
                        <CustomTimeTableGrid
                            cellWidth={isTablet ? (contentsAreaWidth - 60) / 5 : 100}
                            fullHeight={
                                isLaptop
                                    ? contentsAreaHeight - 60
                                    : contentsAreaHeight - 36
                            }
                            lectureSummary={currentTimetableLectures}
                            setTimeFilter={setTimeFilter}
                            hover={hover}
                            setHover={setHover}
                            selected={selected}
                            setSelected={setSelected}
                            removeFunction={
                                currentTimetableId === null
                                    ? undefined
                                    : handleRemoveLecture
                            }
                        />
                    </TimetableArea>
                    {!isLaptop && <StyledDivider direction="column" />}
                    {/*시간표 정보 영역*/}
                    <TimetableInfoArea>
                        <TimetableInfoSection
                            timetableName={currentTimetableName}
                            timetableLectures={currentTimetableLectures}
                            hover={hover}
                            setHover={setHover}
                            year={year}
                            semester={semesterEnum}
                        />
                    </TimetableInfoArea>
                </Block>
            </ContentsAreaWrapper>
        </TimetableWrapper>
    )
}
