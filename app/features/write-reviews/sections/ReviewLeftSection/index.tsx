import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"
import TakenLectureMobileDropdown from "@/features/write-reviews/sections/ReviewLeftSection/TakenLectureMobileDropdown"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import MySummarySubSection from "./MySummarySubSection"
import TakenLectureSubSection from "./TakenLectureSubSection"

interface reviewLeftSectionType {
    selectedLecture: WriteReviewsSelectedLectureType | null
    setSelectedLecture: (lecture: WriteReviewsSelectedLectureType | null) => void
}

const TakenLecturesWrapper = styled(FlexWrapper)`
    min-height: 0;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const StyledWidget = styled(Widget)`
    width: 288px;
    flex: 0 0 auto;
    padding: 16px;

    ${media.tablet} {
        min-width: 240px;
        flex-shrink: 1;
    }

    ${media.mobile} {
        width: 100%;
        padding: 8px 16px;
        box-shadow: 0 4px 3px -3px rgba(237, 140, 156, 0.8);
    }
`

function ReviewLeftSection({
    selectedLecture,
    setSelectedLecture,
}: reviewLeftSectionType) {
    const isMobile = useIsDevice("mobile")
    const { user, status } = useUserStore()

    const { query: takenLectures } = useAPI("GET", `/users/${user?.id}/lectures`, {
        enabled: status === "success",
    })
    const [selectedLectureIndex, setSelectedLectureIndex] = useState<number[] | null>(
        null,
    )

    useEffect(() => {
        if (takenLectures.isLoading) return
        if (takenLectures.data && takenLectures.data.lecturesWrap.length > 0) {
            const lectureWrap =
                takenLectures.data.lecturesWrap[selectedLectureIndex?.[0] ?? 0]
            const lecture = lectureWrap?.lectures[selectedLectureIndex?.[1] ?? 0]
            if (lectureWrap && lecture) {
                setSelectedLecture({
                    name: lecture.name,
                    lectureId: lecture.lectureId,
                    courseId: lecture.courseId,
                    professors: lecture.professors,
                    year: lectureWrap.year,
                    semester: lectureWrap.semester,
                })
            }
        }
    }, [takenLectures.data])

    return (
        <StyledWidget
            direction={isMobile ? "row" : "column"}
            align={isMobile ? "center" : "stretch"}
            justify={isMobile ? "space-between" : "stretch"}
            gap={12}
            borderRadius={12}
        >
            <MySummarySubSection
                totalLectures={
                    takenLectures.data ? takenLectures.data.totalLecturesCount : 0
                }
                reviewedLectures={
                    takenLectures.data ? takenLectures.data.reviewedLecturesCount : 0
                }
                totalLikes={takenLectures.data ? takenLectures.data.totalLikesCount : 0}
            />

            {!isMobile && <Line height={2} color="Line.divider" />}

            {isMobile ? (
                <TakenLectureMobileDropdown
                    lecturesWrap={takenLectures.data?.lecturesWrap}
                    selectedLecture={selectedLecture}
                    setSelectedLecture={setSelectedLecture}
                    setSelectedLectureIndex={setSelectedLectureIndex}
                />
            ) : (
                <TakenLecturesWrapper direction="column" align="stretch" gap={24}>
                    {takenLectures.data?.lecturesWrap.map((lecturesWrap, idx) => (
                        <TakenLectureSubSection
                            key={idx}
                            lectureWrapIndex={idx}
                            lecturesWrap={lecturesWrap}
                            selectedLecture={selectedLecture}
                            setSelectedLecture={setSelectedLecture}
                            setSelectedLectureIndex={setSelectedLectureIndex}
                            last={idx === takenLectures.data!.lecturesWrap.length - 1}
                        />
                    ))}
                </TakenLecturesWrapper>
            )}
        </StyledWidget>
    )
}

export default ReviewLeftSection
