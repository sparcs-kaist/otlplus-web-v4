import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { DepartmentSchema } from "@/common/schemas/department"
import { ProfessorSchema } from "@/common/schemas/professor"

export const getCourseDetail = z.object({
    response: z.object({
        id: z.number().int(),
        name: z.string(),
        code: z.string(),
        type: z.string(),
        department: DepartmentSchema,
        history: z.array(
            z.object({
                year: z.number().int(),
                semester: z.nativeEnum(SemesterEnum),
                classes: z.array(
                    z.object({
                        lectureId: z.number().int(),
                        classNo: z.string(),
                        professors: z.array(ProfessorSchema),
                    }),
                ),
                myLectureId: z.number().int(),
            }),
        ),
        summary: z.string(),
        credit: z.number().int(),
        creditAU: z.number().int(),
        classDuration: z.number().int(),
        expDuration: z.number().int(),
    }),
})

export type GETCourseDetailResponse = z.infer<typeof getCourseDetail.shape.response>
