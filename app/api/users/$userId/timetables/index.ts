import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

// GET /api/users/:userId/timetables: only IDs are needed to mark shared lectures.
export const GETRequest = z.object({
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
})

export const GETResponse = z.array(
    z.object({
        id: z.number().int(),
        lectures: z.array(z.object({ id: z.number().int() })).nullish(),
    }),
)
