import type { ReactNode } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { PlannerDetail } from "@/common/schemas/planner"

import { SectionTitle, StatusNotice } from "../components/PlannerControls"
import { type Progress, calculatePlannerSummary } from "../domain/summary"

const SummaryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    gap: 8px;
`

const SummaryCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.Background.Block.default};
`

const Label = styled.span`
    color: ${({ theme }) => theme.colors.Text.light};
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
`

const LabelSegment = styled.span`
    white-space: nowrap;
`

const Value = styled.strong`
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
`

const ProgressTrack = styled.div`
    height: 5px;
    margin-top: auto;
    overflow: hidden;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.Line.default};
`

const ProgressFill = styled.div<{ $ratio: number }>`
    width: ${({ $ratio }) => `${Math.min(100, Math.max(0, $ratio * 100))}%`};
    height: 100%;
    background: ${({ theme }) => theme.colors.Highlight.default};
`

function ProgressCard({
    label,
    progress,
    unit,
}: {
    label: ReactNode
    progress: Progress
    unit: string
}) {
    const { t } = useTranslation()
    const completed = progress.taken + progress.planned
    const ratio = progress.required === 0 ? 0 : completed / progress.required
    return (
        <SummaryCard>
            <Label>{label}</Label>
            <Value>
                {completed} / {progress.required} {unit}
            </Value>
            <Label>
                {t("planner.summary.breakdown", {
                    taken: progress.taken,
                    planned: progress.planned,
                })}
            </Label>
            <ProgressTrack aria-hidden="true">
                <ProgressFill $ratio={ratio} />
            </ProgressTrack>
        </SummaryCard>
    )
}

export function PlannerSummary({ planner }: { readonly planner: PlannerDetail }) {
    const { t, i18n } = useTranslation()
    const summary = calculatePlannerSummary(planner)
    const creditUnit = t("planner.summary.units.credit")
    const auUnit = t("planner.summary.units.au")
    const entries = [
        ["totalCredit", summary.total.credit, creditUnit],
        ["totalAu", summary.total.au, auUnit],
        ["basicRequired", summary.basicRequired, creditUnit],
        ["basicElective", summary.basicElective, creditUnit],
        ["thesisStudy", summary.thesisStudy, creditUnit],
        ["generalRequiredCredit", summary.generalRequired.credit, creditUnit],
        ["generalRequiredAu", summary.generalRequired.au, auUnit],
        ["humanities", summary.humanities, creditUnit],
        ["other", summary.other, creditUnit],
    ] as const

    return (
        <section aria-labelledby="planner-summary-title">
            <SectionTitle id="planner-summary-title">
                {t("planner.summary.title")}
            </SectionTitle>
            <StatusNotice role="note">{t("planner.summary.disclaimer")}</StatusNotice>
            <SummaryGrid>
                {entries.map(([key, progress, unit]) => (
                    <ProgressCard
                        key={key}
                        label={t(`planner.summary.categories.${key}`)}
                        progress={progress}
                        unit={unit}
                    />
                ))}
                {summary.majors.flatMap((major) => {
                    const department = major.department
                        ? i18n.resolvedLanguage === "en"
                            ? major.department.name_en
                            : major.department.name
                        : null
                    const trackType = t(`planner.trackTypes.${major.type}`)
                    const label = (category: string) => (
                        <>
                            {department !== null && (
                                <>
                                    <LabelSegment>{department}</LabelSegment>
                                    {" · "}
                                </>
                            )}
                            <LabelSegment>{trackType}</LabelSegment>
                            {" · "}
                            <LabelSegment>{category}</LabelSegment>
                        </>
                    )
                    return [
                        <ProgressCard
                            key={`${major.key}:required`}
                            label={label(t("planner.summary.categories.majorRequired"))}
                            progress={major.required}
                            unit={creditUnit}
                        />,
                        <ProgressCard
                            key={`${major.key}:elective`}
                            label={label(t("planner.summary.categories.majorElective"))}
                            progress={major.elective}
                            unit={creditUnit}
                        />,
                    ]
                })}
            </SummaryGrid>
        </section>
    )
}
