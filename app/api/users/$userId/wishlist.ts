import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"

// GET /api/users/:userId/wishlist
export const GETRequest = z.object({})

export const GETResponse = z.object({
    courses: z.array(
        z.object({
            id: z.number().int(),
            name: z.string(),
            code: z.string(),
            type: z.string(),
            completed: z.boolean(),
            lectures: z.array(LectureSchema),
        }),
    ),
})

export type GETWishlistResponse = z.infer<typeof GETResponse>

// PATCH /api/users/:userId/wishlist
export const PATCHRequest = z.object({
    lectureId: z.number().int(),
    mode: z.enum(["add", "delete"]),
})

export const PATCHResponse = z.object({})

export type PATCHWishlistBody = z.infer<typeof PATCHRequest>
