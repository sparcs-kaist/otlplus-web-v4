import { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"

import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

function RecentFeedSubSection() {
    const { t } = useTranslation()

    const { query, setParams, data } = useInfiniteAPI("GET", "/reviews", {
        infinites: ["reviews"],
        gcTime: 0,
        initialOffset: 0,
        limit: 10,
    })

    const { ref, inView } = useInView({ threshold: 0 })

    useEffect(() => {
        if (inView && query.hasNextPage && !query.isFetchingNextPage)
            query.fetchNextPage()
    }, [inView, query])

    useEffect(() => {
        setParams({
            mode: "recent",
        })
    }, [])

    return (
        <FlexWrapper direction="column" align="stretch" gap={12}>
            <FlexWrapper direction="column" align="center" gap={12}>
                <Typography type="NormalBold" color="Text.default">
                    {t("writeReviews.tabs.recentFeed")}
                </Typography>
            </FlexWrapper>
            {query.isLoading ? (
                <LoadingCircle />
            ) : (
                <FlexWrapper direction="column" align="stretch" gap={12}>
                    {data?.reviews.map((review) => (
                        <ReviewBlock review={review} key={review.id} />
                    ))}
                    {query.hasNextPage && <LoadingCircle ref={ref} />}
                </FlexWrapper>
            )}
        </FlexWrapper>
    )
}

export default RecentFeedSubSection
