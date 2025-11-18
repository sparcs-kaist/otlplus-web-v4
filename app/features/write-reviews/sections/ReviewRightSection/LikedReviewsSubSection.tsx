import { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"
import { getLocalStorageItem } from "@/utils/localStorage"

function LikedReviewsSection() {
    const { t } = useTranslation()

    const [query, setParams] = useAPI(
        "GET",
        `/users/${getLocalStorageItem("userId")}/reviews/liked`,
    )

    useEffect(() => {
        const userId = getLocalStorageItem("userId")
        if (userId === null) return
        setParams({ userId: parseInt(userId) })
    }, [])

    return (
        <FlexWrapper direction="column" align="stretch" gap={12}>
            <FlexWrapper direction="column" align="center" gap={12}>
                <Typography type="NormalBold" color="Text.default">
                    {t("writeReviews.likedReviews.title")}
                </Typography>
            </FlexWrapper>
            {query.isLoading ? (
                <LoadingCircle />
            ) : (
                <FlexWrapper direction="column" align="stretch" gap={12}>
                    {query.data?.reviews.map((review) => (
                        <ReviewBlock review={review} key={review.id} />
                    ))}
                </FlexWrapper>
            )}
        </FlexWrapper>
    )
}

export default LikedReviewsSection
