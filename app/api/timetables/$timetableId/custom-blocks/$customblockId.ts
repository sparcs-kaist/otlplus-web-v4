import { z } from "zod"

// PATCH /api/timetables/:timetableId/custom-blocks/:customblockId
export const PATCHRequest = z.object({
    block_name: z.string().optional(),
    place: z.string().optional(),
})

export const PATCHResponse = z.object({})

export type PATCHCustomBlockBody = z.infer<typeof PATCHRequest>
export type PATCHCustomBlockResponse = z.infer<typeof PATCHResponse>
