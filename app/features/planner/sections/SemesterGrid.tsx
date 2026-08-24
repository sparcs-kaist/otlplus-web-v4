import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import {
    type PlannerDetail,
    type PlannerItem,
    type PlannerSemester,
} from "@/common/schemas/planner"
import { media } from "@/styles/themes/media"

import { SectionTitle } from "../components/PlannerControls"
import PlannerItemCard from "../components/PlannerItemCard"

const Years = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const YearSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const YearTitle = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.NormalBold.fontSize}px;
`

const SemesterColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr));
    gap: 8px;

    ${media.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${media.mobile} {
        grid-template-columns: minmax(0, 1fr);
    }
`

const SemesterColumn = styled.div`
    display: flex;
    min-width: 0;
    align-self: start;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.Background.Block.default};
`

const SemesterTitle = styled.h4`
    margin: 0;
    color: ${({ theme }) => theme.colors.Text.light};
    font-size: ${({ theme }) => theme.fonts.SmallBold.fontSize}px;
`

const AddHereChip = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 28px;
    padding: 3px 10px;
    border: 1px dashed ${({ theme }) => theme.colors.Notice.border};
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.Notice.text};
    background: ${({ theme }) => theme.colors.Notice.background};
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 120ms ease;

    &:hover:not(:disabled) {
        filter: brightness(0.97);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${media.mobile} {
        min-height: 36px;
    }
`

const SEMESTERS = [1, 2, 3, 4] as const satisfies readonly PlannerSemester[]

function itemYear(item: PlannerItem): number {
    return item.item_type === "TAKEN" ? item.lecture.year : item.year
}

function itemSemester(item: PlannerItem): PlannerSemester {
    return item.item_type === "TAKEN" ? item.lecture.semester : item.semester
}

type Props = {
    readonly planner: PlannerDetail
    readonly busy: boolean
    readonly onUpdate: (
        item: PlannerItem,
        patch: { readonly semester?: PlannerSemester; readonly isExcluded?: boolean },
    ) => Promise<void>
    readonly onRemove: (item: PlannerItem) => Promise<void>
    readonly onRequestAdd: (year: number, semester: PlannerSemester) => void
}

export function SemesterGrid({ planner, busy, onUpdate, onRemove, onRequestAdd }: Props) {
    const { t, i18n } = useTranslation()
    const items = [
        ...planner.taken_items,
        ...planner.future_items,
        ...planner.arbitrary_items,
    ] satisfies readonly PlannerItem[]
    const years = Array.from(
        { length: planner.end_year - planner.start_year + 1 },
        (_, index) => planner.start_year + index,
    )
    const title = (item: PlannerItem) => {
        if (item.item_type === "ARBITRARY") {
            return i18n.resolvedLanguage === "en" ? item.type_en : item.type
        }
        return i18n.resolvedLanguage === "en" ? item.course.title_en : item.course.title
    }
    const code = (item: PlannerItem) =>
        item.item_type === "ARBITRARY"
            ? t("planner.items.arbitrary")
            : item.course.old_code

    return (
        <section aria-labelledby="semester-grid-title">
            <SectionTitle id="semester-grid-title">
                {t("planner.grid.title")}
            </SectionTitle>
            <Years>
                {years.map((year) => (
                    <YearSection key={year}>
                        <YearTitle>{t("planner.grid.year", { year })}</YearTitle>
                        <SemesterColumns>
                            {SEMESTERS.map((semester) => {
                                const semesterItems = items.filter(
                                    (item) =>
                                        itemYear(item) === year &&
                                        itemSemester(item) === semester,
                                )
                                return (
                                    <SemesterColumn key={semester}>
                                        <SemesterTitle>
                                            {t(`planner.semesters.${semester}`)}
                                        </SemesterTitle>
                                        {semesterItems.map((item) => (
                                            <PlannerItemCard
                                                key={item.id}
                                                planner={planner}
                                                item={item}
                                                title={title(item)}
                                                code={code(item)}
                                                busy={busy}
                                                onUpdate={onUpdate}
                                                onRemove={onRemove}
                                            />
                                        ))}
                                        {semesterItems.length === 0 && (
                                            <AddHereChip
                                                type="button"
                                                data-slot-chip="true"
                                                disabled={busy}
                                                onClick={() =>
                                                    onRequestAdd(year, semester)
                                                }
                                            >
                                                +{" "}
                                                {t("planner.grid.addHere", {
                                                    year,
                                                    semester: t(
                                                        `planner.semesters.${semester}`,
                                                    ),
                                                })}
                                            </AddHereChip>
                                        )}
                                    </SemesterColumn>
                                )
                            })}
                        </SemesterColumns>
                    </YearSection>
                ))}
            </Years>
        </section>
    )
}
