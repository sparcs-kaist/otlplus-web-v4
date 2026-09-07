import { type PlannerDetail, PlannerDetailSchema } from "@/common/schemas/planner"

export const csDepartment = {
    id: 1,
    name: "전산학부",
    name_en: "School of Computing",
    code: "CS",
}
export const eeDepartment = {
    id: 2,
    name: "전기및전자공학부",
    name_en: "School of Electrical Engineering",
    code: "EE",
}
export const generalTrack = {
    id: 1,
    start_year: 2020,
    end_year: 2030,
    is_foreign: false,
    total_credit: 130,
    total_au: 8,
    basic_required: 20,
    basic_elective: 3,
    thesis_study: 3,
    thesis_study_doublemajor: 0,
    general_required_credit: 7,
    general_required_au: 9,
    humanities: 12,
    humanities_doublemajor: 6,
}
export const csMajorTrack = {
    id: 2,
    start_year: 2020,
    end_year: 2030,
    department: csDepartment,
    basic_elective_doublemajor: 6,
    major_required: 6,
    major_elective: 21,
}
export const eeMajorTrack = {
    ...csMajorTrack,
    id: 3,
    department: eeDepartment,
    major_required: 3,
    major_elective: 12,
}
export const csCourse = {
    id: 10,
    old_code: "CS101",
    old_old_code: "CS100",
    department: csDepartment,
    type: "전공필수",
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
export const eeCourse = {
    ...csCourse,
    id: 11,
    old_code: "EE101",
    old_old_code: "EE100",
    department: eeDepartment,
    title: "회로이론",
    title_en: "Circuit Theory",
}
export const csLecture = {
    id: 20,
    title: csCourse.title,
    title_en: csCourse.title_en,
    course: csCourse.id,
    old_old_code: csCourse.old_old_code,
    old_code: csCourse.old_code,
    class_no: "A",
    year: 2023,
    semester: 1 as const,
    code: "CS101-A",
    department: csDepartment.id,
    department_code: csDepartment.code,
    department_name: csDepartment.name,
    department_name_en: csDepartment.name_en,
    type: csCourse.type,
    type_en: csCourse.type_en,
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
}

export function createPlanner(overrides: Partial<PlannerDetail> = {}): PlannerDetail {
    return PlannerDetailSchema.parse({
        id: -1,
        start_year: 2023,
        end_year: 2026,
        general_track: generalTrack,
        major_track: csMajorTrack,
        additional_tracks: [],
        taken_items: [],
        future_items: [],
        arbitrary_items: [],
        arrange_order: 0,
        ...overrides,
    })
}
