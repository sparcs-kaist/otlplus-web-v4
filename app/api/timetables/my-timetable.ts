import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { TimetableItemsSchema } from "@/common/schemas/timetableItem"

// GET /api/timetables/my-timetable
export const GETRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})

export const GETResponse = TimetableItemsSchema

export type GETMyTimetableResponse = z.infer<typeof GETResponse>
