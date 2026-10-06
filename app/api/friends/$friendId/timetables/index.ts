import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { TimetablesSchema } from "@/common/schemas/timetables"

export const GETRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})
export const GETResponse = z.object({ timetables: z.array(TimetablesSchema) })
