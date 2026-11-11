import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import StyledDivider from "@/common/components/StyledDivider"
import ReviewScoreSummary from "@/common/components/reviews/ReviewScoreSummary"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import LectureInfoSubsection from "@/features/timetable/sections/LectureDetailSection/LectureInfoSubsection"
import LectureReviewSubsection from "@/features/timetable/sections/LectureDetailSection/LectureReviewSubsection"

import LectureFriendOverlaps from "./LectureFriendOverlaps"

const Detail = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;

    > * {
        flex-shrink: 0;
    }
`

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.Highlight.default};
    text-decoration: none;
`

const StyledAnchor = styled.a`
    text-decoration: none;
`

const CourseInformation = styled(FlexWrapper)`
    width: 100%;
    padding: 10px 0;
`

export default function FriendLectureDetail({
    lecture,
    year,
    semester,
}: {
    lecture: Lecture | null
    year: number
    semester: number
}) {
    const { t } = useTranslation()

    if (!lecture) {
        return (
            <Detail direction="column" gap={0} justify="center" align="center">
                <Typography type="Normal" color="Text.placeholder">
                    {t("friends.selectLecture")}
                </Typography>
            </Detail>
        )
    }

    const syllabusParams = btoa(
        JSON.stringify({
            syy: String(year),
            smtDivCd: String(semester),
            subjtCd: lecture.code,
            syllabusOpenYn: "0",
        }),
    )

    return (
        <Detail direction="column" gap={12} align="stretch">
            <CourseInformation direction="column" gap={10} align="center">
                <FlexWrapper direction="column" gap={2} align="center">
                    <Typography type="Bigger" color="Text.default">
                        {lecture.name + lecture.subtitle}
                    </Typography>
                    <Typography type="Big" color="Text.default">
                        {lecture.code} {lecture.classNo ? `(${lecture.classNo})` : ""}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper
                    direction="row"
                    gap={8}
                    justify="flex-end"
                    style={{ width: "100%" }}
                >
                    <StyledLink to={`/dictionary?courseId=${lecture.courseId}`}>
                        <Typography type="Normal" color="Highlight.default">
                            {t("header.dictionary")}
                        </Typography>
                    </StyledLink>
                    <StyledAnchor
                        href={`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${syllabusParams}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography type="Normal" color="Highlight.default">
                            {t("header.syllabus")}
                        </Typography>
                    </StyledAnchor>
                </FlexWrapper>
                <LectureInfoSubsection selectedLecture={lecture} metrics="course" />
                <ReviewScoreSummary
                    averageGrade={lecture.averageGrade}
                    averageLoad={lecture.averageLoad}
                    averageSpeech={lecture.averageSpeech}
                    reviewCount={undefined}
                    labels={{
                        grade: t("common.grade"),
                        load: t("common.load"),
                        speech: t("common.speech"),
                    }}
                    fluid
                    compact
                />
            </CourseInformation>
            <StyledDivider />
            <LectureFriendOverlaps lectureId={lecture.id} />
            <StyledDivider />
            <LectureReviewSubsection
                key={lecture.id}
                selectedCourseId={lecture.courseId}
                selectedProfessorId={lecture.professors[0]?.id ?? -1}
                showSummary={false}
                reviewVariant="simple"
            />
        </Detail>
    )
}
