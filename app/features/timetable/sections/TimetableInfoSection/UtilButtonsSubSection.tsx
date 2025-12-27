import { useEffect, useMemo, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Check } from "@mui/icons-material"
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
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"

const UtilButtonsWrapper = styled(FlexWrapper)`
    width: 100%;

    ${media.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${media.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
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
    const isTablet = useIsDevice("tablet")
    const isLaptop = useIsDevice("laptop")

    const { query } = useAPI("GET", "/semesters")

    const [process, setProcess] = useState<
        "idle" | "successCopyImage" | "successDownloadImage" | "successDownloadCalendar"
    >("idle")

    const currentSemester = useMemo(() => {
        if (!query) return null
        return query.data?.semesters.find(
            (sem: { year: number; semester: SemesterEnum }) =>
                sem.year === year && sem.semester === semester,
        )
    }, [query.data, year, semester])

    useEffect(() => {
        if (process.startsWith("success")) {
            const timer = setTimeout(() => {
                setProcess("idle")
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [process])

    return (
        <UtilButtonsWrapper direction={isTablet ? "row" : "column"} gap={8}>
            <ExportButton
                onClick={() => {
                    if (process === "idle") {
                        copyTimetableImageToClipboard({
                            timetableName: timetableName,
                            lectures: timetableLectures,
                            timetableType: "5days",
                            semesterName: year + " " + semesterToString(semester),
                            semesterFontSize: 30,
                            tileFontSize: 20,
                        })
                        setProcess("successCopyImage")
                    }
                }}
            >
                <Icon size={16} color={theme.colors.Highlight.default} onClick={() => {}}>
                    {process == "successCopyImage" ? <Check /> : <ContentCopyIcon />}
                </Icon>
                {!isTablet && <span>이미지로 복사하기</span>}
            </ExportButton>
            <ExportButton
                onClick={() => {
                    if (process === "idle") {
                        downloadTimetableImage({
                            timetableName: timetableName,
                            lectures: timetableLectures,
                            timetableType: "5days",
                            semesterName: year + " " + semesterToString(semester),
                            semesterFontSize: 30,
                            tileFontSize: 20,
                        })
                        setProcess("successDownloadImage")
                    }
                }}
            >
                <Icon size={16} color={theme.colors.Highlight.default} onClick={() => {}}>
                    {process == "successDownloadImage" ? <Check /> : <ImageIcon />}
                </Icon>
                {!isTablet && <span>이미지로 내보내기</span>}
            </ExportButton>
            <ExportButton
                onClick={() => {
                    if (process === "idle") {
                        if (!currentSemester) return
                        downloadTimetableCalendar({
                            name: timetableName,
                            lectures: timetableLectures,
                            semesterObject: {
                                beginning: new Date(currentSemester.beginning),
                                end: new Date(currentSemester.end),
                            },
                        })
                        setProcess("successDownloadCalendar")
                    }
                }}
            >
                <Icon size={16} color={theme.colors.Highlight.default}>
                    {process == "successDownloadCalendar" ? (
                        <Check />
                    ) : (
                        <CalendarMonthIcon />
                    )}
                </Icon>
                {!isTablet && <span>캘린더로 내보내기</span>}
            </ExportButton>
            {!isLaptop && <StyledDivider />}
            <ExportButton onClick={() => console.log("실라버스 모아보기")}>
                <Icon size={16} color={theme.colors.Highlight.default} onClick={() => {}}>
                    <MenuBookIcon />
                </Icon>
                {!isTablet && <span>실라버스 모아보기</span>}
            </ExportButton>
        </UtilButtonsWrapper>
    )
}
