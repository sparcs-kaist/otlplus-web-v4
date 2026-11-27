import { z } from "zod"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import {
    CustomBlockInputSchema,
    TimetableChangeSchema,
    TimetableItemSchema,
    TimetableItemsSchema,
} from "@/common/schemas/timetableItem"

export const POSTRequest = z
    .object({
        lectureIds: z.array(z.number().int().positive()).optional(),
        customBlocks: z.array(CustomBlockInputSchema).optional(),
    })
    .refine(
        ({ lectureIds, customBlocks }) =>
            (lectureIds?.length ?? 0) + (customBlocks?.length ?? 0) > 0,
        "At least one lecture or custom block is required",
    )

export const DELETERequest = z
    .object({
        lectureIds: z.array(z.number().int().positive()).optional(),
        customBlockIds: z.array(z.number().int().positive()).optional(),
    })
    .refine(
        ({ lectureIds, customBlockIds }) =>
            (lectureIds?.length ?? 0) + (customBlockIds?.length ?? 0) > 0,
        "At least one lecture or custom block is required",
    )

export const PATCHRequest = z.object({ changes: z.array(TimetableChangeSchema).min(1) })

export const PATCHResponse = z.object({
    timetableItems: z.array(TimetableItemSchema),
    results: z.array(
        z.object({
            index: z.number().int(),
            kind: z.enum(TimetableItemKind),
            id: z.number().int(),
        }),
    ),
})

export const POSTResponse = TimetableItemsSchema
export const DELETEResponse = z.object({
    lectureIds: z.array(z.number().int().positive()),
    customBlockIds: z.array(z.number().int().positive()),
})
