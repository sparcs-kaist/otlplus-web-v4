import styled from "@emotion/styled"

import Footer from "@/common/components/guideline/Footer"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import HallOfFameFeedSection from "@/features/main/sections/HallOfFameFeedSection"
import LikedMajorFeedSection from "@/features/main/sections/LikedMajorFeedSection"
import RecentFeedSection from "@/features/main/sections/RecentFeedSection"
import ReviewSection from "@/features/main/sections/ReviewSection"
import ScheduleFeedSection from "@/features/main/sections/ScheduleFeedSection"
import ScheduleSection from "@/features/main/sections/ScheduleSection"
import SearchSection from "@/features/main/sections/SearchSection"
import TimeTableSection from "@/features/main/sections/TimeTableSection"

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
                                <TimeTableSection />
                            </FlexWrapper>
                            <FlexWrapper direction="column" align="stretch" gap={24}>
                                <FlexWrapper
                                    direction="column"
                                    align="stretch"
                                    gap={24}
                                    flex="1 1 0"
                                >
                                    <ScheduleSection />
                                    <ScheduleFeedSection />
                                    <ReviewSection />
                                </FlexWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper direction="row" align="stretch" gap={24}>
                            <RecentFeedSection />
                            <LikedMajorFeedSection />
                            <HallOfFameFeedSection />
                        </FlexWrapper>
                    </FlexWrapper>
                </MainWrapperInner>
                <Footer />
            </MainWrapper>
        </>
    )
}
