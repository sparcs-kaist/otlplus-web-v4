import type { Timetables } from "@/common/schemas/timetables"
import type { UserStatus } from "@/utils/zustand/useUserStore"

export default function getTimetableAutoSelection({
    status,
    currentTimetableId,
    semesterKey,
    autoSelectedSemesterKeys,
    preserveMyTimetableSelection,
    timetables,
}: {
    status: UserStatus
    currentTimetableId: number | null
    semesterKey: string
    autoSelectedSemesterKeys: readonly string[]
    preserveMyTimetableSelection: boolean
    timetables: Timetables[]
}): { semesterKey: string; timetableId: number | null } | null {
    if (
        status !== "success" ||
        timetables.length === 0 ||
        preserveMyTimetableSelection ||
        autoSelectedSemesterKeys.includes(semesterKey)
    ) {
        return null
    }

    return {
        semesterKey,
        timetableId: currentTimetableId == null ? (timetables[0]?.id ?? null) : null,
    }
}
