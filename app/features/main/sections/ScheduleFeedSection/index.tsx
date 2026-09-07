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

const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()

/**
 * 올해 일정은 MM/DD로 짧게 보여준다.
 * 연말에는 내년 일정이 목록에 섞이므로, 그때는 어느 해인지 알 수 있게 연도까지 붙인다.
 */
function formatSchedulePeriod(from: Date, to: Date, currentYear: number) {
    const withYear =
        from.getFullYear() !== currentYear || to.getFullYear() !== currentYear
    const format = (date: Date) => {
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const date_ = String(date.getDate()).padStart(2, "0")
        return withYear ? `${date.getFullYear()}.${month}.${date_}` : `${month}/${date_}`
    }
    return isSameDay(from, to) ? format(from) : `${format(from)} - ${format(to)}`
}

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
                    // 크롤러가 from/to/name 조합으로 중복을 제거하므로 이 키는 유일하다.
                    <FlexWrapper
                        key={`${schedule.from.getTime()}-${schedule.to.getTime()}-${schedule.name}`}
                        direction="column"
                        align="stretch"
                        gap={15}
                    >
                        <FlexWrapper direction="row" justify="space-between" gap={12}>
                            <Typography type="BigBold" color="Highlight.default">
                                {formatSchedulePeriod(
                                    schedule.from,
                                    schedule.to,
                                    today.getFullYear(),
                                )}
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
