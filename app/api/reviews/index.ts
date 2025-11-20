import { z } from "zod"

import { ScoreEnum } from "@/common/enum/scoreEnum"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import { ReviewSchema } from "@/common/schemas/review"

// GET /api/reviews
export const GETRequest = z.object({
    courseId: z.number().int().optional(),
    professorId: z.number().int().optional(),
    mode: z.enum(["default", "recent", "hall-of-fame", "review-feed", "popular-feed"]),
    year: z.number().int().optional(),
    semester: z.enum(SemesterEnum).optional(),
    offset: z.number().int(),
    limit: z.number().int(),
})

export const GETResponse = z.object({
    reviews: z.array(ReviewSchema),
    averageGrade: z.number(),
    averageLoad: z.number(),
    averageSpeech: z.number(),
    myReviewId: z.array(z.number().int()),
})

export type GETReviewsQuery = z.infer<typeof GETRequest>
export type GETReviewsResponse = z.infer<typeof GETResponse>

// POST /api/reviews
export const POSTRequest = z.object({
    lectureId: z.number().int(),
    content: z.string(),
    grade: z.enum(ScoreEnum),
    load: z.enum(ScoreEnum),
    speech: z.enum(ScoreEnum),
})

export const POSTResponse = z.object({
    id: z.number().int(),
})

export type POSTReviewBody = z.infer<typeof POSTRequest>
export type POSTReviewResponse = z.infer<typeof POSTResponse>
