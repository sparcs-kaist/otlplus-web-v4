import { useEffect, useMemo, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Check } from "@mui/icons-material"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ImageIcon from "@mui/icons-material/Image"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { useTranslation } from "react-i18next"

import CustomBlockModal from "./CustomBlockModal"

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
    const { t } = useTranslation()
    const theme = useTheme()
    const isTablet = useIsDevice("tablet")

    const { query } = useAPI("GET", "/semesters")

    const [process, setProcess] = useState<
        "idle" | "successCopyImage" | "successDownloadImage" | "successDownloadCalendar"
    >("idle")

    const [isCustomBlockModalOpen, setIsCustomBlockModalOpen] = useState(false)

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
                {!isTablet && <span>{t("timetable.copyImage")}</span>}
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
                {!isTablet && <span>{t("timetable.exportImage")}</span>}
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
                {!isTablet && <span>{t("timetable.exportICal")}</span>}
            </ExportButton>
            <ExportButton
                onClick={() => {
                    setIsCustomBlockModalOpen(true)
                }}
            >
                <Icon size={16} color={theme.colors.Highlight.default}>
                    <AddBoxIcon />
                </Icon>
                {!isTablet && <span>{t("timetable.addCustomBlock", "커스텀 블록 추가")}</span>}
            </ExportButton>
            <CustomBlockModal
                isOpen={isCustomBlockModalOpen}
                onClose={() => setIsCustomBlockModalOpen(false)}
                timetableId={timetableLectures.length >= 0 ? (timetableLectures[0]?.id ? 0 : 0) : 0 /* We need timetableId, utilizing existing state */}
            />
        </UtilButtonsWrapper>
    )
}
