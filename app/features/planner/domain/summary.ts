import type {
    AdditionalTrack,
    PlannerDepartment,
    PlannerDetail,
    PlannerItem,
} from "@/common/schemas/planner"

export type Progress = {
    readonly taken: number
    readonly planned: number
    readonly required: number
}

type MutableProgress = { taken: number; planned: number; required: number }

export type MajorSummary = {
    readonly key: string
    readonly type: "PRIMARY" | "DOUBLE" | "MINOR" | "INTERDISCIPLINARY"
    readonly department: PlannerDepartment | null
    readonly required: Progress
    readonly elective: Progress
}

export type PlannerSummary = {
    readonly total: { readonly credit: Progress; readonly au: Progress }
    readonly basicRequired: Progress
    readonly basicElective: Progress
    readonly thesisStudy: Progress
    readonly individualStudy: Progress
    readonly generalRequired: Progress
    readonly humanities: Progress
    readonly other: Progress
    readonly majors: readonly MajorSummary[]
}

type MutableMajorSummary = Omit<MajorSummary, "required" | "elective"> & {
    required: MutableProgress
    elective: MutableProgress
}

type Source = "taken" | "planned"

function itemCredit(item: PlannerItem): number {
    if (item.item_type === "TAKEN") return item.lecture.credit
    if (item.item_type === "FUTURE") return item.course.credit
    return item.credit
}

function itemAu(item: PlannerItem): number {
    if (item.item_type === "TAKEN") return item.lecture.credit_au
    if (item.item_type === "FUTURE") return item.course.credit_au
    return item.credit_au
}

function itemType(item: PlannerItem): string {
    if (item.item_type === "TAKEN") return item.lecture.type_en
    if (item.item_type === "FUTURE") return item.course.type_en
    return item.type_en
}

function itemDepartmentCode(item: PlannerItem): string | null {
    if (item.item_type === "TAKEN") return item.lecture.department_code
    if (item.item_type === "FUTURE") return item.course.department.code
    return item.department?.code ?? null
}

function progress(required = 0): MutableProgress {
    return { taken: 0, planned: 0, required }
}

function add(progressItem: MutableProgress, source: Source, amount: number): void {
    progressItem[source] += amount
}

function buildMajors(planner: PlannerDetail): MutableMajorSummary[] {
    const advanced = planner.additional_tracks.find((track) => track.type === "ADVANCED")
    const primary: MutableMajorSummary = {
        key: `PRIMARY:${planner.major_track.department.code}`,
        type: "PRIMARY",
        department: planner.major_track.department,
        required: progress(
            planner.major_track.major_required + (advanced?.major_required ?? 0),
        ),
        elective: progress(
            planner.major_track.major_elective + (advanced?.major_elective ?? 0),
        ),
    }
    const order = { DOUBLE: 0, MINOR: 1, INTERDISCIPLINARY: 2 } as const
    const additional = planner.additional_tracks
        .filter(
            (
                track,
            ): track is AdditionalTrack & {
                type: "DOUBLE" | "MINOR" | "INTERDISCIPLINARY"
            } => track.type !== "ADVANCED",
        )
        .sort((left, right) => order[left.type] - order[right.type])
        .map<MutableMajorSummary>((track) => ({
            key: `${track.type}:${track.department?.code ?? track.id}`,
            type: track.type,
            department: track.department,
            required: progress(track.major_required),
            elective: progress(track.major_elective),
        }))
    return [primary, ...additional]
}

function transferExcess(major: MutableMajorSummary): void {
    const takenExcess = Math.max(0, major.required.taken - major.required.required)
    major.required.taken -= takenExcess
    major.elective.taken += takenExcess

    const plannedCapacity = Math.max(0, major.required.required - major.required.taken)
    const plannedExcess = Math.max(0, major.required.planned - plannedCapacity)
    major.required.planned -= plannedExcess
    major.elective.planned += plannedExcess
}

export function calculatePlannerSummary(planner: PlannerDetail): PlannerSummary {
    const hasDoubleMajor = planner.additional_tracks.some(
        (track) => track.type === "DOUBLE",
    )
    const total = {
        credit: progress(planner.general_track.total_credit),
        au: progress(planner.general_track.total_au),
    }
    const basicRequired = progress(planner.general_track.basic_required)
    const basicElective = progress(
        hasDoubleMajor
            ? planner.major_track.basic_elective_doublemajor
            : planner.general_track.basic_elective,
    )
    const thesisStudy = progress(
        hasDoubleMajor
            ? planner.general_track.thesis_study_doublemajor
            : planner.general_track.thesis_study,
    )
    const individualStudy = progress()
    const generalRequired = progress(
        planner.general_track.general_required_credit +
            planner.general_track.general_required_au,
    )
    const humanities = progress(
        hasDoubleMajor
            ? planner.general_track.humanities_doublemajor
            : planner.general_track.humanities,
    )
    const other = progress()
    const majors = buildMajors(planner)
    const items = [
        ...planner.taken_items,
        ...planner.future_items,
        ...planner.arbitrary_items,
    ] satisfies readonly PlannerItem[]

    for (const item of items) {
        if (item.is_excluded) continue
        const source: Source = item.item_type === "TAKEN" ? "taken" : "planned"
        const credit = itemCredit(item)
        const au = itemAu(item)
        const combined = credit + au
        add(total.credit, source, credit)
        add(total.au, source, au)

        const type = itemType(item)
        if (type === "Basic Required") add(basicRequired, source, combined)
        else if (type === "Basic Elective") add(basicElective, source, combined)
        else if (type === "Thesis Study(Undergraduate)")
            add(thesisStudy, source, combined)
        else if (type === "Individual Study") add(individualStudy, source, combined)
        else if (type === "General Required" || type === "Mandatory General Courses")
            add(generalRequired, source, combined)
        else if (type.startsWith("Humanities & Social Elective"))
            add(humanities, source, combined)
        else if (
            type === "Major Required" ||
            type === "Major Elective" ||
            type === "Elective(Graduate)"
        ) {
            const departmentCode = itemDepartmentCode(item)
            const major =
                majors.find((entry) => entry.department?.code === departmentCode) ??
                majors.find((entry) => entry.type === "INTERDISCIPLINARY")
            if (major === undefined) add(other, source, combined)
            else if (type === "Major Required") add(major.required, source, combined)
            else add(major.elective, source, combined)
        } else add(other, source, combined)
    }

    majors.forEach(transferExcess)
    return {
        total,
        basicRequired,
        basicElective,
        thesisStudy,
        individualStudy,
        generalRequired,
        humanities,
        other,
        majors,
    }
}
