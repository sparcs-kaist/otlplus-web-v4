import i18n from "i18next"

export enum SemesterEnum {
    SPRING = 1,
    SUMMER,
    FALL,
    WINTER,
}

export function semesterToString(semester: SemesterEnum): string {
    if (semester < 1 || semester > 4) return ""
    return [
        i18n.t("common.semesters.spring"),
        i18n.t("common.semesters.summer"),
        i18n.t("common.semesters.fall"),
        i18n.t("common.semesters.winter"),
    ][semester - 1] as unknown as string
}
