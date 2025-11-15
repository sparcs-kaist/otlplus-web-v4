import { Trans } from "react-i18next"

import type { GETReviewsResponse } from "@/api/reviews"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"

interface ReviewFeedSectionProps {
    reviews: GETReviewsResponse
}

function ReviewFeedSection({ reviews }: ReviewFeedSectionProps) {
    return (
        <Widget direction="column" gap={20} padding="30px" flex="1 1 0">
            <FlexWrapper direction="row" gap={0}>
                <Trans
                    i18nKey="main.reviewFeed.title"
                    components={{
                        bold: (
                            <Typography
                                type="BiggerBold"
                                color="Highlight.default"
                                children={undefined}
                            />
                        ),
                        normal: (
                            <Typography
                                type="BiggerBold"
                                color="Text.default"
                                children={undefined}
                            />
                        ),
                        space: <>&nbsp;</>,
                    }}
                />
            </FlexWrapper>
            <FlexWrapper direction="column" gap={30}>
                {reviews.reviews.map((review) => (
                    <ReviewBlock key={review.id} review={review} withWrapper={false} />
                ))}
            </FlexWrapper>
        </Widget>
    )
}

export default ReviewFeedSection
