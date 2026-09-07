import { describe, expect, it } from "vitest"

import { csDepartment } from "../domain/testFixtures"
import { ArbitraryItemInputSchema } from "./types"

const input = {
    year: 2024,
    semester: 1,
    department: csDepartment,
    type: "기초필수",
    typeEn: "Basic Required",
    credit: 3,
    creditAU: 0,
}

describe("ArbitraryItemInputSchema", () => {
    it("accepts a valid integer non-negative input", () => {
        expect(ArbitraryItemInputSchema.safeParse(input).success).toBe(true)
    })

    it.each([
        { credit: -1 },
        { creditAU: -1 },
        { credit: 1.5 },
        { year: 2024.5 },
        { semester: 5 },
    ])("rejects invalid numeric input %o", (patch) => {
        expect(ArbitraryItemInputSchema.safeParse({ ...input, ...patch }).success).toBe(
            false,
        )
    })

    it("rejects unknown fields", () => {
        expect(
            ArbitraryItemInputSchema.safeParse({ ...input, unexpected: true }).success,
        ).toBe(false)
    })
})
