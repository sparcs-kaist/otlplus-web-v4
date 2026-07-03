import { useMemo } from "react"

import type { WeekdayEnum } from "@/common/enum/weekdayEnum"
import type { Lecture } from "@/common/schemas/lecture"

const TIME_BEGIN = 8

export interface GhostOverlap {
    day: WeekdayEnum
    begin: number
    end: number
}

export function useGhostLectureOverlaps(
    needLectureInteraction: boolean,
    hoveredLectures: Lecture[],
    selectedLecture: Lecture | null,
    lectures: Lecture[],
): { ghostLecture: Lecture | null; overlaps: GhostOverlap[] } {
    const ghostLecture = useMemo<Lecture | null>(() => {
        if (!needLectureInteraction) return null
        if (
            hoveredLectures[0] &&
            !lectures.some((lec) => lec.id === hoveredLectures[0]?.id)
        ) {
            return hoveredLectures[0]
        }
        if (selectedLecture && !lectures.some((lec) => lec.id === selectedLecture.id)) {
            return selectedLecture
        }
        return null
    }, [needLectureInteraction, hoveredLectures, selectedLecture, lectures])

    const overlaps = useMemo<GhostOverlap[]>(() => {
        if (!needLectureInteraction || !ghostLecture) return []
        const intervals: GhostOverlap[] = []
        ghostLecture.classes.forEach((gClass) => {
            lectures.forEach((lecture) => {
                lecture.classes.forEach((lClass) => {
                    if (gClass.day === lClass.day) {
                        const overlapStart = Math.max(gClass.begin, lClass.begin)
                        const overlapEnd = Math.min(gClass.end, lClass.end)
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
        return intervals
    }, [needLectureInteraction, ghostLecture, lectures])

    return { ghostLecture, overlaps }
}
