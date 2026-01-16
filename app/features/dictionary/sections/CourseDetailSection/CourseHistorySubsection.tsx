import React, { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
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
    touch-action: pan-x;
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

const FoldButton = styled(KeyboardArrowDownIcon)<{ isfolded: string }>`
    transform: ${(props) =>
        props.isfolded === "true" ? "rotate(0deg)" : "rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`

const NoHistoryText = styled(Typography)`
    width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

interface CourseHistorySubsectionProps {
    courseDetail: GETCourseDetailResponse | undefined
    selectedProfessorId: number | null
    setSelectedProfessorId: React.Dispatch<React.SetStateAction<number | null>>
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

    useEffect(() => {
        const el = historyScroll.current
        if (!el) return

        const onWheelNative = (e: WheelEvent) => {
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
            if (delta === 0) return

            const maxLeft = el.scrollWidth - el.clientWidth
            if (maxLeft <= 0) return

            const nextLeft = el.scrollLeft + delta

            const canMoveHorizontally =
                (delta > 0 && el.scrollLeft < maxLeft) || (delta < 0 && el.scrollLeft > 0)

            if (!canMoveHorizontally) return

            e.preventDefault()
            e.stopPropagation()
            el.scrollLeft = Math.min(maxLeft, Math.max(0, nextLeft))
        }

        el.addEventListener("wheel", onWheelNative, { passive: false, capture: true })
        return () => {
            el.removeEventListener("wheel", onWheelNative, { capture: true })
        }
    }, [])

    return (
        <>
            <FlexWrapper
                direction="row"
                gap={0}
                justify="space-between"
                align="center"
                style={{ width: "100%", cursor: "pointer" }}
                onClick={() => setIsHistoryFolded((prev) => !prev)}
            >
                <Typography type={"NormalBold"} color={"Text.default"}>
                    {t("dictionary.courseHistory")}
                </Typography>
                <IconButton onClick={() => {}}>
                    <Icon size={20} color={theme.colors.Text.default} onClick={() => {}}>
                        <FoldButton isfolded={isHistoryFolded.toString()} />
                    </Icon>
                </IconButton>
            </FlexWrapper>
            <CourseHistory
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
