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

export const weekdayToString = (day: WeekdayEnum, short: boolean = false): string => {
    if (day < 0 || day > 6) {
        return ""
    }
    return [
        short ? i18n.t("common.days.mondayShort") : i18n.t("common.days.monday"),
        short ? i18n.t("common.days.tuesdayShort") : i18n.t("common.days.tuesday"),
        short ? i18n.t("common.days.wednesdayShort") : i18n.t("common.days.wednesday"),
        short ? i18n.t("common.days.thursdayShort") : i18n.t("common.days.thursday"),
        short ? i18n.t("common.days.fridayShort") : i18n.t("common.days.friday"),
        short ? i18n.t("common.days.saturdayShort") : i18n.t("common.days.saturday"),
        short ? i18n.t("common.days.sundayShort") : i18n.t("common.days.sunday"),
    ][day] as unknown as string
}
