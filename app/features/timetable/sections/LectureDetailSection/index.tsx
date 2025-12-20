import React, { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import exampleCourse from "@/api/example/Course"
import Credits from "@/common/components/Credits"
import { type ReviewWritingBlockProps } from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import LectureInfoSubsection from "./LectureInfoSubsection"
import LectureReviewSubsection from "./LectureReviewSubsection"
import type { Lecture } from "@/common/schemas/lecture"
import exampleLectures from "@/api/example/Lectures"
import type { GETReviewsResponse } from "@/api/reviews"
import exampleReviews from "@/api/example/Reviews"
import { useTranslation } from "react-i18next"

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

const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.divider};
`

interface LectureDetailSectionProps {
    selectedLectureId: number | null
    isMobileModal?: boolean
    onMobileModalClose?: () => void
}

const LectureDetailSection: React.FC<LectureDetailSectionProps> = ({
    selectedLectureId,
    isMobileModal = false,
    onMobileModalClose,
}) => {
    const theme = useTheme()
    const { t } = useTranslation()

    const [lectureDetail, setLectureDetail] = useState<Lecture | null>(
        exampleLectures.find((lec) => lec.id === selectedLectureId) || null,
    );

    useEffect(() => {
        const foundLecture = exampleLectures.find(
            (lec) => lec.id === selectedLectureId,
        ) || null;
        setLectureDetail(foundLecture);
    }, [selectedLectureId]);

    const reviewSectionRef = useRef<HTMLDivElement>(null)

    return (
        <LectureDetailSectionInner
            direction="column"
            gap={12}
            align={"center"}
            justify={selectedLectureId ? "start" : "center"}
        >
            {selectedLectureId ? (
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
                                {lectureDetail?.name}
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
                            {lectureDetail?.code}
                        </Typography>
                    </LectureTitle>
                    <FlexWrapper direction="row" gap={8} justify="flex-end" style={{width: '100%'}}>
                        <Typography type={"Normal"} color={"Highlight.default"} style={{cursor: 'pointer'}}>
                            {t('header.dictionary')}
                        </Typography>
                        <Typography type={"Normal"} color={"Highlight.default"} style={{cursor: 'pointer'}}>
                            {t('header.syllabus')}
                        </Typography>
                    </FlexWrapper>
                    <LectureDetailWrapper direction="column" gap={10} align="center">
                        <LectureInfoSubsection selectedLecture={lectureDetail} />
                    </LectureDetailWrapper>
                    <LectureDetailWrapper
                        ref={reviewSectionRef}
                        direction="column"
                        gap={10}
                    >
                        <LectureReviewSubsection
                            selectedLectureId={lectureDetail?.id!}
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
