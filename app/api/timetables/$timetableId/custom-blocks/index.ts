import { z } from "zod"

import { CustomBlockSchema } from "@/common/schemas/customBlock"

// GET /api/timetables/:timetableId/custom-blocks
export const GETRequest = z.object({})

export const GETResponse = z.object({
    custom_blocks: z.array(CustomBlockSchema),
})

export type GETCustomBlocksResponse = z.infer<typeof GETResponse>

// POST /api/timetables/:timetableId/custom-blocks
export const POSTRequest = z.object({
    block_name: z.string(),
    place: z.string(),
    day: z.number().int(),
    begin: z.number().int().min(0).max(1439),
    end: z.number().int().min(0).max(1439),
})

export const POSTResponse = z.object({
    id: z.number().int(),
})

export type POSTCustomBlockBody = z.infer<typeof POSTRequest>
export type POSTCustomBlockResponse = z.infer<typeof POSTResponse>
