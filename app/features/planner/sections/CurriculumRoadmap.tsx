import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { PlannerDetail } from "@/common/schemas/planner"

import { SectionTitle } from "../components/PlannerControls"

const SEMESTERS = [1, 2, 3, 4] as const

type Props = {
    readonly planner: PlannerDetail
}

export function CurriculumRoadmap({ planner }: Props) {
    const { t, i18n } = useTranslation()

    const years: number[] = []
    for (let year = planner.start_year; year <= planner.end_year; year += 1) {
        years.push(year)
    }

    const localizeCourse = (course: { title: string; title_en: string }) =>
        i18n.resolvedLanguage === "en" ? course.title_en : course.title

    return (
        <FlexWrapper direction="column" gap={10}>
            <SectionTitle>{t("planner.roadmap.title")}</SectionTitle>
            {planner.future_items.length === 0 && (
                <Typography type="Small" color="Text.placeholder">
                    {t("planner.roadmap.empty")}
                </Typography>
            )}
            <FlexWrapper direction="column" gap={6}>
                {years.map((year) => (
                    <FlexWrapper
                        key={year}
                        direction="row"
                        align="stretch"
                        gap={6}
                        data-testid="roadmap-year-row"
                    >
                        <Typography type="SmallBold" color="Text.light">
                            {year}
                        </Typography>
                        {SEMESTERS.map((semester) => {
                            const items = planner.future_items.filter(
                                (item) =>
                                    item.year === year && item.semester === semester,
                            )
                            return (
                                <FlexWrapper
                                    key={semester}
                                    direction="column"
                                    gap={4}
                                    data-roadmap-cell={`${year}-${semester}`}
                                >
                                    <Typography type="Smaller" color="Text.placeholder">
                                        {t(`planner.semesters.${semester}`)}
                                    </Typography>
                                    {items.map((item) => (
                                        <Typography key={item.id} type="Smaller">
                                            {localizeCourse(item.course)}
                                        </Typography>
                                    ))}
                                </FlexWrapper>
                            )
                        })}
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </FlexWrapper>
    )
}
