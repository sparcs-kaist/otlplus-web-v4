import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

// GET /api/semesters
export const GETRequest = z.object({})

export const GETResponse = z.object({
    semesters: z.array(
        z.object({
            year: z.number().int(),
            semester: z.enum(SemesterEnum),
            beginning: z.string(),
            end: z.string(),
            courseDesciptionSubmission: z.string(),
            courseRegistrationPeriodStart: z.string(),
            courseRegistrationPeriodEnd: z.string(),
            courseAddDropPeriodEnd: z.string(),
            courseDropDeadline: z.string(),
            courseEvaluationDeadline: z.string(),
            gradePosting: z.string(),
        }),
    ),
})

export type GETSemestersResponse = z.infer<typeof GETResponse>
