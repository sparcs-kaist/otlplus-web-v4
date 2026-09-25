import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import SearchIcon from "@mui/icons-material/Search"

import Modal from "@/common/components/Modal"
import StyledDivider from "@/common/components/StyledDivider"
import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import KeyboardShortcutModal from "@/features/timetable/components/KeyboardShortcutModal"
import { useTimetableClone } from "@/features/timetable/hooks/useTimetableClone"
import { useTimetableEditor } from "@/features/timetable/hooks/useTimetableEditor"
import { useTimetableKeyboard } from "@/features/timetable/hooks/useTimetableKeyboard"
import CustomBlockSection from "@/features/timetable/sections/CustomBlockSection"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"
import LectureListSection from "@/features/timetable/sections/LectureListSection"
import TabButtonRow from "@/features/timetable/sections/TabsRowSubSection/TabButtonRow"
import TimetableInfoSection from "@/features/timetable/sections/TimetableInfoSection"
import UtilButtonsSubSection from "@/features/timetable/sections/TimetableInfoSection/UtilButtonsSubSection"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import isInvalidTimetableError from "@/features/timetable/utils/isInvalidTimetableError"
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
    box-shadow: ${({ theme }) => theme.elevation.surface};

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
    box-shadow: ${({ theme }) => theme.elevation.surface};

    ${media.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`

const LectureInfoArea = styled.div`
    width: 330px;
    height: 100%;
    display: flex;

    ${media.desktop} {
        width: 380px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow: ${({ theme }) => theme.elevation.surface};
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
        box-shadow: ${({ theme }) => theme.elevation.surface};
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
        box-shadow: ${({ theme }) => theme.elevation.surface};
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
        box-shadow: ${({ theme }) => theme.elevation.surface};
    }
`

const TimetableInfoArea = styled.div`
    ${media.laptop} {
        height: 100px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow: ${({ theme }) => theme.elevation.surface};
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
    box-shadow: ${({ theme }) => theme.elevation.surface};
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
    const selectedItems = useTimetableUIStore((s) => s.selectedItems)
    const setSelectedItems = useTimetableUIStore((s) => s.setSelectedItems)
    const selectedLectures = useMemo(
        () =>
            selectedItems.flatMap((item) =>
                item.kind === TimetableItemKind.LECTURE ? [item.data] : [],
            ),
        [selectedItems],
    )

    const timeFilter = useTimetableUIStore((s) => s.timeFilter)
    const setTimeFilter = useTimetableUIStore((s) => s.setTimeFilter)

    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const setCurrentTimetableId = useTimetableUIStore((s) => s.setCurrentTimetableId)
    const currentTimetableName = useTimetableUIStore((s) => s.currentTimetableName)
    const year = useTimetableUIStore((s) => s.year)
    const semesterEnum = useTimetableUIStore((s) => s.semesterEnum)

    const mobileSearchOpen = useTimetableUIStore((s) => s.mobileSearchOpen)
    const setMobileSearchOpen = useTimetableUIStore((s) => s.setMobileSearchOpen)

    const flashItemKeys = useTimetableUIStore((s) => s.flashItemKeys)
    const setSelectedCustomBlock = useTimetableUIStore((s) => s.setSelectedCustomBlock)
    const isCustomBlockSectionOpen = useTimetableUIStore(
        (s) => s.isCustomBlockSectionOpen,
    )
    const setIsCustomBlockSectionOpen = useTimetableUIStore(
        (s) => s.setIsCustomBlockSectionOpen,
    )

    const { query: timetables, setParams: setTimetablesParams } = useAPI(
        "GET",
        "/timetables",
        { enabled: status === "success" },
    )

    const [nonLoginTimetable, setNonLoginTimetable] = useState<TimetableItem[]>([])
    const { query: timetable } = useAPI("GET", `/timetables/${currentTimetableId}`, {
        enabled: currentTimetableId !== null && status === "success",
        retry: (failureCount, error) =>
            !isInvalidTimetableError(error) && failureCount < 1,
    })
    const { query: myTimetable, setParams: setMyTimetableParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
        { enabled: status === "success" },
    )

    const currentTimetableItems = useMemo(
        () =>
            status !== "success"
                ? nonLoginTimetable
                : currentTimetableId === null
                  ? (myTimetable.data?.timetableItems ?? [])
                  : (timetable.data?.timetableItems ?? []),
        [currentTimetableId, myTimetable.data, nonLoginTimetable, status, timetable.data],
    )
    const currentTimetableLectures = useMemo(
        () =>
            currentTimetableItems.flatMap((item) =>
                item.kind === TimetableItemKind.LECTURE ? [item.data] : [],
            ),
        [currentTimetableItems],
    )
    const currentCustomBlocks = useMemo(
        () =>
            currentTimetableItems.flatMap((item) =>
                item.kind === TimetableItemKind.CUSTOM ? [item.data] : [],
            ),
        [currentTimetableItems],
    )
    const { cloneTimetable, isCloning } = useTimetableClone(currentTimetableItems)

    const canDeleteLecture = status !== "success" || currentTimetableId !== null
    const refetchTimetables = timetables.refetch

    useEffect(() => {
        if (currentTimetableId === null || !isInvalidTimetableError(timetable.error))
            return

        setCurrentTimetableId(null)
        void refetchTimetables()
    }, [currentTimetableId, refetchTimetables, setCurrentTimetableId, timetable.error])

    useEffect(() => {
        setHoveredLectures([])
        setSelectedItems([])
    }, [mobileSearchOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !isTablet &&
                searchAreaRef.current &&
                !searchAreaRef.current.contains(event.target as Node) &&
                timetableAreaRef.current &&
                !timetableAreaRef.current.contains(event.target as Node)
            ) {
                setHoveredLectures([])
                setSelectedItems([])
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isTablet])

    useEffect(() => {
        setSelectedItems([])
        setHoveredLectures([])

        if (year !== -1) {
            setMyTimetableParams({ year: year, semester: semesterEnum })
            setTimetablesParams({ year: year, semester: semesterEnum })
        }
        setNonLoginTimetable([])
    }, [year, semesterEnum])

    useEffect(() => {
        setSelectedItems([])
        setHoveredLectures([])
        setSelectedCustomBlock(null)
        setIsCustomBlockSectionOpen(false)
    }, [currentTimetableId])

    useEffect(() => {
        if (timeFilter !== null && isTablet && !isCustomBlockSectionOpen) {
            setMobileSearchOpen(true)
        }
    }, [isCustomBlockSectionOpen, isTablet, setMobileSearchOpen, timeFilter])

    const {
        addLectures,
        removeLectures,
        addItems,
        removeItems,
        addCustomBlock,
        updateCustomBlock,
        isPending,
        changeSemester,
        undo,
        redo,
    } = useTimetableEditor({
        currentTimetableItems,
        nonLoginTimetable,
        setNonLoginTimetable,
    })

    const handleDeleteLecture = useMemo(
        () => (canDeleteLecture ? (id: number) => removeLectures([id]) : undefined),
        [canDeleteLecture, removeLectures],
    )
    const closeMobileLectureModal = useCallback(() => {
        setHoveredLectures([])
        setSelectedItems([])
    }, [setHoveredLectures, setSelectedItems])

    const { onItemSelect } = useTimetableKeyboard({
        currentTimetableItems,
        undo,
        redo,
        addLectures,
        removeLectures,
        addItems,
        removeItems,
        timetableIds: [
            null,
            ...([...(timetables.data?.timetables ?? [])]
                .sort((a, b) => a.timeTableOrder - b.timeTableOrder)
                .map((t) => t.id) || []),
        ],
        isLoggedIn: status === "success",
        changeSemester,
        duplicateTimetable: cloneTimetable,
    })

    const handleItemSelect = useCallback(
        (item: TimetableItem, event?: React.MouseEvent) => {
            onItemSelect(item, event)
            const isMultipleSelection =
                event?.ctrlKey || event?.metaKey || event?.shiftKey
            if (item.kind === TimetableItemKind.CUSTOM && !isMultipleSelection) {
                setSelectedCustomBlock(item.data)
                setTimeFilter({
                    day: item.data.day,
                    begin: item.data.begin,
                    end: item.data.end,
                })
                setIsCustomBlockSectionOpen(true)
            } else {
                setIsCustomBlockSectionOpen(false)
                setSelectedCustomBlock(null)
            }
        },
        [
            onItemSelect,
            setIsCustomBlockSectionOpen,
            setSelectedCustomBlock,
            setTimeFilter,
        ],
    )
    const handleLectureSelect = useCallback(
        (lecture: Lecture, event?: React.MouseEvent) =>
            handleItemSelect({ kind: TimetableItemKind.LECTURE, data: lecture }, event),
        [handleItemSelect],
    )
    const customBlockEditorProps = {
        addCustomBlock,
        updateCustomBlock,
        removeItems,
        isPending,
    }

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
                            duplicateTimetable={cloneTimetable}
                            isCloning={isCloning}
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
                                    timetableItems={currentTimetableItems}
                                    needLectureDeletable={canDeleteLecture}
                                    onItemSelect={handleItemSelect}
                                    isCustomBlockSectionOpen={isCustomBlockSectionOpen}
                                    flashItemKeys={flashItemKeys ?? undefined}
                                    deleteLecture={handleDeleteLecture}
                                    hoveredLectures={hoveredLectures}
                                    setHoveredLectures={setHoveredLectures}
                                    selectedItems={selectedItems}
                                    timeFilter={timeFilter}
                                    setTimeFilter={setTimeFilter}
                                />
                            </TimetableArea>
                        </Block>
                    </ContentsAreaWrapper>

                    {/* 중간: MobileControlBar + TimetableInfoArea */}
                    <TimetableInfoArea>
                        {isCustomBlockSectionOpen ? (
                            <CustomBlockSection {...customBlockEditorProps} />
                        ) : (
                            <TimetableInfoSection
                                timetableLectures={currentTimetableLectures}
                                customBlocks={currentCustomBlocks}
                            />
                        )}
                    </TimetableInfoArea>
                    <MobileControlBar direction="row" gap={0}>
                        <UtilButtonsSubSection
                            timetableName={currentTimetableName}
                            timetableLectures={currentTimetableLectures}
                            customBlocks={currentCustomBlocks}
                            year={year}
                            semester={semesterEnum}
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
                                    onLectureSelect={handleLectureSelect}
                                />
                            </LectureListArea>
                        </SearchAreaWrapper>
                    )}

                    {/* 모달 */}
                    {selectedLectures.length > 0 && (
                        <Modal
                            ariaLabel={selectedLectures
                                .map((lecture) => lecture.name)
                                .join(", ")}
                            isOpen={selectedLectures.length > 0}
                            onClose={closeMobileLectureModal}
                            fullScreen={true}
                            header={false}
                        >
                            <LectureDetailSection
                                addLectures={addLectures}
                                removeLectures={handleDeleteLecture}
                                onMobileModalClose={closeMobileLectureModal}
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
                                    customBlocks={currentCustomBlocks}
                                    year={year}
                                    semester={semesterEnum}
                                />
                            </UtilButtonsArea>
                        )}
                        {/*과목 목록 영역*/}
                        <LectureListArea style={{ overflow: "auto" }}>
                            <LectureListSection
                                timetableLectures={currentTimetableLectures}
                                addLectures={addLectures}
                                onLectureSelect={handleLectureSelect}
                            />
                        </LectureListArea>
                        {!isDesktop && <StyledDivider direction="column" />}
                        {/*과목 정보 영역*/}
                        <LectureInfoArea style={{ overflow: "auto" }}>
                            {isCustomBlockSectionOpen ? (
                                <CustomBlockSection {...customBlockEditorProps} />
                            ) : (
                                <LectureDetailSection
                                    timetableLectures={currentTimetableLectures}
                                    addLectures={addLectures}
                                    removeLectures={handleDeleteLecture}
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
                                duplicateTimetable={cloneTimetable}
                                isCloning={isCloning}
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
                                        timetableItems={currentTimetableItems}
                                        needLectureDeletable={canDeleteLecture}
                                        onItemSelect={handleItemSelect}
                                        isCustomBlockSectionOpen={
                                            isCustomBlockSectionOpen
                                        }
                                        flashItemKeys={flashItemKeys ?? undefined}
                                        deleteLecture={handleDeleteLecture}
                                        hoveredLectures={hoveredLectures}
                                        setHoveredLectures={setHoveredLectures}
                                        selectedItems={selectedItems}
                                        timeFilter={timeFilter}
                                        setTimeFilter={setTimeFilter}
                                    />
                                </TimetableArea>
                                {!isLaptop && <StyledDivider direction="column" />}
                                {/*시간표 정보 영역*/}
                                <TimetableInfoArea>
                                    <TimetableInfoSection
                                        timetableLectures={currentTimetableLectures}
                                        customBlocks={currentCustomBlocks}
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
