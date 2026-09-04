import { z } from "zod"

import { PlannerBasicSchema } from "@/common/schemas/planner"

export const POSTRequest = z
    .object({ arrange_order: z.number().int().nonnegative() })
    .strict()
export const POSTResponse = PlannerBasicSchema
