import { Fragment, memo, useCallback, useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import GridWrapper from "@/common/primitives/GridWrapper"
import Typography from "@/common/primitives/Typography"
import { type Lecture } from "@/common/schemas/lecture"
import { type TimeBlock } from "@/common/schemas/timeblock"

import {
    HoverTile,
    LECTURE_TILE_CLASSNAME,
    LectureTile,
    LectureTileHoverCss,
} from "./Tile"

const TIME_BEGIN = 8
const TIME_END = 24

const TIMES24 = Array.from(
    { length: TIME_END - TIME_BEGIN + 1 },
    (_, i) => TIME_BEGIN + i,
)

const TIMES = TIMES24.map((time) => (time % 12 || 12).toString())

const SLOT_COUNT = (TIMES.length - 1) * 2

const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday"]

const HEADER_HEIGHT = 20
const HEADER_CALIBRATION = 0.8
const ROW_GAP = 5
const LINE_HEIGHT = 1

const BackgroundGrid = styled(GridWrapper)`
    z-index: 1;
`

const OverlayGrid = styled(GridWrapper)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`

const BackgroundGridBlock = styled(FlexWrapper)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${LINE_HEIGHT}px dashed ${({ theme }) => theme.colors.Line.block};
    }

    &.hour {
        border-top: ${LINE_HEIGHT}px solid ${({ theme }) => theme.colors.Line.block};
    }

    &.last {
        border-bottom: ${LINE_HEIGHT}px solid ${({ theme }) => theme.colors.Line.darker};
    }

    &.bold {
        border-color: ${({ theme }) => theme.colors.Line.darker};
    }

    user-select: none;

    [data-need-time-filter="true"] & {
        pointer-events: auto;
        cursor: pointer;

        :hover div {
            background: rgba(229, 76, 101, 0.2);
        }
    }

    [data-need-time-filter="true"][data-is-dragging="true"] & {
        :hover div {
            background: none;
        }

        cursor: ns-resize;
    }
`

interface BackgroundGridBlockProps {
    dayIdx: number
    timeIdx: number
    [key: string]: any
}

const MemoizedBackgroundGridBlock = memo(
    ({ dayIdx, timeIdx, ...rest }: BackgroundGridBlockProps) => {
        return (
            <BackgroundGridBlock
                direction="column"
                gap={0}
                padding="1px"
                align="stretch"
                justify="stretch"
                {...rest}
            >
                <FlexWrapper
                    direction="column"
                    gap={0}
                    flex="1 1 auto"
                    style={{ borderRadius: "4px", pointerEvents: "none" }}
                />
            </BackgroundGridBlock>
        )
    },
)

const LectureTileWrapper = styled.div<{ lectureId: number }>`
    display: contents;

    &:has(.${LECTURE_TILE_CLASSNAME}:hover) .${LECTURE_TILE_CLASSNAME} {
        ${({ theme }) => LectureTileHoverCss(theme)}
    }
`

interface LectureTilesProps {
    lecture: Lecture
    handleLectureTileHover?: (lecture: Lecture) => void
    handleLectureTileSelect?: (lecture: Lecture) => void
    deleteLecture?: (lecture: Lecture) => void
}

const MemoizedLectureTiles = memo(
    ({
        lecture,
        handleLectureTileHover,
        handleLectureTileSelect,
        deleteLecture,
    }: LectureTilesProps) => {
        const handleMouseEnter = useCallback(() => {
            handleLectureTileHover?.(lecture)
        }, [handleLectureTileHover, lecture])

        const handleMouseClick = useCallback(() => {
            console.log(handleLectureTileSelect, lecture)
            handleLectureTileSelect?.(lecture)
        }, [handleLectureTileSelect, lecture])

        const deleteLectureCallback = useCallback(() => {
            deleteLecture?.(lecture)
        }, [deleteLecture, lecture])

        return (
            <LectureTileWrapper
                lectureId={lecture.id}
                onPointerEnter={handleMouseEnter}
                onPointerDown={handleMouseClick}
                onTouchMove={handleMouseEnter}
            >
                {lecture.classes.map((_, classIdx) => (
                    <LectureTile
                        key={`${classIdx}-lecture`}
                        lecture={lecture}
                        classIdx={classIdx}
                        deleteLecture={deleteLectureCallback}
                    />
                ))}
            </LectureTileWrapper>
        )
    },
    (prevProps, nextProps) => {
        return (
            prevProps.lecture.id === nextProps.lecture.id &&
            prevProps.handleLectureTileHover === nextProps.handleLectureTileHover &&
            prevProps.handleLectureTileSelect === nextProps.handleLectureTileSelect &&
            prevProps.deleteLecture === nextProps.deleteLecture
        )
    },
)

interface CustomTimeTableGridProps {
    lectures: Lecture[]
    cellWidth?: string
    needTimeFilter?: boolean
    setTimeFilter?: React.Dispatch<React.SetStateAction<TimeBlock | null>>
    needLectureInteraction?: boolean
    needLectureDeletable?: boolean
    deleteLecture?: (lectureId: number) => void
    hoveredLectures?: Lecture[]
    setHoveredLectures?: React.Dispatch<React.SetStateAction<Lecture[]>>
    selectedLecture?: Lecture | null
    setSelectedLecture?: React.Dispatch<React.SetStateAction<Lecture | null>>
}

function CustomTimeTableGrid({
    lectures,
    cellWidth,
    needTimeFilter = true,
    setTimeFilter,
    needLectureInteraction = true,
    needLectureDeletable = true,
    deleteLecture,
    hoveredLectures = [],
    setHoveredLectures,
    selectedLecture = null,
    setSelectedLecture,
}: CustomTimeTableGridProps) {
    const { t } = useTranslation()

    const backgroundRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const draggingRef = useRef<boolean>(false)
    const anchorRef = useRef<number | null>(null)

    const timeRef = useRef<[number, number] | null>(null)
    const dayRef = useRef<number | null>(null)

    const [ghostLecture, setGhostLecture] = useState<Lecture | null>(null)

    const handlePointerDown = useCallback((x: number, y: number) => {
        const target = document.elementFromPoint(x, y)
        if (target == null || !target.classList.contains("background-grid-block")) return
        const timeIdx = parseInt(target.getAttribute("data-time-idx") || "", 10)
        const dayIdx = parseInt(target.getAttribute("data-day-idx") || "", 10)
        if (timeIdx == null || dayIdx == null) return
        const startRow = timeIdx + 2
        overlayRef.current?.style.setProperty("--hover-day", (dayIdx + 1).toString())
        overlayRef.current?.style.setProperty("--hover-start", startRow.toString())
        overlayRef.current?.style.setProperty("--hover-end", (startRow + 1).toString())
        overlayRef.current?.setAttribute("data-is-dragging", "true")
        backgroundRef.current?.setAttribute("data-is-dragging", "true")
        draggingRef.current = true

        timeRef.current = [timeIdx, timeIdx + 1]
        dayRef.current = dayIdx
        anchorRef.current = timeIdx
    }, [])

    const handlePointerMove = useCallback((x: number, y: number) => {
        const target = document.elementFromPoint(x, y)
        if (target == null || !target.classList.contains("background-grid-block")) return
        const timeIdx = parseInt(target.getAttribute("data-time-idx") || "", 10)
        if (timeIdx == null) return
        const start = anchorRef.current == null ? timeIdx : anchorRef.current
        const end = timeIdx
        const minIdx = Math.min(start, end)
        const maxIdx = Math.max(start, end)
        const rowStart = minIdx + 2
        const rowEnd = maxIdx + 3
        overlayRef.current?.style.setProperty("--hover-start", rowStart.toString())
        overlayRef.current?.style.setProperty("--hover-end", rowEnd.toString())
        timeRef.current = [minIdx, maxIdx + 1]
    }, [])

    const handlePointerLeave = useCallback(() => {
        overlayRef.current?.setAttribute("data-is-dragging", "false")
        backgroundRef.current?.setAttribute("data-is-dragging", "false")

        if (timeRef.current && dayRef.current !== null)
            setTimeFilter?.({
                day: dayRef.current,
                begin: (TIME_BEGIN + timeRef.current[0] * 0.5) * 60,
                end: (TIME_BEGIN + timeRef.current[1] * 0.5) * 60,
            })

        draggingRef.current = false
        timeRef.current = null
        dayRef.current = null
        anchorRef.current = null
    }, [setTimeFilter])

    const handleMouseDown = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            if (draggingRef.current || !needTimeFilter) return
            handlePointerDown(e.clientX, e.clientY)
        },
        [needTimeFilter],
    )

    const handleMouseMove = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            if (!draggingRef.current || anchorRef.current === null) return
            handlePointerMove(e.clientX, e.clientY)
        },
        [handlePointerMove],
    )

    const handleTouchMove = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            if (!draggingRef.current || anchorRef.current === null) return
            const touch = e.touches[0]
            if (touch == null) return
            handlePointerMove(touch.clientX, touch.clientY)
        },
        [handlePointerMove],
    )

    const handleLectureTileHoverCallBack = useCallback(
        (lecture: Lecture) => {
            if (!needLectureInteraction) return

            setHoveredLectures?.([lecture])
        },
        [setHoveredLectures, needLectureInteraction],
    )

    const handleLectureTileSelectCallback = useCallback(
        (lecture: Lecture) => {
            console.log(lecture)
            if (!needLectureInteraction) return

            setSelectedLecture?.((prev) => {
                return prev?.id === lecture.id ? null : lecture
            })
        },
        [setSelectedLecture, needLectureInteraction],
    )

    const clearHoveredLecturesCallback = useCallback(() => {
        setHoveredLectures?.([])
        overlayRef.current?.setAttribute("data-is-hovering", "false")
    }, [setHoveredLectures])

    const deleteLectureCallback = useCallback(
        (lecture: Lecture) => {
            if (needLectureInteraction && needLectureDeletable)
                deleteLecture?.(lecture.id)
        },
        [needLectureDeletable, deleteLecture],
    )

    useEffect(() => {
        if (!needLectureInteraction) return

        if (
            hoveredLectures[0] &&
            !hoveredLectures.some((lec) => lec.id === selectedLecture?.id)
        ) {
            setGhostLecture?.(hoveredLectures[0])
        }

        const hoveredIds = hoveredLectures.map((lec) => lec.id).join(" ")

        overlayRef.current?.setAttribute("data-hovered-lectures", hoveredIds)
    }, [
        hoveredLectures,
        selectedLecture,
        setSelectedLecture,
        needLectureInteraction,
        lectures,
    ])

    useEffect(() => {
        if (!needLectureInteraction) return

        const selectedId = selectedLecture ? selectedLecture.id.toString() : ""

        if (selectedId !== "")
            overlayRef.current?.setAttribute("data-selected-lecture", selectedId)
        else overlayRef.current?.setAttribute("data-selected-lecture", "")
    }, [selectedLecture, needLectureInteraction])

    return (
        <FlexWrapper
            direction="row"
            gap={ROW_GAP * 2}
            align="stretch"
            justify="stretch"
            flex="1 1 auto"
            style={{ userSelect: "none" }}
        >
            <FlexWrapper
                direction="column"
                gap={0}
                align="stretch"
                padding={`${HEADER_HEIGHT * HEADER_CALIBRATION}px 0 0 0`}
            >
                <FlexWrapper
                    direction="column"
                    gap={0}
                    align="end"
                    justify="space-between"
                    flex="1 1 auto"
                    style={{ fontSize: "8px" }}
                >
                    {TIMES.map((time, idx) => (
                        <Typography key={idx} color="Text.dark">
                            {time}
                        </Typography>
                    ))}
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
                direction="column"
                gap={0}
                align="stretch"
                justify="stretch"
                flex="1 1 auto"
                padding={`0 0 ${HEADER_HEIGHT * (1 - HEADER_CALIBRATION)}px 0`}
                className="timetable-grid-wrapper"
            >
                <BackgroundGrid
                    columns={`repeat(${DAYS.length}, ${cellWidth || "1fr"})`}
                    rows={`${HEADER_HEIGHT}px repeat(${SLOT_COUNT}, 1fr)`}
                    flow="column"
                    gap={`0px ${ROW_GAP}px`}
                    alignItems="stretch"
                    justifyItems="stretch"
                    ref={backgroundRef}
                    data-is-dragging="false"
                    data-need-time-filter={needTimeFilter}
                    {...(needTimeFilter
                        ? {
                              onPointerDown: handleMouseDown,
                              onPointerMove: handleMouseMove,
                              onPointerUp: handlePointerLeave,
                              onPointerLeave: handlePointerLeave,
                              onTouchMove: handleTouchMove,
                              onTouchEnd: handlePointerLeave,
                          }
                        : {})}
                >
                    {DAYS.map((day, dayIdx) => (
                        <Fragment key={day}>
                            <FlexWrapper direction="column" gap={0} align="center">
                                <Typography type="Small" color="Text.dark">
                                    {t(`common.days.${day}`)}
                                </Typography>
                            </FlexWrapper>

                            {Array.from({ length: SLOT_COUNT }).map((_, timeIdx) => (
                                <MemoizedBackgroundGridBlock
                                    key={`${day}-${timeIdx}-memo`}
                                    dayIdx={dayIdx}
                                    timeIdx={timeIdx}
                                    className={[
                                        "background-grid-block",
                                        timeIdx % 2 === 0 ? "hour" : "half",
                                        timeIdx === SLOT_COUNT - 1 ? "last" : "",
                                        timeIdx % 2 == 0 &&
                                        (TIMES24[Math.floor(timeIdx / 2)] || 0) % 6 === 0
                                            ? "bold"
                                            : "",
                                    ].join(" ")}
                                    data-day-idx={dayIdx}
                                    data-time-idx={timeIdx}
                                />
                            ))}
                        </Fragment>
                    ))}
                </BackgroundGrid>
                <OverlayGrid
                    columns={`repeat(${DAYS.length}, ${cellWidth || "1fr"})`}
                    rows={`${HEADER_HEIGHT}px repeat(${SLOT_COUNT}, 1fr)`}
                    flow="column"
                    gap={`${LINE_HEIGHT}px ${ROW_GAP}px`}
                    alignItems="stretch"
                    justifyItems="stretch"
                    padding={`0 0 ${HEADER_HEIGHT * (1 - HEADER_CALIBRATION)}px 0`}
                    ref={overlayRef}
                    data-interaction={needLectureInteraction}
                    data-lecture-deletable={needLectureDeletable}
                    data-is-dragging={false}
                    data-hovered-lectures=""
                    data-selected-lecture=""
                    onPointerLeave={clearHoveredLecturesCallback}
                    onTouchEnd={clearHoveredLecturesCallback}
                >
                    {needTimeFilter && <HoverTile />}
                    {lectures.map((lecture, lectureIdx) => (
                        <MemoizedLectureTiles
                            key={`${lecture.id}-lecture-tile-${lectureIdx}`}
                            lecture={lecture}
                            deleteLecture={deleteLectureCallback}
                            handleLectureTileHover={handleLectureTileHoverCallBack}
                            handleLectureTileSelect={handleLectureTileSelectCallback}
                        />
                    ))}
                    {ghostLecture && (
                        <MemoizedLectureTiles
                            lecture={ghostLecture}
                            deleteLecture={deleteLectureCallback}
                            handleLectureTileHover={handleLectureTileHoverCallBack}
                            handleLectureTileSelect={handleLectureTileSelectCallback}
                        />
                    )}
                </OverlayGrid>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default memo(CustomTimeTableGrid, (prevProps, nextProps) => {
    return (
        prevProps.lectures === nextProps.lectures &&
        prevProps.cellWidth === nextProps.cellWidth &&
        prevProps.needTimeFilter === nextProps.needTimeFilter &&
        prevProps.needLectureInteraction === nextProps.needLectureInteraction &&
        prevProps.needLectureDeletable === nextProps.needLectureDeletable &&
        prevProps.deleteLecture === nextProps.deleteLecture &&
        prevProps.hoveredLectures === nextProps.hoveredLectures &&
        prevProps.setHoveredLectures === nextProps.setHoveredLectures &&
        prevProps.selectedLecture === nextProps.selectedLecture &&
        prevProps.setSelectedLecture === nextProps.setSelectedLecture
    )
})
