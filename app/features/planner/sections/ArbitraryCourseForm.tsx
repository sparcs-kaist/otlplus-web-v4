import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { PlannerDepartment, PlannerSemester } from "@/common/schemas/planner"

import {
    ActionButton,
    Field,
    FieldLabel,
    SectionTitle,
    Select,
} from "../components/PlannerControls"
import type { ArbitraryItemInput } from "../hooks/types"

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const FieldGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`

const COURSE_TYPES = [
    ["기초필수", "Basic Required"],
    ["기초선택", "Basic Elective"],
    ["전공필수", "Major Required"],
    ["전공선택", "Major Elective"],
    ["졸업연구", "Thesis Study(Undergraduate)"],
    ["교양필수", "General Required"],
    ["인문사회선택", "Humanities & Social Elective"],
    ["자유선택", "Other Elective"],
] as const

type Props = {
    readonly departments: readonly PlannerDepartment[]
    readonly defaultDepartmentId: number
    readonly year: number
    readonly semester: PlannerSemester
    readonly busy: boolean
    readonly onAdd: (input: ArbitraryItemInput) => Promise<void>
}

export function ArbitraryCourseForm({
    departments,
    defaultDepartmentId,
    year,
    semester,
    busy,
    onAdd,
}: Props) {
    const { t, i18n } = useTranslation()
    const [typeIndex, setTypeIndex] = useState(0)
    const [credit, setCredit] = useState(3)
    const [creditAU, setCreditAU] = useState(0)
    const [departmentId, setDepartmentId] = useState(defaultDepartmentId)

    useEffect(() => setDepartmentId(defaultDepartmentId), [defaultDepartmentId])

    const invalidCredits =
        !Number.isInteger(credit) ||
        !Number.isInteger(creditAU) ||
        credit < 0 ||
        creditAU < 0

    const add = () => {
        const department = departments.find((item) => item.id === departmentId)
        const type = COURSE_TYPES[typeIndex]
        if (department === undefined || type === undefined) return
        void onAdd({
            year,
            semester,
            department,
            type: type[0],
            typeEn: type[1],
            credit,
            creditAU,
        })
    }

    return (
        <Form>
            <SectionTitle>{t("planner.arbitrary.title")}</SectionTitle>
            <FieldGrid>
                <FieldLabel>
                    {t("planner.arbitrary.department")}
                    <Select
                        value={departmentId}
                        onChange={(event) => setDepartmentId(Number(event.target.value))}
                    >
                        {departments.map((department) => (
                            <option key={department.id} value={department.id}>
                                {i18n.resolvedLanguage === "en"
                                    ? department.name_en
                                    : department.name}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
                <FieldLabel>
                    {t("planner.arbitrary.type")}
                    <Select
                        value={typeIndex}
                        onChange={(event) => setTypeIndex(Number(event.target.value))}
                    >
                        {COURSE_TYPES.map((type, index) => (
                            <option key={type[1]} value={index}>
                                {t(`planner.categories.${type[1]}`)}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
                <FieldLabel>
                    {t("planner.arbitrary.credit")}
                    <Field
                        type="number"
                        min={0}
                        step={1}
                        value={credit}
                        onChange={(event) => setCredit(Number(event.target.value))}
                    />
                </FieldLabel>
                <FieldLabel>
                    {t("planner.arbitrary.creditAU")}
                    <Field
                        type="number"
                        min={0}
                        step={1}
                        value={creditAU}
                        onChange={(event) => setCreditAU(Number(event.target.value))}
                    />
                </FieldLabel>
            </FieldGrid>
            <ActionButton
                $primary
                type="button"
                disabled={busy || invalidCredits}
                onClick={add}
            >
                {t("planner.actions.addArbitrary")}
            </ActionButton>
        </Form>
    )
}
