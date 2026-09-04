import type { PlannerCourse } from "@/common/schemas/planner"

export function normalizePlannerCourse(course: PlannerCourse): PlannerCourse {
    return {
        id: course.id,
        old_code: course.old_code,
        old_old_code: course.old_old_code,
        department: course.department,
        type: course.type,
        type_en: course.type_en,
        title: course.title,
        title_en: course.title_en,
        summary: course.summary,
        review_total_weight: course.review_total_weight,
        credit: course.credit,
        credit_au: course.credit_au,
        num_classes: course.num_classes,
        num_labs: course.num_labs,
    }
}
