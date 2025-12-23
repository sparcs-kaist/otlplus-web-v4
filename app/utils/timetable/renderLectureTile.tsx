import type { JSX } from "react"
import { useRef } from "react"

import LectureTile from "@/common/components/LectureTile"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import type { ClassTime, Lecture } from "@/common/schemas/lecture"
import checkOverlap from "@/utils/timetable/checkOverlap"

const renderLectureTile = (
    lectureSummary: Lecture[],
    cellWidth: number,
    cellHeight: number,
    colPadding: number,
    selected: Lecture | null,
    setSelected: React.Dispatch<React.SetStateAction<Lecture | null>>,
    hover: Lecture[] | null,
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>,
    holding: boolean,
    setHolding: React.Dispatch<React.SetStateAction<boolean>>,
    dragging: boolean,
    removeFunction?: (lectureId: number) => void,
) => {
    const gridRef = useRef<HTMLDivElement>(null)
    const rectangles: JSX.Element[] = []

    for (let i = 0; i < lectureSummary.length; i++) {
        const lecture: Lecture = lectureSummary[i] as Lecture
        const timeBlocks: ClassTime[] = lecture.classes
        const isSelected = selected === lecture
        const isHovered = hover !== null && hover.some((lec) => lec.id === lecture.id)
        const isOverlapped = lectureSummary.some((lec) => {
            return lec.id !== lecture.id && checkOverlap(lec.classes, lecture.classes)
        })

        for (let j = 0; j < timeBlocks.length; j++) {
            const timeBlock = timeBlocks[j]
            if (!timeBlock) continue
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
                            setHover([lecture])
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
                        isOverlapped={isOverlapped}
                        cellHeight={cellHeight}
                        removeFunction={removeFunction}
                    />
                </div>,
            )
        }
    }

    return rectangles
}

export default renderLectureTile
