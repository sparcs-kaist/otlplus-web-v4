import type { PlannerDetail } from "@/common/schemas/planner"

import { type PlannerSummary, calculatePlannerSummary } from "./summary"

export type ScenarioRowKey =
    | "totalCredit"
    | "basicRequired"
    | "thesisStudy"
    | "generalRequired"
    | "humanities"
    | "majorRequired"
    | "majorElective"

export type ScenarioRow = {
    key: ScenarioRowKey
    taken: number[]
    planned: number[]
    required: number
}

export function comparePlannerScenarios(
    planners: readonly PlannerDetail[],
): ScenarioRow[] {
    const summaries = planners.map((planner) => calculatePlannerSummary(planner))
    if (summaries.length === 0) return []

    const row = (
        key: ScenarioRowKey,
        pick: (summary: PlannerSummary) => {
            taken: number
            planned: number
            required: number
        },
    ): ScenarioRow => {
        const picked = summaries.map((summary) => pick(summary))
        return {
            key,
            taken: picked.map((item) => item.taken),
            planned: picked.map((item) => item.planned),
            required: picked[0]?.required ?? 0,
        }
    }

    const majorRow = (field: "required" | "elective"): ScenarioRow =>
        row(`major${field === "required" ? "Required" : "Elective"}`, (summary) => {
            const major = summary.majors[0]
            if (major === undefined) return { taken: 0, planned: 0, required: 0 }
            const progress = major[field]
            return {
                taken: progress.taken,
                planned: progress.planned,
                required: progress.required,
            }
        })

    return [
        row("totalCredit", (summary) => ({
            taken: summary.total.credit.taken,
            planned: summary.total.credit.planned,
            required: summary.total.credit.required,
        })),
        row("basicRequired", (summary) => summary.basicRequired),
        row("thesisStudy", (summary) => summary.thesisStudy),
        row("generalRequired", (summary) => ({
            taken: summary.generalRequired.credit.taken,
            planned: summary.generalRequired.credit.planned,
            required: summary.generalRequired.credit.required,
        })),
        row("humanities", (summary) => summary.humanities),
        majorRow("required"),
        majorRow("elective"),
    ]
}
