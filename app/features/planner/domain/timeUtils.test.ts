import { describe, expect, it } from "vitest"

import { currentPlannerSlot, isPastSlot } from "./timeUtils"

describe("currentPlannerSlot", () => {
    it.each([
        [new Date(2026, 0, 15), { year: 2025, semester: 4 }],
        [new Date(2026, 2, 10), { year: 2026, semester: 1 }],
        [new Date(2026, 5, 30), { year: 2026, semester: 1 }],
        [new Date(2026, 6, 5), { year: 2026, semester: 2 }],
        [new Date(2026, 7, 31), { year: 2026, semester: 2 }],
        [new Date(2026, 8, 1), { year: 2026, semester: 3 }],
        [new Date(2026, 11, 20), { year: 2026, semester: 3 }],
    ])("maps %s to %j", (now, expected) => {
        expect(currentPlannerSlot(now)).toEqual(expected)
    })
})

describe("isPastSlot", () => {
    const now = new Date(2026, 8, 1)

    it("marks earlier years as past", () => {
        expect(isPastSlot({ year: 2025, semester: 4 }, now)).toBe(true)
    })

    it("marks same-year earlier semesters as past", () => {
        expect(isPastSlot({ year: 2026, semester: 2 }, now)).toBe(true)
    })

    it("keeps the current and future slots non-past", () => {
        expect(isPastSlot({ year: 2026, semester: 3 }, now)).toBe(false)
        expect(isPastSlot({ year: 2027, semester: 1 }, now)).toBe(false)
    })
})
