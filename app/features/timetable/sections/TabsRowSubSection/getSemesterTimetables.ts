import type { SemesterEnum } from "@/common/enum/semesterEnum"
import type { Timetables } from "@/common/schemas/timetables"

export default function getSemesterTimetables(
    timetables: Timetables[],
    year: number,
    semester: SemesterEnum,
): Timetables[] {
    return timetables
        .filter((timetable) => timetable.year === year && timetable.semester === semester)
        .sort((a, b) => a.timeTableOrder - b.timeTableOrder)
}
