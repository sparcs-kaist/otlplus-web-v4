import { z } from "zod"

// PATCH /api/reviews/:reviewId/liked
export const PATCHRequest = z.object({
    reviewId: z.number().int(),
    action: z.enum(["like", "unlike"]),
})

export const PATCHResponse = z.object({})

export type PATCHReviewLikeBody = z.infer<typeof PATCHRequest>
