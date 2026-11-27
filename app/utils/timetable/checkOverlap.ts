import type { TimeBlock } from "@/common/schemas/timeblock"
import { timeBlockListsOverlap } from "@/common/utils/timetableItems"

export default function checkOverlap(
    blockA: readonly TimeBlock[],
    blockB: readonly TimeBlock[],
): boolean {
    return timeBlockListsOverlap(blockA, blockB)
}
