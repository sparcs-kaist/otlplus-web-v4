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

function firstItem<T>(items: readonly T[]): T {
    const item = items[0]
    if (item === undefined) throw new Error("Expected a planner item")
    return item
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

    it("does not mark repeatable courses as duplicate warnings", () => {
        const special = { ...csCourse, title_en: "Special Topics in AI" }
        const planner = createPlanner({
            taken_items: [{ ...taken, course: special }],
            future_items: [{ ...future, course: special }],
        })
        expect(isActiveDuplicateItem(planner, firstItem(planner.taken_items))).toBe(false)
        expect(isActiveDuplicateItem(planner, firstItem(planner.future_items))).toBe(
            false,
        )
    })

    it("marks active taken/future duplicates in the grid", () => {
        const planner = createPlanner({ taken_items: [taken], future_items: [future] })
        expect(isActiveDuplicateItem(planner, firstItem(planner.taken_items))).toBe(true)
        expect(isActiveDuplicateItem(planner, firstItem(planner.future_items))).toBe(true)
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
