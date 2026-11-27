import { z } from "zod"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import { type CustomBlock, CustomBlockSchema } from "@/common/schemas/customBlock"
import { type Lecture, LectureSchema } from "@/common/schemas/lecture"

type TimetableItemDataMap = {
    [TimetableItemKind.LECTURE]: Lecture
    [TimetableItemKind.CUSTOM]: CustomBlock
}

export type TimetableItem<K extends TimetableItemKind = TimetableItemKind> = {
    [P in K]: { kind: P; data: TimetableItemDataMap[P] }
}[K]

export const TimetableItemsSchema = z.object({
    lectures: z.array(LectureSchema),
    customBlocks: z.array(CustomBlockSchema),
})

export type TimetableItems = z.infer<typeof TimetableItemsSchema>

export const CustomBlockInputSchema = CustomBlockSchema.omit({ id: true }).extend({
    block_name: z.string().trim().min(1).max(255),
    place: z.string().max(255),
    day: z.number().int().min(0).max(6),
})
