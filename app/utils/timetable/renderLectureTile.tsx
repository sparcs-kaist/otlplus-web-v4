import type { JSX } from "react"

import LectureTile from "@/common/components/LectureTile"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import type { ClassTime, Lecture } from "@/common/schemas/lecture"
import checkOverlap from "@/utils/timetable/checkOverlap"

const renderLectureTile = (
    timetableLectures: Lecture[],
    cellWidth: number,
    cellHeight: number,
    colPadding: number,
    selected: Lecture | null,
    setSelected: React.Dispatch<React.SetStateAction<Lecture | null>>,
    hover: Lecture[] | null,
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>,
    dragging: boolean,
    removeFunction?: (lectureId: number) => void,
    hoverSelectBanned: boolean = false,
) => {
    const rectangles: JSX.Element[] = []

    const lectureSummary = timetableLectures
        .concat(selected ? [selected] : [])
        .concat(
            hover
                ? selected
                    ? hover.filter((lec) => lec.id !== selected.id)
                    : hover
                : [],
        )

    // Pre-compute overlap map once: O(n²) total instead of O(n²) per lecture
    const overlapMap = new Map<number, boolean>()
    for (const lecture of lectureSummary) {
        if (overlapMap.has(lecture.id)) continue
        const isOverlapped = lectureSummary.some(
            (other) =>
                other.id !== lecture.id && checkOverlap(other.classes, lecture.classes),
        )
        overlapMap.set(lecture.id, isOverlapped)
    }

    for (let i = 0; i < lectureSummary.length; i++) {
        const lecture: Lecture = lectureSummary[i] as Lecture
        const timeBlocks: ClassTime[] = lecture.classes
        const isSelected = selected === lecture
        const isHovered = hover !== null && hover.some((lec) => lec.id === lecture.id)
        const isOverlapped = overlapMap.get(lecture.id) ?? false

        for (let j = 0; j < timeBlocks.length; j++) {
            const timeBlock = timeBlocks[j]
            if (!timeBlock) continue
            const weekDay = timeBlock.day as unknown as WeekdayEnum
            const left = weekDay * (cellWidth + colPadding)
            const startIndex = Math.floor(timeBlock.begin / 30) - 16 // 8시부터 시작
            const top = startIndex * cellHeight

            rectangles.push(
                <div
                    style={{
                        position: "absolute",
                        left: left,
                        top: top,
                    }}
                    key={`${lecture.id}-${j}`}
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
                    onTouchStart={(event: React.TouchEvent) => {
                        // Stop propagation to prevent grid's touch handler
                        event.stopPropagation()
                    }}
                    onTouchEnd={(event: React.TouchEvent) => {
                        event.stopPropagation()
                        // Handle as click on touch end
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
                    }}
                    onMouseLeave={() => {
                        setHover(null)
                    }}
                >
                    <LectureTile
                        lecture={lecture}
                        timeBlock={timeBlock}
                        cellWidth={cellWidth}
                        isSelected={!hoverSelectBanned && isSelected}
                        isHovered={!hoverSelectBanned && isHovered}
                        hoverSelectBanned={hoverSelectBanned}
                        isOverlapped={isOverlapped}
                        cellHeight={cellHeight}
                        removeFunction={
                            timetableLectures.includes(lecture)
                                ? removeFunction
                                : undefined
                        }
                    />
                </div>,
            )
        }
    }

    return rectangles
}

export default renderLectureTile
