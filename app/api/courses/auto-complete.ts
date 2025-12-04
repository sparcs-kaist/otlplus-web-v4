import { z } from "zod"

// GET /api/courses/auto-complete
export const GETRequest = z.object({
    keyword: z.string(),
})

export const GETResponse = z.object({
    autoComplete: z.string(),
})

export type GETCourseAutoCompleteQuery = z.infer<typeof GETRequest>
export type GETCourseAutoCompleteResponse = z.infer<typeof GETResponse>
