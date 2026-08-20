import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { GETResponse as PlannerCoursesResponseSchema } from "@/api/planner-courses"
import {
    type PlannerCourse,
    type PlannerDepartment,
    type PlannerDetail,
    type PlannerSemester,
    PlannerSemesterSchema,
} from "@/common/schemas/planner"
import { useAPI } from "@/utils/api/useAPI"

import {
    ActionButton,
    Field,
    FieldLabel,
    SectionTitle,
    Select,
    StatusNotice,
} from "../components/PlannerControls"
import { getCourseDuplicateDecision } from "../domain/duplicates"
import type { AddFutureItem, ArbitraryItemInput } from "../hooks/types"
import { ArbitraryCourseForm } from "./ArbitraryCourseForm"

const Panel = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const SearchRow = styled.form`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
`

const Results = styled.div`
    display: grid;
    max-height: 220px;
    grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr));
    gap: 6px;
    overflow-y: auto;
`

const CourseButton = styled.button<{ $selected: boolean }>`
    min-width: 0;
    border: 1px solid
        ${({ $selected, theme }) =>
            $selected ? theme.colors.Highlight.default : theme.colors.Line.default};
    border-radius: 6px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.Text.default};
    background: ${({ $selected, theme }) =>
        $selected
            ? theme.colors.Background.Button.highlight
            : theme.colors.Background.Block.default};
    font: inherit;
    text-align: start;
    cursor: pointer;
`

const CourseCode = styled.span`
    display: block;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.colors.Text.placeholder};
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
`

const TargetGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`

const Divider = styled.hr`
    width: 100%;
    margin: 4px 0;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.Line.default};
`

const SEMESTERS = [1, 2, 3, 4] as const satisfies readonly PlannerSemester[]

type Props = {
    readonly planner: PlannerDetail
    readonly departments: readonly PlannerDepartment[]
    readonly busy: boolean
    readonly onAddFuture: AddFutureItem
    readonly onAddArbitrary: (input: ArbitraryItemInput) => Promise<void>
}

export function CourseSearchPanel({
    planner,
    departments,
    busy,
    onAddFuture,
    onAddArbitrary,
}: Props) {
    const { t, i18n } = useTranslation()
    const [keyword, setKeyword] = useState("")
    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)
    const [searchEnabled, setSearchEnabled] = useState(false)
    const [year, setYear] = useState(planner.start_year)
    const [semester, setSemester] = useState<PlannerSemester>(1)
    const courses = useAPI("GET", "/planner-courses", {
        enabled: searchEnabled,
        apiPrefix: "/api",
        apiPath: "/courses",
        select: (data) => PlannerCoursesResponseSchema.parse(data),
    })

    useEffect(() => {
        setYear(planner.start_year)
    }, [planner])

    const plannerCourse =
        courses.query.data?.find((course) => course.id === selectedCourseId) ?? null
    const duplicateDecision =
        plannerCourse === null
            ? "none"
            : getCourseDuplicateDecision(planner, plannerCourse)

    const search = (event: React.FormEvent) => {
        event.preventDefault()
        if (keyword.trim() === "") return
        courses.setParams({
            keyword: keyword.trim(),
            offset: 0,
            limit: 20,
        })
        setSearchEnabled(true)
    }

    return (
        <Panel aria-labelledby="planner-course-search-title">
            <SectionTitle id="planner-course-search-title">
                {t("planner.search.title")}
            </SectionTitle>
            <SearchRow onSubmit={search}>
                <Field
                    aria-label={t("planner.search.keyword")}
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    placeholder={t("planner.search.placeholder")}
                />
                <ActionButton $primary type="submit" disabled={busy}>
                    {t("planner.actions.search")}
                </ActionButton>
            </SearchRow>
            <Results>
                {courses.query.data?.map((course) => (
                    <CourseButton
                        key={course.id}
                        type="button"
                        $selected={course.id === selectedCourseId}
                        aria-pressed={course.id === selectedCourseId}
                        onClick={() => setSelectedCourseId(course.id)}
                    >
                        <CourseCode>{course.old_code}</CourseCode>
                        {i18n.resolvedLanguage === "en" ? course.title_en : course.title}
                    </CourseButton>
                ))}
            </Results>
            <TargetGrid>
                <FieldLabel>
                    {t("planner.grid.targetYear")}
                    <Select
                        value={year}
                        onChange={(event) => setYear(Number(event.target.value))}
                    >
                        {Array.from(
                            { length: planner.end_year - planner.start_year + 1 },
                            (_, index) => planner.start_year + index,
                        ).map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
                <FieldLabel>
                    {t("planner.grid.targetSemester")}
                    <Select
                        value={semester}
                        onChange={(event) =>
                            setSemester(
                                PlannerSemesterSchema.parse(Number(event.target.value)),
                            )
                        }
                    >
                        {SEMESTERS.map((value) => (
                            <option key={value} value={value}>
                                {t(`planner.semesters.${value}`)}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
            </TargetGrid>
            {duplicateDecision === "future" ? (
                <StatusNotice role="status" aria-live="polite">
                    {t("planner.search.duplicate")}
                </StatusNotice>
            ) : (
                <ActionButton
                    $primary
                    type="button"
                    disabled={busy || plannerCourse === null}
                    onClick={() => {
                        if (plannerCourse === null) return
                        const excludeTakenDuplicates =
                            duplicateDecision === "taken" &&
                            window.confirm(t("planner.search.takenDuplicateConfirm"))
                        if (duplicateDecision === "taken" && !excludeTakenDuplicates) {
                            return
                        }
                        void onAddFuture(plannerCourse, year, semester, {
                            excludeTakenDuplicates,
                        })
                    }}
                >
                    {t("planner.actions.addCourse")}
                </ActionButton>
            )}
            <Divider />
            <ArbitraryCourseForm
                departments={departments}
                defaultDepartmentId={planner.major_track.department.id}
                year={year}
                semester={semester}
                busy={busy}
                onAdd={onAddArbitrary}
            />
        </Panel>
    )
}
