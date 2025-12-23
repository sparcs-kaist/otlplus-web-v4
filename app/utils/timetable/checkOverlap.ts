import type { TimeBlock } from "@/common/schemas/timeblock"

export default function checkOverlap(blockA: TimeBlock[], blockB: TimeBlock[]): boolean {
    for (const a of blockA) {
        for (const b of blockB) {
            if (a.day == b.day) {
                if (a.begin < b.end && b.begin < a.end) {
                    return true
                }
            }
        }
    }
    return false
}
