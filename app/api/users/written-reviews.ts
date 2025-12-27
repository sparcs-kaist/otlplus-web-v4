import { z } from "zod"

import { ReviewSchema } from "@/common/schemas/review"

// GET /api/users/writable-reviews
export const GETRequest = z.object({})

export const GETResponse = z.object({
    reviews: ReviewSchema.array(),
})

export type GETWritableReviewsResponse = z.infer<typeof GETResponse>
