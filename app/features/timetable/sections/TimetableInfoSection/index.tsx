import { useMemo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ImageIcon from "@mui/icons-material/Image"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useTranslation } from "react-i18next"

import StyledDivider from "@/common/components/StyledDivider"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import { type SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import { WeekdayEnum, weekdayToString } from "@/common/enum/weekdayEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import CreditGridSubSection from "@/features/timetable/sections/TimetableInfoSection/CreditGridSubSection"
import {
    copyTimetableImageToClipboard,
    downloadTimetableCalendar,
    downloadTimetableImage,
} from "@/features/timetable/sections/TimetableInfoSection/shareFunctions"
import { useAPI } from "@/utils/api/useAPI"

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
    height: 220px;
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
        background-image: url("/campus_map.png");
        background-size: cover;
        background-position: center;
        opacity: 0.8;
    }
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
    color: ${({ theme }) => theme.colors.Text.default};

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

const LectureTextWrapper = styled(FlexWrapper)<{ highlighted?: boolean }>`
    color: ${({ highlighted, theme }) =>
        highlighted ? theme.colors.Highlight.default : theme.colors.Text.default};

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }
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
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    year: number
    semester: SemesterEnum
}

export default function TimetableInfoSection({
    timetableLectures,
    hover,
    setHover,
    year,
    semester,
}: TimetableInfoSectionProps) {
    const { t, i18n } = useTranslation()
    const theme = useTheme()

    const { query } = useAPI("GET", "/semesters")

    const currentSemester = useMemo(() => {
        if (!query) return null
        return query.data?.semesters.find(
            (sem: { year: number; semester: SemesterEnum }) =>
                sem.year === year && sem.semester === semester,
        )
    }, [query.data, year, semester])

    // Calculate timetable summary info
    const timetableInfo = useMemo(() => {
        const totalCredits = timetableLectures.reduce((sum, lec) => sum + lec.credit, 0)
        const totalAU = timetableLectures.reduce((sum, lec) => sum + lec.creditAU, 0)

        // Credit breakdown by type
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

        let avgGrade = 0
        let avgLoad = 0
        let avgSpeech = 0

        const examsByDay: {
            [key: number]: { lectureName: string; lectureId: number; time: string }[]
        } = {
            [WeekdayEnum.Mon]: [],
            [WeekdayEnum.Tue]: [],
            [WeekdayEnum.Wed]: [],
            [WeekdayEnum.Thu]: [],
            [WeekdayEnum.Fri]: [],
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
            avgGrade += lec.averageGrade
            avgLoad += lec.averageLoad
            avgSpeech += lec.averageSpeech
            lec.examTimes.forEach((exam) => {
                if (exam == null) return
                const day = exam.day as WeekdayEnum
                if (examsByDay[day]) {
                    examsByDay[day].push({
                        lectureName: lec.name,
                        lectureId: lec.id,
                        time: exam.str.split(" ").slice(1).join(" "), // Remove day prefix
                    })
                }
            })
        })

        // Average grades
        avgGrade = avgGrade / timetableLectures.length
        avgLoad = avgLoad / timetableLectures.length
        avgSpeech = avgSpeech / timetableLectures.length

        return {
            totalCredits,
            totalAU,
            creditsByType,
            lecturesByType,
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
            <CreditGridSubSection
                setHover={setHover}
                lecturesByType={timetableInfo.lecturesByType}
                creditsByType={timetableInfo.creditsByType}
            />
            {/* 총 학점/AU */}
            <TotalRow>
                <TotalItem
                    onMouseEnter={() =>
                        setHover(timetableLectures.filter((lec) => lec.credit > 0))
                    }
                    onMouseLeave={() => setHover(null)}
                >
                    <TotalNumber>{timetableInfo.totalCredits}</TotalNumber>
                    <TotalLabel>{t("common.credit")}</TotalLabel>
                </TotalItem>
                <TotalItem
                    onMouseEnter={() =>
                        setHover(timetableLectures.filter((lec) => lec.creditAU > 0))
                    }
                    onMouseLeave={() => setHover(null)}
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
                            <DayLabel
                                color={color}
                                onMouseEnter={() => {
                                    setHover(
                                        timetableLectures.filter((lec) =>
                                            lec.examTimes.some(
                                                (exam) => exam?.day === day,
                                            ),
                                        ),
                                    )
                                }}
                                onMouseLeave={() => setHover(null)}
                            >
                                {weekdayToString(day, true)}
                            </DayLabel>
                            <FlexWrapper direction="column" gap={2}>
                                {exams
                                    .sort((a, b) => a.time.localeCompare(b.time))
                                    .map((exam, idx) => (
                                        <LectureTextWrapper
                                            key={idx}
                                            direction="column"
                                            gap={0}
                                            highlighted={hover?.some(
                                                (lec) => lec.id === exam.lectureId,
                                            )}
                                            onMouseEnter={() =>
                                                setHover(
                                                    timetableLectures.filter(
                                                        (lec) =>
                                                            lec.id === exam.lectureId,
                                                    ),
                                                )
                                            }
                                            onMouseLeave={() => setHover(null)}
                                        >
                                            <Typography type="NormalBold">
                                                {exam.lectureName}
                                            </Typography>
                                            <Typography type="Normal">
                                                {exam.time}
                                            </Typography>
                                        </LectureTextWrapper>
                                    ))}
                            </FlexWrapper>
                        </ExamScheduleItem>
                    )
                })}
            </FlexWrapper>

            <StyledDivider direction="row" />

            {/* 내보내기 버튼들 */}
            <FlexWrapper direction="column" gap={8} style={{ width: "100%" }}>
                <ExportButton
                    onClick={() =>
                        copyTimetableImageToClipboard({
                            lectures: timetableLectures,
                            timetableType: "5days",
                            semesterName: year + " " + semesterToString(semester),
                            isEnglish: i18n.resolvedLanguage === "en",
                            semesterFontSize: 30,
                            tileFontSize: 20,
                        })
                    }
                >
                    <Icon size={16} color={theme.colors.Highlight.default}>
                        <ContentCopyIcon />
                    </Icon>
                    <span>이미지로 복사하기</span>
                </ExportButton>
                <ExportButton
                    onClick={() =>
                        downloadTimetableImage({
                            lectures: timetableLectures,
                            timetableType: "5days",
                            semesterName: year + " " + semesterToString(semester),
                            isEnglish: i18n.resolvedLanguage === "en",
                            semesterFontSize: 30,
                            tileFontSize: 20,
                        })
                    }
                >
                    <Icon size={16} color={theme.colors.Highlight.default}>
                        <ImageIcon />
                    </Icon>
                    <span>이미지로 내보내기</span>
                </ExportButton>
                <ExportButton
                    onClick={() => {
                        if (!currentSemester) return
                        downloadTimetableCalendar({
                            name: "Timetable",
                            lectures: timetableLectures,
                            semesterObject: {
                                beginning: new Date(currentSemester.beginning),
                                end: new Date(currentSemester.end),
                            },
                            isEnglish: i18n.resolvedLanguage === "en",
                        })
                    }}
                >
                    <Icon size={16} color={theme.colors.Highlight.default}>
                        <CalendarMonthIcon />
                    </Icon>
                    <span>캘린더로 내보내기</span>
                </ExportButton>
                <StyledDivider />
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
