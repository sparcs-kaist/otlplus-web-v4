import { z } from "zod"

import { GETRequest, GETResponse } from "./home"

export { GETRequest, GETResponse }
export const PATCHRequest = GETRequest.extend({
    timetableId: z.number().int().positive().nullable(),
})
export const PATCHResponse = GETResponse
