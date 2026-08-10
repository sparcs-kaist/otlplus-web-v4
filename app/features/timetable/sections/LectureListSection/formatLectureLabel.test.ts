import { describe, expect, it } from "vitest"

import formatLectureLabel from "./formatLectureLabel"

describe("formatLectureLabel", () => {
    it("omits the label when graduate lecture metadata is empty", () => {
        expect(formatLectureLabel("", "")).toBe("")
        expect(formatLectureLabel("  ", "  ")).toBe("")
    })

    it("combines available class and subtitle metadata", () => {
        expect(formatLectureLabel("A", "Special Topics")).toBe("A Special Topics")
        expect(formatLectureLabel("", "Special Topics")).toBe("Special Topics")
    })
})
