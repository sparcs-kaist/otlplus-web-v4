import { z } from "zod"

export const DELETERequest = z.object({})
export const DELETEResponse = z.object({ id: z.number().int() })
