import { describe, expect, it } from "vitest"

import { PlannerDetailSchema, PlannerItemSchema } from "@/common/schemas/planner"

import {
    createLocalIdAllocator,
    createLocalPlanner,
    removeLocalItem,
    reorderLocalPlanners,
    updateLocalItem,
    updateLocalPlanner,
} from "./local"

const department = { id: 1, name: "전산학부", name_en: "School of Computing", code: "CS" }
const generalTrack = {
    id: 1,
    start_year: 2020,
    end_year: 2026,
    is_foreign: false,
    total_credit: 130,
    total_au: 0,
    basic_required: 0,
    basic_elective: 0,
    thesis_study: 0,
    thesis_study_doublemajor: 0,
    general_required_credit: 0,
    general_required_au: 0,
    humanities: 0,
    humanities_doublemajor: 0,
}
const majorTrack = {
    id: 2,
    start_year: 2020,
    end_year: 2026,
    department,
    basic_elective_doublemajor: 0,
    major_required: 0,
    major_elective: 0,
}
const course = {
    id: 3,
    old_code: "CS101",
    old_old_code: "CS100",
    department,
    type: "Major Required",
    type_en: "Major Required",
    title: "프로그래밍",
    title_en: "Programming",
    summary: "",
    review_total_weight: 0,
    credit: 3,
    credit_au: 0,
    num_classes: 3,
    num_labs: 0,
}
const lecture = {
    id: 4,
    title: "프로그래밍",
    title_en: "Programming",
    course: 3,
    old_old_code: "CS100",
    old_code: "CS101",
    class_no: "A",
    year: 2023,
    semester: 1,
    code: "CS101-A",
    department: 1,
    department_code: "CS",
    department_name: "전산학부",
    department_name_en: "School of Computing",
    type: "Major Required",
    type_en: "Major Required",
    limit: 60,
    num_people: 40,
    is_english: false,
    num_classes: 3,
    num_labs: 0,
    credit: 3,
    credit_au: 0,
    common_title: "",
    common_title_en: "",
    class_title: "",
    class_title_en: "",
    review_total_weight: 0,
    professors: [],
}

const planner = PlannerDetailSchema.parse({
    id: 1,
    start_year: 2023,
    end_year: 2024,
    general_track: generalTrack,
    major_track: majorTrack,
    additional_tracks: [],
    taken_items: [{ id: 10, item_type: "TAKEN", is_excluded: false, course, lecture }],
    future_items: [
        {
            id: 11,
            item_type: "FUTURE",
            is_excluded: false,
            year: 2024,
            semester: 1,
            course,
        },
    ],
    arbitrary_items: [],
    arrange_order: 0,
})
const takenItem = PlannerItemSchema.parse(planner.taken_items[0])
const futureItem = PlannerItemSchema.parse(planner.future_items[0])

describe("local planner mutations", () => {
    it("keeps taken items while removing a future item", () => {
        const result = removeLocalItem(planner, takenItem)
        expect(result.taken_items).toHaveLength(1)
        expect(result.future_items).toHaveLength(1)
    })

    it("changes the semester of a future item", () => {
        const result = updateLocalItem(planner, futureItem, { semester: 3 })
        expect(result.future_items[0]?.semester).toBe(3)
    })

    it("orders selected planner relative to its neighbor", () => {
        const second = { ...planner, id: 2, arrange_order: 1 }
        const result = reorderLocalPlanners([planner, second], second.id, -1)
        expect(result.map((item) => item.id)).toEqual([2, 1])
        expect(result.map((item) => item.arrange_order)).toEqual([0, 1])
    })

    it("reserves hydrated planner and item IDs before allocating", () => {
        const hydrated = {
            ...planner,
            id: -5,
            future_items: [{ ...planner.future_items[0]!, id: -8 }],
        }
        const allocator = createLocalIdAllocator([hydrated])
        expect(allocator.next()).toBe(-9)
        expect(allocator.next()).toBe(-10)
    })

    it("assigns unique IDs when copying a local planner", () => {
        const allocator = createLocalIdAllocator([planner])
        const copy = createLocalPlanner(
            {
                startYear: planner.start_year,
                endYear: planner.end_year,
                generalTrack: planner.general_track,
                majorTrack: planner.major_track,
                additionalTracks: planner.additional_tracks,
            },
            allocator.next,
            planner,
        )
        const ids = [
            copy.id,
            ...copy.taken_items.map((item) => item.id),
            ...copy.future_items.map((item) => item.id),
        ]
        expect(new Set(ids).size).toBe(ids.length)
        expect(ids.every((id) => id < 0)).toBe(true)
    })

    it("preserves sequential changes by updating the current planner", () => {
        let state = updateLocalPlanner([planner], planner.id, (current) =>
            updateLocalItem(current, futureItem, { isExcluded: true }),
        )
        state = updateLocalPlanner(state, planner.id, (current) =>
            updateLocalItem(current, futureItem, { semester: 3 }),
        )
        expect(state[0]?.future_items[0]).toMatchObject({
            is_excluded: true,
            semester: 3,
        })
    })
})
