import { z } from "zod"

// GET /api/schedules
export const GETRequest = z.object({})

export const GETResponse = z.object({
    year: z.number().int(),
    from: z.date(),
    to: z.date(),
    name: z.string(),
})

export type GETSchedulesResponse = z.infer<typeof GETResponse>
