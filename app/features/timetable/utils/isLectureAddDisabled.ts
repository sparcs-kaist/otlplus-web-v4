import type { UserStatus } from "@/utils/zustand/useUserStore"

interface LectureAddAvailability {
    readonly status: UserStatus
    readonly currentTimetableId: number | null
    readonly hasOverlap: boolean
}

export type LectureAddBlockReason = "loading" | "myTimetable" | "overlap"

export function getLectureAddBlockReason({
    status,
    currentTimetableId,
    hasOverlap,
}: LectureAddAvailability): LectureAddBlockReason | null {
    if (status === "loading") return "loading"
    if (status === "success" && currentTimetableId === null) return "myTimetable"
    if (hasOverlap) return "overlap"
    return null
}

export default function isLectureAddDisabled(
    availability: LectureAddAvailability,
): boolean {
    return getLectureAddBlockReason(availability) !== null
}
