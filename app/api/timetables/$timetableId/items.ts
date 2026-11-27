import { z } from "zod"

import { CustomBlockInputSchema } from "@/common/schemas/timetableItem"

import { GETRequest, GETResponse } from "../$timetableId"

export { GETRequest, GETResponse }

const positiveId = z.number().int().positive()
const itemRef = z.object({ id: positiveId })

export const PATCHRequest = z
    .object({
        adds: z.object({
            lectures: z.array(itemRef),
            customBlocks: z.array(
                CustomBlockInputSchema.extend({ id: z.number().int().optional() }),
            ),
        }),
        deletes: z.object({ lectures: z.array(itemRef), customBlocks: z.array(itemRef) }),
        updates: z.object({
            customBlocks: z.array(
                CustomBlockInputSchema.partial().extend({ id: positiveId }),
            ),
        }),
    })
    .refine(
        ({ adds, deletes, updates }) =>
            adds.lectures.length +
                adds.customBlocks.length +
                deletes.lectures.length +
                deletes.customBlocks.length +
                updates.customBlocks.length >
            0,
        "At least one timetable item edit is required",
    )

export const PATCHResponse = GETResponse

export type PATCHTimetableItemsBody = z.infer<typeof PATCHRequest>
