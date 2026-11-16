import { z } from "zod"

import {
    GETResponse as EnrolledTimetableResponse,
    GETRequest as SemesterRequest,
} from "./my-timetable"

export const GETRequest = SemesterRequest

export const GETResponse = EnrolledTimetableResponse.extend({
    source: z.enum(["saved", "enrolled"]),
    timetableId: z.number().int().nullable(),
    name: z.string(),
    year: GETRequest.shape.year,
    semester: GETRequest.shape.semester,
})

export const PATCHRequest = GETRequest.extend({
    timetableId: z.number().int().positive(),
})

export const PATCHResponse = GETResponse
