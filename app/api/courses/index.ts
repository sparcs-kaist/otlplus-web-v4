import { z } from "zod"

import { DepartmentSchema } from "@/common/schemas/department"
import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/courses
export const GETRequest = z.object({
    type: z.array(z.string()).optional(),
    department: z.array(z.number().int()).optional(),
    level: z.array(z.number().int()).optional(),
    term: z.number().int().optional(),
    order: z.enum(["code", "popular", "studentCount"]),
    keyword: z.string(),
    offset: z.number().int(),
    limit: z.number().int(),
})

export const GETResponse = z.object({
    courses: z.array(
        z.object({
            id: z.number().int(),
            name: z.string(),
            code: z.string(),
            type: z.string(),
            department: DepartmentSchema,
            professors: z.array(ProfessorSchema),
            summary: z.string(),
            open: z.boolean(),
            completed: z.boolean(),
        }),
    ),
    totalCount: z.number().int(),
})

export type GETCoursesQuery = z.infer<typeof GETRequest>
export type GETCoursesResponse = z.infer<typeof GETResponse>
