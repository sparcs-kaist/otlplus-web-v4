import { useEffect, useMemo, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Check } from "@mui/icons-material"
import AddBoxIcon from "@mui/icons-material/AddBox"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ImageIcon from "@mui/icons-material/Image"
import { useTranslation } from "react-i18next"

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
import useThemeStore from "@/utils/zustand/useThemeStore"

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

const ExportButton = styled.button<{ disabled?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 0;
    color: ${({ theme, disabled }) =>
        disabled ? theme.colors.Text.disable : theme.colors.Highlight.default};
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
    currentTimetableId,
    setIsCustomBlockSectionOpen,
}: {
    timetableName: string
    timetableLectures: Lecture[]
    year: number
    semester: SemesterEnum
    currentTimetableId: number | null
    setIsCustomBlockSectionOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const { t, i18n } = useTranslation()
    const theme = useTheme()
    const isTablet = useIsDevice("tablet")
    const { displayedTheme } = useThemeStore()

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
    const timetableType = useMemo(() => {
        if (timetableLectures.some((lec) => lec.classes.some((cls) => cls.day >= 5))) {
            return "7days"
        }
        return "5days"
    }, [timetableLectures])

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
                            timetableType: timetableType,
                            semesterName: year + " " + semesterToString(semester),
                            semesterFontSize: 30,
                            tileFontSize: 18,
                            displayMode: displayedTheme,
                            language: i18n.resolvedLanguage == "ko" ? "ko" : "en",
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
                            timetableType: timetableType,
                            semesterName: year + " " + semesterToString(semester),
                            semesterFontSize: 30,
                            tileFontSize: 18,
                            displayMode: displayedTheme,
                            language: i18n.resolvedLanguage == "ko" ? "ko" : "en",
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
                    setIsCustomBlockSectionOpen(true)
                }}
                disabled={currentTimetableId === null}
            >
                <Icon
                    size={16}
                    color={
                        currentTimetableId === null
                            ? theme.colors.Text.disable
                            : theme.colors.Highlight.default
                    }
                    disabled={currentTimetableId === null}
                >
                    <AddBoxIcon />
                </Icon>
                {!isTablet && <span>{t("timetable.addCustomBlock")}</span>}
            </ExportButton>
        </UtilButtonsWrapper>
    )
}
