import { useMemo, useState } from "react"

import styled from "@emotion/styled"
import SearchIcon from "@mui/icons-material/Search"
import { useTranslation } from "react-i18next"

import StyledDivider from "@/common/components/StyledDivider"
import TextInput from "@/common/components/search/TextInput"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Friend, FriendListItem } from "@/common/schemas/friend"
import FriendRow, { friendRowStyles } from "@/features/friends/components/FriendRow"

const SidebarHeading = styled(Typography)`
    align-self: center;
`

const SearchBox = styled.label`
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Line.divider};
    background: ${({ theme }) => theme.colors.Background.Section.default};
    color: ${({ theme }) => theme.colors.Highlight.default};
`

const SearchInput = styled(TextInput)`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    padding: 0;
    font: inherit;
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }
`

const FriendList = styled.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.Line.default} transparent;

    &:hover {
        scrollbar-color: ${({ theme }) => theme.colors.Line.dark} transparent;
    }

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.Line.default};
        border-radius: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.Line.dark};
    }
`

const FriendListLayout = styled(FlexWrapper)`
    min-height: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const InviteButton = styled.button`
    height: 48px;
    flex-shrink: 0;
    border: 0;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.Background.Button.highlight};
    color: ${({ theme }) => theme.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
    font-size: ${({ theme }) => theme.fonts.NormalMedium.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.NormalMedium.fontWeight};
`

const MyTimetableButton = styled.button<{ $selected: boolean }>`
    ${friendRowStyles}
    border: 0;
    padding: 8px 12px;
    font: inherit;
    text-align: left;
    color: ${({ theme }) => theme.colors.Text.default};
`
const Empty = styled(FlexWrapper)`
    padding: 24px 16px;
    text-align: center;
`
interface FriendsListSectionProps {
    friends: FriendListItem[]
    showSchedule: boolean
    selectedFriendId: number | null
    onSelect: (id: number | null) => void
    onDelete: (friend: Friend) => void
    onInvite: () => void
}

export default function FriendsListSection({
    friends,
    showSchedule,
    selectedFriendId,
    onSelect,
    onDelete,
    onInvite,
}: FriendsListSectionProps) {
    const { t } = useTranslation()
    const [search, setSearch] = useState("")
    const filtered = useMemo(
        () =>
            friends.filter(({ name }) =>
                name.toLowerCase().includes(search.toLowerCase()),
            ),
        [friends, search],
    )

    return (
        <FriendListLayout direction="column" gap={12} align="stretch">
            <SidebarHeading type="Big" color="Text.default" role="heading" aria-level={2}>
                {t("friends.friendList", { count: friends.length })}
            </SidebarHeading>
            <StyledDivider />
            <SearchBox>
                <Icon size={20}>
                    <SearchIcon />
                </Icon>
                <SearchInput
                    value={search}
                    handleChange={setSearch}
                    placeholder={t("friends.searchPlaceholder")}
                    aria-label={t("friends.searchPlaceholder")}
                />
            </SearchBox>
            <FriendList>
                <MyTimetableButton
                    type="button"
                    $selected={selectedFriendId === null}
                    aria-pressed={selectedFriendId === null}
                    onClick={() => onSelect(null)}
                >
                    {t("friends.myTimetable")}
                </MyTimetableButton>
                {filtered.map((friend) => (
                    <FriendRow
                        key={friend.id}
                        friend={friend}
                        showSchedule={showSchedule}
                        selected={selectedFriendId === friend.id}
                        onSelect={() =>
                            onSelect(selectedFriendId === friend.id ? null : friend.id)
                        }
                        onDelete={() => onDelete(friend)}
                    />
                ))}
                {!filtered.length && (
                    <Empty direction="column" gap={0} align="center">
                        <Typography type="Small" color="Text.disable">
                            {t("friends.noFriends")}
                        </Typography>
                    </Empty>
                )}
            </FriendList>
            <InviteButton onClick={onInvite}>{t("friends.invite")}</InviteButton>
        </FriendListLayout>
    )
}
