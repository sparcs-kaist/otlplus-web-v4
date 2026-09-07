import { z } from "zod"

import { FriendSchema } from "@/common/schemas/friend"

export const POSTRequest = z.object({ token: z.string().min(1) })
export const POSTResponse = z.object({ friend: FriendSchema })
