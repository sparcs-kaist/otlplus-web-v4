import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { LectureSchema } from "@/common/schemas/lecture"

export const GETRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})
export const GETResponse = z.object({ lectures: z.array(LectureSchema) })
