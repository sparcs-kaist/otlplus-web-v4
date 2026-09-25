import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { OverlapFriend } from "@/common/schemas/friend"
import { useAPI } from "@/utils/api/useAPI"

const Groups = styled(FlexWrapper)`
    width: 100%;
    flex-shrink: 0;
`

const Chips = styled(FlexWrapper)`
    flex-wrap: wrap;
`

const Chip = styled.button`
    min-height: 28px;
    padding: 5px 16px;
    border: 0;
    border-radius: 16px;
    max-width: 100%;
    overflow-wrap: anywhere;
    background: ${({ theme }) => theme.colors.Background.Block.default};
    font: inherit;
    text-align: left;
    text-decoration: none;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

type ClassifiedFriend = OverlapFriend & { description: string }

function FriendGroup({ title, friends }: { title: string; friends: ClassifiedFriend[] }) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    return (
        <FlexWrapper direction="column" gap={10} align="stretch">
            <Typography type="NormalBold" color="Text.default">
                {title}
            </Typography>
            {friends.length ? (
                <Chips direction="row" gap={6}>
                    {friends.map((friend) => {
                        const params = new URLSearchParams({
                            friendId: String(friend.id),
                            year: String(friend.timetable.year),
                            semester: String(friend.timetable.semester),
                        })
                        if (friend.timetable.id !== null)
                            params.set("timetableId", String(friend.timetable.id))
                        return (
                            <Chip
                                key={friend.id}
                                type="button"
                                title={friend.description}
                                aria-description={friend.description}
                                onClick={() => navigate(`/friends?${params}`)}
                            >
                                <Typography type="Normal" color="Text.light">
                                    {friend.name}
                                </Typography>
                            </Chip>
                        )
                    })}
                </Chips>
            ) : (
                <Typography type="Small" color="Text.disable">
                    {t("friends.nobody")}
                </Typography>
            )}
        </FlexWrapper>
    )
}

export default function LectureFriendOverlaps({ lectureId }: { lectureId: number }) {
    const { t } = useTranslation()
    const { query } = useAPI("GET", `/friends/lectures/${lectureId}/overlaps`, {
        staleTime: 0,
        gcTime: 0,
    })
    const currentFriends = new Map<number, ClassifiedFriend>()
    for (const [description, friends] of [
        [t("friends.sameLecture"), query.data?.sameLecture ?? []],
        [
            t("friends.sameCourseDifferentSection"),
            query.data?.sameCourseDifferentSection ?? [],
        ],
    ] as const) {
        for (const friend of friends) {
            if (!currentFriends.has(friend.id)) {
                currentFriends.set(friend.id, { ...friend, description })
            }
        }
    }

    return (
        <Groups direction="column" gap={24} align="stretch">
            {query.isPending ? (
                <Typography type="Small" color="Text.placeholder" role="status">
                    {t("friends.loadingOverlaps")}
                </Typography>
            ) : query.isError ? (
                <Typography type="Small" color="Highlight.default" role="alert">
                    {t("friends.loadError")}
                </Typography>
            ) : (
                <>
                    <FriendGroup
                        title={t("friends.currentLectureFriends")}
                        friends={[...currentFriends.values()]}
                    />
                    <FriendGroup
                        title={t("friends.pastLectureFriends")}
                        friends={(query.data?.previousSemesterSameProfessor ?? []).map(
                            (friend) => ({
                                ...friend,
                                description: t("friends.previousSemesterSameProfessor"),
                            }),
                        )}
                    />
                </>
            )}
        </Groups>
    )
}
