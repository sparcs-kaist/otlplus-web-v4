import { z } from "zod"

export { GETRequest, PATCHRequest } from "./home"

export const GETResponse = z.object({
    year: z.number().int(),
    semester: z.number().int(),
    timetableId: z.number().int().positive().nullable(),
})
export const PATCHResponse = GETResponse
