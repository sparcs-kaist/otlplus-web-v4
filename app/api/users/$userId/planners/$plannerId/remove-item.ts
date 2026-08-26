import { z } from "zod"

import { PlannerItemTypeSchema } from "@/common/schemas/planner"
import { PlannerDetailResponseSchema } from "@/common/schemas/plannerResponse"

export const POSTRequest = z
    .object({
        item: z.number().int(),
        item_type: PlannerItemTypeSchema,
    })
    .strict()
export const POSTResponse = PlannerDetailResponseSchema
