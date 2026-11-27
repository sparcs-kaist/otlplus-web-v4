import { z } from "zod"

import { CustomBlockInputSchema } from "@/common/schemas/timetableItem"

import { GETRequest, GETResponse } from "../$timetableId"

export { GETRequest, GETResponse }

const positiveId = z.number().int().positive()

export const PATCHRequest = z
    .object({
        adds: z.object({
            lectureIds: z.array(positiveId),
            customBlocks: z.array(
                CustomBlockInputSchema.extend({ id: z.number().int().optional() }),
            ),
        }),
        deletes: z.object({
            lectureIds: z.array(positiveId),
            customBlockIds: z.array(positiveId),
        }),
        updates: z.object({
            customBlocks: z.array(
                CustomBlockInputSchema.partial().extend({ id: positiveId }),
            ),
        }),
    })
    .refine(
        ({ adds, deletes, updates }) =>
            adds.lectureIds.length +
                adds.customBlocks.length +
                deletes.lectureIds.length +
                deletes.customBlockIds.length +
                updates.customBlocks.length >
            0,
        "At least one timetable item edit is required",
    )

export const PATCHResponse = GETResponse

export type PATCHTimetableItemsBody = z.infer<typeof PATCHRequest>
