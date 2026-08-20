import React, { useEffect, useState } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"

import Credits from "@/common/components/Credits"
import LoadingCircle from "@/common/components/LoadingCircle"
import { type ReviewWritingBlockProps } from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

import CourseHistorySubsection from "./CourseHistorySubsection"
import CourseInfoSubsection from "./CourseInfoSubsection"
import CourseReviewSubsection from "./CourseReviewSubsection"

const CourseDetailSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const CourseDetailWrapper = styled(FlexWrapper)`
    width: 100%;
`

const CourseTitle = styled(FlexWrapper)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`

const MobileTitleSpacer = styled.div`
    width: 44px;
    height: 44px;
`

const MobileCloseButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Button.default};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.divider};
`

interface CourseDetailSectionProps {
    readonly selectedCourseId: number | null
    readonly selectedProfessorId: number | null
    readonly setSelectedProfessorId: (professorId: number | null) => void
    readonly isMobileModal?: boolean
    readonly onMobileModalClose?: () => void
}

const CourseDetailSection: React.FC<CourseDetailSectionProps> = ({
    selectedCourseId,
    selectedProfessorId,
    setSelectedProfessorId,
    isMobileModal = false,
    onMobileModalClose,
}) => {
    const { t } = useTranslation()

    const { query } = useAPI("GET", `/courses/${selectedCourseId}`, {
        enabled: selectedCourseId !== null,
    })

    const [writableReviewProps, setWritableReviewProps] = useState<
        ReviewWritingBlockProps[]
    >([])

    useEffect(() => {
        if (query.data) {
            const writableReviews: ReviewWritingBlockProps[] = []
            query.data.history.forEach((history) => {
                if (history.myLectureId !== null) {
                    const professors =
                        history.classes.find(
                            (cls) => cls.lectureId === history.myLectureId,
                        )?.professors || []
                    writableReviews.push({
                        name: query.data.name,
                        lectureId: history.myLectureId,
                        professors: professors,
                        year: history.year,
                        semester: history.semester,
                    })
                }
            })
            setWritableReviewProps(writableReviews)
        }
    }, [query.data])

    return (
        <CourseDetailSectionInner
            direction="column"
            gap={12}
            align={"center"}
            justify={selectedCourseId ? "start" : "center"}
        >
            {selectedCourseId ? (
                query.isLoading ? (
                    <LoadingCircle />
                ) : (
                    <>
                        <CourseTitle
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
                                {isMobileModal && <MobileTitleSpacer />}
                                <Typography type={"Bigger"} color={"Text.default"}>
                                    {query.data?.name}
                                </Typography>
                                {isMobileModal && (
                                    <MobileCloseButton
                                        type="button"
                                        aria-label={t("common.search.close")}
                                        title={t("common.search.close")}
                                        onClick={onMobileModalClose}
                                    >
                                        <Icon size={20}>
                                            <CloseIcon />
                                        </Icon>
                                    </MobileCloseButton>
                                )}
                            </FlexWrapper>
                            <Typography type={"Big"} color={"Text.default"}>
                                {query.data?.code}
                            </Typography>
                        </CourseTitle>
                        <CourseDetailWrapper direction="column" gap={10} align="center">
                            <CourseInfoSubsection courseDetail={query.data} />
                        </CourseDetailWrapper>
                        <Divider />
                        <CourseDetailWrapper direction="column" gap={0}>
                            <CourseHistorySubsection
                                courseDetail={query.data}
                                selectedProfessorId={selectedProfessorId}
                                setSelectedProfessorId={setSelectedProfessorId}
                            />
                        </CourseDetailWrapper>
                        <Divider />
                        <CourseDetailWrapper direction="column" gap={10} flex="1 1 auto">
                            <CourseReviewSubsection
                                selectedCourseId={selectedCourseId}
                                selectedProfessorId={selectedProfessorId}
                                writableReviewProps={writableReviewProps}
                            />
                        </CourseDetailWrapper>
                    </>
                )
            ) : (
                <Credits />
            )}
        </CourseDetailSectionInner>
    )
}

export default CourseDetailSection
