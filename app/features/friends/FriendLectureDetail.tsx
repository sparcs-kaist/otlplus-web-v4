import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Friend } from "@/common/schemas/friend"
import type { Lecture } from "@/common/schemas/lecture"
import LectureInfoSubsection from "@/features/timetable/sections/LectureDetailSection/LectureInfoSubsection"
import { useAPI } from "@/utils/api/useAPI"

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

const Chips = styled(FlexWrapper)`
    flex-wrap: wrap;
`

const Chip = styled.span`
    padding: 5px 10px;
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.Highlight.default};
    background: ${({ theme }) => theme.colors.Background.Button.highlight};
    font-size: 13px;
`

function FriendGroup({ title, friends }: { title: string; friends: Friend[] }) {
    const { t } = useTranslation()
    return (
        <FlexWrapper direction="column" gap={8} align="stretch">
            <Typography type="NormalBold" color="Text.default">
                {title}
            </Typography>
            {friends.length ? (
                <Chips direction="row" gap={6}>
                    {friends.map((friend) => (
                        <Chip key={friend.id}>{friend.name}</Chip>
                    ))}
                </Chips>
            ) : (
                <Typography type="Small" color="Text.disable">
                    {t("friends.nobody")}
                </Typography>
            )}
        </FlexWrapper>
    )
}

export default function FriendLectureDetail({ lecture }: { lecture: Lecture | null }) {
    const { t } = useTranslation()
    const { query } = useAPI("GET", `/friends/lectures/${lecture?.id ?? 0}/overlaps`, {
        enabled: lecture !== null,
        staleTime: 0,
        gcTime: 0,
    })

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
            <LectureInfoSubsection selectedLecture={lecture} />
            {query.isError && (
                <Typography type="Small" color="Highlight.default" role="alert">
                    {t("friends.loadError")}
                </Typography>
            )}
            <FriendGroup
                title={t("friends.sameLecture")}
                friends={query.isError ? [] : (query.data?.sameLecture ?? [])}
            />
            <FriendGroup
                title={t("friends.sameCourseDifferentSection")}
                friends={
                    query.isError ? [] : (query.data?.sameCourseDifferentSection ?? [])
                }
            />
            <FriendGroup
                title={t("friends.previousSemesterSameProfessor")}
                friends={
                    query.isError ? [] : (query.data?.previousSemesterSameProfessor ?? [])
                }
            />
        </Detail>
    )
}
