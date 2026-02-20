import React, { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import { useSearchParams } from "react-router"

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
    const [searchParams, setSearchParams] = useSearchParams()

    const { query } = useAPI("GET", `/courses/${selectedCourseId}`, {
        enabled: selectedCourseId !== null,
    })

    const [selectedProfessorId, setSelectedProfessorId] = useState<number | null>(null)
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

    useEffect(() => {
        setSelectedProfessorId(null)
        const professorId = searchParams.get("professorId")
        if (professorId) {
            const professorIdNumber = parseInt(professorId, 10)
            if (!isNaN(professorIdNumber)) {
                setSelectedProfessorId(professorIdNumber)
                setSearchParams({})
            } else {
                setSelectedProfessorId(null)
            }
        }
    }, [selectedCourseId])

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
                                {isMobileModal && <div style={{ width: 20 }}></div>}
                                <Typography type={"Bigger"} color={"Text.default"}>
                                    {query.data?.name}
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
