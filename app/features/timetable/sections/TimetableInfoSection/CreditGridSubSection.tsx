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

type TypeKeys =
    | "basicRequired"
    | "basicElective"
    | "majorRequired"
    | "majorElective"
    | "humanitiesSocial"
    | "etc"

interface CreditGridSectionProps {
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    lecturesByType: Record<TypeKeys, Lecture[]>
    creditsByType: Record<TypeKeys, number>
}

export default function CreditGridSubSection({
    setHover,
    lecturesByType,
    creditsByType,
}: CreditGridSectionProps) {
    const { t } = useTranslation()

    return (
        <CreditGrid>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.basicRequired)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.basicRequiredShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.basicRequired}</CreditNumber>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.basicElective)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.basicElectiveShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.basicElective}</CreditNumber>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.majorRequired)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.majorRequiredShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.majorRequired}</CreditNumber>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.majorElective)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.majorElectiveShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.majorElective}</CreditNumber>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.humanitiesSocial)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>
                    {t("common.type.humanitiesSocialElectiveShort")}
                </CreditTypeLabel>
                <CreditNumber>{creditsByType.humanitiesSocial}</CreditNumber>
            </CreditRow>
            <CreditRow
                onMouseEnter={() => setHover(lecturesByType.etc)}
                onMouseLeave={() => setHover(null)}
            >
                <CreditTypeLabel>{t("common.type.etcShort")}</CreditTypeLabel>
                <CreditNumber>{creditsByType.etc}</CreditNumber>
            </CreditRow>
        </CreditGrid>
    )
}
