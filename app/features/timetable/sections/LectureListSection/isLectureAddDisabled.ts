import type { UserStatus } from "@/utils/zustand/useUserStore"

interface LectureAddAvailability {
    status: UserStatus
    currentTimetableId: number | null
    hasOverlap: boolean
}

export default function isLectureAddDisabled({
    status,
    currentTimetableId,
    hasOverlap,
}: LectureAddAvailability): boolean {
    return (status === "success" && currentTimetableId === null) || hasOverlap
}
