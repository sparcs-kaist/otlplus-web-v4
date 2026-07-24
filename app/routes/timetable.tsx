import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import SearchIcon from "@mui/icons-material/Search"

import Modal from "@/common/components/Modal"
import StyledDivider from "@/common/components/StyledDivider"
import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import KeyboardShortcutModal from "@/features/timetable/components/KeyboardShortcutModal"
import { useTimetableEditor } from "@/features/timetable/hooks/useTimetableEditor"
import { useTimetableKeyboard } from "@/features/timetable/hooks/useTimetableKeyboard"
import CustomBlockSection from "@/features/timetable/sections/CustomBlockSection"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"
import LectureListSection from "@/features/timetable/sections/LectureListSection"
import TabButtonRow from "@/features/timetable/sections/TabsRowSubSection/TabButtonRow"
import TimetableInfoSection from "@/features/timetable/sections/TimetableInfoSection"
import UtilButtonsSubSection from "@/features/timetable/sections/TimetableInfoSection/UtilButtonsSubSection"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { trackEvent } from "@/libs/mixpanel"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

const TimetableWrapper = styled(FlexWrapper)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${media.tablet} {
        padding: 8px;
    }

    ${media.mobile} {
        padding: 0 8px 8px 8px;
    }
`

const SearchAreaWrapper = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${media.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }

    ${media.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
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
        overflow: hidden;
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
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${media.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`

const LectureInfoArea = styled.div`
    width: 360px;
    height: 100%;
    display: flex;

    ::-webkit-scrollbar {
        width: 0;
        display: none;
    }

    ${media.desktop} {
        width: 380px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${media.laptop} {
        width: 300px;
    }
`

const LectureListArea = styled.div`
    width: 270px;
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
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
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
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`

const TimetableArea = styled(FlexWrapper)`
    flex: 1;
    min-height: 0;
    overflow: hidden;

    ${media.laptop} {
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`

const TimetableInfoArea = styled.div`
    ${media.laptop} {
        height: 100px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
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
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
`

export default function Timetable() {
    const { status } = useUserStore()
    const theme = useTheme()

    const isTablet = useIsDevice("tablet")
    const isLaptop = useIsDevice("laptop")
    const isDesktop = useIsDevice("desktop")

    useEffect(() => {
        trackEvent("Page View", { page: "Timetable" })
    }, [])

    const searchAreaRef = useRef<HTMLDivElement>(null)
    const timetableAreaRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)

    const hoveredLectures = useTimetableUIStore((s) => s.hoveredLectures)
    const setHoveredLectures = useTimetableUIStore((s) => s.setHoveredLectures)
    const selectedLectures = useTimetableUIStore((s) => s.selectedLectures)
    const setSelectedLectures = useTimetableUIStore((s) => s.setSelectedLectures)

    const timeFilters = useTimetableUIStore((s) => s.timeFilters)
    const setTimeFilters = useTimetableUIStore((s) => s.setTimeFilters)

    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const currentTimetableName = useTimetableUIStore((s) => s.currentTimetableName)
    const year = useTimetableUIStore((s) => s.year)
    const semesterEnum = useTimetableUIStore((s) => s.semesterEnum)

    const mobileSearchOpen = useTimetableUIStore((s) => s.mobileSearchOpen)
    const setMobileSearchOpen = useTimetableUIStore((s) => s.setMobileSearchOpen)

    const flashLectureIds = useTimetableUIStore((s) => s.flashLectureIds)

    const timeBlocks = useTimetableUIStore((s) => s.timeBlocks)
    const setTimeBlocks = useTimetableUIStore((s) => s.setTimeBlocks)

    const { query: timetables, setParams: setTimetablesParams } = useAPI(
        "GET",
        "/timetables",
        { enabled: status === "success" },
    )
    const [isCustomBlockSectionOpen, setIsCustomBlockSectionOpen] = useState(false)

    const [nonLoginTimetable, setNonLoginTimetable] = useState<Lecture[]>([])
    const { query: timetable } = useAPI("GET", `/timetables/${currentTimetableId}`, {
        enabled: currentTimetableId !== null && status === "success",
    })
    const { query: myTimetable, setParams: setMyTimetableParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
        { enabled: status === "success" },
    )

    const currentTimetableLectures =
        status !== "success"
            ? nonLoginTimetable
            : currentTimetableId === null
              ? (myTimetable.data?.lectures ?? [])
              : (timetable.data?.lectures ?? [])

    const { query: customBlocks } = useAPI(
        "GET",
        `/timetables/${currentTimetableId}/custom-blocks`,
        {
            enabled: currentTimetableId !== null && status === "success",
        },
    )

    const { requestFunction: deleteCustomBlock } = useAPI(
        "DELETE",
        `/timetables/${currentTimetableId}/custom-blocks`,
        {
            enabled: currentTimetableId !== null && status === "success",
        },
    )

    const canDeleteLecture = status !== "success" || currentTimetableId !== null

    const handleRemoveCustomBlock = useCallback(
        async (blockId: number) => {
            if (currentTimetableId === null) return
            await deleteCustomBlock({ id: blockId })
            trackEvent("Remove Custom Block from Timetable", {
                blockId,
                timetableId: currentTimetableId,
            })
        },
        [currentTimetableId],
    )

    useEffect(() => {
        setHoveredLectures([])
        setSelectedLectures([])
    }, [mobileSearchOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchAreaRef.current &&
                !searchAreaRef.current.contains(event.target as Node) &&
                timetableAreaRef.current &&
                !timetableAreaRef.current.contains(event.target as Node)
            ) {
                setHoveredLectures([])
                setSelectedLectures([])
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        setSelectedLectures([])
        setHoveredLectures([])

        if (year !== -1) {
            setMyTimetableParams({ year: year, semester: semesterEnum })
            setTimetablesParams({ year: year, semester: semesterEnum })
        }
        setNonLoginTimetable([])
    }, [year, semesterEnum])

    useEffect(() => {
        if (!isTablet) {
            setSelectedLectures([])
            setHoveredLectures([])
        }
    }, [currentTimetableId])

    useEffect(() => {
        if (timeFilters !== null && isTablet) {
            setMobileSearchOpen(true)
        }
    }, [timeFilters])

    // 과목 추가, 삭제는 무조건 이걸 이용해야 undo, redo가 작동함.
    const { addLectures, removeLectures, changeSemester, undo, redo, recordAction } =
        useTimetableEditor({
            currentTimetableLectures,
            nonLoginTimetable,
            setNonLoginTimetable,
        })

    const handleDeleteLecture = useMemo(
        () => (canDeleteLecture ? (id: number) => removeLectures([id]) : undefined),
        [canDeleteLecture, removeLectures],
    )

    // 과목을 선택할때는 반드시 onLectureSelect를 실행해줘야 다중선택이 작동함
    const { onLectureSelect } = useTimetableKeyboard({
        currentTimetableLectures,
        undo,
        redo,
        addLectures,
        removeLectures,
        timetableIds: [
            null,
            ...(timetables.data?.timetables
                .sort((a, b) => a.timeTableOrder - b.timeTableOrder)
                .map((t) => t.id) || []),
        ],
        isLoggedIn: status === "success",
        changeSemester,
        recordAction,
    })

    return (
        <TimetableWrapper
            direction={isTablet ? "column" : "row"}
            align="stretch"
            justify="center"
            gap={isTablet ? 8 : 12}
            flex="1 0 0"
            ref={outerRef}
        >
            {isTablet ? (
                // 모바일
                <>
                    {/* 상단: TimetableArea */}
                    <ContentsAreaWrapper
                        ref={timetableAreaRef}
                        direction="column"
                        gap={0}
                        align="stretch"
                        justify="stretch"
                        style={
                            mobileSearchOpen ? { flex: "1 1 0", minHeight: 0 } : undefined
                        }
                    >
                        <TabButtonRow
                            timeTableLectures={currentTimetableLectures}
                            timetablesQuery={timetables}
                        />
                        <Block
                            direction="column"
                            gap={12}
                            align="stretch"
                            justify="flex-start"
                            flex="1 0 0"
                        >
                            <TimetableArea
                                direction="column"
                                gap={0}
                                align="stretch"
                                flex="1 1 auto"
                            >
                                <CustomTimeTableGrid
                                    lectures={currentTimetableLectures}
                                    needLectureDeletable={canDeleteLecture}
                                    onLectureSelect={onLectureSelect}
                                    flashLectureIds={flashLectureIds ?? undefined}
                                    deleteLecture={handleDeleteLecture}
                                    hoveredLectures={hoveredLectures}
                                    setHoveredLectures={setHoveredLectures}
                                    selectedLectures={selectedLectures}
                                    timeFilters={timeFilters}
                                    setTimeFilters={setTimeFilters}
                                    timeBlocks={timeBlocks}
                                    setTimeBlocks={setTimeBlocks}
                                    customBlocks={customBlocks.data?.custom_blocks ?? []}
                                    deleteCustomBlock={
                                        status === "success" &&
                                        currentTimetableId !== null
                                            ? handleRemoveCustomBlock
                                            : undefined
                                    }
                                    isCustomBlockSectionOpen={isCustomBlockSectionOpen}
                                />
                            </TimetableArea>
                        </Block>
                    </ContentsAreaWrapper>

                    {/* 중간: MobileControlBar + TimetableInfoArea */}
                    <TimetableInfoArea>
                        <TimetableInfoSection
                            timetableLectures={currentTimetableLectures}
                        />
                    </TimetableInfoArea>
                    <MobileControlBar direction="row" gap={0}>
                        <UtilButtonsSubSection
                            timetableName={currentTimetableName}
                            timetableLectures={currentTimetableLectures}
                            year={year}
                            semester={semesterEnum}
                            currentTimetableId={currentTimetableId}
                            setIsCustomBlockSectionOpen={setIsCustomBlockSectionOpen}
                        />
                        <FlexWrapper
                            direction="row"
                            gap={4}
                            align="center"
                            style={{ height: "100%" }}
                            onClick={() => {
                                setMobileSearchOpen(!mobileSearchOpen)
                            }}
                        >
                            <Icon size={16} color={theme.colors.Highlight.default}>
                                <SearchIcon />
                            </Icon>
                            <Typography type="Normal" color="Highlight.default">
                                {mobileSearchOpen ? "검색 닫기" : "과목 검색하기"}
                            </Typography>
                        </FlexWrapper>
                    </MobileControlBar>

                    {/* 하단: LectureListArea (검색 열렸을 때만) */}
                    {mobileSearchOpen && (
                        <SearchAreaWrapper
                            direction="row"
                            align="flex-start"
                            gap={12}
                            ref={searchAreaRef}
                        >
                            <LectureListArea>
                                <LectureListSection
                                    timetableLectures={currentTimetableLectures}
                                    addLectures={addLectures}
                                    onLectureSelect={onLectureSelect}
                                />
                            </LectureListArea>
                        </SearchAreaWrapper>
                    )}

                    {/* 모달 */}
                    {selectedLectures.length > 0 && (
                        <Modal
                            isOpen={selectedLectures.length > 0}
                            onClose={() => {}}
                            fullScreen={true}
                            header={false}
                        >
                            <LectureDetailSection
                                addLectures={addLectures}
                                removeLectures={handleDeleteLecture}
                                onMobileModalClose={() => {
                                    setHoveredLectures([])
                                    setSelectedLectures([])
                                }}
                                currentTimetableId={currentTimetableId}
                                timetableLectures={currentTimetableLectures}
                            />
                        </Modal>
                    )}
                </>
            ) : (
                // 태블릿 이상
                <>
                    <KeyboardShortcutModal />
                    <SearchAreaWrapper
                        direction={isDesktop ? "column-reverse" : "row"}
                        align="flex-start"
                        gap={12}
                        ref={searchAreaRef}
                    >
                        {isLaptop && (
                            <UtilButtonsArea>
                                <UtilButtonsSubSection
                                    timetableName={currentTimetableName}
                                    timetableLectures={currentTimetableLectures}
                                    year={year}
                                    semester={semesterEnum}
                                    currentTimetableId={currentTimetableId}
                                    setIsCustomBlockSectionOpen={
                                        setIsCustomBlockSectionOpen
                                    }
                                />
                            </UtilButtonsArea>
                        )}
                        {/*과목 목록 영역*/}
                        <LectureListArea style={{ overflow: "auto" }}>
                            <LectureListSection
                                timetableLectures={currentTimetableLectures}
                                addLectures={addLectures}
                                onLectureSelect={onLectureSelect}
                            />
                        </LectureListArea>
                        {!isDesktop && <StyledDivider direction="column" />}
                        {/*과목 정보 영역*/}
                        <LectureInfoArea style={{ overflow: "auto" }}>
                            {isCustomBlockSectionOpen ? (
                                <CustomBlockSection
                                    customBlocks={customBlocks.data?.custom_blocks ?? []}
                                />
                            ) : (
                                <LectureDetailSection
                                    addLectures={addLectures}
                                    removeLectures={handleDeleteLecture}
                                    currentTimetableId={currentTimetableId}
                                    timetableLectures={currentTimetableLectures}
                                />
                            )}
                        </LectureInfoArea>
                    </SearchAreaWrapper>
                    <FlexWrapper direction="column" gap={0}>
                        <ContentsAreaWrapper
                            ref={timetableAreaRef}
                            direction="column"
                            gap={0}
                            style={{ overflowX: "hidden" }}
                            flex="1 1 auto"
                        >
                            {/* 시간표 탭 */}
                            <TabButtonRow
                                timeTableLectures={currentTimetableLectures}
                                timetablesQuery={timetables}
                            />
                            <Block
                                direction={isLaptop ? "column" : "row"}
                                gap={isLaptop ? 12 : 16}
                                align="stretch"
                                justify="flex-start"
                                flex="1 0 0"
                            >
                                <TimetableArea direction="column" gap={0}>
                                    <CustomTimeTableGrid
                                        cellWidth={isLaptop ? "113px" : "125px"}
                                        lectures={currentTimetableLectures}
                                        needLectureDeletable={canDeleteLecture}
                                        onLectureSelect={onLectureSelect}
                                        flashLectureIds={flashLectureIds ?? undefined}
                                        deleteLecture={handleDeleteLecture}
                                        hoveredLectures={hoveredLectures}
                                        setHoveredLectures={setHoveredLectures}
                                        selectedLectures={selectedLectures}
                                        timeFilters={timeFilters}
                                        setTimeFilters={setTimeFilters}
                                        timeBlocks={timeBlocks}
                                        setTimeBlocks={setTimeBlocks}
                                        customBlocks={
                                            customBlocks.data?.custom_blocks ?? []
                                        }
                                        deleteCustomBlock={
                                            status === "success" &&
                                            currentTimetableId !== null
                                                ? handleRemoveCustomBlock
                                                : undefined
                                        }
                                        isCustomBlockSectionOpen={
                                            isCustomBlockSectionOpen
                                        }
                                    />
                                </TimetableArea>
                                {!isLaptop && <StyledDivider direction="column" />}
                                {/*시간표 정보 영역*/}
                                <TimetableInfoArea>
                                    <TimetableInfoSection
                                        timetableLectures={currentTimetableLectures}
                                    />
                                </TimetableInfoArea>
                            </Block>
                        </ContentsAreaWrapper>
                    </FlexWrapper>
                </>
            )}
        </TimetableWrapper>
    )
}
