import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"
import { TimetableSchema } from "@/common/schemas/timetable"

//GET /api/timetables/:timetableId
export const GETRequest = z.object({})

export const GETResponse = TimetableSchema

export type GETTimetableByIdResponse = z.infer<typeof GETResponse>

// PATCH /api/timetables/:timetableId
export const PATCHRequest = z.object({
    lectureId: z.number().int(),
    action: z.enum(["add", "remove"]),
})

export const PATCHResponse = LectureSchema

export type PATCHTimetableByIdBody = z.infer<typeof PATCHRequest>
export type PATCHTimetableByIdResponse = z.infer<typeof PATCHResponse>
