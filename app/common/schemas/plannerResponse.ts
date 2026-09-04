import { z } from "zod"

import {
    AdditionalTrackSchema,
    ArbitraryPlannerItemSchema,
    GeneralTrackSchema,
    MajorTrackSchema,
    PlannerCourseSchema,
    PlannerLectureSchema,
    PlannerProfessorSchema,
    PlannerSemesterSchema,
} from "./planner"

export const PlannerCourseResponseSchema = PlannerCourseSchema.extend({
    related_courses_prior: z.array(z.unknown()),
    related_courses_posterior: z.array(z.unknown()),
    professors: z.array(PlannerProfessorSchema),
    grade: z.number(),
    load: z.number(),
    speech: z.number(),
})
    .strict()
    .transform((course) => ({
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
    }))

export const PlannerLectureResponseSchema = PlannerLectureSchema.extend({
    grade: z.number(),
    load: z.number(),
    speech: z.number(),
    classtimes: z.array(z.unknown()),
    examtimes: z.array(z.unknown()),
})
    .strict()
    .transform((lecture) => ({
        id: lecture.id,
        title: lecture.title,
        title_en: lecture.title_en,
        course: lecture.course,
        old_old_code: lecture.old_old_code,
        old_code: lecture.old_code,
        class_no: lecture.class_no,
        year: lecture.year,
        semester: lecture.semester,
        code: lecture.code,
        department: lecture.department,
        department_code: lecture.department_code,
        department_name: lecture.department_name,
        department_name_en: lecture.department_name_en,
        type: lecture.type,
        type_en: lecture.type_en,
        limit: lecture.limit,
        num_people: lecture.num_people,
        is_english: lecture.is_english,
        num_classes: lecture.num_classes,
        num_labs: lecture.num_labs,
        credit: lecture.credit,
        credit_au: lecture.credit_au,
        common_title: lecture.common_title,
        common_title_en: lecture.common_title_en,
        class_title: lecture.class_title,
        class_title_en: lecture.class_title_en,
        review_total_weight: lecture.review_total_weight,
        professors: lecture.professors,
    }))

const PlannerItemBaseShape = {
    id: z.number().int(),
    is_excluded: z.boolean(),
}

export const TakenPlannerItemResponseSchema = z
    .object({
        ...PlannerItemBaseShape,
        item_type: z.literal("TAKEN"),
        lecture: PlannerLectureResponseSchema,
        course: PlannerCourseResponseSchema,
    })
    .strict()

export const FuturePlannerItemResponseSchema = z
    .object({
        ...PlannerItemBaseShape,
        item_type: z.literal("FUTURE"),
        year: z.number().int(),
        semester: PlannerSemesterSchema,
        course: PlannerCourseResponseSchema,
    })
    .strict()

export const PlannerItemResponseSchema = z.union([
    TakenPlannerItemResponseSchema,
    FuturePlannerItemResponseSchema,
    ArbitraryPlannerItemSchema,
])

export const PlannerDetailResponseSchema = z
    .object({
        id: z.number().int(),
        start_year: z.number().int(),
        end_year: z.number().int(),
        general_track: GeneralTrackSchema,
        major_track: MajorTrackSchema,
        additional_tracks: z.array(AdditionalTrackSchema),
        taken_items: z.array(TakenPlannerItemResponseSchema),
        future_items: z.array(FuturePlannerItemResponseSchema),
        arbitrary_items: z.array(ArbitraryPlannerItemSchema),
        arrange_order: z.number().int(),
    })
    .strict()
    .refine((planner) => planner.start_year <= planner.end_year, {
        message: "start_year must not exceed end_year",
    })

export const PlannerListResponseSchema = z.array(PlannerDetailResponseSchema)
