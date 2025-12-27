import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"

//GET /api/timetables/:timetableId
export const GETRequest = z.object({})

export const GETResponse = z.object({
    lectures: z.array(LectureSchema),
})

export type GETTimetableByIdResponse = z.infer<typeof GETResponse>

// PATCH /api/timetables/:timetableId
export const PATCHRequest = z.object({
    lectureId: z.number().int(),
    action: z.enum(["add", "delete"]),
})

export const PATCHResponse = LectureSchema

export type PATCHTimetableByIdBody = z.infer<typeof PATCHRequest>
export type PATCHTimetableByIdResponse = z.infer<typeof PATCHResponse>
