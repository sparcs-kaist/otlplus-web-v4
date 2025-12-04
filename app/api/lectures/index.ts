import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import { LectureSchema } from "@/common/schemas/lecture"

// GET /api/lectures
export const GETRequest = z.object({
    keyword: z.string().optional(),
    type: z.string().optional(),
    department: z.number().int().optional(),
    level: z.number().int().optional(),
    limit: z.number().int().optional(),
    year: z.number().int().optional(),
    semester: z.enum(SemesterEnum).optional(),
    day: z.enum(WeekdayEnum).optional(),
    begin: z.number().int().optional(),
    end: z.number().int().optional(),
})

export const GETResponse = z.object({
    courses: z.array(
      z.object({
        name: z.string(),
        code: z.string(),
        type: z.string(),
        completed: z.boolean(),
        lectures: z.array(LectureSchema),
      }),
    ),
})

export type GETLecturesQuery = z.infer<typeof GETRequest>
export type GETLecturesResponse = z.infer<typeof GETResponse>
