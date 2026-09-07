import { z } from "zod"

import {
    type PlannerCourse,
    PlannerDepartmentSchema,
    type PlannerSemester,
    PlannerSemesterSchema,
} from "@/common/schemas/planner"

export const ArbitraryItemInputSchema = z
    .object({
        year: z.number().int(),
        semester: PlannerSemesterSchema,
        department: PlannerDepartmentSchema,
        type: z.string().min(1),
        typeEn: z.string().min(1),
        credit: z.number().int().nonnegative(),
        creditAU: z.number().int().nonnegative(),
    })
    .strict()

export type ArbitraryItemInput = z.infer<typeof ArbitraryItemInputSchema>

export type AddFutureItem = (
    course: PlannerCourse,
    year: number,
    semester: PlannerSemester,
    options?: { readonly excludeTakenDuplicates?: boolean },
) => Promise<void>
