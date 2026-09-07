import { z } from "zod"

import { PlannerDetailResponseSchema } from "@/common/schemas/plannerResponse"

export const PATCHRequest = z
    .object({
        start_year: z.number().int(),
        end_year: z.number().int(),
        general_track: z.number().int(),
        major_track: z.number().int(),
        additional_tracks: z.array(z.number().int()),
        should_update_taken_semesters: z.boolean().optional(),
    })
    .strict()
    .refine((body) => body.start_year <= body.end_year, {
        message: "start_year must not exceed end_year",
    })
export const PATCHResponse = PlannerDetailResponseSchema

export const DELETERequest = z.object({}).strict()
export const DELETEResponse = z.object({ message: z.string() }).strict()
