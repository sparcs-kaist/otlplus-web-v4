import { memo } from "react"

import Line from "@/common/components/Line"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import type { getAPIResponseType } from "@/utils/api/getAPIType"

import LectureSimpleBlock from "../../components/LectureSimpleBlock"

interface TakenLectureSubSectionProps {
    lectureWrapIndex: number
    lecturesWrap: getAPIResponseType<
        "GET",
        "/users/$userId/lectures"
    >["lecturesWrap"][number]
    selectedLecture: WriteReviewsSelectedLectureType | null
    setSelectedLecture: (lecture: WriteReviewsSelectedLectureType | null) => void
    setSelectedLectureIndex: (index: number[] | null) => void
    last: boolean
}

function isSameLecture(
    lecture: getAPIResponseType<
        "GET",
        "/users/userId/lectures"
    >["lecturesWrap"][number]["lectures"][number],
    lecture2: WriteReviewsSelectedLectureType,
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
    lectureWrapIndex,
    lecturesWrap,
    selectedLecture,
    setSelectedLecture,
    setSelectedLectureIndex,
    last,
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
                            if (selectedLecture) {
                                if (
                                    isSameLecture(
                                        lecture,
                                        selectedLecture,
                                        lecturesWrap.year,
                                        lecturesWrap.semester,
                                    )
                                ) {
                                    setSelectedLecture(null)
                                    setSelectedLectureIndex(null)
                                    return
                                }
                            }
                            const { name, courseId, professors } = lecture
                            const { year, semester } = lecturesWrap
                            setSelectedLecture({
                                name,
                                courseId,
                                lectureId: lecture.lectureId,
                                professors,
                                year,
                                semester,
                            })
                            setSelectedLectureIndex([lectureWrapIndex, lid])
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
                            written={lecture.written}
                        />
                    </FlexWrapper>
                ))}
            </FlexWrapper>
            {!last && <Line height={2} color="Line.divider" />}
        </FlexWrapper>
    )
}

export default memo(TakenLectureSubSection)
