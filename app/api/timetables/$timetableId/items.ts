import { z } from "zod"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import {
    CustomBlockInputSchema,
    TimetableChangeSchema,
    TimetableItemSchema,
} from "@/common/schemas/timetableItem"

export const POSTRequest = z.object({
    items: z
        .array(
            z.discriminatedUnion("kind", [
                z.object({
                    kind: z.literal(TimetableItemKind.LECTURE),
                    lectureId: z.number().int().positive(),
                }),
                z.object({
                    kind: z.literal(TimetableItemKind.CUSTOM),
                    data: CustomBlockInputSchema,
                }),
            ]),
        )
        .min(1),
})

export const DELETERequest = z.object({
    items: z
        .array(
            z.object({
                kind: z.enum(TimetableItemKind),
                id: z.number().int().positive(),
            }),
        )
        .min(1),
})

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

export const POSTResponse = PATCHResponse
export const DELETEResponse = PATCHResponse
