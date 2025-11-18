import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import { useAPI } from "@/utils/api/useAPI"
import { getLocalStorageItem } from "@/utils/localStorage"

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
    const [takenLectures] = useAPI(
        "GET",
        `/users/${getLocalStorageItem("userId")}/lectures`,
    )
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        if (!firstRender || takenLectures.isLoading) return
        setFirstRender(false)
        if (takenLectures.data && takenLectures.data.lecturesWrap.length > 0) {
            const firstLectureWrap = takenLectures.data.lecturesWrap[0]
            const firstLecture = firstLectureWrap?.lectures[0]
            if (firstLectureWrap && firstLecture) {
                setSelectedLecture({
                    name: firstLecture.name,
                    lectureId: firstLecture.lectureId,
                    courseId: firstLecture.courseId,
                    professors: firstLecture.professors,
                    year: firstLectureWrap.year,
                    semester: firstLectureWrap.semester,
                })
            }
        }
    }, [takenLectures, setSelectedLecture])

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
                        lecturesWrap={lecturesWrap}
                        selectedLecture={selectedLecture}
                        setSelectedLecture={setSelectedLecture}
                        last={idx === takenLectures.data!.lecturesWrap.length - 1}
                    />
                ))}
            </TakenLecturesWrapper>
        </Widget>
    )
}

export default ReviewLeftSection
