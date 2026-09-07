import { z } from "zod"

import { PlannerItemTypeSchema, PlannerSemesterSchema } from "@/common/schemas/planner"
import { PlannerItemResponseSchema } from "@/common/schemas/plannerResponse"

export const POSTRequest = z
    .object({
        item: z.number().int(),
        item_type: PlannerItemTypeSchema,
        semester: PlannerSemesterSchema.optional(),
        is_excluded: z.boolean().optional(),
    })
    .strict()
    .refine((body) => body.semester !== undefined || body.is_excluded !== undefined, {
        message: "semester or is_excluded is required",
    })
export const POSTResponse = PlannerItemResponseSchema
