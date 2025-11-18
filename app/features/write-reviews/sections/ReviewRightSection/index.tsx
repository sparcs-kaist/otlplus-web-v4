import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import exampleReviews from "@/api/example/Reviews"
import { type TabType } from "@/common/interface/ReviewWriteTabs"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"

import HallOfFameFeedSubSection from "./HallOfFameFeedSubSection"
import LikedReviewsSection from "./LikedReviewsSubSection"
import RecentFeedSubSection from "./RecentFeedSubSection"
import TabsSubSection from "./TabsSubSection"
import WriteReviewsSubSection from "./WriteReviewsSubSection"

interface ReviewRightSectionProps {
    selectedLecture: WriteReviewsSelectedLectureType | null
    setSelectedLecture: (lecture: WriteReviewsSelectedLectureType | null) => void
}

const StyledWidget = styled(Widget)`
    background: transparent;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ReviewRightSubSection = styled(FlexWrapper)`
    background: ${({ theme }) => theme.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
`

function ReviewRightSection({
    selectedLecture,
    setSelectedLecture,
}: ReviewRightSectionProps) {
    const [tab, setTab] = useState<TabType>("write")

    useEffect(() => {
        if (tab !== "write") {
            setSelectedLecture(null)
        }
    }, [tab])
    useEffect(() => {
        if (selectedLecture !== null) {
            setTab("write")
        }
    }, [selectedLecture])

    return (
        <StyledWidget
            width={1248}
            direction="column"
            align="stretch"
            justify="stretch"
            gap={0}
        >
            <TabsSubSection tab={tab} setTab={setTab} />
            <ReviewRightSubSection
                direction="column"
                align="stretch"
                justify="stretch"
                gap={0}
                padding="16px"
            >
                <FlexWrapper
                    direction="column"
                    align="stretch"
                    gap={12}
                    justify="stretch"
                    flex={"1 1 auto"}
                >
                    {(() => {
                        switch (tab) {
                            case "write":
                                return (
                                    <WriteReviewsSubSection
                                        selectedLecture={selectedLecture}
                                    />
                                )
                            case "recentFeed":
                                return <RecentFeedSubSection /> // 띠끈따끈 후기
                            case "hallOfFameFeed":
                                return <HallOfFameFeedSubSection /> // 명예의 전당
                            case "liked":
                                return <LikedReviewsSection />
                            default:
                                return null
                        }
                    })()}
                </FlexWrapper>
            </ReviewRightSubSection>
        </StyledWidget>
    )
}

export default ReviewRightSection
