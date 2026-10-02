import { z } from "zod"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import { CustomBlockSchema } from "@/common/schemas/customBlock"
import { LectureSchema } from "@/common/schemas/lecture"

export const TimetableItemSchema = z.discriminatedUnion("kind", [
    z.object({ kind: z.literal(TimetableItemKind.LECTURE), data: LectureSchema }),
    z.object({ kind: z.literal(TimetableItemKind.CUSTOM), data: CustomBlockSchema }),
])

export type TimetableItem = z.infer<typeof TimetableItemSchema>

export const CustomBlockInputSchema = CustomBlockSchema.omit({ id: true }).extend({
    block_name: z.string().trim().min(1).max(255),
    place: z.string().max(255),
    day: z.number().int().min(0).max(6),
})

export const TimetableChangeSchema = z.union([
    z.object({
        op: z.literal("add"),
        kind: z.literal(TimetableItemKind.LECTURE),
        lectureId: z.number().int().positive(),
    }),
    z.object({
        op: z.literal("add"),
        kind: z.literal(TimetableItemKind.CUSTOM),
        data: CustomBlockInputSchema,
    }),
    z.object({
        op: z.literal("remove"),
        kind: z.enum(TimetableItemKind),
        id: z.number().int().positive(),
    }),
    z.object({
        op: z.literal("update"),
        kind: z.literal(TimetableItemKind.CUSTOM),
        id: z.number().int().positive(),
        data: CustomBlockInputSchema.partial(),
    }),
])

export type TimetableChange = z.infer<typeof TimetableChangeSchema>
