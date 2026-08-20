import { describe, expect, it } from "vitest"

import {
    getCourseDuplicateDecision,
    isActiveDuplicateItem,
    isRepeatableCourse,
} from "./duplicates"
import { createPlanner, csCourse, csLecture } from "./testFixtures"

const future = {
    id: -2,
    item_type: "FUTURE" as const,
    is_excluded: false,
    year: 2024,
    semester: 1 as const,
    course: csCourse,
}
const taken = {
    id: -3,
    item_type: "TAKEN" as const,
    is_excluded: false,
    course: csCourse,
    lecture: csLecture,
}

describe("planner duplicate policy", () => {
    it("blocks an active future duplicate but allows an excluded one", () => {
        expect(
            getCourseDuplicateDecision(
                createPlanner({ future_items: [future] }),
                csCourse,
            ),
        ).toBe("future")
        expect(
            getCourseDuplicateDecision(
                createPlanner({ future_items: [{ ...future, is_excluded: true }] }),
                csCourse,
            ),
        ).toBe("none")
    })

    it("requires confirmation for an active taken duplicate", () => {
        expect(
            getCourseDuplicateDecision(createPlanner({ taken_items: [taken] }), csCourse),
        ).toBe("taken")
    })

    it("allows repeatable special lectures", () => {
        const special = { ...csCourse, title_en: "Special Topics in AI" }
        expect(isRepeatableCourse(special)).toBe(true)
        expect(
            getCourseDuplicateDecision(
                createPlanner({ future_items: [{ ...future, course: special }] }),
                special,
            ),
        ).toBe("none")
    })

    it("marks active taken/future duplicates in the grid", () => {
        const planner = createPlanner({ taken_items: [taken], future_items: [future] })
        expect(isActiveDuplicateItem(planner, planner.taken_items[0]!)).toBe(true)
        expect(isActiveDuplicateItem(planner, planner.future_items[0]!)).toBe(true)
        expect(
            isActiveDuplicateItem(
                createPlanner({
                    taken_items: [taken],
                    future_items: [{ ...future, is_excluded: true }],
                }),
                taken,
            ),
        ).toBe(false)
    })
})
