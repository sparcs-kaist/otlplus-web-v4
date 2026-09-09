import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"

export const GETRequest = z.object({})
export const GETResponse = z.object({ lectures: z.array(LectureSchema) })
