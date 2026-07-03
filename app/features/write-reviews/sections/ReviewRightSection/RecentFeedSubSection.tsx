import { useEffect } from "react"

import { useTranslation } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import QueryState from "@/common/components/QueryState"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"
import { useInfiniteScroll } from "@/utils/api/useInfiniteScroll"

function RecentFeedSubSection() {
    const { t } = useTranslation()

    const { query, setParams, data } = useInfiniteAPI("GET", "/reviews", {
        infinites: ["reviews"],
        gcTime: 0,
        initialOffset: 0,
        limit: 10,
    })

    const { ref } = useInfiniteScroll(query)

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
            <QueryState query={query}>
                <FlexWrapper direction="column" align="stretch" gap={12}>
                    {data?.reviews.map((review) => (
                        <ReviewBlock review={review} key={review.id} />
                    ))}
                    {query.hasNextPage && <LoadingCircle ref={ref} />}
                </FlexWrapper>
            </QueryState>
        </FlexWrapper>
    )
}

export default RecentFeedSubSection
