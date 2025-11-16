import React, { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"

import { type GETCourseDetailResponse } from "@/api/courses/$courseId"
import Credits from "@/common/components/Credits"
import LoadingCircle from "@/common/components/LoadingCircle"
import { type ReviewWritingBlockProps } from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

import CourseHistorySubsection from "./CourseHistorySubsection"
import CourseInfoSubsection from "./CourseInfoSubsection"
import CourseReviewSubsection, {
    type CourseReviewSubsectionHandle,
} from "./CourseReviewSubsection"

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
`

const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.divider};
`

interface CourseDetailSectionProps {
    selectedCourseId: number | null
    isMobileModal?: boolean
    onMobileModalClose?: () => void
}

const CourseDetailSection: React.FC<CourseDetailSectionProps> = ({
    selectedCourseId,
    isMobileModal = false,
    onMobileModalClose,
}) => {
    const theme = useTheme()

    const [query] = useAPI("GET", `/courses/${selectedCourseId}`, {
        enabled: selectedCourseId !== null,
    })

    const courseDetail: GETCourseDetailResponse | null = query.data ?? null

    const [selectedProfessorId, setSelectedProfessorId] = useState<number | null>(null)
    const [writableReviewProps, setWritableReviewProps] = useState<
        ReviewWritingBlockProps[]
    >([])

    const reviewSectionRef = useRef<HTMLDivElement>(null)
    const reviewSubsectionRef = useRef<CourseReviewSubsectionHandle>(null)

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget
        const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 48
        if (nearBottom) {
            reviewSubsectionRef.current?.loadMoreReviews()
        }
    }

    useEffect(() => {
        if (courseDetail) {
            const writableReviews: ReviewWritingBlockProps[] = []
            courseDetail.history.forEach((history) => {
                // if (history.myLectureId !== 0) {
                //     const professors =
                //         history.classes.find(
                //             (cls) => cls.lectureId === history.myLectureId,
                //         )?.professors || []
                //     writableReviews.push({
                //         name: courseDetail.name,
                //         lectureId: history.myLectureId,
                //         professors: professors,
                //         year: history.year,
                //         semester: history.semester,
                //     })
                // }
            })
            setWritableReviewProps(writableReviews)
        }
    }, [courseDetail])
    useEffect(() => {
        setSelectedProfessorId(null)
    }, [selectedCourseId])
    useEffect(() => {
        if (selectedProfessorId !== null) {
            reviewSectionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [selectedProfessorId])

    return (
        <CourseDetailSectionInner
            direction="column"
            gap={12}
            align={"center"}
            justify={selectedCourseId ? "start" : "center"}
            onScroll={handleScroll}
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
                                {isMobileModal && <div style={{ width: 20 }}></div>}
                                <Typography type={"Bigger"} color={"Text.default"}>
                                    {courseDetail?.name}
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
                                {courseDetail?.code}
                            </Typography>
                        </CourseTitle>
                        <CourseDetailWrapper direction="column" gap={10} align="center">
                            <CourseInfoSubsection courseDetail={courseDetail} />
                        </CourseDetailWrapper>
                        <Divider />
                        <CourseDetailWrapper direction="column" gap={10}>
                            <CourseHistorySubsection
                                courseDetail={courseDetail}
                                selectedProfessorId={selectedProfessorId}
                                setSelectedProfessorId={setSelectedProfessorId}
                            />
                        </CourseDetailWrapper>
                        <Divider />
                        <CourseDetailWrapper
                            ref={reviewSectionRef}
                            direction="column"
                            gap={10}
                            flex="1 1 auto"
                        >
                            <CourseReviewSubsection
                                selectedCourseId={selectedCourseId}
                                selectedProfessorId={selectedProfessorId}
                                writableReviewProps={writableReviewProps}
                                ref={reviewSubsectionRef}
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
