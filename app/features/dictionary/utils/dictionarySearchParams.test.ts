import { describe, expect, it } from "vitest"

import {
    getDictionarySelection,
    normalizeDictionarySearchParams,
    setDictionaryCourse,
    setDictionaryProfessor,
} from "./dictionarySearchParams"

describe("dictionary selection search params", () => {
    it("preserves a directly linked course and professor", () => {
        const params = new URLSearchParams(
            "courseId=101&professorId=851&keyword=algorithm",
        )

        expect(getDictionarySelection(params)).toEqual({
            courseId: 101,
            professorId: 851,
        })
        expect(normalizeDictionarySearchParams(params).toString()).toBe(
            "courseId=101&professorId=851&keyword=algorithm",
        )
    })

    it("removes a professor that has no selected course", () => {
        const params = new URLSearchParams("professorId=851&keyword=algorithm")

        expect(normalizeDictionarySearchParams(params).toString()).toBe(
            "keyword=algorithm",
        )
    })

    it("clears a stale professor when the selected course changes", () => {
        const params = new URLSearchParams(
            "courseId=101&professorId=851&keyword=algorithm",
        )

        expect(setDictionaryCourse(params, 202).toString()).toBe(
            "courseId=202&keyword=algorithm",
        )
    })

    it("keeps search filters when course detail closes", () => {
        const params = new URLSearchParams(
            "courseId=101&professorId=851&keyword=algorithm",
        )

        expect(setDictionaryCourse(params, null).toString()).toBe("keyword=algorithm")
    })

    it("stores a professor only while a course is selected", () => {
        const selected = new URLSearchParams("courseId=101&keyword=algorithm")
        const unselected = new URLSearchParams("keyword=algorithm")

        expect(setDictionaryProfessor(selected, 851).toString()).toBe(
            "courseId=101&keyword=algorithm&professorId=851",
        )
        expect(setDictionaryProfessor(unselected, 851).toString()).toBe(
            "keyword=algorithm",
        )
    })
})
