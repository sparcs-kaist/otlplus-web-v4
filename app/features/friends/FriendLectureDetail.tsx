import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import LectureInfoSubsection from "@/features/timetable/sections/LectureDetailSection/LectureInfoSubsection"

import LectureFriendOverlaps from "./LectureFriendOverlaps"

const Detail = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
`

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.Highlight.default};
    text-decoration: none;
`

export default function FriendLectureDetail({ lecture }: { lecture: Lecture | null }) {
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

    return (
        <Detail direction="column" gap={16} align="stretch">
            <FlexWrapper direction="column" gap={4} align="center">
                <Typography type="Bigger" color="Text.default">
                    {lecture.name + lecture.subtitle}
                </Typography>
                <Typography type="Big" color="Text.default">
                    {lecture.code} {lecture.classNo ? `(${lecture.classNo})` : ""}
                </Typography>
                <StyledLink to={`/dictionary?courseId=${lecture.courseId}`}>
                    {t("header.dictionary")}
                </StyledLink>
            </FlexWrapper>
            <LectureFriendOverlaps lectureId={lecture.id} />
            <LectureInfoSubsection selectedLecture={lecture} />
        </Detail>
    )
}
