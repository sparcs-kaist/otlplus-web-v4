import { useTranslation } from "react-i18next"

import type { GETReviewsResponse } from "@/api/reviews"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

interface PopularFeedSubSectionProps {
    reviews: GETReviewsResponse
}

function PopularFeedSubSection({ reviews }: PopularFeedSubSectionProps) {
    const { t } = useTranslation()

    return (
        <FlexWrapper direction="column" align="stretch" gap={12}>
            <FlexWrapper direction="column" align="center" gap={12}>
                <Typography type="NormalBold" color="Text.default">
                    {t("writeReviews.tabs.popularFeed")}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="column" align="stretch" gap={12}>
                {reviews.reviews.map((review) => (
                    <ReviewBlock review={review} key={review.id} />
                ))}
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default PopularFeedSubSection
