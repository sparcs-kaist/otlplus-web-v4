import { useMemo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ImageIcon from "@mui/icons-material/Image"
import MenuBookIcon from "@mui/icons-material/MenuBook"

import StyledDivider from "@/common/components/StyledDivider"
import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import type { Lecture } from "@/common/schemas/lecture"
import {
    copyTimetableImageToClipboard,
    downloadTimetableCalendar,
    downloadTimetableImage,
} from "@/features/timetable/sections/TimetableInfoSection/util/shareFunctions"
import { useAPI } from "@/utils/api/useAPI"

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

export default function UtilButtonsSubSection({
    timetableName,
    timetableLectures,
    year,
    semester,
}: {
    timetableName: string
    timetableLectures: Lecture[]
    year: number
    semester: SemesterEnum
}) {
    const theme = useTheme()

    const { query } = useAPI("GET", "/semesters")

    const currentSemester = useMemo(() => {
        if (!query) return null
        return query.data?.semesters.find(
            (sem: { year: number; semester: SemesterEnum }) =>
                sem.year === year && sem.semester === semester,
        )
    }, [query.data, year, semester])

    return (
        <FlexWrapper direction="column" gap={8} style={{ width: "100%" }}>
            <ExportButton
                onClick={() =>
                    copyTimetableImageToClipboard({
                        timetableName: timetableName,
                        lectures: timetableLectures,
                        timetableType: "5days",
                        semesterName: year + " " + semesterToString(semester),
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
                        timetableName: timetableName,
                        lectures: timetableLectures,
                        timetableType: "5days",
                        semesterName: year + " " + semesterToString(semester),
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
                        name: timetableName,
                        lectures: timetableLectures,
                        semesterObject: {
                            beginning: new Date(currentSemester.beginning),
                            end: new Date(currentSemester.end),
                        },
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
    )
}
