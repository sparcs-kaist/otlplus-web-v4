import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { Professor } from "@/common/schemas/professor"
import ReviewLeftSection from "@/features/write-reviews/sections/ReviewLeftSection"
import ReviewRightSection from "@/features/write-reviews/sections/ReviewRightSection"
import { trackEvent } from "@/libs/mixpanel"
import { media } from "@/styles/themes/media"
import useIsDevice from "@/utils/useIsDevice"

const WriteReviewWrapperInner = styled(FlexWrapper)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${media.mobile} {
        padding: 0 8px 12px 8px;
    }
`

export type WriteReviewsSelectedLectureType = {
    name: string
    courseId: number
    lectureId: number
    professors: Professor[]
    year: number
    semester: SemesterEnum
}

export default function WriteReviews() {
    const isMobile = useIsDevice("mobile")

    const [selectedLecture, setSelectedLecture] =
        useState<WriteReviewsSelectedLectureType | null>(null)

    useEffect(() => {
        trackEvent("Page View", { page: "Write Reviews" })
    }, [])

    return (
        <FlexWrapper
            direction="column"
            align="center"
            justify="stretch"
            gap={0}
            flex="1 0 0"
        >
            <WriteReviewWrapperInner
                direction={isMobile ? "column" : "row"}
                align="stretch"
                justify="center"
                gap={12}
                flex="1 0 0"
            >
                <ReviewLeftSection
                    selectedLecture={selectedLecture}
                    setSelectedLecture={setSelectedLecture}
                />
                <ReviewRightSection
                    selectedLecture={selectedLecture}
                    setSelectedLecture={setSelectedLecture}
                />
            </WriteReviewWrapperInner>
        </FlexWrapper>
    )
}
