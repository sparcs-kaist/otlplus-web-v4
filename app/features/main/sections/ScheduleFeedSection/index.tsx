import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import Widget from "../../../../common/primitives/Widget"
import { schedules } from "./schedules.generated"

const MAX_VISIBLE_SCHEDULES = 5

const ScheduleName = styled(Typography)`
    flex: 1 1 0;
    contain: inline-size;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        overflow: visible;
        white-space: normal;
    }
`

const NoSchedulesPlaceholder = styled(Typography)`
    min-height: 100px;
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

function ScheduleFeedSection() {
    const { t } = useTranslation()

    // 오늘 자정 기준으로 비교해, 오늘 끝나는 일정까지는 노출한다
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const visibleSchedules = schedules
        .filter((schedule) => schedule.to.getTime() >= today.getTime())
        .slice(0, MAX_VISIBLE_SCHEDULES)

    const isSameDay = (d1: Date, d2: Date) => {
        return (
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
        )
    }
    function formatDate(date: Date) {
        return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`
    }

    return (
        <Widget direction="column" gap={20} align="stretch" padding="30px" flex="1 1 0">
            <FlexWrapper direction="row" gap={0}>
                <Typography type="BiggerBold" color="Text.default">
                    {t("main.scheduleFeed.title")}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="column" align="stretch" gap={15} flex="1 1 0">
                {visibleSchedules.length === 0 ? (
                    <NoSchedulesPlaceholder type="BiggerBold" color="Text.default">
                        {t("main.scheduleFeed.noSchedules")}
                    </NoSchedulesPlaceholder>
                ) : null}
                {visibleSchedules.map((schedule, idx) => (
                    <FlexWrapper key={idx} direction="column" align="stretch" gap={15}>
                        <FlexWrapper direction="row" justify="space-between" gap={12}>
                            <Typography type="BigBold" color="Highlight.default">
                                {isSameDay(schedule.from, schedule.to)
                                    ? formatDate(schedule.from)
                                    : formatDate(schedule.from) +
                                      " - " +
                                      formatDate(schedule.to)}
                            </Typography>
                            <ScheduleName type="BigBold" color="Text.default">
                                {schedule.name}
                            </ScheduleName>
                        </FlexWrapper>
                        {idx < visibleSchedules.length - 1 ? (
                            <Line height={1} color="Line.default" />
                        ) : null}
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </Widget>
    )
}

export default ScheduleFeedSection
