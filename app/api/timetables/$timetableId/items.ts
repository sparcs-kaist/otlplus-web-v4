import { z } from "zod"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import {
    TimetableChangeSchema,
    TimetableItemSchema,
} from "@/common/schemas/timetableItem"

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
