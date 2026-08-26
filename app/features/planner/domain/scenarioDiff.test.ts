import { describe, expect, it } from "vitest"

import { createPlanner, csCourse } from "../domain/testFixtures"
import { comparePlannerScenarios } from "./scenarioDiff"

function courseWithCredit(credit: number) {
    return { ...csCourse, credit }
}

describe("comparePlannerScenarios", () => {
    it("scenario-diff-rows: one row per shared category", () => {
        const rows = comparePlannerScenarios([
            createPlanner(),
            createPlanner({ id: -3, arrange_order: 1 }),
        ])

        expect(rows.length).toBeGreaterThanOrEqual(4)
        expect(rows.map((row) => row.key)).toContain("totalCredit")
        expect(rows.map((row) => row.key)).toContain("majorRequired")
    })

    it("scenario-diff-values: reflects planned items per planner", () => {
        const withCourse = createPlanner({
            future_items: [
                {
                    id: -2,
                    item_type: "FUTURE" as const,
                    is_excluded: false,
                    year: 2023,
                    semester: 1 as const,
                    course: courseWithCredit(3),
                },
            ],
        })
        const empty = createPlanner({ id: -3, arrange_order: 1 })

        const rows = comparePlannerScenarios([withCourse, empty])
        const total = rows.find((row) => row.key === "totalCredit")
        if (total === undefined) throw new Error("Expected totalCredit row")

        expect(total.planned).toEqual([3, 0])
        expect(total.required).toBe(130)
    })
})
