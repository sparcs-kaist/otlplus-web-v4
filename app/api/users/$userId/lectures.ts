import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/users/$userId/lectures
export const GETRequest = z.object({
    year: z.number().int().optional(),
    semester: z.enum(SemesterEnum).optional(),
})

export const GETResponse = z.object({
    totalLecturesCount: z.number().int(),
    reviewedLecturesCount: z.number().int(),
    totalLikesCount: z.number().int(),
    lecturesWrap: z.array(
        z.object({
            year: z.number().int(),
            semester: z.enum(SemesterEnum),
            lectures: z.array(
                z.object({
                    name: z.string(),
                    code: z.string(),
                    courseId: z.number().int(),
                    lectureId: z.number().int(),
                    professors: z.array(ProfessorSchema),
                    written: z.boolean(),
                }),
            ),
        }),
    ),
})

export type GETUserPastLecturesQuery = z.infer<typeof GETRequest>
export type GETUserPastLecturesResponse = z.infer<typeof GETResponse>
