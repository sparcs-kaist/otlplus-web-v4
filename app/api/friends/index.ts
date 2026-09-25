import { z } from "zod"

import { FriendCodeSchema, FriendSchema } from "@/common/schemas/friend"

export const GETRequest = z.object({})
export const GETResponse = z.object({ friends: z.array(FriendSchema) })

export const POSTRequest = z.object({ code: FriendCodeSchema })
export const POSTResponse = z.object({ friend: FriendSchema })
