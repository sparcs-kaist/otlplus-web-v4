export const LectureActionEnum = {
    ADD: "add",
    DELETE: "delete",
} as const

export type LectureActionEnum = (typeof LectureActionEnum)[keyof typeof LectureActionEnum]
