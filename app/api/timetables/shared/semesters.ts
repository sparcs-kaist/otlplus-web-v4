import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

export const GETRequest = z.object({})
export const GETResponse = z.object({
    semesters: z.array(
        z.object({
            year: z.number().int(),
            semester: z.enum(SemesterEnum),
        }),
    ),
})
