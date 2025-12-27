import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

// GET /api/sync/requests/active
export const GETRequest = z.object({
    requestId: z.string(),
})

export const GETResponse = z.object({
    requestId: z.string(),
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
    status: z.enum(["wait", "inProgress", "complete", "error"]),
    startedAt: z.date(),
})

export type GETRequestStatusQuery = z.infer<typeof GETRequest>
export type GETRequestStatusResponse = z.infer<typeof GETResponse>
