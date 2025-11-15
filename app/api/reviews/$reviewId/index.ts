import { z } from "zod"

import { ScoreEnum } from "@/common/enum/scoreEnum"

// PUT /api/reviews/:reviewId
export const PUTRequest = z.object({
    content: z.string().min(1).max(5000),
    grade: z.enum(ScoreEnum),
    load: z.enum(ScoreEnum),
    speech: z.enum(ScoreEnum),
})

export const PUTResponse = z.object({})

export type PUTReviewBody = z.infer<typeof PUTRequest>
