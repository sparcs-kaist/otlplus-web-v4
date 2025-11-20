import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"

// GET /api/timetables/my-timetable
export const GETRequest = z.object({})

export const GETResponse = z.object({
    year: z.number().int(),
    semester: z.string(),
    lectures: z.array(LectureSchema),
})

export type GETMyTimetableResponse = z.infer<typeof GETResponse>
