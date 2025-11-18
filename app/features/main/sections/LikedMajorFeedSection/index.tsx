import { useEffect } from "react"

import { Trans, useTranslation } from "react-i18next"

import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

import Widget from "../../../../common/primitives/Widget"

function LikedMajorFeedSection() {
    const { i18n } = useTranslation() // 없으면 새로고침 안했을때 언어가 안바껴!

    const [query, setParams] = useAPI("GET", "/reviews")

    useEffect(() => {
        setParams({
            mode: "popular-feed",
            offset: 0,
            limit: 3,
        })
    }, [])

    return (
        <Widget direction="column" gap={20} padding="30px" flex="1 1 0">
            <FlexWrapper direction="row" gap={0}>
                <Trans
                    i18nKey="main.likedMajorFeed.title"
                    components={{
                        bold: (
                            <Typography
                                type="BiggerBold"
                                color="Highlight.default"
                                children={undefined}
                            />
                        ),
                        space: <>&nbsp;</>,
                        normal: (
                            <Typography
                                type="BiggerBold"
                                color="Text.default"
                                children={undefined}
                            />
                        ),
                    }}
                />
            </FlexWrapper>
            <FlexWrapper direction="column" gap={30}>
                {query.data?.reviews.map((review) => (
                    <ReviewBlock key={review.id} review={review} withWrapper={false} />
                ))}
            </FlexWrapper>
        </Widget>
    )
}

export default LikedMajorFeedSection
