import { useCallback, useEffect, useState } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { FriendListItem } from "@/common/schemas/friend"
import FriendRow from "@/features/friends/components/FriendRow"
import { invalidateFriendQueries } from "@/features/friends/friendQueries"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"
import Button from "@/common/components/Button"

interface FriendsListSectionProps {
    selectedFriend: FriendListItem | null
    setSelectedFriend: (friend: FriendListItem | null) => void
    showSchedule: boolean
    onInviteButtonClick?: () => void
    $selectedFriendId?: number | null
}

function FriendsListSection({
    selectedFriend,
    setSelectedFriend,
    showSchedule,
    onInviteButtonClick,
    $selectedFriendId = null,
}: FriendsListSectionProps) {
    const { t } = useTranslation()
    const { status } = useUserStore()
    const queryClient = useQueryClient()

    const [deletingFriend, setDeletingFriend] = useState<FriendListItem | null>(null)
    const [favoriteTogglingFriend, setFavoriteTogglingFriend] =
        useState<FriendListItem | null>(null)

    const { query: friendsQuery, setParams: setFriendsParams } = useAPI(
        "GET",
        "/friends",
        {
            enabled: status === "success",
        },
    )

    const { requestFunction: deleteFriend } = useAPI(
        "DELETE",
        `/friends/${deletingFriend?.id}`,
        {
            onSuccess: () => {
                setDeletingFriend(null)
                invalidateFriendQueries(queryClient)
            },
        },
    )

    const { requestFunction: toggleFavoriteFriend } = useAPI(
        "PATCH",
        `/friends/${favoriteTogglingFriend?.id}/favorite`,
        {
            onSuccess: () => {
                setFavoriteTogglingFriend(null)
                invalidateFriendQueries(queryClient)
            },
        },
    )

    const handleSelectFriend = useCallback(
        (friend: FriendListItem) => {
            if (selectedFriend?.id === friend.id) {
                setSelectedFriend(null)
                return
            }
            else {
                setSelectedFriend(friend)
            }
        },
        [setSelectedFriend, selectedFriend],
    )

    const handleDeleteFriend = useCallback(
        (friend: FriendListItem) => {
            setDeletingFriend(friend)
            deleteFriend({})
        },
        [deleteFriend, setDeletingFriend],
    )

    const handleFavoriteToggle = useCallback(
        (friend: FriendListItem) => {
            setFavoriteTogglingFriend(friend)
            toggleFavoriteFriend({
                isFavorite: !friend.isFavorite,
            })
        },
        [setFriendsParams],
    )

    useEffect(() => {
        if ($selectedFriendId != null) {
            const friend = friendsQuery.data?.friends.find((f) => f.id === $selectedFriendId) || null
            setSelectedFriend(friend)
        }
    }, [$selectedFriendId, friendsQuery.data?.friends, setSelectedFriend])

    return (
        <FlexWrapper direction={"column"} gap={12} flex={"1"} align={"stretch"}>
            <FlexWrapper direction={"row"} gap={8} align={"center"} justify={"center"}>
                <Typography type={"NormalBold"} color={"Text.default"}>
                    {t("friends.friendList", {
                        count: friendsQuery.data?.friends.length || 0,
                    })}
                </Typography>
            </FlexWrapper>
            <Line color="Line.divider" />
            <FlexWrapper direction={"column"} gap={4} align={"stretch"}>
                {friendsQuery.data?.friends.length == 0 ? (
                    <Typography type={"Normal"} color={"Text.default"}>
                        {t("friends.noFriends")}
                    </Typography>
                ) : (
                    <>
                        {friendsQuery.data?.friends.map((friend: FriendListItem) => (
                            <FriendRow
                                key={friend.id}
                                friend={friend}
                                showSchedule={showSchedule}
                                selected={selectedFriend?.id === friend.id}
                                onSelect={handleSelectFriend}
                                onDelete={handleDeleteFriend}
                                onFavoriteToggle={handleFavoriteToggle}
                            />
                        ))}
                    </>
                )}
            </FlexWrapper>
            <FlexWrapper direction="column" gap={0} align="stretch">
                <Button type="selected" $isFlexRow={true} onClick={onInviteButtonClick}>
                    친구 추가하기
                </Button>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default FriendsListSection
