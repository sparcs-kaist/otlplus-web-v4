import React, { useEffect, useImperativeHandle, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import exampleReviews from "@/api/example/Reviews"
import { type GETReviewsResponse } from "@/api/reviews"
import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewWritingBlock, {
    type ReviewWritingBlockProps,
} from "@/common/components/reviews/ReviewWritingBlock"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import CourseReviewLanguageChip from "@/features/dictionary/components/CourseReviewLanguageChip"
import { useAPI } from "@/utils/api/useAPI"

const NumberWrapper = styled(FlexWrapper)`
    width: 300px;
    padding: 10px;
`

const NumberContent = styled(FlexWrapper)`
    flex: 1 0 0;
`

interface CourseReviewSubsectionProps {
    selectedCourseId: number | null
    selectedProfessorId: number | null
    writableReviewProps: ReviewWritingBlockProps[]
    ref?: React.Ref<CourseReviewSubsectionHandle>
}

export type CourseReviewSubsectionHandle = {
    loadMoreReviews: () => void
}

const LIMIT = 100

const CourseReviewSubsection: React.FC<CourseReviewSubsectionProps> = ({
    selectedCourseId,
    selectedProfessorId,
    writableReviewProps,
    ref,
}) => {
    const { t } = useTranslation()

    const [reviews, setReviews] = useState<GETReviewsResponse | null>(null)
    const [reviewLanguage, setReviewLanguage] = useState("all")
    const [enabled, setEnabled] = useState(false)

    const [query, setParams] = useAPI("GET", "/reviews", {
        enabled: enabled,
    })

    const loadMoreReviews = () => {
        if (!enabled) return
        if (query.isLoading) return
        setParams((prevState) => ({
            ...prevState,
            offset: prevState.offset + LIMIT,
        }))
    }

    useImperativeHandle(ref, () => ({ loadMoreReviews }))

    useEffect(() => {
        setParams({
            mode: "default",
            courseId: selectedCourseId || undefined,
            professorId: selectedProfessorId || undefined,
            limit: LIMIT,
            offset: 0,
        })
    }, [])

    useEffect(() => {
        setReviews(null)
        setParams((prevState) => {
            if (selectedProfessorId === null || selectedCourseId === null) {
                return { ...prevState, offset: 0 }
            } else {
                return { ...prevState, offset: 0, professorId: selectedProfessorId }
            }
        })
        setEnabled(selectedCourseId !== null)
    }, [selectedProfessorId, selectedCourseId])

    useEffect(() => {
        if (query.data !== undefined) {
            setReviews((prevState) => {
                if (prevState == null) return query.data
                return {
                    averageGrade: query.data.averageGrade,
                    averageLoad: query.data.averageLoad,
                    averageSpeech: query.data.averageSpeech,
                    myReviewId: [],
                    reviews: [...prevState.reviews, ...query.data.reviews],
                }
            })
            if (query.data.reviews.length < LIMIT) {
                setEnabled(false)
            }
        }
    }, [query.data])

    return (
        <>
            <Typography type={"NormalBold"} color={"Text.default"}>
                {t("dictionary.review")}
            </Typography>
            <FlexWrapper direction="column" gap={6}>
                <Typography type={"NormalBold"} color={"Text.default"}>
                    {t("dictionary.reviewLanguage")}
                </Typography>
                <FlexWrapper direction="row" gap={6}>
                    {["all", "english"].map((lang) => (
                        <CourseReviewLanguageChip
                            key={lang}
                            selected={reviewLanguage == lang}
                            chipText={t(`dictionary.reviewLanguageOptions.${lang}`)}
                            onClick={() => setReviewLanguage(lang)}
                        />
                    ))}
                </FlexWrapper>
            </FlexWrapper>
            {reviews === null && query.isLoading ? (
                <LoadingCircle />
            ) : (
                <>
                    <FlexWrapper
                        direction={"row"}
                        gap={0}
                        justify="center"
                        align="center"
                        style={{ width: "100%" }}
                    >
                        <NumberWrapper
                            direction="row"
                            gap={0}
                            justify={"space-between"}
                            align={"center"}
                        >
                            {[
                                [
                                    getAverageScoreLabel(
                                        reviews?.averageGrade,
                                        reviews?.reviews.length,
                                    ),
                                    t("common.grade"),
                                ],
                                [
                                    getAverageScoreLabel(
                                        reviews?.averageLoad,
                                        reviews?.reviews.length,
                                    ),
                                    t("common.load"),
                                ],
                                [
                                    getAverageScoreLabel(
                                        reviews?.averageSpeech,
                                        reviews?.reviews.length,
                                    ),
                                    t("common.speech"),
                                ],
                            ].map(([value, label], index) => (
                                <NumberContent
                                    key={index}
                                    direction="column"
                                    gap={0}
                                    align={"center"}
                                >
                                    <Typography type={"Bigger"} color={"Text.default"}>
                                        {value}
                                    </Typography>
                                    <Typography type={"Smaller"} color={"Text.default"}>
                                        {label}
                                    </Typography>
                                </NumberContent>
                            ))}
                        </NumberWrapper>
                    </FlexWrapper>
                    {exampleReviews.reviews.length > 0 &&
                        writableReviewProps.map((props) => (
                            <ReviewWritingBlock {...props} />
                        ))}
                    {reviews?.reviews.map((review) => {
                        if (
                            reviewLanguage === "english" &&
                            !/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(review.content)
                        ) {
                            return null
                        } else {
                            return (
                                <ReviewBlock
                                    review={review}
                                    key={review.id}
                                    linkToDictionary={false}
                                />
                            )
                        }
                    })}
                </>
            )}
        </>
    )
}

export default CourseReviewSubsection
