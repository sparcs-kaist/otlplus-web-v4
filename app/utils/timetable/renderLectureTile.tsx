// TODO: 타입 수정 필요
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { JSX } from "react"
import { useRef } from "react"

import exampleLectures from "@/api/example/Lectures"
import LectureTile from "@/common/components/LectureTile"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import type { ClassTime, Lecture } from "@/common/schemas/lecture"

const renderLectureTile = (
    lectureSummary: Lecture[],
    cellWidth: number,
    cellHeight: number,
    colPadding: number,
    selected: Lecture | null,
    setSelected: React.Dispatch<React.SetStateAction<Lecture | null>>,
    hover: Lecture | null,
    setHover: React.Dispatch<React.SetStateAction<Lecture | null>>,
    holding: boolean,
    setHolding: React.Dispatch<React.SetStateAction<boolean>>,
    dragging: boolean,
) => {
    const gridRef = useRef<HTMLDivElement>(null)
    const rectangles: JSX.Element[] = []

    const findItemById = (arr: Lecture[], id: number): Lecture | undefined => {
        return arr.find((item) => item.id === id)
    }

    for (let i = 0; i < lectureSummary.length; i++) {
        const lecture: Lecture = lectureSummary[i]
        const timeBlocks: ClassTime[] = lecture.classes
        const isSelected = selected === lecture
        const isHovered = hover === lecture && selected == null

        for (let j = 0; j < timeBlocks.length; j++) {
            const timeBlock = timeBlocks[j]
            const weekDay = timeBlock.day as unknown as WeekdayEnum
            const left = weekDay * (cellWidth + colPadding)
            const startIndex = Math.floor(timeBlock.begin / 30) - 16 // 8시부터 시작
            const top = startIndex * cellHeight

            rectangles.push(
                <div
                    ref={gridRef}
                    style={{
                        position: "absolute",
                        left: left,
                        top: top,
                    }}
                    key={`${i}-${j}`}
                    onClick={(event: React.MouseEvent) => {
                        event.stopPropagation()
                        if (lecture === selected) {
                            setSelected(null)
                        } else {
                            if (lecture !== undefined) {
                                setSelected(lecture)
                            }
                        }
                    }}
                    onMouseEnter={() => {
                        if (!dragging && lecture !== undefined) {
                            setHover(lecture)
                        }
                        setHolding(true)
                    }}
                    onMouseLeave={() => {
                        setHover(null)
                    }}
                >
                    <LectureTile
                        lecture={lecture}
                        timeBlock={timeBlock}
                        cellWidth={cellWidth}
                        isSelected={isSelected}
                        isHovered={isHovered}
                        cellHeight={cellHeight}
                    />
                </div>,
            )
        }
    }

    return rectangles
}

export default renderLectureTile
