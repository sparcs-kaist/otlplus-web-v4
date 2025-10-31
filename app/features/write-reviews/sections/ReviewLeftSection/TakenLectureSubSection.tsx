import { useEffect, useState } from "react"

import { type GETUserPastLecturesResponse } from "@/api/users/$userId/lectures"
import { type GETWritableReviewsResponse } from "@/api/users/writable-reviews"
import Line from "@/common/components/Line"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import LectureSimpleBlock from "../../components/LectureSimpleBlock"

interface TakenLectureSubSectionProps {
    lecturesWrap: GETUserPastLecturesResponse["lecturesWrap"][number]
    selectedLecture: GETWritableReviewsResponse | null
    setSelectedLecture: (lecture: GETWritableReviewsResponse) => void
}

function isSameLecture(
    lecture: GETUserPastLecturesResponse["lecturesWrap"][number]["lectures"][number],
    lecture2: GETWritableReviewsResponse,
    year: number,
    semester: number,
) {
    return (
        lecture.courseId === lecture2.courseId &&
        year === lecture2.year &&
        semester === lecture2.semester
    )
}

function TakenLectureSubSection({
    lecturesWrap,
    selectedLecture,
    setSelectedLecture,
}: TakenLectureSubSectionProps) {
    return (
        <FlexWrapper direction="column" align="stretch" justify="stretch" gap={10}>
            <Typography type="NormalBold" color="Text.default">
                {lecturesWrap.year} {semesterToString(lecturesWrap.semester)}
            </Typography>
            <FlexWrapper direction="column" align="stretch" justify="stretch" gap={8}>
                {lecturesWrap.lectures.map((lecture, lid) => (
                    <FlexWrapper
                        key={lid}
                        direction="column"
                        gap={0}
                        align="stretch"
                        justify="stretch"
                        onClick={() => {
                            const { name, courseId, professors } = lecture
                            const { year, semester } = lecturesWrap
                            setSelectedLecture({
                                name,
                                courseId,
                                professors,
                                year,
                                semester,
                            })
                        }}
                    >
                        <LectureSimpleBlock
                            key={lid}
                            lecture={lecture}
                            isSelected={
                                selectedLecture
                                    ? isSameLecture(
                                          lecture,
                                          selectedLecture,
                                          lecturesWrap.year,
                                          lecturesWrap.semester,
                                      )
                                    : false
                            }
                        />
                    </FlexWrapper>
                ))}
            </FlexWrapper>
            <Line height={2} color="Line.divider" />
        </FlexWrapper>
    )
}

export default TakenLectureSubSection
