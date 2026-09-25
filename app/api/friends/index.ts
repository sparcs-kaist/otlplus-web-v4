import { z } from "zod"

import {
    FriendCodeSchema,
    FriendListItemSchema,
    FriendSchema,
} from "@/common/schemas/friend"

export const GETRequest = z.object({})
export const GETResponse = z.object({
    checkedAt: z.iso.datetime().optional(),
    friends: z.array(FriendListItemSchema),
})

export const POSTRequest = z.object({ code: FriendCodeSchema })
export const POSTResponse = z.object({ friend: FriendSchema })
