import { z } from "zod"

export const PlannerSemesterSchema = z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
])
export const PlannerItemTypeSchema = z.enum(["TAKEN", "FUTURE", "ARBITRARY"])
export const AdditionalTrackTypeSchema = z.enum([
    "DOUBLE",
    "MINOR",
    "ADVANCED",
    "INTERDISCIPLINARY",
])

export const PlannerDepartmentSchema = z
    .object({
        id: z.number().int(),
        name: z.string(),
        name_en: z.string(),
        code: z.string(),
    })
    .strict()

export const PlannerProfessorSchema = z
    .object({
        name: z.string(),
        name_en: z.string().nullable(),
        professor_id: z.number().int(),
        review_total_weight: z.number(),
    })
    .strict()

export const PlannerCourseSchema = z
    .object({
        id: z.number().int(),
        old_code: z.string(),
        old_old_code: z.string(),
        department: PlannerDepartmentSchema,
        type: z.string(),
        type_en: z.string(),
        title: z.string(),
        title_en: z.string(),
        summary: z.string(),
        review_total_weight: z.number(),
        credit: z.number().int().nonnegative(),
        credit_au: z.number().int().nonnegative(),
        num_classes: z.number().int().nonnegative(),
        num_labs: z.number().int().nonnegative(),
    })
    .strict()

export const PlannerLectureSchema = z
    .object({
        id: z.number().int(),
        title: z.string(),
        title_en: z.string(),
        course: z.number().int(),
        old_old_code: z.string(),
        old_code: z.string(),
        class_no: z.string(),
        year: z.number().int(),
        semester: PlannerSemesterSchema,
        code: z.string(),
        department: z.number().int(),
        department_code: z.string(),
        department_name: z.string(),
        department_name_en: z.string(),
        type: z.string(),
        type_en: z.string(),
        limit: z.number().int(),
        num_people: z.number().int(),
        is_english: z.boolean(),
        num_classes: z.number().int(),
        num_labs: z.number().int(),
        credit: z.number().int().nonnegative(),
        credit_au: z.number().int().nonnegative(),
        common_title: z.string(),
        common_title_en: z.string(),
        class_title: z.string(),
        class_title_en: z.string(),
        review_total_weight: z.number(),
        professors: z.array(PlannerProfessorSchema),
    })
    .strict()

export const GeneralTrackSchema = z
    .object({
        id: z.number().int(),
        start_year: z.number().int(),
        end_year: z.number().int(),
        is_foreign: z.boolean(),
        total_credit: z.number().int().nonnegative(),
        total_au: z.number().int().nonnegative(),
        basic_required: z.number().int().nonnegative(),
        basic_elective: z.number().int().nonnegative(),
        thesis_study: z.number().int().nonnegative(),
        thesis_study_doublemajor: z.number().int().nonnegative(),
        general_required_credit: z.number().int().nonnegative(),
        general_required_au: z.number().int().nonnegative(),
        humanities: z.number().int().nonnegative(),
        humanities_doublemajor: z.number().int().nonnegative(),
    })
    .strict()

export const MajorTrackSchema = z
    .object({
        id: z.number().int(),
        start_year: z.number().int(),
        end_year: z.number().int(),
        department: PlannerDepartmentSchema,
        basic_elective_doublemajor: z.number().int().nonnegative(),
        major_required: z.number().int().nonnegative(),
        major_elective: z.number().int().nonnegative(),
    })
    .strict()

export const AdditionalTrackSchema = z
    .object({
        id: z.number().int(),
        start_year: z.number().int(),
        end_year: z.number().int(),
        type: AdditionalTrackTypeSchema,
        department: PlannerDepartmentSchema.nullable(),
        major_required: z.number().int().nonnegative(),
        major_elective: z.number().int().nonnegative(),
    })
    .strict()

const PlannerItemBaseShape = {
    id: z.number().int(),
    is_excluded: z.boolean(),
}

export const TakenPlannerItemSchema = z
    .object({
        ...PlannerItemBaseShape,
        item_type: z.literal("TAKEN"),
        lecture: PlannerLectureSchema,
        course: PlannerCourseSchema,
    })
    .strict()

export const FuturePlannerItemSchema = z
    .object({
        ...PlannerItemBaseShape,
        item_type: z.literal("FUTURE"),
        year: z.number().int(),
        semester: PlannerSemesterSchema,
        course: PlannerCourseSchema,
    })
    .strict()

export const ArbitraryPlannerItemSchema = z
    .object({
        ...PlannerItemBaseShape,
        item_type: z.literal("ARBITRARY"),
        year: z.number().int(),
        semester: PlannerSemesterSchema,
        department: PlannerDepartmentSchema.nullable(),
        type: z.string(),
        type_en: z.string(),
        credit: z.number().int().nonnegative(),
        credit_au: z.number().int().nonnegative(),
    })
    .strict()

export const PlannerItemSchema = z.discriminatedUnion("item_type", [
    TakenPlannerItemSchema,
    FuturePlannerItemSchema,
    ArbitraryPlannerItemSchema,
])

export const PlannerDetailSchema = z
    .object({
        id: z.number().int(),
        start_year: z.number().int(),
        end_year: z.number().int(),
        general_track: GeneralTrackSchema,
        major_track: MajorTrackSchema,
        additional_tracks: z.array(AdditionalTrackSchema),
        taken_items: z.array(TakenPlannerItemSchema),
        future_items: z.array(FuturePlannerItemSchema),
        arbitrary_items: z.array(ArbitraryPlannerItemSchema),
        arrange_order: z.number().int(),
    })
    .strict()
    .refine((planner) => planner.start_year <= planner.end_year, {
        message: "start_year must not exceed end_year",
    })

export const PlannerListSchema = z.array(PlannerDetailSchema)

export const PlannerBasicSchema = z
    .object({
        id: z.number().int(),
        start_year: z.number().int(),
        end_year: z.number().int(),
        general_track: GeneralTrackSchema.nullish(),
        major_track: MajorTrackSchema.nullish(),
        additional_tracks: z.array(AdditionalTrackSchema).nullish(),
        taken_items: z.array(TakenPlannerItemSchema).nullish(),
        future_items: z.array(FuturePlannerItemSchema).nullish(),
        arbitrary_items: z.array(ArbitraryPlannerItemSchema).nullish(),
        arrange_order: z.number().int(),
    })
    .strict()

export const TracksResponseSchema = z
    .object({
        general: z.array(GeneralTrackSchema),
        major: z.array(MajorTrackSchema),
        additional: z.array(AdditionalTrackSchema),
    })
    .strict()

export type PlannerSemester = z.infer<typeof PlannerSemesterSchema>
export type PlannerItemType = z.infer<typeof PlannerItemTypeSchema>
export type PlannerCourse = z.infer<typeof PlannerCourseSchema>
export type PlannerDepartment = z.infer<typeof PlannerDepartmentSchema>
export type PlannerItem = z.infer<typeof PlannerItemSchema>
export type PlannerDetail = z.infer<typeof PlannerDetailSchema>
export type GeneralTrack = z.infer<typeof GeneralTrackSchema>
export type MajorTrack = z.infer<typeof MajorTrackSchema>
export type AdditionalTrack = z.infer<typeof AdditionalTrackSchema>
export type TracksResponse = z.infer<typeof TracksResponseSchema>
