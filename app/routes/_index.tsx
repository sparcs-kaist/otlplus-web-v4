import styled from "@emotion/styled"

import exampleReviews from "@/api/example/Reviews"
import exampleScheduleFeed from "@/api/example/ScheduleFeed"
import User from "@/api/example/UserInfo"
import Footer from "@/common/components/guideline/Footer"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import AdFeedSection from "@/features/main/sections/AdFeedSection"
import HallOfFameFeedSection from "@/features/main/sections/HallOfFameFeedSection"
import LikedMajorFeedSection from "@/features/main/sections/LikedMajorFeedSection"
import PopularFeedSection from "@/features/main/sections/PopularFeedSection"
import ReviewSection from "@/features/main/sections/ReviewSection"
import ScheduleFeedSection from "@/features/main/sections/ScheduleFeedSection"
import ScheduleSection from "@/features/main/sections/ScheduleSection"
import SearchSection from "@/features/main/sections/SearchSection"
import TimeTableSection from "@/features/main/sections/TimeTableSection"
import { useAPI } from "@/utils/api/useAPI"

const MainWrapper = styled(FlexWrapper)`
    margin-top: 60px;
`

const MainWrapperInner = styled(FlexWrapper)`
    width: 1298px;
`

const SearchSectionWrapper = styled(FlexWrapper)`
    height: 68px;
    z-index: 2;
`

export default function Home() {
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
                    <FlexWrapper direction="column" justify="center" gap={24}>
                        <FlexWrapper direction="row" align="stretch" gap={24}>
                            <FlexWrapper direction="column" align="stretch" gap={0}>
                                <TimeTableSection user={User} />
                            </FlexWrapper>
                            <FlexWrapper direction="column" align="stretch" gap={24}>
                                <FlexWrapper
                                    direction="column"
                                    align="stretch"
                                    gap={24}
                                    flex="1 1 0"
                                >
                                    <ScheduleSection
                                        content="2025 봄 수강신청 마감"
                                        dueDate={new Date("2025-04-11")}
                                    />
                                    <ScheduleFeedSection
                                        schedules={exampleScheduleFeed}
                                    />
                                    <ReviewSection
                                        lectureId={3678}
                                        lectureName="이산구조"
                                    />
                                </FlexWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper direction="row" align="stretch" gap={24}>
                            <PopularFeedSection reviews={exampleReviews} />
                            <LikedMajorFeedSection reviews={exampleReviews} />
                            <HallOfFameFeedSection reviews={exampleReviews} />
                        </FlexWrapper>
                    </FlexWrapper>
                </MainWrapperInner>
                <Footer />
            </MainWrapper>
        </>
    )
}
