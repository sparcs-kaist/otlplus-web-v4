export const CATEGORY_COURSE_TYPES = {
    basicRequired: "기초필수",
    basicElective: "기초선택",
    majorRequired: "전공필수",
    majorElective: "전공선택",
    thesisStudy: "졸업연구",
    generalRequired: "교양필수",
    humanities: "인문사회선택",
    freeElective: "자유선택",
} as const

export type SummaryCategoryKey = keyof typeof CATEGORY_COURSE_TYPES

export function filterCoursesByType<T extends { readonly type: string }>(
    courses: readonly T[],
    typeKo: string | null,
): T[] {
    if (typeKo === null) return [...courses]
    return courses.filter((course) => course.type === typeKo)
}
