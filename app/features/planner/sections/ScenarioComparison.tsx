import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { PlannerDetail } from "@/common/schemas/planner"

import { SectionTitle } from "../components/PlannerControls"
import { comparePlannerScenarios } from "../domain/scenarioDiff"

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
`

const Cell = styled.td`
    padding: 6px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.Line.default};
    color: ${({ theme }) => theme.colors.Text.default};
`

const HeaderCell = styled.th`
    padding: 6px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.Line.block};
    color: ${({ theme }) => theme.colors.Text.light};
    font-weight: ${({ theme }) => theme.fonts.NormalBold.fontWeight};
    text-align: start;
`

type Props = {
    readonly planners: readonly PlannerDetail[]
    readonly selectedId: number
}

export function ScenarioComparison({ planners, selectedId }: Props) {
    const { t } = useTranslation()
    const selected = planners.find((planner) => planner.id === selectedId)
    if (selected === undefined) return null

    const ordered = [selected, ...planners.filter((planner) => planner.id !== selectedId)]
    const rows = comparePlannerScenarios(ordered)

    return (
        <>
            <SectionTitle>{t("planner.comparison.title")}</SectionTitle>
            <Table>
                <thead>
                    <tr>
                        <HeaderCell>{t("planner.comparison.category")}</HeaderCell>
                        {ordered.map((planner, index) => (
                            <HeaderCell key={planner.id}>
                                {t("planner.list.item", { index: index + 1 })}
                            </HeaderCell>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.key}>
                            <Cell>{t(`planner.summary.categories.${row.key}`)}</Cell>
                            {row.taken.map((taken, index) => (
                                <Cell key={index}>
                                    {taken}
                                    {" + "}
                                    {row.planned[index]}
                                    {" / "}
                                    {row.required}
                                </Cell>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
