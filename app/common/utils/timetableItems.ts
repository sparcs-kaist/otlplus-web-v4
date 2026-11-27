import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import type { TimetableItem, TimetableItems } from "@/common/schemas/timetableItem"

export const toLectureItem = (
    data: Lecture,
): TimetableItem<typeof TimetableItemKind.LECTURE> => ({
    kind: TimetableItemKind.LECTURE,
    data,
})

export const toCustomBlockItem = (
    data: CustomBlock,
): TimetableItem<typeof TimetableItemKind.CUSTOM> => ({
    kind: TimetableItemKind.CUSTOM,
    data,
})

export const isLectureItem = (
    item: TimetableItem,
): item is TimetableItem<typeof TimetableItemKind.LECTURE> =>
    item.kind === TimetableItemKind.LECTURE

export const isCustomBlockItem = (
    item: TimetableItem,
): item is TimetableItem<typeof TimetableItemKind.CUSTOM> =>
    item.kind === TimetableItemKind.CUSTOM

export const extractLectures = (items: readonly TimetableItem[]): Lecture[] =>
    items.flatMap((item) => (isLectureItem(item) ? [item.data] : []))

export const extractCustomBlocks = (items: readonly TimetableItem[]): CustomBlock[] =>
    items.flatMap((item) => (isCustomBlockItem(item) ? [item.data] : []))

export const toTimetableItems = (
    timetable: Partial<TimetableItems> | undefined,
): TimetableItem[] =>
    timetable
        ? [
              ...(timetable.lectures ?? []).map(toLectureItem),
              ...(timetable.customBlocks ?? []).map(toCustomBlockItem),
          ]
        : []

export const groupTimetableItems = (items: readonly TimetableItem[]): TimetableItems => ({
    lectures: extractLectures(items),
    customBlocks: extractCustomBlocks(items),
})

export const timetableItemKey = (item: TimetableItem) => `${item.kind}:${item.data.id}`

export const getCustomBlockTimes = (block: CustomBlock): TimeBlock[] =>
    block.times ?? [{ day: block.day, begin: block.begin, end: block.end }]

export const getTimetableItemTimes = (item: TimetableItem): TimeBlock[] =>
    isLectureItem(item) ? item.data.classes : getCustomBlockTimes(item.data)

export const timetableItemsOverlap = (left: TimetableItem, right: TimetableItem) =>
    getTimetableItemTimes(left).some((a) =>
        getTimetableItemTimes(right).some(
            (b) => a.day === b.day && a.begin < b.end && b.begin < a.end,
        ),
    )
