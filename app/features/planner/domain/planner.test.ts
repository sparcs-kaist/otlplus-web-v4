import { describe, expect, it } from "vitest"

import { PlannerDetailSchema } from "@/common/schemas/planner"
import { PlannerDetailResponseSchema } from "@/common/schemas/plannerResponse"

const department = { id: 1, name: "전산학부", name_en: "School of Computing", code: "CS" }
const generalTrack = {
    id: 1,
    start_year: 2020,
    end_year: 2026,
    is_foreign: false,
    total_credit: 130,
    total_au: 9,
    basic_required: 20,
    basic_elective: 3,
    thesis_study: 3,
    thesis_study_doublemajor: 0,
    general_required_credit: 7,
    general_required_au: 9,
    humanities: 12,
    humanities_doublemajor: 6,
}
const majorTrack = {
    id: 2,
    start_year: 2020,
    end_year: 2026,
    department,
    basic_elective_doublemajor: 6,
    major_required: 18,
    major_elective: 21,
}
const course = {
    id: 10,
    old_code: "CS101",
    old_old_code: "CS100",
    department,
    type: "Major Required",
    type_en: "Major Required",
    title: "프로그래밍 기초",
    title_en: "Programming Basics",
    summary: "",
    review_total_weight: 0,
    credit: 3,
    credit_au: 0,
    num_classes: 3,
    num_labs: 0,
}

const planner = PlannerDetailSchema.parse({
    id: 1,
    start_year: 2023,
    end_year: 2026,
    general_track: generalTrack,
    major_track: majorTrack,
    additional_tracks: [],
    taken_items: [
        {
            id: 11,
            item_type: "TAKEN" as const,
            is_excluded: false,
            course,
            lecture: {
                id: 20,
                title: course.title,
                title_en: course.title_en,
                course: course.id,
                old_old_code: course.old_old_code,
                old_code: course.old_code,
                class_no: "A",
                year: 2023,
                semester: 1,
                code: "CS101-A",
                department: department.id,
                department_code: department.code,
                department_name: department.name,
                department_name_en: department.name_en,
                type: "Major Required",
                type_en: "Major Required",
                limit: 60,
                num_people: 50,
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
            },
        },
    ],
    future_items: [
        {
            id: 12,
            item_type: "FUTURE" as const,
            is_excluded: true,
            year: 2024,
            semester: 3,
            course: { ...course, id: 12, credit: 6 },
        },
    ],
    arbitrary_items: [
        {
            id: 13,
            item_type: "ARBITRARY" as const,
            is_excluded: false,
            year: 2025,
            semester: 1,
            department,
            type: "전공필수",
            type_en: "Major Required",
            credit: 18,
            credit_au: 0,
        },
    ],
    arrange_order: 0,
})

describe("PlannerDetailSchema", () => {
    it("parses a complete planner response", () => {
        const result = PlannerDetailSchema.safeParse(planner)
        expect(result.success).toBe(true)
    })

    it("normalizes documented course and lecture detail response fields", () => {
        const takenItem = planner.taken_items[0]
        const futureItem = planner.future_items[0]
        if (takenItem === undefined || futureItem === undefined) {
            throw new RangeError("planner response fixture must contain taken and future items")
        }
        const detailedCourse = {
            ...course,
            related_courses_prior: [],
            related_courses_posterior: [],
            professors: [],
            grade: 0,
            load: 0,
            speech: 0,
        }
        const detailedLecture = {
            ...takenItem.lecture,
            grade: 0,
            load: 0,
            speech: 0,
            classtimes: [],
            examtimes: [],
        }
        const result = PlannerDetailResponseSchema.parse({
            ...planner,
            taken_items: [
                {
                    ...takenItem,
                    course: detailedCourse,
                    lecture: detailedLecture,
                },
            ],
            future_items: [
                {
                    ...futureItem,
                    course: detailedCourse,
                },
            ],
        })

        expect(result.taken_items[0]?.course).toEqual(course)
        expect(result.taken_items[0]?.lecture).toEqual(takenItem.lecture)
        expect(result.future_items[0]?.course).toEqual(course)
    })

    it("rejects unknown response fields", () => {
        const result = PlannerDetailSchema.safeParse({ ...planner, unexpected: true })
        expect(result.success).toBe(false)
    })

    it("rejects an invalid semester", () => {
        const invalid = {
            ...planner,
            future_items: [{ ...planner.future_items[0], semester: 5 }],
        }
        expect(PlannerDetailSchema.safeParse(invalid).success).toBe(false)
    })
})
