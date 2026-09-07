import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { SyncStatusEnum } from "@/common/enum/syncStatusEnum"

// GET SSE /api/sync/requests/:requestId/stream
export const GETRequest = z.object({})

export const GETResponse = z.object({
    event: z.enum(SyncStatusEnum),
    year: z.number().int().optional(),
    semester: z.enum(SemesterEnum).optional(),
    data: z.object({
        synced: z.array(z.number().int()),
        pending: z.array(z.number().int()),
    }),
})

export type STREAMSyncRequestResponse = z.infer<typeof GETResponse>
