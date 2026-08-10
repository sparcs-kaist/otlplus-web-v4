import { describe, expect, it } from "vitest"

import formatCompetitionRate from "./formatCompetitionRate"

describe("formatCompetitionRate", () => {
    it("shows unknown enrollment as unavailable", () => {
        expect(formatCompetitionRate(null, 30)).toBe("-")
    })

    it("preserves existing zero-limit and ratio formatting", () => {
        expect(formatCompetitionRate(10, 0)).toBe("0.00:1")
        expect(formatCompetitionRate(45, 30)).toBe("1.50:1")
    })
})
