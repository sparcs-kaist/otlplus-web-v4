import { z } from "zod"

import { LectureActionEnum } from "@/common/enum/lectureActionEnum"
import { CustomBlockSchema } from "@/common/schemas/customBlock"
import { LectureSchema } from "@/common/schemas/lecture"

//GET /api/timetables/:timetableId
export const GETRequest = z.object({})

export const GETResponse = z.object({
    lectures: z.array(LectureSchema),
    customBlocks: z.array(CustomBlockSchema),
})

export type GETTimetableByIdResponse = z.infer<typeof GETResponse>

// PATCH /api/timetables/:timetableId
export const PATCHRequest = z.object({
    lectureId: z.number().int(),
    action: z.enum(LectureActionEnum),
})

export const PATCHResponse = LectureSchema

export type PATCHTimetableByIdBody = z.infer<typeof PATCHRequest>
export type PATCHTimetableByIdResponse = z.infer<typeof PATCHResponse>
