import { z } from "zod"

export const GETRequest = z.object({
    hello: z.string(),
})

export const GETResponse = z.object({
    bye: z.object(),
})
