export const LectureOrderEnum = {
    CODE: "code",
    POPULAR: "popular",
    STUDENT_COUNT: "studentCount",
} as const

export type LectureOrderEnum = (typeof LectureOrderEnum)[keyof typeof LectureOrderEnum]

export const LECTURE_ORDERS = [
    LectureOrderEnum.CODE,
    LectureOrderEnum.POPULAR,
    LectureOrderEnum.STUDENT_COUNT,
] as const satisfies readonly LectureOrderEnum[]
