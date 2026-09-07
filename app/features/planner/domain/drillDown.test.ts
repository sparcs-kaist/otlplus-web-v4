import { describe, expect, it } from "vitest"

import { CATEGORY_COURSE_TYPES, filterCoursesByType } from "./drillDown"

const courses = [
    { type: "전공필수", type_en: "Major Required" },
    { type: "전공선택", type_en: "Major Elective" },
    { type: "교양필수", type_en: "General Required" },
] as const

describe("CATEGORY_COURSE_TYPES", () => {
    it("category-type-map-complete: every summary category maps to a course type", () => {
        expect(CATEGORY_COURSE_TYPES.majorRequired).toBe("전공필수")
        expect(CATEGORY_COURSE_TYPES.majorElective).toBe("전공선택")
        expect(CATEGORY_COURSE_TYPES.basicRequired).toBe("기초필수")
        expect(CATEGORY_COURSE_TYPES.thesisStudy).toBe("졸업연구")
        expect(CATEGORY_COURSE_TYPES.generalRequired).toBe("교양필수")
        expect(CATEGORY_COURSE_TYPES.humanities).toBe("인문사회선택")
        expect(CATEGORY_COURSE_TYPES.freeElective).toBe("자유선택")
    })
})

describe("filterCoursesByType", () => {
    it("filter-matches-korean-type: keeps only the matching ko type", () => {
        expect(filterCoursesByType(courses, "전공필수")).toHaveLength(1)
    })

    it("filter-empty-when-none-match", () => {
        expect(filterCoursesByType(courses, "졸업연구")).toHaveLength(0)
    })

    it("filter-null-type-passthrough: null keeps everything", () => {
        expect(filterCoursesByType(courses, null)).toHaveLength(3)
    })
})
