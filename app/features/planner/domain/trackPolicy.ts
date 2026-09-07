import type {
    AdditionalTrack,
    MajorTrack,
    PlannerDetail,
    TracksResponse,
} from "@/common/schemas/planner"

import type { PlannerTrackSelection } from "./local"

export const PLANNER_DURATIONS = [4, 5, 6, 7, 8] as const

export type PlannerUserContext = {
    readonly studentNumber?: number
    readonly majorDepartments?: readonly { readonly code?: string }[]
}

export type AdditionalTrackIssue =
    | "sameAsPrimary"
    | "duplicateDepartment"
    | "advancedDepartment"
    | "multipleAdvanced"
    | "multipleInterdisciplinary"

export function isTrackCompatible(
    track: { readonly start_year: number; readonly end_year: number },
    startYear: number,
): boolean {
    return track.start_year <= startYear && startYear <= track.end_year
}

export function plannerStartYears(currentYear: number): number[] {
    return Array.from(
        { length: Math.max(0, currentYear - 2015 + 1) },
        (_, index) => index + 2015,
    )
}

export function entryYearFromStudentNumber(
    studentNumber: number | undefined,
    currentYear: number,
): number | null {
    if (studentNumber === undefined) return null
    const year = Number(String(studentNumber).slice(0, 4))
    return Number.isInteger(year) && year >= 2000 && year <= currentYear ? year : null
}

export function getDefaultTrackSelection(
    tracks: TracksResponse | undefined,
    user: PlannerUserContext | null,
    currentYear: number,
): PlannerTrackSelection | null {
    if (tracks === undefined) return null
    const startYear =
        entryYearFromStudentNumber(user?.studentNumber, currentYear) ?? currentYear
    const generalCandidates = tracks.general.filter((track) =>
        isTrackCompatible(track, startYear),
    )
    const generalTrack =
        generalCandidates.find((track) => !track.is_foreign) ?? generalCandidates[0]
    const majorCandidates = tracks.major.filter((track) =>
        isTrackCompatible(track, startYear),
    )
    const majorCodes = new Set(
        user?.majorDepartments?.map((department) => department.code),
    )
    const majorTrack =
        majorCandidates.find((track) => majorCodes.has(track.department.code)) ??
        majorCandidates[0]
    if (generalTrack === undefined || majorTrack === undefined) return null

    return {
        startYear,
        endYear: startYear + 3,
        generalTrack,
        majorTrack,
        additionalTracks: [],
    }
}

export function isAdditionalTrackDisabled(
    track: AdditionalTrack,
    startYear: number,
    majorTrack: MajorTrack,
): boolean {
    if (!isTrackCompatible(track, startYear)) return true
    const departmentCode = track.department?.code
    switch (track.type) {
        case "DOUBLE":
        case "MINOR":
            return departmentCode === majorTrack.department.code
        case "ADVANCED":
            return departmentCode !== majorTrack.department.code
        case "INTERDISCIPLINARY":
            return false
    }
}

export function findAdditionalTrackIssue(
    additionalTracks: readonly AdditionalTrack[],
    majorTrack: MajorTrack,
): AdditionalTrackIssue | null {
    const secondaryDepartmentCounts = new Map<string, number>()
    let advancedCount = 0
    let interdisciplinaryCount = 0

    for (const track of additionalTracks) {
        const code = track.department?.code
        if ((track.type === "DOUBLE" || track.type === "MINOR") && code !== undefined) {
            if (code === majorTrack.department.code) return "sameAsPrimary"
            const count = (secondaryDepartmentCounts.get(code) ?? 0) + 1
            secondaryDepartmentCounts.set(code, count)
            if (count > 1) return "duplicateDepartment"
        }
        if (track.type === "ADVANCED") {
            advancedCount += 1
            if (code !== majorTrack.department.code) return "advancedDepartment"
            if (advancedCount > 1) return "multipleAdvanced"
        }
        if (track.type === "INTERDISCIPLINARY") {
            interdisciplinaryCount += 1
            if (interdisciplinaryCount > 1) return "multipleInterdisciplinary"
        }
    }
    return null
}

export function countItemsOutsideRange(
    planner: PlannerDetail,
    startYear: number,
    endYear: number,
): number {
    const outside = (year: number) => year < startYear || year > endYear
    return (
        planner.taken_items.filter((item) => outside(item.lecture.year)).length +
        planner.future_items.filter((item) => outside(item.year)).length +
        planner.arbitrary_items.filter((item) => outside(item.year)).length
    )
}

export function countIncompatibleTracks(selection: PlannerTrackSelection): number {
    return [
        selection.generalTrack,
        selection.majorTrack,
        ...selection.additionalTracks,
    ].filter((track) => !isTrackCompatible(track, selection.startYear)).length
}
