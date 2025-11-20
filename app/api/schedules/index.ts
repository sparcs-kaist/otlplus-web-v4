import { z } from "zod"

// GET /api/schedules
export const GETRequest = z.object({})

export const GETResponse = z.object({
    schedules: z.array(
        z.object({
            year: z.number().int(),
            from: z.date(),
            to: z.date(),
            name: z.string(),
        }),
    ),
})

export type GETSchedulesResponse = z.infer<typeof GETResponse>
