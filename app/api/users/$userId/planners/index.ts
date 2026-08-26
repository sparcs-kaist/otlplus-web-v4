import { z } from "zod"

import {
    PlannerDetailResponseSchema,
    PlannerListResponseSchema,
} from "@/common/schemas/plannerResponse"

export const GETRequest = z
    .object({
        order: z.array(z.string()).optional(),
        offset: z.number().int().nonnegative().optional(),
        limit: z.number().int().positive().optional(),
    })
    .strict()
export const GETResponse = PlannerListResponseSchema

export const POSTRequest = z
    .object({
        start_year: z.number().int(),
        end_year: z.number().int(),
        general_track: z.number().int(),
        major_track: z.number().int(),
        additional_tracks: z.array(z.number().int()).optional(),
        should_update_taken_semesters: z.boolean().optional(),
        taken_items_to_copy: z.array(z.number().int()),
        future_items_to_copy: z.array(z.number().int()),
        arbitrary_items_to_copy: z.array(z.number().int()),
    })
    .strict()
    .refine((body) => body.start_year <= body.end_year, {
        message: "start_year must not exceed end_year",
    })
export const POSTResponse = PlannerDetailResponseSchema
