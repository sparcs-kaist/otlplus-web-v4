import { z } from "zod"

// PUT /api/users/$userId/interested-departments
export const PUTRequest = z.object({
    interestedDepartmentIds: z.array(z.number().int()),
})

export const PUTResponse = z.object({})

export type PUTUserInterestedMajorsBody = z.infer<typeof PUTRequest>
