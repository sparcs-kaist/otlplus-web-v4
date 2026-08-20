import React, { useEffect, useId, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import CourseHistoryChip from "@/features/dictionary/components/CourseHistoryChip"
import professorName from "@/utils/professorName"
import useIsDevice from "@/utils/useIsDevice"

const CourseHistory = styled(motion.div)`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overscroll-behavior: auto;

    &::-webkit-scrollbar {
        height: 7px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.Line.default};
        border-radius: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.Line.dark};
        height: 0;
    }
    -webkit-overflow-scrolling: touch;
`

const CourseHistoryBlock = styled(FlexWrapper)`
    height: 100%;
`

const HistoryToggle = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

const FoldButton = styled(KeyboardArrowDownIcon)<{ isfolded: string }>`
    transform: ${(props) =>
        props.isfolded === "true" ? "rotate(0deg)" : "rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`

const NoHistoryText = styled(Typography)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

interface CourseHistorySubsectionProps {
    readonly courseDetail: GETCourseDetailResponse | undefined
    readonly selectedProfessorId: number | null
    readonly setSelectedProfessorId: (professorId: number | null) => void
}

const CourseHistorySubsection: React.FC<CourseHistorySubsectionProps> = ({
    courseDetail,
    selectedProfessorId,
    setSelectedProfessorId,
}) => {
    const { t } = useTranslation()
    const theme = useTheme()
    const isMobile = useIsDevice("mobile")

    const historyScroll = useRef<HTMLDivElement | null>(null)
    const historyPanelId = useId()

    const [isHistoryFolded, setIsHistoryFolded] = useState<boolean>(true)

    useEffect(() => {
        if (historyScroll.current) {
            historyScroll.current.scrollLeft = historyScroll.current.scrollWidth
        }
    }, [courseDetail])

    useEffect(() => {
        if (isMobile) {
            setIsHistoryFolded(true)
            return
        }
        const shouldFold =
            courseDetail?.history?.some((history) => history.classes.length > 4) ?? false

        setIsHistoryFolded(shouldFold)
    }, [isMobile, courseDetail])

    return (
        <>
            <HistoryToggle
                type="button"
                aria-expanded={!isHistoryFolded}
                aria-controls={historyPanelId}
                onClick={() => setIsHistoryFolded((prev) => !prev)}
            >
                <Typography type="NormalBold" color="Text.default">
                    {t("dictionary.courseHistory")}
                </Typography>
                <Icon size={20} color={theme.colors.Text.default}>
                    <FoldButton isfolded={isHistoryFolded.toString()} />
                </Icon>
            </HistoryToggle>
            <CourseHistory
                id={historyPanelId}
                aria-hidden={isHistoryFolded}
                inert={isHistoryFolded}
                ref={historyScroll}
                initial={{ height: isHistoryFolded ? 0 : "auto" }}
                animate={{ height: isHistoryFolded ? 0 : "auto" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                <div />
                <FlexWrapper direction="row" gap={20} style={{ minWidth: "min-content" }}>
                    {[...(courseDetail?.history || [])]
                        .reverse()
                        .map((history, index) => (
                            <CourseHistoryBlock
                                key={index}
                                direction="column"
                                gap={6}
                                align={"center"}
                            >
                                <Typography type={"Normal"} color={"Text.default"}>
                                    {history.year} {semesterToString(history.semester)}
                                </Typography>
                                {history.classes.length === 0 ? (
                                    <NoHistoryText color={"Text.disable"} type={"Normal"}>
                                        {t("dictionary.notOffered")}
                                    </NoHistoryText>
                                ) : (
                                    <FlexWrapper
                                        direction="column"
                                        gap={4}
                                        align={"stretch"}
                                    >
                                        {history.classes.map((classData, idx) => (
                                            <CourseHistoryChip
                                                key={idx}
                                                selected={
                                                    selectedProfessorId ==
                                                    (classData.professors[0]?.id ?? -1)
                                                }
                                                chipIndex={
                                                    classData.classNo +
                                                    " " +
                                                    classData.subtitle
                                                }
                                                chipText={professorName(
                                                    classData.professors,
                                                )}
                                                onClick={() => {
                                                    if (
                                                        selectedProfessorId ===
                                                        (classData.professors[0]?.id ??
                                                            -1)
                                                    ) {
                                                        setSelectedProfessorId(null)
                                                    } else {
                                                        setSelectedProfessorId(
                                                            classData.professors[0]?.id ??
                                                                null,
                                                        )
                                                    }
                                                }}
                                            />
                                        ))}
                                    </FlexWrapper>
                                )}
                            </CourseHistoryBlock>
                        ))}
                </FlexWrapper>
            </CourseHistory>
        </>
    )
}

export default CourseHistorySubsection
