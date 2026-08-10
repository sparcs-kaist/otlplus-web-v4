import type { Timetables } from "@/common/schemas/timetables"
import type { UserStatus } from "@/utils/zustand/useUserStore"

export default function getTimetableAutoSelection({
    status,
    currentTimetableId,
    semesterKey,
    autoSelectedSemesterKeys,
    timetables,
}: {
    status: UserStatus
    currentTimetableId: number | null
    semesterKey: string
    autoSelectedSemesterKeys: readonly string[]
    timetables: Timetables[]
}): { semesterKey: string; timetableId: number | null } | null {
    if (
        status !== "success" ||
        timetables.length === 0 ||
        autoSelectedSemesterKeys.includes(semesterKey)
    ) {
        return null
    }

    return {
        semesterKey,
        timetableId: currentTimetableId == null ? (timetables[0]?.id ?? null) : null,
    }
}
