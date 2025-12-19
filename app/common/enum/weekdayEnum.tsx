import i18n from "i18next"

export enum WeekdayEnum {
    Mon = 0,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun,
}

export const weekdayToString = (day: WeekdayEnum): string => {
    if (day < 0 || day > 6) {
        return ""
    }
    return [
        i18n.t("common.days.monday"),
        i18n.t("common.days.tuesday"),
        i18n.t("common.days.wednesday"),
        i18n.t("common.days.thursday"),
        i18n.t("common.days.friday"),
        i18n.t("common.days.saturday"),
        i18n.t("common.days.sunday"),
    ][day] as unknown as string
}
