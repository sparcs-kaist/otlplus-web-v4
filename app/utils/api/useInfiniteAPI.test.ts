import { describe, expect, it } from "vitest"

import { nextPageFromKeys } from "./useInfiniteAPI"

describe("nextPageFromKeys", () => {
    it("missing-key-stops-pagination: undefined when the key is absent", () => {
        expect(nextPageFromKeys({}, ["courses"], 20, 1)).toBeUndefined()
    })

    it("short-page-stops-pagination: undefined below the limit", () => {
        expect(
            nextPageFromKeys({ courses: Array.from({ length: 5 }) }, ["courses"], 20, 3),
        ).toBeUndefined()
    })

    it("full-pages-continue: next offset when every key is at the limit", () => {
        const full = {
            courses: Array.from({ length: 20 }),
            lectures: Array.from({ length: 20 }),
        }
        expect(nextPageFromKeys(full, ["courses", "lectures"], 20, 2)).toBe(2)
    })

    it("non-array-value-stops-pagination: undefined for malformed pages", () => {
        expect(nextPageFromKeys({ courses: null }, ["courses"], 20, 1)).toBeUndefined()
    })

    it("no-keys-stops-pagination: undefined with an empty key list", () => {
        expect(nextPageFromKeys({ anything: [1] }, [], 20, 1)).toBeUndefined()
    })
})
