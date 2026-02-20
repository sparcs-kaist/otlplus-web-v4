import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import Widget from "../../../../common/primitives/Widget"

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

    const thisYear = new Date().getFullYear()
    // const { query } = useAPI("GET", "/schedules")
    const temporarySchedules = [
        {
            year: 2026,
            from: new Date(2026, 1, 23),
            to: new Date(2026, 2, 9),
            name: "봄학기 수강신청 변경",
        },
        {
            year: 2026,
            from: new Date(2026, 1, 25),
            to: new Date(2026, 1, 25),
            name: "2026년 학사과정 입학식",
        },
        {
            year: 2026,
            from: new Date(2026, 2, 2),
            to: new Date(2026, 2, 2),
            name: "삼일절 (대체 공휴일)",
        },
        {
            year: 2026,
            from: new Date(2026, 2, 4),
            to: new Date(2026, 2, 5),
            name: "학사과정 봄학기 학점인정시험",
        },
        {
            year: 2026,
            from: new Date(2026, 2, 10),
            to: new Date(2026, 3, 17),
            name: "봄학기 수강신청 취소",
        },
    ]

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
                {!temporarySchedules || temporarySchedules.length === 0 ? (
                    <NoSchedulesPlaceholder type="BiggerBold" color="Text.default">
                        {t("main.scheduleFeed.noSchedules")}
                    </NoSchedulesPlaceholder>
                ) : null}
                {temporarySchedules.map((schedule, idx) => {
                    if (schedule.year !== thisYear) return null
                    return (
                        <FlexWrapper
                            key={idx}
                            direction="column"
                            align="stretch"
                            gap={15}
                        >
                            <FlexWrapper direction="row" justify="space-between" gap={0}>
                                <Typography type="BigBold" color="Highlight.default">
                                    {isSameDay(schedule.from, schedule.to)
                                        ? formatDate(schedule.from)
                                        : formatDate(schedule.from) +
                                          " - " +
                                          formatDate(schedule.to)}
                                </Typography>
                                <Typography type="BigBold" color="Text.default">
                                    {schedule.name}
                                </Typography>
                            </FlexWrapper>
                            {idx < temporarySchedules.length - 1 ? (
                                <Line height={1} color="Line.default" />
                            ) : null}
                        </FlexWrapper>
                    )
                })}
            </FlexWrapper>
        </Widget>
    )
}

export default ScheduleFeedSection
