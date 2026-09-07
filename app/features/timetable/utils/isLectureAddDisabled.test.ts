import { describe, expect, it } from "vitest"

import isLectureAddDisabled from "./isLectureAddDisabled"

describe("isLectureAddDisabled", () => {
    it("disables add in the read-only My Timetable view", () => {
        expect(
            isLectureAddDisabled({
                status: "success",
                currentTimetableId: null,
                hasOverlap: false,
            }),
        ).toBe(true)
    })

    it("disables overlapping lectures", () => {
        expect(
            isLectureAddDisabled({
                status: "success",
                currentTimetableId: 1,
                hasOverlap: true,
            }),
        ).toBe(true)
    })

    it("disables add while authentication is unresolved", () => {
        expect(
            isLectureAddDisabled({
                status: "loading",
                currentTimetableId: null,
                hasOverlap: false,
            }),
        ).toBe(true)
    })

    it("allows anonymous local timetable edits", () => {
        expect(
            isLectureAddDisabled({
                status: "idle",
                currentTimetableId: null,
                hasOverlap: false,
            }),
        ).toBe(false)
    })
})
