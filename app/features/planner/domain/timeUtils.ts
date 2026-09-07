export type PlannerSlot = {
    readonly year: number
    readonly semester: 1 | 2 | 3 | 4
}

/**
 * Maps a date to the KAIST planner slot it falls into:
 * 1 = spring (Mar–Jun), 2 = summer (Jul–Aug), 3 = fall (Sep–Dec), 4 = winter (Jan–Feb).
 */
export function currentPlannerSlot(now: Date): PlannerSlot {
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    if (month >= 3 && month <= 6) return { year, semester: 1 }
    if (month >= 7 && month <= 8) return { year, semester: 2 }
    if (month >= 9) return { year, semester: 3 }
    return { year: year - 1, semester: 4 }
}

export function isPastSlot(
    slot: { readonly year: number; readonly semester: number },
    now: Date,
): boolean {
    const current = currentPlannerSlot(now)
    if (slot.year !== current.year) return slot.year < current.year
    return slot.semester < current.semester
}
