import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Friend } from "@/common/schemas/friend"
import { useAPI } from "@/utils/api/useAPI"

const Groups = styled(FlexWrapper)`
    width: 100%;
    flex-shrink: 0;
`

const Chips = styled(FlexWrapper)`
    flex-wrap: wrap;
`

const Chip = styled(Typography)`
    padding: 5px 16px;
    border-radius: 16px;
    max-width: 100%;
    overflow-wrap: anywhere;
    background: ${({ theme }) => theme.colors.Background.Block.default};
`

function FriendGroup({ title, friends }: { title: string; friends: Friend[] }) {
    const { t } = useTranslation()
    return (
        <FlexWrapper direction="column" gap={10} align="stretch">
            <Typography type="NormalBold" color="Text.default">
                {title}
            </Typography>
            {friends.length ? (
                <Chips direction="row" gap={6}>
                    {friends.map((friend) => (
                        <Chip key={friend.id} type="Normal" color="Text.light">
                            {friend.name}
                        </Chip>
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

export default function LectureFriendOverlaps({ lectureId }: { lectureId: number }) {
    const { t } = useTranslation()
    const { query } = useAPI("GET", `/friends/lectures/${lectureId}/overlaps`, {
        staleTime: 0,
        gcTime: 0,
    })

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
                        title={t("friends.sameLecture")}
                        friends={query.data?.sameLecture ?? []}
                    />
                    <FriendGroup
                        title={t("friends.sameCourseDifferentSection")}
                        friends={query.data?.sameCourseDifferentSection ?? []}
                    />
                    <FriendGroup
                        title={t("friends.previousSemesterSameProfessor")}
                        friends={query.data?.previousSemesterSameProfessor ?? []}
                    />
                </>
            )}
        </Groups>
    )
}
