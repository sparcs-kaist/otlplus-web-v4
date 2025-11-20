import { z } from "zod"

import { DepartmentSchema } from "@/common/schemas/department"

// GET /api/users/$userId/info
export const GETRequest = z.object({})

export const GETResponse = z.object({
    id: z.number().int(),
    name: z.string(),
    mail: z.email(),
    studentNumber: z.number().int(),
    degree: z.string(),
    majorDepartments: z.array(DepartmentSchema),
    interestedDepartments: z.array(DepartmentSchema),
})

export type GETUserInfoResponse = z.infer<typeof GETResponse>
