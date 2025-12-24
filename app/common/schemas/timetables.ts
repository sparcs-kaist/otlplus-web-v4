import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

export const TimetablesSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
    timetableOrder: z.number().int(),
})

export type Timetables = z.infer<typeof TimetablesSchema>
