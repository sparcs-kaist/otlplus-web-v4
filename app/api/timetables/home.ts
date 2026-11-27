import { z } from "zod"

import { TimetableItemsSchema } from "@/common/schemas/timetableItem"

import { GETRequest as SemesterRequest } from "./my-timetable"

export const GETRequest = SemesterRequest

export const PATCHRequest = GETRequest.extend({
    timetableId: z.number().int().positive(),
})

export const PATCHResponse = z.object({
    source: z.enum(["saved", "enrolled"]),
    timetableId: z.number().int().nullable(),
    name: z.string(),
    year: GETRequest.shape.year,
    semester: GETRequest.shape.semester,
})

export const GETResponse = TimetableItemsSchema.extend(PATCHResponse.shape)
