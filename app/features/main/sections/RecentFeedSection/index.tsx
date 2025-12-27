import { useEffect } from "react"

import { useTheme } from "@emotion/react"
import { Trans, useTranslation } from "react-i18next"

import StyledDivider from "@/common/components/StyledDivider"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import { useAPI } from "@/utils/api/useAPI"

function RecentFeedSection() {
    const {} = useTranslation() // 없으면 새로고침 안했을때 언어가 안바껴!
    const theme = useTheme()

    const { query, setParams } = useAPI("GET", "/reviews", { gcTime: 0 })

    useEffect(() => {
        setParams({
            mode: "recent",
            offset: 0,
            limit: 3,
        })
    }, [])

    return (
        <Widget direction="column" gap={20} padding="30px" flex="1 1 0">
            <FlexWrapper direction="row" gap={0}>
                <Trans
                    i18nKey="main.recentFeed.title"
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
            <FlexWrapper direction="column" gap={30} style={{ width: "100%" }}>
                {query.data?.reviews.map((review, idx) => (
                    <>
                        <ReviewBlock
                            key={review.id}
                            review={review}
                            withWrapper={false}
                        />
                        {idx !== (query.data?.reviews.length ?? 1) - 1 && (
                            <StyledDivider color={theme.colors.Line.dark} />
                        )}
                    </>
                ))}
            </FlexWrapper>
        </Widget>
    )
}

export default RecentFeedSection
