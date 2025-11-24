import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { type SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

import Widget from "../../../../common/primitives/Widget"

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
    const [query] = useAPI("GET", "/semesters")

    const [now, setNow] = useState(new Date())
    const [timeLeft, setTimeLeft] = useState<string>("")

    const [yearSemester, setYearSemester] = useState<{
        year: number
        semester: SemesterEnum
    } | null>(null)
    const [contentKey, setContentKey] = useState<string>("")
    const [dueDate, setDueDate] = useState<Date | null>(null)

    const { t } = useTranslation()

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (!query.data?.semesters) return
        const currentSemester = query.data.semesters[query.data.semesters.length - 1]
        if (!currentSemester) return

        setYearSemester({
            year: currentSemester.year,
            semester: currentSemester.semester,
        })

        const scheduleItems = (
            Object.entries(currentSemester).filter(
                ([key, value]) => key !== "year" && key !== "semester" && value !== null,
            ) as [string, string][]
        )
            .map(([key, value]) => [key, new Date(value)] as [string, Date])
            .sort((a, b) => a[1].getTime() - b[1].getTime())

        for (const [key, date] of scheduleItems) {
            if (now.getTime() <= date.getTime()) {
                setContentKey(key)
                setDueDate(date)
                return
            }
        }

        // If all dates have passed, show the last one
        const lastItem = scheduleItems[scheduleItems.length - 1]
        if (!lastItem) return
        setContentKey(lastItem[0])
        setDueDate(lastItem[1])
    }, [query.data])

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
        <Widget
            width={418}
            direction="column"
            align="stretch"
            gap={0}
            padding="23px 30px"
        >
            <FlexWrapper direction="column" align="stretch" gap={16}>
                <FlexWrapper direction="column" align="center" gap={10}>
                    <FlexWrapper direction="column" align="stretch" gap={0}>
                        <FlexWrapper direction="row" justify="center" gap={0}>
                            <Typography type="BiggerBold" color="Text.dark">
                                <Trans
                                    i18nKey="main.schedule.title"
                                    values={{ content: getContentString() }}
                                />
                            </Typography>
                        </FlexWrapper>
                        <FlexWrapper direction="row" justify="center" gap={0}>
                            <Typography type="BiggerBold" color="Text.dark">
                                {timeLeft}
                            </Typography>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper direction="column" gap={0}>
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
