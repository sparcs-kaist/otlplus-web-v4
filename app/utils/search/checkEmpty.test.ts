import { describe, expect, it, vi } from "vitest"

import checkEmpty from "./checkEmpty"

describe("checkEmpty", () => {
    it("returns true when all params are empty", () => {
        const params = { keyword: "" }
        expect(checkEmpty(params)).toBe(true)
    })

    it("returns false when keyword has value", () => {
        const params = { keyword: "test" }
        expect(checkEmpty(params)).toBe(false)
    })

    it("returns true when keyword is only whitespace", () => {
        const params = { keyword: "   " }
        expect(checkEmpty(params)).toBe(true)
    })

    it("returns false when type array has items", () => {
        const params = { keyword: "", type: ["BR"] }
        expect(checkEmpty(params)).toBe(false)
    })

    it("returns true when type array is empty", () => {
        const params = { keyword: "", type: [] }
        expect(checkEmpty(params)).toBe(true)
    })

    it("returns false when department array has items", () => {
        const params = { keyword: "", department: [101] }
        expect(checkEmpty(params)).toBe(false)
    })

    it("returns false when level array has items", () => {
        const params = { keyword: "", level: [100] }
        expect(checkEmpty(params)).toBe(false)
    })

    it("returns false when term is defined", () => {
        const params = { keyword: "", term: 20241 }
        expect(checkEmpty(params)).toBe(false)
    })

    it("returns false when time is defined", () => {
        const params = { keyword: "", time: { day: 1, begin: 540, end: 660 } }
        expect(checkEmpty(params)).toBe(false)
    })

    it("handles multiple empty arrays correctly", () => {
        const params = {
            keyword: "",
            type: [],
            department: [],
            level: [],
        }
        expect(checkEmpty(params)).toBe(true)
    })
})
