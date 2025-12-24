import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { TimetablesSchema } from "@/common/schemas/timetables"

// GET /api/timetables
export const GETRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})

export const GETResponse = z.object({
    timetables: z.array(TimetablesSchema),
})

export type GETTimetablesQuery = z.infer<typeof GETRequest>
export type GETTimetablesResponse = z.infer<typeof GETResponse>

// POST /api/timetables
export const POSTRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
    lectureIds: z.array(z.number().int()),
})

export const POSTResponse = z.object({
    id: z.number().int(),
})

export type POSTTimetableBody = z.infer<typeof POSTRequest>
export type POSTTimetableResponse = z.infer<typeof POSTResponse>

// DELETE /api/timetables
export const DELETERequest = z.object({
    id: z.number().int(),
})

export const DELETEResponse = z.object({})

export type DELETETimetableQuery = z.infer<typeof DELETERequest>

// PATCH /api/timetables
export const PATCHRequest = z.object({
    id: z.number().int(),
    name: z.string().optional(),
    order: z.number().int().optional(),
})

export const PATCHResponse = z.object({})

export type PATCHTimetableBody = z.infer<typeof PATCHRequest>
