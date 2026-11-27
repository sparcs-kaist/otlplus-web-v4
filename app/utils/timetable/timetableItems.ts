import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import type { TimetableItem, TimetableItems } from "@/common/schemas/timetableItem"

export const extractLectures = (items: readonly TimetableItem[]): Lecture[] =>
    items.flatMap((item) => (item.kind === TimetableItemKind.LECTURE ? [item.data] : []))

export const extractCustomBlocks = (items: readonly TimetableItem[]): CustomBlock[] =>
    items.flatMap((item) => (item.kind === TimetableItemKind.CUSTOM ? [item.data] : []))

export const toTimetableItems = (
    timetable: Partial<TimetableItems> | undefined,
): TimetableItem[] =>
    timetable
        ? [
              ...(timetable.lectures ?? []).map((data) => ({
                  kind: TimetableItemKind.LECTURE,
                  data,
              })),
              ...(timetable.customBlocks ?? []).map((data) => ({
                  kind: TimetableItemKind.CUSTOM,
                  data,
              })),
          ]
        : []

export const timetableItemKey = (item: TimetableItem) => `${item.kind}:${item.data.id}`

export const getTimetableItemColorIndex = (item: TimetableItem): number =>
    item.kind === TimetableItemKind.LECTURE ? item.data.courseId : item.data.id * 3 + 7

export const getPaletteColor = <T>(
    palette: readonly T[],
    colorIndex: number,
): T | undefined =>
    palette.length === 0
        ? undefined
        : palette[((colorIndex % palette.length) + palette.length) % palette.length]

export const getTimetableItemTimes = (item: TimetableItem): TimeBlock[] =>
    item.kind === TimetableItemKind.LECTURE ? item.data.classes : item.data.times

const timeBlocksOverlap = (left: TimeBlock, right: TimeBlock): boolean =>
    left.day === right.day && left.begin < right.end && right.begin < left.end

export const hasInternalTimeOverlap = (times: readonly TimeBlock[]): boolean =>
    times.some((time, index) =>
        times.slice(index + 1).some((other) => timeBlocksOverlap(time, other)),
    )

export const timetableItemsOverlap = (left: TimetableItem, right: TimetableItem) => {
    const leftTimes = getTimetableItemTimes(left)
    const rightTimes = getTimetableItemTimes(right)
    return leftTimes.some((a) => rightTimes.some((b) => timeBlocksOverlap(a, b)))
}
