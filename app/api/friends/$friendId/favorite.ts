import { z } from "zod"

export const PATCHRequest = z.object({ isFavorite: z.boolean() })
export const PATCHResponse = z.object({
    id: z.number().int(),
    isFavorite: z.boolean(),
})
