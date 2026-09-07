import { z } from "zod"

import {
    ArbitraryPlannerItemSchema,
    PlannerSemesterSchema,
} from "@/common/schemas/planner"

export const POSTRequest = z
    .object({
        year: z.number().int(),
        semester: PlannerSemesterSchema,
        department: z.number().int(),
        type: z.string().min(1),
        type_en: z.string().min(1),
        credit: z.number().int().nonnegative(),
        credit_au: z.number().int().nonnegative(),
    })
    .strict()
export const POSTResponse = ArbitraryPlannerItemSchema
