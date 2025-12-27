import React, { useCallback, useMemo, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { Lecture } from "@/common/schemas/lecture"
import { checkAnyOver24 } from "@/utils/timetable/checkAnyOver24"
import renderGrid from "@/utils/timetable/renderGrid"
import renderLectureTile from "@/utils/timetable/renderLectureTile"
import renderTargetArea from "@/utils/timetable/renderTargetArea"

interface GridProps {
    cellWidth?: number
    lectureSummary: Lecture[]
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    selected: Lecture | null
    setSelected: React.Dispatch<React.SetStateAction<Lecture | null>>
}

const FULL_HEIGHT = 926.5
const ROWS = 32

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
    color: ${({ theme }) => theme.colors.Text.default};
`

const DateWrapper = styled.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({ theme }) => theme.colors.Text.default};
`

const GridContainer = styled.div`
    display: inline-block;
    position: relative;
    user-select: none;
`

const CustomTimeTableGrid: React.FC<GridProps> = ({
    cellWidth = 120,
    lectureSummary,
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
    const cellHeight = FULL_HEIGHT / ROWS

    const cssVariables = useMemo(
        () =>
            ({
                "--cell-height": `${cellHeight}px`,
                "--cell-width": `${cellWidth}px`,
                "--col-padding": `${colPadding}px`,
            }) as React.CSSProperties,
        [cellHeight, cellWidth],
    )

    const [draggingArea] = useState<Map<number, boolean[]>>(
        new Map(
            Array.from({ length: m }, (_, rowIndex) => [rowIndex, Array(n).fill(null)]),
        ),
    )

    const grid = useMemo(
        () => renderGrid(n, m, cellWidth, cellHeight, colPadding, [], 10, 0),
        [n, cellWidth, cellHeight],
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
                false,
                undefined,
                true,
            ),
        [lectureSummary, cellWidth, cellHeight, selected, setSelected, hover, setHover],
    )

    const handleClick = useCallback(() => {
        setSelected(null)
    }, [setSelected])

    return (
        <SectionWrapper style={cssVariables}>
            <TimeWrapper>
                {Array.from({ length: end - begin + 1 }, (_, index) => index + begin).map(
                    (number) => (
                        <div key={number}>{number % 12 || 12}</div>
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
                                    {date}
                                </DateWrapper>
                            ),
                    )}
                </FlexWrapper>
                <GridContainer ref={gridRef} onClick={handleClick}>
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
