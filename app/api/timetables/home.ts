import { z } from "zod"

import { GETResponse as DetailSchema, GETRequest as TermSchema } from "./my-timetable"

export const GETRequest = TermSchema

export const GETResponse = DetailSchema.extend({
    source: z.enum(["saved", "enrolled"]),
    timetableId: z.number().int().nullable(),
    name: z.string(),
    year: z.number().int(),
    semester: z.number().int(),
})

export const PATCHRequest = TermSchema.extend({
    timetableId: z.number().int().positive().nullable(),
})
export const PATCHResponse = GETResponse
