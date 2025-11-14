import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/users/writable-reviews
export const GETRequest = z.object({})

export const GETResponse = z.object({
    name: z.string(),
    courseId: z.number().int(),
    professors: z.array(ProfessorSchema),
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})

export type GETWritableReviewsResponse = z.infer<typeof GETResponse>
