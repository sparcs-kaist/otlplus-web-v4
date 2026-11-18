import { z } from "zod"

import { FriendCodeSchema } from "@/common/schemas/friend"

export const GETRequest = z.object({})
export const GETResponse = z.object({ code: FriendCodeSchema })

export const POSTRequest = z.object({})
export const POSTResponse = GETResponse
