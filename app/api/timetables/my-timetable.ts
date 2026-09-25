import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { LectureSchema } from "@/common/schemas/lecture"
import { TimetableItemSchema } from "@/common/schemas/timetableItem"

// GET /api/timetables/my-timetable
export const GETRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})

export const GETResponse = z.object({
    lectures: z.array(LectureSchema),
    timetableItems: z.array(TimetableItemSchema),
})

export type GETMyTimetableResponse = z.infer<typeof GETResponse>
