import i18n from "i18next"

import { weekdayToString } from "@/common/enum/weekdayEnum"
import type { TimeBlock } from "@/common/schemas/timeblock"

function formatMinuteToString(minute: number, by12: boolean = false): string {
    const hour = Math.floor(minute / 60)
    const min = (minute % 60).toString().padStart(2, "0")
    if (by12) {
        const period = hour < 12 ? i18n.t("common.am") : i18n.t("common.pm")
        const displayHour = (hour % 12 === 0 ? 12 : hour % 12).toString().padStart(2, "0")
        return `${period} ${displayHour}:${min}`
    }
    return hour.toString().padStart(2, "0") + ":" + min
}

// timetable에서 시간 filter 위함
export function formatTimeAreaToString(timeBlock: TimeBlock): string {
    return `${weekdayToString(timeBlock.day)} ${formatMinuteToString(
        timeBlock.begin,
        true,
    )} - ${formatMinuteToString(timeBlock.end, true)}`
}
