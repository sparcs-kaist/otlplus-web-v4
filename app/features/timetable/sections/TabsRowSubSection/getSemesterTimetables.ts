import type { SemesterEnum } from "@/common/enum/semesterEnum"
import type { Timetables } from "@/common/schemas/timetables"

export default function getSemesterTimetables(
    timetables: Timetables[],
    year: number,
    semester: SemesterEnum,
    homeTimetableId: number | null = null,
): Timetables[] {
    return timetables
        .filter((timetable) => timetable.year === year && timetable.semester === semester)
        .sort(
            (a, b) =>
                Number(b.id === homeTimetableId) - Number(a.id === homeTimetableId) ||
                a.timeTableOrder - b.timeTableOrder,
        )
}
