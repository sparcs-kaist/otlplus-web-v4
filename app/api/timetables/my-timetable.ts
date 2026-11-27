import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { CustomBlockSchema } from "@/common/schemas/customBlock"
import { LectureSchema } from "@/common/schemas/lecture"

// GET /api/timetables/my-timetable
export const GETRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})

export const GETResponse = z.object({
    lectures: z.array(LectureSchema),
    customBlocks: z.array(CustomBlockSchema),
})

export type GETMyTimetableResponse = z.infer<typeof GETResponse>
