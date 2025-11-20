import { useState } from "react"

import styled from "@emotion/styled"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { Professor } from "@/common/schemas/professor"
import ReviewLeftSection from "@/features/write-reviews/sections/ReviewLeftSection"
import ReviewRightSection from "@/features/write-reviews/sections/ReviewRightSection"

const WriteReviewWrapper = FlexWrapper

const WriteReviewWrapperInner = styled(FlexWrapper)`
    overflow: auto;
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
    const [selectedLecture, setSelectedLecture] =
        useState<WriteReviewsSelectedLectureType | null>(null)

    return (
        <WriteReviewWrapper
            direction="column"
            align="center"
            justify="stretch"
            gap={0}
            flex="1 0 0"
        >
            <WriteReviewWrapperInner
                direction="row"
                align="stretch"
                justify="center"
                gap={12}
                padding="0px 0px 15px 0px"
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
        </WriteReviewWrapper>
    )
}
