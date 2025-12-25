import { useMemo } from "react"

import styled from "@emotion/styled"

import { WeekdayEnum, weekdayToString } from "@/common/enum/weekdayEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"

const ExamTimeSubSectionWrapper = styled(FlexWrapper)`
    overflow-y: auto;
    min-height: 0;
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

interface ExamTimeSubSectionProps {
    timetableLectures: Lecture[]
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
}

const dayLabels = [
    { day: WeekdayEnum.Mon, color: "#E54C65" },
    { day: WeekdayEnum.Tue, color: "#F5A623" },
    { day: WeekdayEnum.Wed, color: "#7ED321" },
    { day: WeekdayEnum.Thu, color: "#4A90D9" },
    { day: WeekdayEnum.Fri, color: "#9B59B6" },
]

export default function ExamTimeSubSection({
    timetableLectures,
    hover,
    setHover,
}: ExamTimeSubSectionProps) {
    const examsByDay = useMemo(() => {
        const examsByDay: {
            [key: number]: { lectureName: string; lectureId: number; time: string }[]
        } = {
            [WeekdayEnum.Mon]: [],
            [WeekdayEnum.Tue]: [],
            [WeekdayEnum.Wed]: [],
            [WeekdayEnum.Thu]: [],
            [WeekdayEnum.Fri]: [],
        }

        timetableLectures.forEach((lecture) => {
            lecture.examTimes.forEach((exam) => {
                if (exam == null) return
                const day = exam.day as WeekdayEnum
                if (examsByDay[day]) {
                    examsByDay[day].push({
                        lectureName: lecture.name,
                        lectureId: lecture.id,
                        time: exam.str.split(" ").slice(1).join(" "), // Remove day prefix
                    })
                }
            })
        })

        if (hover && hover.length == 1) {
            const lecture = hover[0] as Lecture
            if (!timetableLectures.some((lec) => lec.id === lecture.id)) {
                lecture.examTimes.forEach((exam) => {
                    if (exam == null) return
                    const day = exam.day as WeekdayEnum
                    if (examsByDay[day]) {
                        examsByDay[day].push({
                            lectureName: lecture.name,
                            lectureId: lecture.id,
                            time: exam.str,
                        })
                    }
                })
            }
        }

        return examsByDay
    }, [timetableLectures, hover])

    return (
        <ExamTimeSubSectionWrapper
            direction="column"
            gap={15}
            style={{ width: "100%" }}
            flex="1 1 0"
        >
            <Typography type="NormalBold" color="Text.default">
                시험시간표
            </Typography>
            {dayLabels.map(({ day, color }) => {
                const exams = examsByDay[day]
                if (!exams || exams.length === 0) return null
                return (
                    <ExamScheduleItem key={day}>
                        <DayLabel
                            color={color}
                            onMouseEnter={() => {
                                setHover(
                                    timetableLectures.filter((lec) =>
                                        lec.examTimes.some((exam) => exam?.day === day),
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
                                                    (lec) => lec.id === exam.lectureId,
                                                ),
                                            )
                                        }
                                        onMouseLeave={() => setHover(null)}
                                    >
                                        <Typography type="NormalBold">
                                            {exam.lectureName}
                                        </Typography>
                                        <Typography type="Normal">{exam.time}</Typography>
                                    </LectureTextWrapper>
                                ))}
                        </FlexWrapper>
                    </ExamScheduleItem>
                )
            })}
        </ExamTimeSubSectionWrapper>
    )
}
