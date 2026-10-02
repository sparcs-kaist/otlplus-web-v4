import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { TimeBlock } from "@/common/schemas/timeblock"
import type { TimetableItem } from "@/common/schemas/timetableItem"

export const timetableItemKey = (item: TimetableItem) => `${item.kind}:${item.data.id}`

export const getCustomBlockTimes = (block: CustomBlock): TimeBlock[] =>
    block.times ?? [{ day: block.day, begin: block.begin, end: block.end }]

export const getTimetableItemTimes = (item: TimetableItem): TimeBlock[] =>
    item.kind === TimetableItemKind.LECTURE
        ? item.data.classes
        : getCustomBlockTimes(item.data)

export const timetableItemsOverlap = (left: TimetableItem, right: TimetableItem) =>
    getTimetableItemTimes(left).some((a) =>
        getTimetableItemTimes(right).some(
            (b) => a.day === b.day && a.begin < b.end && b.begin < a.end,
        ),
    )
