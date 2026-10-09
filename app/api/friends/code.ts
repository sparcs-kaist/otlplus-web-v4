import { z } from "zod"

import { FriendCodeSchema } from "@/common/schemas/friend"

export const GETRequest = z.object({})
export const GETResponse = z.object({ code: FriendCodeSchema })
