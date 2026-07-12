import { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { WeekdayEnum } from "@/common/enum/weekdayEnum"
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
    OverflowTile,
    OverlapTile,
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

const TimetableGridWrapper = styled(FlexWrapper)`
    grid-row: 1 / ${SLOT_COUNT + 5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${SLOT_COUNT + 2};
    }
`

const OverflowGridWrapper = styled(FlexWrapper)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${SLOT_COUNT + 2} / ${SLOT_COUNT + 5};
        display: flex;
    }
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

        @media (hover: hover) {
            :hover div {
                background: rgba(229, 76, 101, 0.2);
            }
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

    .custom-timetable:has(
            [data-lecture-id="${({ lectureId }) => lectureId}"]
                .${LECTURE_TILE_CLASSNAME}:hover
        )
        &
        .${LECTURE_TILE_CLASSNAME} {
        ${({ theme }) => LectureTileHoverCss(theme)}
    }
`

interface LectureTilesProps {
    lecture: Lecture
    handleLectureTileHover?: (lecture: Lecture) => void
    handleLectureTileLeave?: () => void
    handleLectureTileSelect?: (lecture: Lecture, e?: React.PointerEvent) => void
    deleteLecture?: (lecture: Lecture) => void
    isGhost?: boolean
}

const MemoizedLectureTiles = memo(
    ({
        lecture,
        handleLectureTileHover,
        handleLectureTileLeave,
        handleLectureTileSelect,
        deleteLecture,
        isGhost = false,
    }: LectureTilesProps) => {
        const handleMouseEnter = useCallback(() => {
            handleLectureTileHover?.(lecture)
        }, [handleLectureTileHover, lecture])

        const handleMouseLeave = useCallback(() => {
            handleLectureTileLeave?.()
        }, [handleLectureTileLeave])

        const handleMouseClick = useCallback(
            (e: React.PointerEvent) => {
                handleLectureTileSelect?.(lecture, e)
            },
            [handleLectureTileSelect, lecture],
        )

        const deleteLectureCallback = useCallback(() => {
            deleteLecture?.(lecture)
        }, [deleteLecture, lecture])

        return (
            <LectureTileWrapper
                lectureId={lecture.id}
                data-lecture-id={lecture.id}
                onPointerEnter={handleMouseEnter}
                onPointerLeave={handleMouseLeave}
                onPointerDown={handleMouseClick}
                onTouchMove={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
                {...(isGhost ? { "data-ghost": true } : {})}
            >
                {lecture.classes.map((cls, classIdx) =>
                    validTime({
                        day: cls.day,
                        begin: cls.begin,
                        end: cls.end,
                    }) ? (
                        <LectureTile
                            key={`${classIdx}-lecture`}
                            lecture={lecture}
                            classIdx={classIdx}
                            deleteLecture={
                                deleteLecture ? deleteLectureCallback : undefined
                            }
                        />
                    ) : null,
                )}
            </LectureTileWrapper>
        )
    },
    (prevProps, nextProps) => {
        return (
            prevProps.lecture === nextProps.lecture &&
            prevProps.handleLectureTileHover === nextProps.handleLectureTileHover &&
            prevProps.handleLectureTileSelect === nextProps.handleLectureTileSelect &&
            prevProps.deleteLecture === nextProps.deleteLecture
        )
    },
)

interface OverlapTileProps {
    overlaps: {
        day: WeekdayEnum
        begin: number
        end: number
    }[]
}

const OverlapTileWrapper = styled.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${LECTURE_TILE_CLASSNAME}:hover) .${LECTURE_TILE_CLASSNAME} {
        ${({ theme }) => LectureTileHoverCss(theme)}
    }
`

const MemoizedOverlapTiles = memo(({ overlaps }: OverlapTileProps) => {
    return (
        <OverlapTileWrapper>
            {overlaps.map((overlap, idx) => (
                <OverlapTile key={idx} {...overlap} />
            ))}
        </OverlapTileWrapper>
    )
})

function validTime(time: TimeBlock | null) {
    if (!time) return false
    const begin = time.begin / 60 - TIME_BEGIN
    const end = time.end / 60 - TIME_BEGIN

    const { day } = time

    return WeekdayEnum.Mon <= day && day <= WeekdayEnum.Fri && end - begin >= 0.5
}

const OverflowTileWrapper = styled.div<{ lectureId: number }>`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({ lectureId }) => lectureId}"]
                .${LECTURE_TILE_CLASSNAME}:hover
        )
        &
        .${LECTURE_TILE_CLASSNAME} {
        ${({ theme }) => LectureTileHoverCss(theme)}
    }
`

interface OverflowTileProps {
    lecture: Lecture
    isGhost?: boolean
    deleteLecture?: (lecture: Lecture) => void
    handleLectureTileHover?: (lecture: Lecture) => void
    handleLectureTileLeave?: () => void
    handleLectureTileSelect?: (lecture: Lecture, e?: React.PointerEvent) => void
}

const MemoizedOverflowTiles = memo(
    ({
        lecture,
        isGhost,
        deleteLecture,
        handleLectureTileHover,
        handleLectureTileLeave,
        handleLectureTileSelect,
    }: OverflowTileProps) => {
        const handleMouseEnter = useCallback(() => {
            handleLectureTileHover?.(lecture)
        }, [handleLectureTileHover, lecture])

        const handleMouseLeave = useCallback(() => {
            handleLectureTileLeave?.()
        }, [handleLectureTileLeave])

        const handleMouseClick = useCallback(
            (e: React.PointerEvent) => {
                handleLectureTileSelect?.(lecture, e)
            },
            [handleLectureTileSelect, lecture],
        )

        const deleteLectureCallback = useCallback(() => {
            deleteLecture?.(lecture)
        }, [deleteLecture, lecture])

        return lecture.classes.length === 0 ||
            lecture.classes.filter((cls) => !validTime({ ...cls })).length > 0 ? (
            <OverflowTileWrapper
                lectureId={lecture.id}
                data-lecture-id={lecture.id}
                data-ghost={isGhost ? true : undefined}
                onPointerEnter={handleMouseEnter}
                onPointerLeave={handleMouseLeave}
                onPointerDown={handleMouseClick}
                onTouchMove={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
            >
                {lecture.classes.length === 0 ? (
                    <OverflowTile
                        key={lecture.id}
                        lecture={lecture}
                        deleteLecture={isGhost ? undefined : deleteLectureCallback}
                    />
                ) : (
                    lecture.classes.map((cls, idx) => {
                        const { day, begin, end } = cls
                        const time = {
                            day,
                            begin,
                            end,
                        }

                        if (validTime(time)) return null

                        return (
                            <OverflowTile
                                key={idx}
                                lecture={lecture}
                                classIdx={idx}
                                deleteLecture={
                                    isGhost ? undefined : deleteLectureCallback
                                }
                            />
                        )
                    })
                )}
            </OverflowTileWrapper>
        ) : null
    },
    (prevProps, nextProps) => {
        return prevProps.lecture === nextProps.lecture
    },
)

const CurrentTimeBar = styled.div<{ ratio: number; dayIndex: number }>`
    grid-column: ${({ dayIndex }) => dayIndex + 1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${HEADER_HEIGHT}px + (100% - ${HEADER_HEIGHT * (2 - HEADER_CALIBRATION)}px) *
            ${({ ratio }) => ratio}
    );
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.Highlight.default};
    z-index: 10;
    pointer-events: none;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.Highlight.default};
    }
`

interface CustomTimeTableGridProps {
    lectures: Lecture[]
    cellWidth?: string
    needTimeFilter?: boolean
    timeFilter?: TimeBlock | null
    setTimeFilter?: React.Dispatch<React.SetStateAction<TimeBlock | null>>
    needLectureInteraction?: boolean
    needLectureDeletable?: boolean
    deleteLecture?: (lectureId: number) => void
    hoveredLectures?: Lecture[]
    setHoveredLectures?: React.Dispatch<React.SetStateAction<Lecture[]>>
    selectedLectures?: Lecture[]
    onLectureSelect?: (lecture: Lecture, e?: React.PointerEvent) => void
    needCurrentTimeBar?: boolean
    flashLectureIds?: number[]
}

function CustomTimeTableGrid({
    lectures,
    cellWidth,
    needTimeFilter = true,
    timeFilter,
    setTimeFilter,
    needLectureInteraction = true,
    needLectureDeletable = true,
    deleteLecture,
    hoveredLectures = [],
    setHoveredLectures,
    selectedLectures = [],
    onLectureSelect,
    needCurrentTimeBar = false,
    flashLectureIds = [],
}: CustomTimeTableGridProps) {
    const { t } = useTranslation()

    const customTimeTableRef = useRef<HTMLDivElement>(null)

    const backgroundRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const draggingRef = useRef<boolean>(false)
    const anchorRef = useRef<number | null>(null)

    const timeRef = useRef<[number, number] | null>(null)
    const dayRef = useRef<number | null>(null)

    const [currentTimeRatio, setCurrentTimeRatio] = useState<number | null>(null)
    const [currentDayIndex, setCurrentDayIndex] = useState<number>(-1)

    const updateCurrentTime = useCallback(() => {
        const now = new Date()
        const jsDay = now.getDay() // 0=Sun, 1=Mon, ..., 6=Sat
        const dayIndex = jsDay - 1 // 0=Mon, ..., 4=Fri

        const currentHour = now.getHours() + now.getMinutes() / 60
        if (
            currentHour < TIME_BEGIN ||
            currentHour > TIME_END ||
            dayIndex < 0 ||
            dayIndex > 4
        ) {
            setCurrentTimeRatio(null)
            return
        }

        const totalHours = TIME_END - TIME_BEGIN
        const elapsedHours = currentHour - TIME_BEGIN
        const ratio = elapsedHours / totalHours
        setCurrentTimeRatio(ratio)
        setCurrentDayIndex(dayIndex)
    }, [])

    useEffect(() => {
        if (!needCurrentTimeBar) return

        updateCurrentTime()
        const interval = setInterval(updateCurrentTime, 60 * 1000)
        window.addEventListener("resize", updateCurrentTime)

        return () => {
            clearInterval(interval)
            window.removeEventListener("resize", updateCurrentTime)
        }
    }, [needCurrentTimeBar, updateCurrentTime])

    const overflowLectures = useMemo(() => {
        const mergedLectures = [
            ...lectures,
            ...hoveredLectures,
            ...selectedLectures,
        ].filter((lecture): lecture is Lecture => lecture != null)

        const lectureMap = new Map<number, Lecture>()
        mergedLectures.forEach((lecture) => {
            lectureMap.set(lecture.id, lecture)
        })

        return Array.from(lectureMap.values())
    }, [lectures, hoveredLectures, selectedLectures])

    const ghostLectures = useMemo(() => {
        if (!needLectureInteraction) return []

        const hoveredGhosts = hoveredLectures.filter(
            (hLec) => !lectures.some((lec) => lec.id === hLec.id),
        )
        const selectedGhosts = selectedLectures.filter(
            (sLec) => !lectures.some((lec) => lec.id === sLec.id),
        )

        const allGhostsMap = new Map<number, Lecture>()
        selectedGhosts.forEach((lec) => allGhostsMap.set(lec.id, lec))
        hoveredGhosts.forEach((lec) => allGhostsMap.set(lec.id, lec))

        return Array.from(allGhostsMap.values())
    }, [hoveredLectures, selectedLectures, lectures, needLectureInteraction])

    const overlaps = useMemo(() => {
        if (!needLectureInteraction || ghostLectures.length === 0) return []

        const intervals: { day: WeekdayEnum; begin: number; end: number }[] = []

        ghostLectures.forEach((ghostLecture) => {
            ghostLecture.classes.forEach((gClass) => {
                lectures.forEach((lecture) => {
                    lecture.classes.forEach((lClass) => {
                        if (gClass.day === lClass.day) {
                            const gStart = gClass.begin
                            const gEnd = gClass.end
                            const lStart = lClass.begin
                            const lEnd = lClass.end

                            const overlapStart = Math.max(gStart, lStart)
                            const overlapEnd = Math.min(gEnd, lEnd)

                            if (overlapStart < overlapEnd) {
                                intervals.push({
                                    day: gClass.day,
                                    begin: (overlapStart / 60 - TIME_BEGIN) * 2,
                                    end: (overlapEnd / 60 - TIME_BEGIN) * 2,
                                })
                            }
                        }
                    })
                })
            })
        })

        return intervals
    }, [ghostLectures, lectures, needLectureInteraction])

    const hasOverflow = useMemo(() => {
        return overflowLectures.some((lecture) =>
            lecture.classes.some((cls) => !validTime({ ...cls })),
        )
    }, [overflowLectures])

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
        if (timeRef.current && dayRef.current !== null)
            setTimeFilter?.({
                day: dayRef.current,
                begin: (TIME_BEGIN + timeRef.current[0] * 0.5) * 60,
                end: (TIME_BEGIN + timeRef.current[1] * 0.5) * 60,
            })

        if (timeRef.current && timeRef.current[1] - timeRef.current[0] > 1) {
            overlayRef.current?.setAttribute("data-is-dragging", "wait")
            backgroundRef.current?.setAttribute("data-is-dragging", "wait")
        } else if (
            (timeRef.current && timeRef.current[1] - timeRef.current[0] <= 1) ||
            !timeFilter
        ) {
            overlayRef.current?.setAttribute("data-is-dragging", "false")
            backgroundRef.current?.setAttribute("data-is-dragging", "false")
            setTimeFilter?.(null)
        }

        draggingRef.current = false
        timeRef.current = null
        dayRef.current = null
        anchorRef.current = null
    }, [timeFilter, setTimeFilter])

    useEffect(() => {
        if (!timeFilter) {
            overlayRef.current?.setAttribute("data-is-dragging", "false")
            backgroundRef.current?.setAttribute("data-is-dragging", "false")
        }
    }, [timeFilter])

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
        (lecture: Lecture, e?: React.PointerEvent) => {
            if (!needLectureInteraction) return

            onLectureSelect?.(lecture, e)
        },
        [onLectureSelect, needLectureInteraction],
    )

    const clearHoveredLecturesCallback = useCallback(() => {
        setHoveredLectures?.([])
        overlayRef.current?.setAttribute("data-is-hovering", "false")
    }, [setHoveredLectures])

    const deleteLectureCallback = useCallback(
        (lecture: Lecture) => {
            if (needLectureInteraction && needLectureDeletable) {
                clearHoveredLecturesCallback()
                deleteLecture?.(lecture.id)
            }
        },
        [needLectureDeletable, deleteLecture, clearHoveredLecturesCallback],
    )

    return (
        <FlexWrapper
            direction="column"
            gap={8}
            align="stretch"
            justify="stretch"
            flex="1 1 auto"
            style={{ overflow: "hidden" }}
            className="custom-timetable"
            ref={customTimeTableRef}
            data-hovered-lectures={
                needLectureInteraction
                    ? hoveredLectures.map((lec) => lec.id).join(" ")
                    : ""
            }
            data-selected-lectures={
                needLectureInteraction
                    ? selectedLectures.map((lec) => lec.id).join(" ")
                    : ""
            }
            data-flash-lectures={flashLectureIds.join(" ")}
            data-interaction={needLectureInteraction}
            data-lecture-deletable={needLectureDeletable}
            onPointerLeave={clearHoveredLecturesCallback}
            onTouchEnd={clearHoveredLecturesCallback}
        >
            <GridWrapper
                columns="1fr"
                rows={`${HEADER_HEIGHT}px repeat(${SLOT_COUNT + 3}, 1fr)`}
                gap="0px"
                alignItems="stretch"
                justifyItems="stretch"
                flow="column"
            >
                <TimetableGridWrapper
                    direction="row"
                    gap={ROW_GAP * 2}
                    align="stretch"
                    justify="stretch"
                    flex="1 1 auto"
                    className={hasOverflow ? "has-overflow" : ""}
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
                                <Fragment key={`${day}-${dayIdx}`}>
                                    <FlexWrapper
                                        direction="column"
                                        gap={0}
                                        align="center"
                                    >
                                        <Typography type="Small" color="Text.dark">
                                            {t(`common.days.${day}`)}
                                        </Typography>
                                    </FlexWrapper>

                                    {Array.from({ length: SLOT_COUNT }).map(
                                        (_, timeIdx) => (
                                            <MemoizedBackgroundGridBlock
                                                key={`${day}-${timeIdx}-memo`}
                                                dayIdx={dayIdx}
                                                timeIdx={timeIdx}
                                                className={[
                                                    "background-grid-block",
                                                    timeIdx % 2 === 0 ? "hour" : "half",
                                                    timeIdx === SLOT_COUNT - 1
                                                        ? "last"
                                                        : "",
                                                    timeIdx % 2 === 0 &&
                                                    (TIMES24[Math.floor(timeIdx / 2)] ||
                                                        0) %
                                                        6 ===
                                                        0
                                                        ? "bold"
                                                        : "",
                                                ].join(" ")}
                                                data-day-idx={dayIdx}
                                                data-time-idx={timeIdx}
                                            />
                                        ),
                                    )}
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
                            data-is-dragging={false}
                        >
                            {needTimeFilter && <HoverTile />}
                            {lectures.map((lecture, lectureIdx) => (
                                <MemoizedLectureTiles
                                    key={`${lecture.id}-lecture-tile-${lectureIdx}`}
                                    lecture={lecture}
                                    deleteLecture={deleteLectureCallback}
                                    handleLectureTileHover={
                                        handleLectureTileHoverCallBack
                                    }
                                    handleLectureTileLeave={clearHoveredLecturesCallback}
                                    handleLectureTileSelect={
                                        handleLectureTileSelectCallback
                                    }
                                />
                            ))}
                            {ghostLectures.map((ghostLecture) => (
                                <MemoizedLectureTiles
                                    key={`ghost-${ghostLecture.id}`}
                                    lecture={ghostLecture}
                                    isGhost={true}
                                    handleLectureTileLeave={clearHoveredLecturesCallback}
                                />
                            ))}
                            {ghostLectures.length > 0 && (
                                <MemoizedOverlapTiles overlaps={overlaps} />
                            )}
                            {needCurrentTimeBar && currentTimeRatio !== null && (
                                <CurrentTimeBar
                                    ratio={currentTimeRatio}
                                    dayIndex={currentDayIndex}
                                />
                            )}
                        </OverlayGrid>
                    </FlexWrapper>
                </TimetableGridWrapper>

                <OverflowGridWrapper
                    direction="column"
                    gap={0}
                    align="stretch"
                    justify="stretch"
                    flex="1 1 auto"
                    padding={`0 0 0 18px`}
                    className={
                        "overflow-grid-wrapper" + (hasOverflow ? " has-overflow" : "")
                    }
                >
                    <GridWrapper
                        columns={`repeat(${DAYS.length}, ${cellWidth || "1fr"})`}
                        rows={`1fr`}
                        gap={`0px ${ROW_GAP}px`}
                        flow="row"
                        style={{ overflow: "hidden" }}
                    >
                        {overflowLectures.map((lecture, lectureIdx) => (
                            <MemoizedOverflowTiles
                                key={`${lecture.id}-overflow-${lectureIdx}`}
                                lecture={lecture}
                                isGhost={lectures.every((lec) => lec.id !== lecture.id)}
                                deleteLecture={deleteLectureCallback}
                                handleLectureTileSelect={handleLectureTileSelectCallback}
                                handleLectureTileHover={handleLectureTileHoverCallBack}
                                handleLectureTileLeave={clearHoveredLecturesCallback}
                            />
                        ))}
                    </GridWrapper>
                </OverflowGridWrapper>
            </GridWrapper>
        </FlexWrapper>
    )
}

export default memo(CustomTimeTableGrid, (prevProps, nextProps) => {
    return (
        prevProps.lectures === nextProps.lectures &&
        prevProps.hoveredLectures === nextProps.hoveredLectures &&
        prevProps.selectedLectures === nextProps.selectedLectures &&
        prevProps.timeFilter === nextProps.timeFilter &&
        prevProps.cellWidth === nextProps.cellWidth &&
        prevProps.needTimeFilter === nextProps.needTimeFilter &&
        prevProps.needLectureInteraction === nextProps.needLectureInteraction &&
        prevProps.needLectureDeletable === nextProps.needLectureDeletable &&
        prevProps.deleteLecture === nextProps.deleteLecture &&
        prevProps.onLectureSelect === nextProps.onLectureSelect &&
        prevProps.needCurrentTimeBar === nextProps.needCurrentTimeBar &&
        (prevProps.flashLectureIds ?? []).length ===
            (nextProps.flashLectureIds ?? []).length &&
        (prevProps.flashLectureIds ?? []).every(
            (id, index) => id === (nextProps.flashLectureIds ?? [])[index],
        )
    )
})
