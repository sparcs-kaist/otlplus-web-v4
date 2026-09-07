import { z } from "zod"

import { FriendSchema } from "@/common/schemas/friend"

export const GETRequest = z.object({})
export const GETResponse = z.object({ friends: z.array(FriendSchema) })
