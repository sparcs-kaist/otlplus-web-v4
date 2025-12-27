import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import { checkAnyOver24 } from "@/utils/timetable/checkAnyOver24"
import getColumnIndex from "@/utils/timetable/getColumnIndex"
import renderGrid from "@/utils/timetable/renderGrid"
import renderLectureTile from "@/utils/timetable/renderLectureTile"
import renderTargetArea from "@/utils/timetable/renderTargetArea"

interface GridProps {
    cellWidth?: number
    fullHeight?: number
    lectureSummary: Lecture[]
    setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    selected: Lecture | null
    setSelected: React.Dispatch<React.SetStateAction<Lecture | null>>
    removeFunction?: (lectureId: number) => void
}

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`

const TimeWrapper = styled.div`
    padding-top: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: calc(var(--cell-height) * 2 - 11px);
    font-size: 8px;
    line-height: 11px;
`

const DateWrapper = styled.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
`

const GridContainer = styled.div`
    display: inline-block;
    position: relative;
    user-select: none;
    touch-action: none;
`

const CustomTimeTableGrid: React.FC<GridProps> = ({
    cellWidth = 120,
    fullHeight = 800.5,
    lectureSummary,
    setTimeFilter,
    hover,
    setHover,
    selected,
    setSelected,
    removeFunction,
}) => {
    const { t } = useTranslation()

    const colPadding = 5
    const m = 5
    const begin = 8
    const gridRef = useRef<HTMLDivElement>(null)
    const dateHeader = [
        t("common.days.monday"),
        t("common.days.tuesday"),
        t("common.days.wednesday"),
        t("common.days.thursday"),
        t("common.days.friday"),
    ]
    const isAnyOver24 = checkAnyOver24(lectureSummary)
    const n = isAnyOver24 ? 38 : 32
    const end = isAnyOver24 ? 27 : 24
    const cellHeight = useMemo(() => fullHeight / 32, [fullHeight])

    const cssVariables = useMemo(
        () =>
            ({
                "--cell-height": `${cellHeight}px`,
                "--cell-width": `${cellWidth}px`,
                "--col-padding": `${colPadding}px`,
            }) as React.CSSProperties,
        [cellHeight, cellWidth, colPadding],
    )

    const [dragging, setDragging] = useState<boolean>(false)
    const [startRow, setStartRow] = useState<number | null>(null)
    const [lastRow, setLastRow] = useState<number | null>(null)
    const [col, setCol] = useState<number | null>(null)

    const [draggingArea, setDraggingArea] = useState<Map<number, boolean[]>>(
        new Map(
            Array.from({ length: m }, (_, rowIndex) => [rowIndex, Array(n).fill(null)]),
        ),
    )

    // Use refs for values needed in handleMouseUp to avoid re-creating the callback
    const startRowRef = useRef<number | null>(null)
    const lastRowRef = useRef<number | null>(null)
    const colRef = useRef<number | null>(null)

    // Sync state to refs
    startRowRef.current = startRow
    lastRowRef.current = lastRow
    colRef.current = col

    const handleMouseDown = useCallback(
        (event: React.MouseEvent) => {
            if (gridRef.current && hover == null && selected == null) {
                const gridRect = gridRef.current.getBoundingClientRect()
                const mouseX = event.clientX - gridRect.left
                const mouseY = event.clientY - gridRect.top
                const row = Math.floor(mouseY / cellHeight)
                const colIndex = getColumnIndex(
                    mouseX,
                    m,
                    [],
                    0,
                    cellWidth,
                    colPadding,
                    0,
                )
                if (row >= 0 && row < n && colIndex >= 0 && colIndex < m) {
                    setDragging(true)
                    setStartRow(row)
                    setLastRow(row)
                    setCol(colIndex)
                    setSelected(null)
                }
            }
        },
        [hover, selected, cellHeight, n, m, cellWidth, colPadding, setSelected],
    )

    const handleMouseMove = useCallback(
        (event: React.MouseEvent) => {
            if (dragging && gridRef.current) {
                const gridRect = gridRef.current.getBoundingClientRect()
                const mouseY = event.clientY - gridRect.top
                const row = Math.floor(mouseY / cellHeight)
                if (row >= 0 && row < n && col != null && col >= 0 && col < m) {
                    if (row !== lastRow) {
                        setLastRow(row)
                    }
                }
            }
        },
        [dragging, cellHeight, n, m, col, lastRow],
    )

    const handleMouseUp = useCallback(() => {
        setDraggingArea(
            new Map(
                Array.from({ length: m }, (_, rowIndex) => [
                    rowIndex,
                    Array(n).fill(null),
                ]),
            ),
        )
        const currentStartRow = startRowRef.current
        const currentLastRow = lastRowRef.current
        const currentCol = colRef.current
        if (currentStartRow != null && currentLastRow != null && currentCol != null) {
            const beginRow = Math.min(currentStartRow, currentLastRow)
            const endRow = Math.max(currentStartRow, currentLastRow)
            const timeBlock: TimeBlock = {
                day: currentCol,
                begin: beginRow * 30 + 8 * 60,
                end: (endRow + 1) * 30 + 8 * 60,
            }
            setTimeFilter(timeBlock)
        }
        setStartRow(null)
        setLastRow(null)
        setDragging(false)
    }, [m, n, setTimeFilter])

    const handleTouchStart = useCallback(
        (event: React.TouchEvent) => {
            if (gridRef.current && hover == null && selected == null) {
                const touch = event.touches[0]
                if (!touch) return
                const gridRect = gridRef.current.getBoundingClientRect()
                const mouseX = touch.clientX - gridRect.left
                const mouseY = touch.clientY - gridRect.top
                const row = Math.floor(mouseY / cellHeight)
                const colIndex = getColumnIndex(
                    mouseX,
                    m,
                    [],
                    0,
                    cellWidth,
                    colPadding,
                    0,
                )
                if (row >= 0 && row < n && colIndex >= 0 && colIndex < m) {
                    setDragging(true)
                    setStartRow(row)
                    setLastRow(row)
                    setCol(colIndex)
                    setSelected(null)
                }
            }
        },
        [hover, selected, cellHeight, n, m, cellWidth, colPadding, setSelected],
    )

    const handleTouchMove = useCallback(
        (event: React.TouchEvent) => {
            if (dragging && gridRef.current) {
                const touch = event.touches[0]
                if (!touch) return
                const gridRect = gridRef.current.getBoundingClientRect()
                const mouseY = touch.clientY - gridRect.top
                const row = Math.floor(mouseY / cellHeight)
                if (row >= 0 && row < n && col != null && col >= 0 && col < m) {
                    if (row !== lastRow) {
                        setLastRow(row)
                    }
                }
            }
        },
        [dragging, cellHeight, n, m, col, lastRow],
    )

    const handleTouchEnd = useCallback(() => {
        handleMouseUp()
    }, [handleMouseUp])

    useEffect(() => {
        if (dragging) {
            window.addEventListener("mouseup", handleMouseUp)
        }
        return () => {
            window.removeEventListener("mouseup", handleMouseUp)
        }
    }, [dragging, handleMouseUp])

    const getArea = (
        startRow: number,
        endRow: number,
        col: number,
    ): Map<number, boolean[]> => {
        const result = new Map(
            Array.from({ length: m }, (_, rowIndex) => [rowIndex, Array(n).fill(null)]),
        )
        for (let j = startRow; j < endRow + 1; j++) {
            result.get(col)![j] = true
        }

        return result
    }

    useLayoutEffect(() => {
        if (gridRef.current && dragging) {
            const _startRow = Math.min(startRow!, lastRow!)
            const _endRow = Math.max(startRow!, lastRow!)
            const targetArea = getArea(_startRow, _endRow, col!)
            setDraggingArea(targetArea)
        }
    }, [lastRow, startRow, dragging, col, m, n])

    const grid = useMemo(
        () => renderGrid(n, m, cellWidth, cellHeight, colPadding, [], 10, 0),
        [n, m, cellWidth, cellHeight, colPadding],
    )

    const lectureTiles = useMemo(
        () =>
            renderLectureTile(
                lectureSummary,
                cellWidth,
                cellHeight,
                colPadding,
                selected,
                setSelected,
                hover,
                setHover,
                dragging,
                removeFunction,
            ),
        [
            lectureSummary,
            cellWidth,
            cellHeight,
            colPadding,
            selected,
            setSelected,
            hover,
            setHover,
            dragging,
            removeFunction,
        ],
    )

    const handleClick = useCallback(() => {
        setSelected(null)
    }, [setSelected])

    const handleMouseUpWithStop = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            handleMouseUp()
        },
        [handleMouseUp],
    )

    return (
        <SectionWrapper style={cssVariables}>
            <TimeWrapper>
                {Array.from({ length: end - begin + 1 }, (_, index) => index + begin).map(
                    (number) => (
                        <Typography key={number} color="Text.default">
                            {number % 12 || 12}
                        </Typography>
                    ),
                )}
            </TimeWrapper>
            <FlexWrapper direction="column" gap={0}>
                <FlexWrapper direction="row" gap={5}>
                    {dateHeader.map(
                        (date, index) =>
                            date !== "none" && (
                                <DateWrapper
                                    key={index}
                                    style={date === "" ? { width: "10px" } : undefined}
                                >
                                    <Typography color="Text.default">{date}</Typography>
                                </DateWrapper>
                            ),
                    )}
                </FlexWrapper>
                <GridContainer
                    ref={gridRef}
                    onClick={handleClick}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpWithStop}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {grid}
                    {renderTargetArea(
                        true,
                        draggingArea,
                        "rgba(229, 76, 101, 0.5)",
                        cellHeight,
                        cellWidth,
                        2,
                        colPadding,
                        [],
                        0,
                        0,
                    )}
                    {lectureTiles}
                </GridContainer>
            </FlexWrapper>
        </SectionWrapper>
    )
}

export default React.memo(CustomTimeTableGrid)
