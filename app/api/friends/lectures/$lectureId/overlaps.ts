import { z } from "zod"

import { OverlapFriendSchema } from "@/common/schemas/friend"

export const GETRequest = z.object({})
export const GETResponse = z.object({
    sameLecture: z.array(OverlapFriendSchema),
    sameCourseDifferentSection: z.array(OverlapFriendSchema),
    previousSemesterSameProfessor: z.array(OverlapFriendSchema),
})
