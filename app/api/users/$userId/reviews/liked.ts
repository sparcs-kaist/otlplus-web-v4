import { z } from "zod"

import { ReviewSchema } from "@/common/schemas/review"

// GET /api/users/$userId/reviews/liked
export const GETRequest = z.object({
    userId: z.number().int(),
})
export const GETResponse = z.object({
    reviews: z.array(ReviewSchema),
})

export type GETUserLikedReviewsQuery = z.infer<typeof GETRequest>
export type GETUserLikedReviewsResponse = z.infer<typeof GETResponse>
