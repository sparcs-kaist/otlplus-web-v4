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
    gap: 20px;

    &::-webkit-scrollbar {
        height: 0;
    }
`

const CourseHistoryBlock = styled(FlexWrapper)`
    height: 100%;
`

const FoldButton = styled(KeyboardArrowDownIcon)<{ isFolded: boolean }>`
    transform: ${(props) => (props.isFolded ? "rotate(0deg)" : "rotate(180deg)")};
    transition: transform 0.3s ease-in-out;
`

const NoHistoryText = styled(Typography)`
    width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

interface CourseHistorySubsectionProps {
    courseDetail: GETCourseDetailResponse | null
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

    return (
        <>
            <FlexWrapper
                direction="row"
                gap={0}
                justify="space-between"
                style={{ width: "100%" }}
                onClick={() => setIsHistoryFolded((prev) => !prev)}
            >
                <Typography type={"NormalBold"} color={"Text.default"}>
                    {t("dictionary.courseHistory")}
                </Typography>
                <Icon size={20} color={theme.colors.Text.default}>
                    <FoldButton isFolded={isHistoryFolded} />
                </Icon>
            </FlexWrapper>
            <CourseHistory
                ref={historyScroll}
                initial={{ height: isHistoryFolded ? 0 : "auto" }}
                animate={{ height: isHistoryFolded ? 0 : "auto" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {courseDetail?.history.map((history, index) => (
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
                            <FlexWrapper direction="column" gap={4} align={"center"}>
                                {history.classes.map((classData) => (
                                    <CourseHistoryChip
                                        selected={
                                            selectedProfessorId ==
                                            classData.professors[0].id
                                        }
                                        chipIndex={classData.classNo}
                                        chipText={professorName(classData.professors)}
                                        onClick={() => {
                                            if (
                                                selectedProfessorId ===
                                                classData.professors[0].id
                                            ) {
                                                setSelectedProfessorId(null)
                                            } else {
                                                setSelectedProfessorId(
                                                    classData.professors[0].id,
                                                )
                                            }
                                        }}
                                    />
                                ))}
                            </FlexWrapper>
                        )}
                    </CourseHistoryBlock>
                ))}
            </CourseHistory>
        </>
    )
}

export default CourseHistorySubsection
