import { describe, expect, it } from "vitest"

import { calculatePlannerSummary } from "./summary"
import {
    createPlanner,
    csCourse,
    csDepartment,
    csLecture,
    eeCourse,
    eeDepartment,
    eeMajorTrack,
} from "./testFixtures"

describe("calculatePlannerSummary", () => {
    it("separates total credits and AU while excluding flagged items", () => {
        const planner = createPlanner({
            taken_items: [
                {
                    id: -2,
                    item_type: "TAKEN",
                    is_excluded: false,
                    course: csCourse,
                    lecture: csLecture,
                },
            ],
            future_items: [
                {
                    id: -3,
                    item_type: "FUTURE",
                    is_excluded: true,
                    year: 2024,
                    semester: 1,
                    course: { ...csCourse, credit: 6 },
                },
            ],
            arbitrary_items: [
                {
                    id: -4,
                    item_type: "ARBITRARY",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    department: csDepartment,
                    type: "기초필수",
                    type_en: "Basic Required",
                    credit: 0,
                    credit_au: 2,
                },
            ],
        })

        const summary = calculatePlannerSummary(planner)
        expect(summary.total.credit).toEqual({ taken: 3, planned: 0, required: 130 })
        expect(summary.total.au).toEqual({ taken: 0, planned: 2, required: 8 })
        expect(summary.basicRequired).toEqual({ taken: 0, planned: 0, required: 20 })
    })

    it("attributes major courses by department and transfers excess per track", () => {
        const planner = createPlanner({
            additional_tracks: [
                {
                    id: 30,
                    start_year: 2020,
                    end_year: 2030,
                    type: "ADVANCED",
                    department: csDepartment,
                    major_required: 2,
                    major_elective: 1,
                },
                {
                    id: 31,
                    start_year: 2020,
                    end_year: 2030,
                    type: "DOUBLE",
                    department: eeDepartment,
                    major_required: eeMajorTrack.major_required,
                    major_elective: eeMajorTrack.major_elective,
                },
            ],
            future_items: [
                {
                    id: -2,
                    item_type: "FUTURE",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    course: { ...csCourse, credit: 9 },
                },
                {
                    id: -3,
                    item_type: "FUTURE",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    course: { ...eeCourse, credit: 6 },
                },
            ],
        })

        const summary = calculatePlannerSummary(planner)
        const primary = summary.majors.find((major) => major.key.startsWith("PRIMARY:"))
        const double = summary.majors.find((major) => major.type === "DOUBLE")
        expect(primary?.type).toBe("ADVANCED")
        expect(primary?.required).toEqual({ taken: 0, planned: 8, required: 8 })
        expect(primary?.elective).toEqual({ taken: 0, planned: 1, required: 22 })
        expect(double?.required).toEqual({ taken: 0, planned: 3, required: 3 })
        expect(double?.elective).toEqual({ taken: 0, planned: 3, required: 12 })
    })

    it("maps legacy category variants and unknown items", () => {
        const planner = createPlanner({
            arbitrary_items: [
                {
                    id: -2,
                    item_type: "ARBITRARY",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    department: null,
                    type: "교양필수",
                    type_en: "Mandatory General Courses",
                    credit: 1,
                    credit_au: 1,
                },
                {
                    id: -3,
                    item_type: "ARBITRARY",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    department: null,
                    type: "기타",
                    type_en: "Unknown Category",
                    credit: 2,
                    credit_au: 0,
                },
            ],
        })

        const summary = calculatePlannerSummary(planner)
        expect(summary.generalRequired.credit).toEqual({
            taken: 0,
            planned: 1,
            required: 7,
        })
        expect(summary.generalRequired.au).toEqual({
            taken: 0,
            planned: 1,
            required: 9,
        })
        expect(summary.other.planned).toBe(2)
    })

    it("does not assign unmatched major or individual-study credits to requirements", () => {
        const planner = createPlanner({
            additional_tracks: [
                {
                    id: 31,
                    start_year: 2020,
                    end_year: 2030,
                    type: "INTERDISCIPLINARY",
                    department: null,
                    major_required: 12,
                    major_elective: 0,
                },
            ],
            future_items: [
                {
                    id: -2,
                    item_type: "FUTURE",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    course: { ...eeCourse, credit: 3 },
                },
            ],
            arbitrary_items: [
                {
                    id: -3,
                    item_type: "ARBITRARY",
                    is_excluded: false,
                    year: 2024,
                    semester: 1,
                    department: null,
                    type: "개별연구",
                    type_en: "Individual Study",
                    credit: 2,
                    credit_au: 0,
                },
            ],
        })

        const summary = calculatePlannerSummary(planner)
        const interdisciplinary = summary.majors.find(
            (major) => major.type === "INTERDISCIPLINARY",
        )
        expect(interdisciplinary?.required).toEqual({
            taken: 0,
            planned: 0,
            required: 12,
        })
        expect(summary.other).toEqual({ taken: 0, planned: 5, required: 0 })
    })
})
