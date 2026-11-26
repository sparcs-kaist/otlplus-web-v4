import { z } from "zod"

import { GETRequest } from "./home"

export { GETRequest, GETResponse, PATCHResponse } from "./home"
export const PATCHRequest = GETRequest.extend({
    timetableId: z.number().int().positive().nullable(),
})
