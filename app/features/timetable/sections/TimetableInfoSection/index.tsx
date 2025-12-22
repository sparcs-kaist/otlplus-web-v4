import { useMemo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ImageIcon from "@mui/icons-material/Image"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useTranslation } from "react-i18next"

import StyledDivider from "@/common/components/StyledDivider"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import { WeekdayEnum, weekdayToString } from "@/common/enum/weekdayEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { ExamTime, Lecture } from "@/common/schemas/lecture"

const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 264px;
    align-self: stretch;
    gap: 12px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const MapImage = styled.div`
    width: 100%;
    height: 150px;
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 50%, #b1dfbb 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/ad.png");
        background-size: cover;
        background-position: center;
        opacity: 0.8;
    }
`

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
`

const CreditTypeLabel = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.Text.default};
`

const CreditNumber = styled.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    color: ${({ theme }) => theme.colors.Text.default};
`

const TotalRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;
`

const TotalItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`

const TotalNumber = styled.span<{ highlight?: boolean }>`
    font-size: 20px;
    font-weight: 300;
    color: ${({ highlight, theme }) =>
        highlight ? theme.colors.Highlight.default : theme.colors.Text.default};
`

const TotalLabel = styled.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.Text.dark};
`

const GradeRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;
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

const ExamScheduleItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`

const DayLabel = styled.span<{ color?: string }>`
    font-size: 14px;
    font-weight: 400;
    color: ${({ color, theme }) => color || theme.colors.Text.default};
    min-width: 16px;
`

const ExportButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 0;
    color: ${({ theme }) => theme.colors.Highlight.default};
    font-size: 13px;

    &:hover {
        text-decoration: underline;
    }
`

const dayLabels = [
    { day: WeekdayEnum.Mon, color: "#E54C65" },
    { day: WeekdayEnum.Tue, color: "#F5A623" },
    { day: WeekdayEnum.Wed, color: "#7ED321" },
    { day: WeekdayEnum.Thu, color: "#4A90D9" },
    { day: WeekdayEnum.Fri, color: "#9B59B6" },
]

interface TimetableInfoSectionProps {
    timetableLectures: Lecture[]
}

export default function TimetableInfoSection({
    timetableLectures,
}: TimetableInfoSectionProps) {
    const { t } = useTranslation()
    const theme = useTheme()

    // Calculate timetable summary info
    const timetableInfo = useMemo(() => {
        const totalCredits = timetableLectures.reduce((sum, lec) => sum + lec.credit, 0)
        const totalAU = timetableLectures.reduce((sum, lec) => sum + lec.creditAU, 0)

        // Credit breakdown by type
        const creditByType = {
            basicRequired: 0, // 기필
            basicElective: 0, // 기선
            majorRequired: 0, // 전필
            majorElective: 0, // 전선
            humanitiesSocial: 0, // 인선
            etc: 0, // 기타
        }

        timetableLectures.forEach((lec) => {
            if (lec.type.includes("기초필수") || lec.type.includes("기필")) {
                creditByType.basicRequired += lec.credit
            } else if (lec.type.includes("기초선택") || lec.type.includes("기선")) {
                creditByType.basicElective += lec.credit
            } else if (lec.type.includes("전공필수") || lec.type.includes("전필")) {
                creditByType.majorRequired += lec.credit
            } else if (lec.type.includes("전공선택") || lec.type.includes("전선")) {
                creditByType.majorElective += lec.credit
            } else if (lec.type.includes("인문") || lec.type.includes("인선")) {
                creditByType.humanitiesSocial += lec.credit
            } else {
                creditByType.etc += lec.credit
            }
        })

        // Average grades
        const avgGrade =
            timetableLectures.length > 0
                ? timetableLectures.reduce((sum, lec) => sum + lec.averageGrade, 0) /
                  timetableLectures.length
                : 0
        const avgLoad =
            timetableLectures.length > 0
                ? timetableLectures.reduce((sum, lec) => sum + lec.averageLoad, 0) /
                  timetableLectures.length
                : 0
        const avgSpeech =
            timetableLectures.length > 0
                ? timetableLectures.reduce((sum, lec) => sum + lec.averageSpeech, 0) /
                  timetableLectures.length
                : 0

        // Exam times grouped by day
        const examsByDay: {
            [key: number]: { lectureName: string; classNo: string; time: string }[]
        } = {
            [WeekdayEnum.Mon]: [],
            [WeekdayEnum.Tue]: [],
            [WeekdayEnum.Wed]: [],
            [WeekdayEnum.Thu]: [],
            [WeekdayEnum.Fri]: [],
        }

        timetableLectures.forEach((lec) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ;[lec.examTime as unknown as ExamTime].forEach((exam) => {
                if (exam == null) return
                const day = exam.day as WeekdayEnum
                if (examsByDay[day]) {
                    examsByDay[day].push({
                        lectureName: lec.name,
                        classNo: lec.classNo,
                        time: exam.str.split(" ").slice(1).join(" "), // Remove day prefix
                    })
                }
            })
        })

        return {
            totalCredits,
            totalAU,
            creditByType,
            avgGrade,
            avgLoad,
            avgSpeech,
            examsByDay,
        }
    }, [timetableLectures])

    return (
        <InfoArea>
            {/* 캠퍼스 맵 */}
            <MapImage />
            {/* 학점 분류별 */}
            <CreditGrid>
                <CreditRow>
                    <CreditTypeLabel>
                        {t("common.type.basicRequiredShort")}
                    </CreditTypeLabel>
                    <CreditNumber>
                        {timetableInfo.creditByType.basicRequired}
                    </CreditNumber>
                </CreditRow>
                <CreditRow>
                    <CreditTypeLabel>
                        {t("common.type.basicElectiveShort")}
                    </CreditTypeLabel>
                    <CreditNumber>
                        {timetableInfo.creditByType.basicElective}
                    </CreditNumber>
                </CreditRow>
                <CreditRow>
                    <CreditTypeLabel>
                        {t("common.type.majorRequiredShort")}
                    </CreditTypeLabel>
                    <CreditNumber>
                        {timetableInfo.creditByType.majorRequired}
                    </CreditNumber>
                </CreditRow>
                <CreditRow>
                    <CreditTypeLabel>
                        {t("common.type.majorElectiveShort")}
                    </CreditTypeLabel>
                    <CreditNumber>
                        {timetableInfo.creditByType.majorElective}
                    </CreditNumber>
                </CreditRow>
                <CreditRow>
                    <CreditTypeLabel>
                        {t("common.type.humanitiesSocialElectiveShort")}
                    </CreditTypeLabel>
                    <CreditNumber>
                        {timetableInfo.creditByType.humanitiesSocial}
                    </CreditNumber>
                </CreditRow>
                <CreditRow>
                    <CreditTypeLabel>{t("common.type.etcShort")}</CreditTypeLabel>
                    <CreditNumber>{timetableInfo.creditByType.etc}</CreditNumber>
                </CreditRow>
            </CreditGrid>

            {/* 총 학점/AU */}
            <TotalRow>
                <TotalItem>
                    <TotalNumber highlight>{timetableInfo.totalCredits}</TotalNumber>
                    <TotalLabel>{t("common.credit")}</TotalLabel>
                </TotalItem>
                <TotalItem>
                    <TotalNumber>{timetableInfo.totalAU}</TotalNumber>
                    <TotalLabel>AU</TotalLabel>
                </TotalItem>
            </TotalRow>

            {/* 평균 성적 */}
            <GradeRow>
                <GradeItem>
                    <GradeLetter>
                        {getAverageScoreLabel(timetableInfo.avgGrade)}
                    </GradeLetter>
                    <GradeLabel>{t("common.grade")}</GradeLabel>
                </GradeItem>
                <GradeItem>
                    <GradeLetter>
                        {getAverageScoreLabel(timetableInfo.avgLoad)}
                    </GradeLetter>
                    <GradeLabel>{t("common.load")}</GradeLabel>
                </GradeItem>
                <GradeItem>
                    <GradeLetter>
                        {getAverageScoreLabel(timetableInfo.avgSpeech)}
                    </GradeLetter>
                    <GradeLabel>{t("common.speech")}</GradeLabel>
                </GradeItem>
            </GradeRow>

            <StyledDivider direction="row" />

            {/* 시험시간표 */}
            <FlexWrapper direction="column" gap={15} style={{ width: "100%" }}>
                <Typography type="NormalBold" color="Text.default">
                    시험시간표
                </Typography>
                {dayLabels.map(({ day, color }) => {
                    const exams = timetableInfo.examsByDay[day]
                    if (!exams || exams.length === 0) return null
                    return (
                        <ExamScheduleItem key={day}>
                            <DayLabel color={color}>
                                {weekdayToString(day, true)}
                            </DayLabel>
                            <FlexWrapper direction="column" gap={2}>
                                {exams
                                    .sort((a, b) => a.time.localeCompare(b.time))
                                    .map((exam, idx) => (
                                        <FlexWrapper key={idx} direction="column" gap={0}>
                                            <Typography
                                                type="NormalBold"
                                                color="Text.default"
                                            >
                                                {exam.lectureName}
                                            </Typography>
                                            <Typography
                                                type="Normal"
                                                color="Text.default"
                                            >
                                                {exam.time}
                                            </Typography>
                                        </FlexWrapper>
                                    ))}
                            </FlexWrapper>
                        </ExamScheduleItem>
                    )
                })}
            </FlexWrapper>

            <StyledDivider direction="row" />

            {/* 내보내기 버튼들 */}
            <FlexWrapper direction="column" gap={8} style={{ width: "100%" }}>
                <ExportButton onClick={() => console.log("이미지로 내보내기")}>
                    <Icon size={16} color={theme.colors.Highlight.default}>
                        <ImageIcon />
                    </Icon>
                    <span>이미지로 내보내기</span>
                </ExportButton>
                <ExportButton onClick={() => console.log("캘린더로 내보내기")}>
                    <Icon size={16} color={theme.colors.Highlight.default}>
                        <CalendarMonthIcon />
                    </Icon>
                    <span>캘린더로 내보내기</span>
                </ExportButton>
                <ExportButton onClick={() => console.log("실라버스 모아보기")}>
                    <Icon size={16} color={theme.colors.Highlight.default}>
                        <MenuBookIcon />
                    </Icon>
                    <span>실라버스 모아보기</span>
                </ExportButton>
            </FlexWrapper>
        </InfoArea>
    )
}
