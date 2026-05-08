import { useEffect, useMemo, useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { type SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import { useAPI } from "@/utils/api/useAPI"

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.Highlight.default};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fonts.NormalBold.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.NormalBold.fontWeight};

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.dark};
    }
`

function ScheduleSection() {
    const { query } = useAPI("GET", "/semesters/current")

    const [now, setNow] = useState(new Date())
    const [timeLeft, setTimeLeft] = useState<string>("")

    const { t } = useTranslation()

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const yearSemester = useMemo<{ year: number; semester: SemesterEnum } | null>(() => {
        if (!query.data) return null
        return { year: query.data.year, semester: query.data.semester }
    }, [query.data])

    const upcomingScheduleItem = useMemo<[string, Date] | null>(() => {
        if (!query.data) return null

        const scheduleItems = (
            Object.entries(query.data).filter(
                ([key, value]) => key !== "year" && key !== "semester" && value !== null,
            ) as [string, string][]
        )
            .map(([key, value]) => [key, new Date(value)] as [string, Date])
            .sort((a, b) => a[1].getTime() - b[1].getTime())

        for (const item of scheduleItems) {
            if (now.getTime() <= item[1].getTime()) {
                return item
            }
        }
        return scheduleItems[scheduleItems.length - 1] ?? null
    }, [query.data, now])

    const contentKey = upcomingScheduleItem?.[0] ?? ""
    const dueDate = upcomingScheduleItem?.[1] ?? null

    useEffect(() => {
        if (!dueDate) return
        const diff = dueDate.getTime() - now.getTime()
        const isPast = diff < 0
        const absDiff = Math.abs(diff)
        const days = Math.floor(absDiff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((absDiff / (1000 * 60)) % 60)
        const seconds = Math.floor((absDiff / 1000) % 60)
        setTimeLeft(
            `D${isPast ? "+" : "-"}${days} ${hours}${t("common.hours")} ${minutes}${t("common.minutes")} ${seconds}${t("common.seconds")}`,
        )
    }, [now, dueDate])

    function getContentString() {
        if (!yearSemester) return t(`main.schedule.contents.${contentKey}`)
        return (
            yearSemester.year.toString() +
            " " +
            semesterToString(yearSemester.semester) +
            " " +
            t(`main.schedule.contents.${contentKey}`)
        )
    }

    if (!dueDate) return null

    return (
        <Widget direction="column" align="stretch" gap={0} padding="23px 30px">
            <FlexWrapper direction="column" align="stretch" gap={16}>
                <FlexWrapper direction="column" align="center" gap={10}>
                    <FlexWrapper direction="column" align="stretch" gap={0}>
                        <FlexWrapper
                            direction="row"
                            justify="center"
                            gap={0}
                            style={{ textAlign: "center" }}
                        >
                            <Typography type="BiggerBold" color="Text.dark">
                                <Trans
                                    i18nKey="main.schedule.title"
                                    values={{ content: getContentString() }}
                                />
                            </Typography>
                        </FlexWrapper>
                        <FlexWrapper
                            direction="row"
                            justify="center"
                            gap={0}
                            style={{ textAlign: "center" }}
                        >
                            <Typography type="BiggerBold" color="Text.dark">
                                {timeLeft}
                            </Typography>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper
                        direction="column"
                        gap={0}
                        style={{ textAlign: "center" }}
                    >
                        <Typography type="Normal" color="Text.placeholder">
                            {getContentString()} {dueDate.getFullYear()}.
                            {String(dueDate.getMonth() + 1).padStart(2, "0")}.
                            {String(dueDate.getDate()).padStart(2, "0")}
                        </Typography>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper direction="column" align="flex-end" gap={0}>
                    <StyledLink to="https://erp.kaist.ac.kr" target="_blank">
                        {t("main.schedule.link")}
                    </StyledLink>
                </FlexWrapper>
            </FlexWrapper>
        </Widget>
    )
}

export default ScheduleSection
