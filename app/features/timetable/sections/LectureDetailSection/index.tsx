import React, { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import exampleCourse from "@/api/example/Course"
import exampleLectures from "@/api/example/Lectures"
import exampleReviews from "@/api/example/Reviews"
import type { GETReviewsResponse } from "@/api/reviews"
import Credits from "@/common/components/Credits"
import { type ReviewWritingBlockProps } from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"

import LectureInfoSubsection from "./LectureInfoSubsection"
import LectureReviewSubsection from "./LectureReviewSubsection"

const LectureDetailSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const LectureDetailWrapper = styled(FlexWrapper)`
    width: 100%;
`

const LectureTitle = styled(FlexWrapper)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`

interface LectureDetailSectionProps {
    selectedLecture: Lecture | undefined | null
    isMobileModal?: boolean
    onMobileModalClose?: () => void
}

const LectureDetailSection: React.FC<LectureDetailSectionProps> = ({
    selectedLecture,
    isMobileModal = false,
    onMobileModalClose,
}) => {
    const theme = useTheme()
    const { t } = useTranslation()

    const reviewSectionRef = useRef<HTMLDivElement>(null)

    return (
        <LectureDetailSectionInner
            direction="column"
            gap={12}
            align={"center"}
            justify={selectedLecture ? "start" : "center"}
        >
            {selectedLecture ? (
                <>
                    <LectureTitle
                        direction="column"
                        gap={2}
                        align={"center"}
                        justify={"center"}
                    >
                        <FlexWrapper
                            direction="row"
                            align="center"
                            gap={8}
                            justify={isMobileModal ? "space-between" : "center"}
                            style={{ width: "100%" }}
                        >
                            {isMobileModal && <div style={{ width: 20 }}></div>}
                            <Typography type={"Bigger"} color={"Text.default"}>
                                {selectedLecture.name}
                            </Typography>
                            {isMobileModal && (
                                <Icon
                                    size={20}
                                    onClick={onMobileModalClose}
                                    color={theme.colors.Text.default}
                                >
                                    <CloseIcon />
                                </Icon>
                            )}
                        </FlexWrapper>
                        <Typography type={"Big"} color={"Text.default"}>
                            {selectedLecture.code}
                        </Typography>
                    </LectureTitle>
                    <FlexWrapper
                        direction="row"
                        gap={8}
                        justify="flex-end"
                        style={{ width: "100%" }}
                    >
                        <Typography
                            type={"Normal"}
                            color={"Highlight.default"}
                            style={{ cursor: "pointer" }}
                        >
                            {t("header.dictionary")}
                        </Typography>
                        <Typography
                            type={"Normal"}
                            color={"Highlight.default"}
                            style={{ cursor: "pointer" }}
                        >
                            {t("header.syllabus")}
                        </Typography>
                    </FlexWrapper>
                    <LectureDetailWrapper direction="column" gap={10} align="center">
                        <LectureInfoSubsection selectedLecture={selectedLecture} />
                    </LectureDetailWrapper>
                    <LectureDetailWrapper
                        ref={reviewSectionRef}
                        direction="column"
                        gap={10}
                    >
                        <LectureReviewSubsection
                            selectedCourseId={selectedLecture.courseId}
                            selectedProfessorId={selectedLecture.professors[0]?.id ?? -1}
                        />
                    </LectureDetailWrapper>
                </>
            ) : (
                <Credits />
            )}
        </LectureDetailSectionInner>
    )
}

export default LectureDetailSection
