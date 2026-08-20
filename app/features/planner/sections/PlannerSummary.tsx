import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { PlannerDetail } from "@/common/schemas/planner"

import { SectionTitle } from "../components/PlannerControls"
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

const Value = styled.strong`
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
`

const ProgressTrack = styled.div`
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.Line.default};
`

const ProgressFill = styled.div<{ $ratio: number }>`
    width: ${({ $ratio }) => `${Math.min(100, Math.max(0, $ratio * 100))}%`};
    height: 100%;
    background: ${({ theme }) => theme.colors.Highlight.default};
`

function ProgressCard({ label, progress }: { label: string; progress: Progress }) {
    const { t } = useTranslation()
    const completed = progress.taken + progress.planned
    const ratio = progress.required === 0 ? 1 : completed / progress.required
    return (
        <SummaryCard>
            <Label>{label}</Label>
            <Value>
                {completed} / {progress.required}
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
    const entries = [
        ["totalCredit", summary.total.credit],
        ["totalAu", summary.total.au],
        ["basicRequired", summary.basicRequired],
        ["basicElective", summary.basicElective],
        ["thesisStudy", summary.thesisStudy],
        ["individualStudy", summary.individualStudy],
        ["generalRequired", summary.generalRequired],
        ["humanities", summary.humanities],
        ["other", summary.other],
    ] as const

    return (
        <section aria-labelledby="planner-summary-title">
            <SectionTitle id="planner-summary-title">
                {t("planner.summary.title")}
            </SectionTitle>
            <SummaryGrid>
                {entries.map(([key, progress]) => (
                    <ProgressCard
                        key={key}
                        label={t(`planner.summary.categories.${key}`)}
                        progress={progress}
                    />
                ))}
                {summary.majors.flatMap((major) => {
                    const department = major.department
                        ? i18n.resolvedLanguage === "en"
                            ? major.department.name_en
                            : major.department.name
                        : t("planner.summary.interdisciplinary")
                    return [
                        <ProgressCard
                            key={`${major.key}:required`}
                            label={`${department} · ${t("planner.summary.categories.majorRequired")}`}
                            progress={major.required}
                        />,
                        <ProgressCard
                            key={`${major.key}:elective`}
                            label={`${department} · ${t("planner.summary.categories.majorElective")}`}
                            progress={major.elective}
                        />,
                    ]
                })}
            </SummaryGrid>
        </section>
    )
}
