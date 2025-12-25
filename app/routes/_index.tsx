import styled from "@emotion/styled"

import Footer from "@/common/components/guideline/Footer"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import HallOfFameFeedSection from "@/features/main/sections/HallOfFameFeedSection"
import LikedMajorFeedSection from "@/features/main/sections/LikedMajorFeedSection"
import MobileReviewSlideSection from "@/features/main/sections/MobileReviewSlideSection"
import RecentFeedSection from "@/features/main/sections/RecentFeedSection"
import ReviewSection from "@/features/main/sections/ReviewSection"
import ScheduleFeedSection from "@/features/main/sections/ScheduleFeedSection"
import ScheduleSection from "@/features/main/sections/ScheduleSection"
import SearchSection from "@/features/main/sections/SearchSection"
import TimeTableSection from "@/features/main/sections/TimeTableSection"
import { media } from "@/styles/themes/media"
import useIsDevice from "@/utils/useIsDevice"

const MainWrapper = styled(FlexWrapper)`
    margin-top: 60px;
`

const MainWrapperInner = styled(FlexWrapper)`
    max-width: 1298px;
    flex: 1 1 auto;

    ${media.laptop} {
        width: 100%;
        padding: 0 20px;
    }

    ${media.mobile} {
        padding: 0 10px;
    }
`

const SearchSectionWrapper = styled(FlexWrapper)`
    height: 68px;
    z-index: 20;
`

export default function Home() {
    const isMobile = useIsDevice("mobile")
    const isLaptop = useIsDevice("laptop")

    return (
        <>
            <MainWrapper direction="column" align="center" gap={60}>
                <MainWrapperInner
                    direction="column"
                    align="center"
                    justify="stretch"
                    gap={60}
                >
                    <SearchSectionWrapper
                        direction="row"
                        justify="center"
                        gap={0}
                        style={{ width: "100%" }}
                        padding="0 20px"
                    >
                        <SearchSection />
                    </SearchSectionWrapper>
                    <FlexWrapper
                        direction="column"
                        justify="center"
                        gap={24}
                        style={{ width: "100%" }}
                    >
                        {isLaptop ? (
                            <>
                                <TimeTableSection />
                                <FlexWrapper
                                    direction={isMobile ? "column" : "row"}
                                    align="stretch"
                                    gap={24}
                                    style={{ width: "100%" }}
                                >
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
                                    <MobileReviewSlideSection />
                                </FlexWrapper>
                            </>
                        ) : (
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
                                        style={{ width: "418px" }}
                                    >
                                        <ScheduleSection />
                                        <ScheduleFeedSection />
                                        <ReviewSection />
                                    </FlexWrapper>
                                </FlexWrapper>
                            </FlexWrapper>
                        )}
                        {!isLaptop && (
                            <FlexWrapper direction="row" align="stretch" gap={24}>
                                <RecentFeedSection />
                                <LikedMajorFeedSection />
                                <HallOfFameFeedSection />
                            </FlexWrapper>
                        )}
                    </FlexWrapper>
                </MainWrapperInner>
                <Footer />
            </MainWrapper>
        </>
    )
}
