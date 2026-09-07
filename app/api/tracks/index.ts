import { z } from "zod"

import { TracksResponseSchema } from "@/common/schemas/planner"

export const GETRequest = z.object({}).strict()
export const GETResponse = TracksResponseSchema
