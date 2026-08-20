import { z } from "zod"

import { PlannerSemesterSchema } from "@/common/schemas/planner"
import { FuturePlannerItemResponseSchema } from "@/common/schemas/plannerResponse"

export const POSTRequest = z
    .object({
        course: z.number().int(),
        year: z.number().int(),
        semester: PlannerSemesterSchema,
    })
    .strict()
export const POSTResponse = FuturePlannerItemResponseSchema
