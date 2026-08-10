import type { Timetables } from "@/common/schemas/timetables"

export default function getTimetableAutoSelection({
    status,
    currentTimetableId,
    semesterKey,
    autoSelectedSemesterKey,
    timetables,
}: {
    status: string
    currentTimetableId: number | null
    semesterKey: string
    autoSelectedSemesterKey: string | null
    timetables: Timetables[]
}): { semesterKey: string; timetableId: number | null } | null {
    if (
        status !== "success" ||
        timetables.length === 0 ||
        autoSelectedSemesterKey === semesterKey
    ) {
        return null
    }

    return {
        semesterKey,
        timetableId: currentTimetableId == null ? (timetables[0]?.id ?? null) : null,
    }
}
