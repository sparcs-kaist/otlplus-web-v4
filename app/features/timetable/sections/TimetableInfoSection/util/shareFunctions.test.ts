import { describe, expect, it, vi } from "vitest"

import { isExpectedClipboardError } from "./clipboardErrors"
import { downloadTimetableCalendar } from "./shareFunctions"

vi.mock("canvas", () => ({ createCanvas: vi.fn(), loadImage: vi.fn() }))

it("exports every custom slot to the calendar, including split times and weekends", async () => {
    const createObjectURL = vi.fn((_blob: Blob) => "blob:calendar")
    vi.stubGlobal("URL", { createObjectURL, revokeObjectURL: vi.fn() })
    const click = vi
        .spyOn(HTMLAnchorElement.prototype, "click")
        .mockImplementation(() => {})
    try {
        downloadTimetableCalendar({
            name: "Schedule",
            lectures: [],
            customBlocks: [
                {
                    id: 1,
                    block_name: "Study",
                    place: "Library",
                    day: 0,
                    begin: 600,
                    end: 660,
                    times: [
                        { day: 0, begin: 600, end: 660 },
                        { day: 0, begin: 780, end: 840 },
                        { day: 5, begin: 1380, end: 1440 },
                    ],
                },
            ],
            semesterObject: {
                beginning: new Date(2026, 8, 1),
                end: new Date(2026, 11, 31),
            },
        })
        const blob = createObjectURL.mock.calls[0]![0]
        const calendar = await blob.text()
        expect(calendar.match(/BEGIN:VEVENT/g)).toHaveLength(3)
        expect(calendar.match(/SUMMARY:Study/g)).toHaveLength(3)
        expect(calendar.match(/LOCATION:Library/g)).toHaveLength(3)
        expect(calendar.match(/RRULE:FREQ=WEEKLY/g)).toHaveLength(3)
        expect(click).toHaveBeenCalledOnce()
    } finally {
        click.mockRestore()
        vi.unstubAllGlobals()
    }
})

describe("isExpectedClipboardError", () => {
    it.each(["NotAllowedError", "NotReadableError"])(
        "classifies %s as an expected clipboard failure",
        (name) => {
            expect(isExpectedClipboardError(new DOMException("clipboard", name))).toBe(
                true,
            )
        },
    )

    it("keeps unexpected failures actionable", () => {
        expect(isExpectedClipboardError(new Error("canvas failed"))).toBe(false)
    })
})
