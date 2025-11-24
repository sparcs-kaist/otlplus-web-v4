import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import { useAPI } from "@/utils/api/useAPI"
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

function ReviewLeftSection({
    selectedLecture,
    setSelectedLecture,
}: reviewLeftSectionType) {
    const { user } = useUserStore()

    const { query: takenLectures } = useAPI("GET", `/users/${user?.id}/lectures`, {
        enabled: user !== null,
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
        <Widget
            width={288}
            direction="column"
            align="stretch"
            gap={12}
            borderRadius={12}
            padding="16px"
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

            <Line height={2} color="Line.divider" />

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
        </Widget>
    )
}

export default ReviewLeftSection
