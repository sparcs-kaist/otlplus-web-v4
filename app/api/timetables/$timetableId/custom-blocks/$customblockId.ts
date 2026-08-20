import { z } from "zod"

import { CustomBlockSchema } from "@/common/schemas/customBlock"

// PATCH /api/timetables/:timetableId/custom-blocks/:customblockId
export const PATCHRequest = z.object({
    block_name: z.string().optional(),
    place: z.string().optional(),
    day: z.number().int().min(0).max(6).optional(),
    begin: z.number().int().min(0).max(1439).optional(),
    end: z.number().int().min(1).max(1440).optional(),
})

export const PATCHResponse = CustomBlockSchema

export type PATCHCustomBlockBody = z.infer<typeof PATCHRequest>
export type PATCHCustomBlockResponse = z.infer<typeof PATCHResponse>

// DELETE /api/timetables/:timetableId/custom-blocks/:customblockId
export const DELETERequest = z.object({})

export const DELETEResponse = z.object({
    id: z.number().int(),
})

export type DELETECustomBlockResponse = z.infer<typeof DELETEResponse>
