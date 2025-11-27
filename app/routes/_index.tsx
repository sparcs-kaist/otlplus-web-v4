import styled from "@emotion/styled"
import exampleReviews from "@/api/example/Reviews"
import exampleScheduleFeed from "@/api/example/ScheduleFeed"
import User from "@/api/example/UserInfo"
import Footer from "@/common/components/guideline/Footer"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import AdFeedSection from "@/features/main/sections/AdFeedSection"
import PopularFeedSection from "@/features/main/sections/PopularFeedSection"
import ReviewFeedSection from "@/features/main/sections/ReviewFeedSection"
import ReviewSection from "@/features/main/sections/ReviewSection"
import ScheduleFeedSection from "@/features/main/sections/ScheduleFeedSection"
import ScheduleSection from "@/features/main/sections/ScheduleSection"
import SearchSection from "@/features/main/sections/SearchSection"
import TimeTableSection from "@/features/main/sections/TimeTableSection"

import { media } from "@/styles/themes/media"

const MainWrapper = styled(FlexWrapper)`
    margin-top: 60px;
`

const MainWrapperInner = styled(FlexWrapper)`
    width: 100%;
    max-width: 1298px;
    padding-inline: 24px;
    ${media.mobile} {
        padding-inline: 16px;
    }
`

const ContentWrapper = styled(FlexWrapper)`
    width: 100%;
`

const TopSectionWrapper = styled(FlexWrapper)`
    width: 100%;
    ${media.mobile} {
        flex-direction: column;
    }
`

const SideSectionWrapper = styled(FlexWrapper)`
    ${media.mobile} {
        width: 100%;
    }
`

const BottomSectionWrapper = styled(FlexWrapper)`
    width: 100%;
    ${media.mobile} {
        flex-direction: column;
    }
`

const SearchSectionWrapper = styled(FlexWrapper)`
    height: 68px;
    z-index: 2;
`

export default function Home() {
    function likeReview(reviewId: number) {
        alert("like review " + reviewId)
    }

    return (
        <>
            <MainWrapper direction="column" align="center" gap={240}>
                <MainWrapperInner
                    direction="column"
                    align="center"
                    justify="stretch"
                    gap={60}
                >
                    <SearchSectionWrapper direction="row" justify="center" gap={0}>
                        <SearchSection />
                    </SearchSectionWrapper>
                    <ContentWrapper direction="column" justify="center" gap={24}>
                        <TopSectionWrapper direction="row" align="stretch" gap={24}>
                            <FlexWrapper direction="column" align="stretch" gap={0}>
                                <TimeTableSection user={User} />
                            </FlexWrapper>
                            <SideSectionWrapper direction="column" align="stretch" gap={24}>
                                <FlexWrapper direction="column" align="stretch" gap={24}>
                                    <ScheduleSection
                                        content="2025 봄 수강신청 마감"
                                        dueDate={new Date("2025-04-11")}
                                    />
                                    <ReviewSection
                                        lectureId={3678}
                                        lectureName="이산구조"
                                    />
                                </FlexWrapper>
                                <FlexWrapper
                                    direction="column"
                                    align="stretch"
                                    gap={24}
                                    flex="1 1 auto"
                                >
                                    <AdFeedSection src="/ad.png" />
                                    <AdFeedSection src="/ad.png" />
                                </FlexWrapper>
                            </SideSectionWrapper>
                        </TopSectionWrapper>
                        <BottomSectionWrapper direction="row" align="stretch" gap={24}>
                            <ReviewFeedSection
                                reviews={exampleReviews}
                                likeReview={likeReview}
                            />
                            <PopularFeedSection
                                reviews={exampleReviews}
                                likeReview={likeReview}
                            />
                            <ScheduleFeedSection schedules={exampleScheduleFeed} />
                        </BottomSectionWrapper>
                    </ContentWrapper>
                </MainWrapperInner>
                <Footer />
            </MainWrapper>
        </>
    )
}
