import { z } from "zod"

import { FriendSchema } from "@/common/schemas/friend"

export const GETRequest = z.object({})
export const GETResponse = z.object({
    sameLecture: z.array(FriendSchema),
    sameCourseDifferentSection: z.array(FriendSchema),
    previousSemesterSameProfessor: z.array(FriendSchema),
})
