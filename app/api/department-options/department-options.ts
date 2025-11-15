import { z } from "zod"

// GET /api/department-options
export const GETRequest = z.object({})

export const GETResponse = z.object({
    departments: z.array(
        z.object({
            id: z.number().int(),
            name: z.string(),
            code: z.string(),
        }),
    ),
})

export type GETDepartmentOptionsResponse = z.infer<typeof GETResponse>
