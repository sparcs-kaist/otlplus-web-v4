import { useMemo } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { Lecture } from "@/common/schemas/lecture"

const CreditGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;
`

const CreditRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 16px;
    color: ${({ theme }) => theme.colors.Text.default};

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }
`

const CreditTypeLabel = styled.span`
    font-size: 14px;
    font-weight: 700;
`

const CreditNumber = styled.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
`

const CreditAdditionalInfo = styled.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({ theme }) => theme.colors.Highlight.default};
`

type TypeKeys =
    | "basicRequired"
    | "basicElective"
    | "majorRequired"
    | "majorElective"
    | "humanitiesSocial"
    | "etc"

interface CreditGridSectionProps {
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    timetableLectures: Lecture[]
}

export default function CreditGridSubSection({
    hover,
    setHover,
    timetableLectures,
}: CreditGridSectionProps) {
    const { t } = useTranslation()

    const { lecturesByType, creditsByType } = useMemo(() => {
        const creditsByType = {
            basicRequired: 0, // 기필
            basicElective: 0, // 기선
            majorRequired: 0, // 전필
            majorElective: 0, // 전선
            humanitiesSocial: 0, // 인선
            etc: 0, // 기타
        }

        const lecturesByType = {
            basicRequired: [] as Lecture[],
            basicElective: [] as Lecture[],
            majorRequired: [] as Lecture[],
            majorElective: [] as Lecture[],
            humanitiesSocial: [] as Lecture[],
            etc: [] as Lecture[],
        }

        timetableLectures.forEach((lec) => {
            if (lec.type.includes("기초필수")) {
                creditsByType.basicRequired += lec.credit
                lecturesByType.basicRequired.push(lec)
            } else if (lec.type.includes("기초선택")) {
                creditsByType.basicElective += lec.credit
                lecturesByType.basicElective.push(lec)
            } else if (lec.type.includes("전공필수")) {
                creditsByType.majorRequired += lec.credit
                lecturesByType.majorRequired.push(lec)
            } else if (lec.type.includes("전공선택")) {
                creditsByType.majorElective += lec.credit
                lecturesByType.majorElective.push(lec)
            } else if (lec.type.includes("인문")) {
                creditsByType.humanitiesSocial += lec.credit
                lecturesByType.humanitiesSocial.push(lec)
            } else {
                creditsByType.etc += lec.credit
                creditsByType.etc += lec.creditAU
                lecturesByType.etc.push(lec)
            }
        })

        return { lecturesByType, creditsByType }
    }, [timetableLectures])

    function detectTypeKey(lecture: Lecture): TypeKeys {
        for (const typeKey of [
            "basicRequired",
            "basicElective",
            "majorRequired",
            "majorElective",
            "humanitiesSocial",
            "etc",
        ] as TypeKeys[]) {
            if (lecture.type.includes(t(`common.type.${typeKey}`))) {
                return typeKey as TypeKeys
            }
        }
        return "etc"
    }

    function getBackString(typeLectures: Lecture[], keys: TypeKeys): string {
        if (!hover || hover.length == 0 || hover?.length > 1) return ""
        const hoverLecture = hover[0] as Lecture
        const typeIds = typeLectures.map((lec) => lec.id)
        if (typeIds.includes(hoverLecture.id))
            return `(${hoverLecture.creditAU ? hoverLecture.creditAU : hoverLecture.credit})`
        if (keys === detectTypeKey(hoverLecture)) {
            return `(+${hoverLecture.creditAU ? hoverLecture.creditAU : hoverLecture.credit})`
        }
        return ""
    }

    return (
        <CreditGrid>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.basicRequired)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.basicRequiredShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.basicRequired}</CreditNumber>
                <CreditAdditionalInfo>
                    {getBackString(lecturesByType.basicRequired, "basicRequired")}
                </CreditAdditionalInfo>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.basicElective)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.basicElectiveShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.basicElective}</CreditNumber>
                <CreditAdditionalInfo>
                    {getBackString(lecturesByType.basicElective, "basicElective")}
                </CreditAdditionalInfo>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.majorRequired)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.majorRequiredShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.majorRequired}</CreditNumber>
                <CreditAdditionalInfo>
                    {getBackString(lecturesByType.majorRequired, "majorRequired")}
                </CreditAdditionalInfo>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.majorElective)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.majorElectiveShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.majorElective}</CreditNumber>
                <CreditAdditionalInfo>
                    {getBackString(lecturesByType.majorElective, "majorElective")}
                </CreditAdditionalInfo>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.humanitiesSocial)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>
                    {t("common.type.humanitiesSocialElectiveShort")}
                </CreditTypeLabel>
                <CreditNumber>{creditsByType.humanitiesSocial}</CreditNumber>
                <CreditAdditionalInfo>
                    {getBackString(lecturesByType.humanitiesSocial, "humanitiesSocial")}
                </CreditAdditionalInfo>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.etc)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.etcShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.etc}</CreditNumber>
                <CreditAdditionalInfo>
                    {getBackString(lecturesByType.etc, "etc")}
                </CreditAdditionalInfo>
            </CreditRow>
        </CreditGrid>
    )
}
