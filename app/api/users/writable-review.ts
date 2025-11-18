import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/users/writable-reviews
export const GETRequest = z.object({})

export const GETResponse = z.object({
    name: z.string(),
    lectureId: z.number().int(),
    totalRemainingCount: z.number().int(),
})

export type GETWritableReviewsResponse = z.infer<typeof GETResponse>
