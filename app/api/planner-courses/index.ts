import { z } from "zod"

import { PlannerCourseSchema, PlannerProfessorSchema } from "@/common/schemas/planner"

export const GETRequest = z
    .object({
        department: z.array(z.string()).optional(),
        type: z.array(z.string()).optional(),
        level: z.array(z.string()).optional(),
        group: z.array(z.string()).optional(),
        keyword: z.string().min(1),
        term: z.array(z.string()).optional(),
        order: z.array(z.string()).optional(),
        offset: z.number().int().nonnegative().optional(),
        limit: z.number().int().positive().max(100).optional(),
    })
    .strict()

const PlannerCourseDetailSchema = PlannerCourseSchema.extend({
    related_courses_prior: z.array(PlannerCourseSchema),
    related_courses_posterior: z.array(PlannerCourseSchema),
    professors: z.array(PlannerProfessorSchema),
    grade: z.number(),
    load: z.number(),
    speech: z.number(),
    userspecific_is_read: z.boolean().optional(),
}).strict()

export const GETResponse = z.array(PlannerCourseDetailSchema)
