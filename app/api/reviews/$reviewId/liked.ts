import { z } from "zod"

import { ReviewLikeActionEnum } from "@/common/enum/reviewLikeActionEnum"

// PATCH /api/reviews/:reviewId/liked
export const PATCHRequest = z.object({
    reviewId: z.number().int(),
    action: z.enum(ReviewLikeActionEnum),
})

export const PATCHResponse = z.object({})

export type PATCHReviewLikeBody = z.infer<typeof PATCHRequest>
