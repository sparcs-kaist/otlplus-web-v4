import { useMemo } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import type { Lecture } from "@/common/schemas/lecture"
import { media } from "@/styles/themes/media"

const TotalRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${media.mobile} {
        gap: 20px;
    }
`

const TotalItem = styled.div<{ highlighted?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({ theme, highlighted }) =>
        highlighted ? theme.colors.Highlight.default : theme.colors.Text.default};

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }
`

const TotalNumber = styled.span`
    font-size: 20px;
    font-weight: 300;
`

const TotalLabel = styled.span`
    font-size: 10px;
    font-weight: 400;
`

const GradeRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${media.mobile} {
        gap: 20px;
    }
`

const GradeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`

const GradeLetter = styled.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.Text.default};
`

const GradeLabel = styled.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.Text.dark};
`

interface CreditScoreSubSectionProps {
    timetableLectures: Lecture[]
    hover: Lecture[]
    setHover: (lectures: Lecture[]) => void
}

export default function CreditScoreSubSection({
    timetableLectures,
    hover,
    setHover,
}: CreditScoreSubSectionProps) {
    const { t } = useTranslation()

    const timetableInfo = useMemo(() => {
        let totalCredits = timetableLectures.reduce((sum, lec) => sum + lec.credit, 0)
        let totalAU = timetableLectures.reduce((sum, lec) => sum + lec.creditAU, 0)

        if (hover && hover.length == 1) {
            const hoveredLecture = hover[0] as Lecture
            if (!timetableLectures.some((lec) => lec.id === hoveredLecture.id)) {
                totalCredits += hoveredLecture.credit
                totalAU += hoveredLecture.creditAU
            }
        }

        let avgGrade = 0
        let avgLoad = 0
        let avgSpeech = 0
        let totalLecturesCount = timetableLectures.length

        timetableLectures.forEach((lec) => {
            avgGrade += lec.averageGrade
            avgLoad += lec.averageLoad
            avgSpeech += lec.averageSpeech
            if (
                lec.averageGrade === 0 &&
                lec.averageLoad === 0 &&
                lec.averageSpeech === 0
            ) {
                totalLecturesCount -= 1
            }
        })

        // Average grades
        avgGrade = avgGrade / totalLecturesCount
        avgLoad = avgLoad / totalLecturesCount
        avgSpeech = avgSpeech / totalLecturesCount

        return {
            totalCredits,
            totalAU,
            avgGrade,
            avgLoad,
            avgSpeech,
        }
    }, [timetableLectures, hover])

    return (
        <>
            <TotalRow>
                <TotalItem
                    onMouseEnter={() =>
                        setHover(timetableLectures.filter((lec) => lec.credit > 0))
                    }
                    onMouseLeave={() => setHover([])}
                    highlighted={hover.length > 0 && hover.some((lec) => lec.credit > 0)}
                >
                    <TotalNumber>{timetableInfo.totalCredits}</TotalNumber>
                    <TotalLabel>{t("common.credit")}</TotalLabel>
                </TotalItem>
                <TotalItem
                    onMouseEnter={() =>
                        setHover(timetableLectures.filter((lec) => lec.creditAU > 0))
                    }
                    onMouseLeave={() => setHover([])}
                    highlighted={
                        hover.length > 0 && hover.some((lec) => lec.creditAU > 0)
                    }
                >
                    <TotalNumber>{timetableInfo.totalAU}</TotalNumber>
                    <TotalLabel>AU</TotalLabel>
                </TotalItem>
            </TotalRow>

            {/* 평균 성적 */}
            <GradeRow>
                <GradeItem>
                    <GradeLetter>
                        {getAverageScoreLabel(timetableInfo.avgGrade / 3)}
                    </GradeLetter>
                    <GradeLabel>{t("common.grade")}</GradeLabel>
                </GradeItem>
                <GradeItem>
                    <GradeLetter>
                        {getAverageScoreLabel(timetableInfo.avgLoad / 3)}
                    </GradeLetter>
                    <GradeLabel>{t("common.load")}</GradeLabel>
                </GradeItem>
                <GradeItem>
                    <GradeLetter>
                        {getAverageScoreLabel(timetableInfo.avgSpeech / 3)}
                    </GradeLetter>
                    <GradeLabel>{t("common.speech")}</GradeLabel>
                </GradeItem>
            </GradeRow>
        </>
    )
}
