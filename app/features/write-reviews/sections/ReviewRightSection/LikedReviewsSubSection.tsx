import { useEffect } from "react"

import { useTranslation } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

function LikedReviewsSection() {
    const { t } = useTranslation()
    const { user } = useUserStore()

    const [query, setParams] = useAPI("GET", `/users/${user?.id}/reviews/liked`, {
        enabled: user !== null,
    })

    useEffect(() => {
        if (user === null) return
        setParams({ userId: user.id })
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
