import { z } from "zod"

export const POSTRequest = z.object({})
export const POSTResponse = z.object({
    token: z.string(),
    expiresAt: z.string(),
})
