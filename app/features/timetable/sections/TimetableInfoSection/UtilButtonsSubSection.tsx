import { useEffect, useMemo, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Check } from "@mui/icons-material"
import AddBoxIcon from "@mui/icons-material/AddBox"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ImageIcon from "@mui/icons-material/Image"
import * as Sentry from "@sentry/react"
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
import logger from "@/utils/logger"
import useIsDevice from "@/utils/useIsDevice"
import useThemeStore from "@/utils/zustand/useThemeStore"

import { useTimetableUIStore } from "../../store/useTimetableUIStore"

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

    &:hover:not(:disabled) {
        text-decoration: underline;
    }

    &:disabled {
        cursor: default;
    }
`

const ExportIcon = styled(Icon)`
    cursor: inherit;
`

export default function UtilButtonsSubSection({
    timetableLectures,
}: {
    timetableLectures: Lecture[]
}) {
    const { t, i18n } = useTranslation()
    const theme = useTheme()
    const isTablet = useIsDevice("tablet")
    const { displayedTheme } = useThemeStore()

    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const timetableName = useTimetableUIStore((s) => s.currentTimetableName)
    const year = useTimetableUIStore((s) => s.year)
    const semester = useTimetableUIStore((s) => s.semesterEnum)
    const setIsCustomBlockSectionOpen = useTimetableUIStore(
        (s) => s.setIsCustomBlockSectionOpen,
    )

    const { query } = useAPI("GET", "/semesters")

    const [process, setProcess] = useState<
        | "idle"
        | "processing"
        | "successCopyImage"
        | "successDownloadImage"
        | "successDownloadCalendar"
    >("idle")
    const exportInFlightRef = useRef(false)

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

    const imageData = {
        timetableName,
        lectures: timetableLectures,
        timetableType,
        semesterName: year + " " + semesterToString(semester),
        semesterFontSize: 30,
        tileFontSize: 18,
        displayMode: displayedTheme,
        language: i18n.resolvedLanguage == "ko" ? "ko" : "en",
    } as const

    const beginExport = () => {
        if (exportInFlightRef.current || process !== "idle") return false
        exportInFlightRef.current = true
        setProcess("processing")
        return true
    }

    const finishExport = (
        result:
            | "idle"
            | "successCopyImage"
            | "successDownloadImage"
            | "successDownloadCalendar",
    ) => {
        exportInFlightRef.current = false
        setProcess(result)
    }

    const reportExportError = (action: string, error: unknown) => {
        logger.error(`Timetable ${action} failed`, error)
        Sentry.captureException(error, {
            tags: { type: "timetable_export", action },
        })
        finishExport("idle")
    }

    const handleCopyImage = async () => {
        if (!beginExport()) return
        try {
            const copied = await copyTimetableImageToClipboard(imageData)
            finishExport(copied ? "successCopyImage" : "idle")
        } catch (error) {
            reportExportError("image_copy", error)
        }
    }

    const handleDownloadImage = async () => {
        if (!beginExport()) return
        try {
            await downloadTimetableImage(imageData)
            finishExport("successDownloadImage")
        } catch (error) {
            reportExportError("image_download", error)
        }
    }

    const handleDownloadCalendar = () => {
        if (!currentSemester || !beginExport()) return
        try {
            downloadTimetableCalendar({
                name: timetableName,
                lectures: timetableLectures,
                semesterObject: {
                    beginning: new Date(currentSemester.beginning),
                    end: new Date(currentSemester.end),
                },
            })
            finishExport("successDownloadCalendar")
        } catch (error) {
            reportExportError("calendar_download", error)
        }
    }

    return (
        <UtilButtonsWrapper direction={isTablet ? "row" : "column"} gap={8}>
            <ExportButton onClick={handleCopyImage} disabled={process !== "idle"}>
                <ExportIcon size={16} color={theme.colors.Highlight.default}>
                    {process == "successCopyImage" ? <Check /> : <ContentCopyIcon />}
                </ExportIcon>
                {!isTablet && <span>{t("timetable.copyImage")}</span>}
            </ExportButton>
            <ExportButton onClick={handleDownloadImage} disabled={process !== "idle"}>
                <ExportIcon size={16} color={theme.colors.Highlight.default}>
                    {process == "successDownloadImage" ? <Check /> : <ImageIcon />}
                </ExportIcon>
                {!isTablet && <span>{t("timetable.exportImage")}</span>}
            </ExportButton>
            <ExportButton
                onClick={handleDownloadCalendar}
                disabled={process !== "idle" || !currentSemester}
            >
                <ExportIcon size={16} color={theme.colors.Highlight.default}>
                    {process == "successDownloadCalendar" ? (
                        <Check />
                    ) : (
                        <CalendarMonthIcon />
                    )}
                </ExportIcon>
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
