import type {
    AdditionalTrack,
    GeneralTrack,
    MajorTrack,
    PlannerDetail,
    PlannerItem,
    PlannerSemester,
} from "@/common/schemas/planner"

export type PlannerTrackSelection = {
    readonly startYear: number
    readonly endYear: number
    readonly generalTrack: GeneralTrack
    readonly majorTrack: MajorTrack
    readonly additionalTracks: readonly AdditionalTrack[]
}

export type LocalIdAllocator = {
    readonly next: () => number
    readonly reserve: (planners: readonly PlannerDetail[]) => void
}

export function nextLocalId(planners: readonly PlannerDetail[]): number {
    let minimum = 0
    for (const planner of planners) {
        minimum = Math.min(minimum, planner.id)
        for (const item of [
            ...planner.taken_items,
            ...planner.future_items,
            ...planner.arbitrary_items,
        ]) {
            minimum = Math.min(minimum, item.id)
        }
    }
    return minimum - 1
}

export function createLocalIdAllocator(
    initialPlanners: readonly PlannerDetail[] = [],
): LocalIdAllocator {
    let nextId = nextLocalId(initialPlanners)
    return {
        next: () => {
            const id = nextId
            nextId -= 1
            return id
        },
        reserve: (planners) => {
            nextId = Math.min(nextId, nextLocalId(planners))
        },
    }
}

export function createLocalPlanner(
    selection: PlannerTrackSelection,
    allocateId: () => number,
    source?: PlannerDetail,
): PlannerDetail {
    const copyId = <T extends PlannerItem>(item: T): T => ({
        ...item,
        id: allocateId(),
    })
    return {
        id: allocateId(),
        start_year: selection.startYear,
        end_year: selection.endYear,
        general_track: selection.generalTrack,
        major_track: selection.majorTrack,
        additional_tracks: [...selection.additionalTracks],
        taken_items: source?.taken_items.map(copyId) ?? [],
        future_items: source?.future_items.map(copyId) ?? [],
        arbitrary_items: source?.arbitrary_items.map(copyId) ?? [],
        arrange_order: 0,
    }
}

export function updateLocalPlanner(
    planners: readonly PlannerDetail[],
    plannerId: number,
    updater: (planner: PlannerDetail) => PlannerDetail,
): PlannerDetail[] {
    return planners.map((planner) =>
        planner.id === plannerId ? updater(planner) : planner,
    )
}

export function replacePlanner(
    planners: readonly PlannerDetail[],
    updated: PlannerDetail,
): PlannerDetail[] {
    return updateLocalPlanner(planners, updated.id, () => updated)
}

export function reorderLocalPlanners(
    planners: readonly PlannerDetail[],
    plannerId: number,
    direction: -1 | 1,
): PlannerDetail[] {
    const ordered = [...planners].sort((a, b) => a.arrange_order - b.arrange_order)
    const index = ordered.findIndex((planner) => planner.id === plannerId)
    const target = index + direction
    if (index < 0 || target < 0 || target >= ordered.length) return ordered
    const current = ordered[index]
    const neighbor = ordered[target]
    if (current === undefined || neighbor === undefined) return ordered
    ordered[index] = { ...neighbor, arrange_order: index }
    ordered[target] = { ...current, arrange_order: target }
    return ordered
}

export function updateLocalItem(
    planner: PlannerDetail,
    item: PlannerItem,
    patch: { readonly semester?: PlannerSemester; readonly isExcluded?: boolean },
): PlannerDetail {
    const update = <T extends PlannerItem>(candidate: T): T => {
        if (candidate.id !== item.id) return candidate
        const excluded = patch.isExcluded ?? candidate.is_excluded
        if (candidate.item_type === "TAKEN" || patch.semester === undefined) {
            return { ...candidate, is_excluded: excluded }
        }
        return { ...candidate, semester: patch.semester, is_excluded: excluded }
    }
    return {
        ...planner,
        taken_items: planner.taken_items.map(update),
        future_items: planner.future_items.map(update),
        arbitrary_items: planner.arbitrary_items.map(update),
    }
}

export function removeLocalItem(
    planner: PlannerDetail,
    item: PlannerItem,
): PlannerDetail {
    if (item.item_type === "TAKEN") return planner
    return {
        ...planner,
        future_items: planner.future_items.filter(
            (candidate) => candidate.id !== item.id,
        ),
        arbitrary_items: planner.arbitrary_items.filter(
            (candidate) => candidate.id !== item.id,
        ),
    }
}
