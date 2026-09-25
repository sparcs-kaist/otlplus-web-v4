import { expect, it } from "vitest"

import { CustomBlockSchema } from "@/common/schemas/customBlock"
import { TimetableChangeSchema } from "@/common/schemas/timetableItem"

import {
    getCustomBlockTimes,
    getTimetableItemTimes,
    timetableItemsOverlap,
} from "./timetableItems"

const legacyBlock = {
    id: 7,
    block_name: "Study",
    place: "Library",
    day: 0,
    begin: 600,
    end: 660,
}
const times = [
    { day: 0, begin: 600, end: 660 },
    { day: 5, begin: 1380, end: 1440 },
]

it("preserves multiple slots through both response and mutation schemas, with legacy fallback", () => {
    expect(getCustomBlockTimes(CustomBlockSchema.parse(legacyBlock))).toEqual([times[0]])
    const block = CustomBlockSchema.parse({ ...legacyBlock, times })
    expect(getTimetableItemTimes({ kind: "custom", data: block })).toEqual(times)
    const change = TimetableChangeSchema.parse({ op: "add", kind: "custom", data: block })
    expect(change).toEqual({
        op: "add",
        kind: "custom",
        data: { block_name: "Study", place: "Library", ...times[0], times },
    })
    expect(CustomBlockSchema.safeParse({ ...legacyBlock, times: [] }).success).toBe(false)
})

it("detects collisions with later slots but allows adjacent times", () => {
    const block = { kind: "custom", data: { ...legacyBlock, times } } as const
    const adjacent = {
        kind: "custom",
        data: { ...legacyBlock, id: 8, day: 5, begin: 1320, end: 1380 },
    } as const
    expect(timetableItemsOverlap(block, adjacent)).toBe(false)
    expect(
        timetableItemsOverlap(block, {
            ...adjacent,
            data: { ...adjacent.data, end: 1381 },
        }),
    ).toBe(true)
})
