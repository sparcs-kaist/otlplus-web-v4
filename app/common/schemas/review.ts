import { z } from "zod"

import { ScoreEnum } from "@/common/enum/scoreEnum"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import { ProfessorSchema } from "@/common/schemas/professor"

export const ReviewSchema = z.object({
    id: z.number().int(),
    courseId: z.number().int(),
    courseName: z.string(),
    professor: z.array(ProfessorSchema),
    year: z.number().int(),
    semester: z.enum(SemesterEnum),
    content: z.string(),
    like: z.number().int(),
    grade: z.enum(ScoreEnum),
    load: z.enum(ScoreEnum),
    speech: z.enum(ScoreEnum),
    isDeleted: z.boolean(),
    likedByUser: z.boolean(),
})

export type Review = z.infer<typeof ReviewSchema>
