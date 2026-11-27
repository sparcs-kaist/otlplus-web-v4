import { expect, it } from "vitest"

import { CustomBlockSchema } from "@/common/schemas/customBlock"
import { CustomBlockInputSchema, type TimetableItem } from "@/common/schemas/timetableItem"

import { getTimetableItemTimes, timetableItemsOverlap } from "./timetableItems"

const baseBlock = {
    id: 7,
    block_name: "Study",
    place: "Library",
}
const times = [
    { day: 0, begin: 600, end: 660 },
    { day: 5, begin: 1380, end: 1440 },
]

it("preserves multiple slots through both response and mutation schemas", () => {
    const block = CustomBlockSchema.parse({ ...baseBlock, times })
    expect(getTimetableItemTimes({ kind: "custom", data: block })).toEqual(times)
    const input = CustomBlockInputSchema.parse(block)
    expect(input).toEqual({ block_name: "Study", place: "Library", times })
    expect(CustomBlockSchema.safeParse({ ...baseBlock, times: [] }).success).toBe(false)
    expect(CustomBlockSchema.safeParse(baseBlock).success).toBe(false)
})

it("detects collisions with later slots but allows adjacent times", () => {
    const block: TimetableItem = { kind: "custom", data: { ...baseBlock, times } }
    const adjacent: TimetableItem = {
        kind: "custom",
        data: { ...baseBlock, id: 8, times: [{ day: 5, begin: 1320, end: 1380 }] },
    }
    expect(timetableItemsOverlap(block, adjacent)).toBe(false)
    expect(
        timetableItemsOverlap(block, {
            kind: "custom",
            data: { ...baseBlock, id: 8, times: [{ day: 5, begin: 1320, end: 1381 }] },
        }),
    ).toBe(true)
})
