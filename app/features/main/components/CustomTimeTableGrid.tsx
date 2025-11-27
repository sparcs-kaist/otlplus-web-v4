import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import { checkAnyOver24 } from "@/utils/timetable/checkAnyOver24"
import renderGrid from "@/utils/timetable/renderGrid"
import renderLectureTile from "@/utils/timetable/renderLectureTile"
import renderTargetArea from "@/utils/timetable/renderTargetArea"

interface GridProps {
  cellWidth?: number
  lectureSummary: Lecture[]
  setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
  hover: Lecture | null
  setHover: React.Dispatch<React.SetStateAction<Lecture | null>>
  selected: Lecture | null
  setSelected: React.Dispatch<React.SetStateAction<Lecture | null>>
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: fit-content;
`

const TimeWrapper = styled.div<{ cellHeight: number }>`
  padding-top: 15px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  gap: ${({ cellHeight }) => `${cellHeight * 2 - 11}px`};
  font-size: 8px;
  line-height: 11px;
`

const DateWrapper = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  padding-bottom: 5px;
  text-align: center;
`

const CustomTimeTableGrid: React.FC<GridProps> = ({
  cellWidth = 120,
  lectureSummary,
  setTimeFilter,
  hover,
  setHover,
  selected,
  setSelected,
}) => {
  const { t } = useTranslation()

  const colPadding = 5
  const m = 5
  const begin = 8
  const gridRef = useRef<HTMLDivElement>(null)
  const isAnyOver24 = checkAnyOver24(lectureSummary)
  const n = isAnyOver24 ? 38 : 32
  const end = isAnyOver24 ? 27 : 24
  const [cellHeight, setCellHeight] = useState(isAnyOver24 ? 22 : 25)
  const [dynamicCellWidth, setDynamicCellWidth] = useState(cellWidth)

  // 전체 셀 크기를 반응형으로 조정하는 부분
  useEffect(() => {
    const handleResize = () => {
      const fullHeight = 926.5
      setCellHeight(fullHeight / 32)

      if (gridRef.current) {
        const gridContainer = gridRef.current.parentElement
        if (gridContainer) {
          const containerWidth = gridContainer.getBoundingClientRect().width
          // Account for:
          // - Time column width (~40px)
          // - Gap between time and grid (5px from parent FlexWrapper)
          // - Column padding between the 5 day columns (colPadding * 4 = 20px)
          const timeColumnWidth = 40
          const gapFromParent = 5
          const totalGapsBetweenColumns = colPadding * 4 // 4 gaps between 5 columns
          const availableWidth = containerWidth - timeColumnWidth - gapFromParent - totalGapsBetweenColumns
          const calculatedWidth = availableWidth / 5
          // Set minimum width for readability
          const minCellWidth = 32
          const newWidth = Math.max(calculatedWidth, minCellWidth)
          setDynamicCellWidth(newWidth)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [dragging, setDragging] = useState<boolean>(false)
  const [startRow, setStartRow] = useState<number | null>(null)
  const [lastRow, setLastRow] = useState<number | null>(null)
  const [col, setCol] = useState<number | null>(null)
  const [holding, setHolding] = useState<boolean>(false)

  const [draggingArea, setDraggingArea] = useState<Map<number, boolean[]>>(
    new Map(Array.from({ length: m }, (_, rowIndex) => [rowIndex, Array(n).fill(null)])),
  )

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
    if (gridRef.current && dragging && !holding) {
      const _startRow = Math.min(startRow!, lastRow!)
      const _endRow = Math.max(startRow!, lastRow!)
      const targetArea = getArea(_startRow, _endRow, col!)
      setDraggingArea(targetArea)
    }
  }, [lastRow, startRow])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const colIndex = Math.floor(x / dynamicCellWidth)
      const rowIndex = Math.floor(y / cellHeight)
      
      setDragging(true)
      setStartRow(rowIndex)
      setLastRow(rowIndex)
      setCol(colIndex)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging && gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect()
      const y = e.clientY - rect.top
      const rowIndex = Math.floor(y / cellHeight)
      setLastRow(rowIndex)
    }
  }

  const handleMouseUp = () => {
    setDragging(false)
    setStartRow(null)
    setLastRow(null)
    setCol(null)
    setDraggingArea(new Map(Array.from({ length: m }, (_, rowIndex) => [rowIndex, Array(n).fill(null)])))
  }

  return (
    <SectionWrapper>
      <TimeWrapper cellHeight={cellHeight}>
        {Array.from({ length: end - begin + 1 }, (_, index) => index + begin).map(
          (number) => (
            <div key={number}>{number % 12 || 12}</div>
          ),
        )}
      </TimeWrapper>
      <FlexWrapper direction="column" gap={0}>
        <FlexWrapper direction="row" gap={5}>
          {["monday", "tuesday", "wednesday", "thursday", "friday"].map(
            (day) => (
                <DateWrapper
                  key={day}
                  width={dynamicCellWidth}
                >
                  {t(`common.days.${day}`)}
                </DateWrapper>
              ),
          )}
        </FlexWrapper>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(5, ${dynamicCellWidth}px)`,
            gridTemplateRows: `repeat(${n}, ${cellHeight}px)`,
            position: "relative",
            width: "100%",
          }}
          ref={gridRef}
          onMouseLeave={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {renderGrid(n, m, dynamicCellWidth, cellHeight, colPadding, [], 10, 0)}
          {renderTargetArea(
            true,
            draggingArea,
            "rgba(229, 76, 101, 0.5)",
            cellHeight,
            dynamicCellWidth,
            2,
            colPadding,
            [],
            0,
            0,
          )}
          {renderLectureTile(
            lectureSummary,
            dynamicCellWidth,
            cellHeight,
            colPadding,
            selected,
            setSelected,
            hover,
            setHover,
            holding,
            setHolding,
            dragging,
          )}
        </div>
      </FlexWrapper>
    </SectionWrapper>
  )
}

export default CustomTimeTableGrid
