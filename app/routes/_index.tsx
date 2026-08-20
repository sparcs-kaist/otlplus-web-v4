import { Suspense, lazy, useEffect } from "react"

import styled from "@emotion/styled"

import LoadingCircle from "@/common/components/LoadingCircle"
import Footer from "@/common/components/guideline/Footer"
import { ReviewModeEnum } from "@/common/enum/reviewModeEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import SearchSection from "@/features/main/sections/SearchSection"
import { trackEvent } from "@/libs/mixpanel"
import { media } from "@/styles/themes/media"
import useIsDevice from "@/utils/useIsDevice"

const MobileReviewSlideSection = lazy(
    () => import("@/features/main/sections/MobileReviewSlideSection"),
)
const ReviewFeedSection = lazy(() => import("@/features/main/sections/ReviewFeedSection"))
const ReviewSection = lazy(() => import("@/features/main/sections/ReviewSection"))
const ScheduleFeedSection = lazy(
    () => import("@/features/main/sections/ScheduleFeedSection"),
)
const ScheduleSection = lazy(() => import("@/features/main/sections/ScheduleSection"))
const TimeTableSection = lazy(() => import("@/features/main/sections/TimeTableSection"))

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

const SectionFallback = styled(FlexWrapper)`
    min-height: 200px;
    width: 100%;
`

function SectionLoader() {
    return (
        <SectionFallback direction="column" align="center" justify="center" gap={0}>
            <LoadingCircle />
        </SectionFallback>
    )
}

export default function Home() {
    const isMobile = useIsDevice("mobile")
    const isLaptop = useIsDevice("laptop")

    useEffect(() => {
        trackEvent("Page View", { page: "Home" })
    }, [])

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
                        align="stretch"
                        justify="stretch"
                        gap={24}
                        style={{ width: "100%" }}
                    >
                        {isLaptop ? (
                            <>
                                <Suspense fallback={<SectionLoader />}>
                                    <TimeTableSection />
                                </Suspense>
                                <FlexWrapper
                                    direction={isMobile ? "column" : "row"}
                                    align="stretch"
                                    gap={24}
                                    style={{ width: "100%" }}
                                >
                                    <FlexWrapper
                                        direction="column"
                                        align="stretch"
                                        justify="stretch"
                                        gap={24}
                                        flex="1 1 0"
                                    >
                                        <Suspense fallback={<SectionLoader />}>
                                            <ScheduleSection />
                                        </Suspense>
                                        <Suspense fallback={<SectionLoader />}>
                                            <ScheduleFeedSection />
                                        </Suspense>
                                        <Suspense fallback={<SectionLoader />}>
                                            <ReviewSection />
                                        </Suspense>
                                    </FlexWrapper>
                                    <Suspense fallback={<SectionLoader />}>
                                        <MobileReviewSlideSection />
                                    </Suspense>
                                </FlexWrapper>
                            </>
                        ) : (
                            <FlexWrapper direction="row" align="stretch" gap={24}>
                                <FlexWrapper direction="column" align="stretch" gap={0}>
                                    <Suspense fallback={<SectionLoader />}>
                                        <TimeTableSection />
                                    </Suspense>
                                </FlexWrapper>
                                <FlexWrapper direction="column" align="stretch" gap={24}>
                                    <FlexWrapper
                                        direction="column"
                                        align="stretch"
                                        gap={24}
                                        flex="1 1 0"
                                        style={{ width: "418px" }}
                                    >
                                        <Suspense fallback={<SectionLoader />}>
                                            <ScheduleSection />
                                        </Suspense>
                                        <Suspense fallback={<SectionLoader />}>
                                            <ScheduleFeedSection />
                                        </Suspense>
                                        <Suspense fallback={<SectionLoader />}>
                                            <ReviewSection />
                                        </Suspense>
                                    </FlexWrapper>
                                </FlexWrapper>
                            </FlexWrapper>
                        )}
                        {!isLaptop && (
                            <FlexWrapper direction="row" align="stretch" gap={24}>
                                <Suspense fallback={<SectionLoader />}>
                                    <ReviewFeedSection mode={ReviewModeEnum.RECENT} />
                                </Suspense>
                                <Suspense fallback={<SectionLoader />}>
                                    <ReviewFeedSection
                                        mode={ReviewModeEnum.POPULAR_FEED}
                                    />
                                </Suspense>
                                <Suspense fallback={<SectionLoader />}>
                                    <ReviewFeedSection
                                        mode={ReviewModeEnum.HALL_OF_FAME}
                                    />
                                </Suspense>
                            </FlexWrapper>
                        )}
                    </FlexWrapper>
                </MainWrapperInner>
                <Footer />
            </MainWrapper>
        </>
    )
}
