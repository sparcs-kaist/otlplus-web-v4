import React, { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import exampleReviews from "@/api/example/Reviews"
import type { GETReviewsResponse } from "@/api/reviews"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewWritingBlock, {
    type ReviewWritingBlockProps,
} from "@/common/components/reviews/ReviewWritingBlock"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import CourseReviewLanguageChip from "@/features/dictionary/components/CourseReviewLanguageChip"

const NumberWrapper = styled(FlexWrapper)`
    width: 300px;
    padding: 10px;
`

const NumberContent = styled(FlexWrapper)`
    flex: 1 0 0;
`

interface CourseReviewSubsectionProps {
    selectedProfessorId: number | null
    writableReviewProps: ReviewWritingBlockProps[]
}

const CourseReviewSubsection: React.FC<CourseReviewSubsectionProps> = ({
    selectedProfessorId,
    writableReviewProps,
}) => {
    const { t } = useTranslation()

    const [reviews, setReviews] = useState<GETReviewsResponse | null>(exampleReviews)
    const [reviewLanguage, setReviewLanguage] = useState("all")

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
                writableReviewProps.map((props) => <ReviewWritingBlock {...props} />)}
            {reviews?.reviews.map((review) => (
                <ReviewBlock review={review} likeReview={() => {}} key={review.id} />
            ))}
        </>
    )
}

export default CourseReviewSubsection
