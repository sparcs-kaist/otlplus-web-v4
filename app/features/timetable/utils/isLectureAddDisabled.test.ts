import { describe, expect, it } from "vitest"

import { getLectureAddBlockReason } from "./isLectureAddDisabled"

describe("getLectureAddBlockReason", () => {
    it("explains the read-only My Timetable restriction", () => {
        expect(
            getLectureAddBlockReason({
                status: "success",
                currentTimetableId: null,
                hasOverlap: false,
            }),
        ).toBe("myTimetable")
    })

    it("explains overlapping lectures", () => {
        expect(
            getLectureAddBlockReason({
                status: "success",
                currentTimetableId: 1,
                hasOverlap: true,
            }),
        ).toBe("overlap")
    })

    it("blocks add while authentication is unresolved", () => {
        expect(
            getLectureAddBlockReason({
                status: "loading",
                currentTimetableId: null,
                hasOverlap: false,
            }),
        ).toBe("loading")
    })

    it("allows anonymous local timetable edits", () => {
        expect(
            getLectureAddBlockReason({
                status: "idle",
                currentTimetableId: null,
                hasOverlap: false,
            }),
        ).toBeNull()
    })
})
