import React, { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import exampleReviews from "@/api/example/Reviews"
import type { GETReviewsResponse } from "@/api/reviews"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const NumberWrapper = styled(FlexWrapper)`
    width: 300px;
    padding: 10px;
`

const NumberContent = styled(FlexWrapper)`
    flex: 1 0 0;
`;

const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.divider};
`

interface LectureReviewSubsectionProps {
    selectedLectureId: number | null
}

const LectureReviewSubsection: React.FC<LectureReviewSubsectionProps> = ({
    selectedLectureId,
}) => {
    const { t } = useTranslation()

    const [reviews, setReviews] = useState<GETReviewsResponse | null>(exampleReviews)
    const [reviewLanguage, setReviewLanguage] = useState("all")

    return (
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
            <Divider />

            {reviews?.reviews.map((review) => (
                <ReviewBlock review={review} likeReview={() => {}} key={review.id} isDictionary={false}/>
            ))}
        </>
    )
}

export default LectureReviewSubsection
