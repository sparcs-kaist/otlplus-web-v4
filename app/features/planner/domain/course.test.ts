import { describe, expect, it } from "vitest"

import { PlannerDetailSchema } from "@/common/schemas/planner"

import { normalizePlannerCourse } from "./course"
import { createPlanner, csCourse } from "./testFixtures"

describe("normalizePlannerCourse", () => {
    it("removes course-search detail fields before local persistence", () => {
        const extended: typeof csCourse & {
            related_courses_prior: readonly unknown[]
            professors: readonly unknown[]
            grade: number
        } = {
            ...csCourse,
            related_courses_prior: [],
            professors: [],
            grade: 10,
        }
        const normalized = normalizePlannerCourse(extended)
        const planner = createPlanner({
            future_items: [
                {
                    id: -2,
                    item_type: "FUTURE",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    course: normalized,
                },
            ],
        })

        expect("professors" in normalized).toBe(false)
        expect(PlannerDetailSchema.safeParse(planner).success).toBe(true)
    })
})
