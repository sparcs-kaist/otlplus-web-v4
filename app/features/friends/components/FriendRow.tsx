import { memo, useCallback, useEffect } from "react"

import styled from "@emotion/styled"
import { EventNote, Star, StarBorder, DeleteOutlineOutlined } from "@mui/icons-material"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import type { FriendListItem } from "@/common/schemas/friend"
import { useTheme } from "@emotion/react"

const FriendRowWrapper = styled(FlexWrapper)<{ $selected: boolean }>`
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Tab.dark};
    }
    background: ${({ $selected, theme }) =>
        $selected
            ? theme.colors.Background.Block.dark
            : theme.colors.Background.Tab.default};
    border-radius: 4px;
`

interface FriendRowProps {
    friend: FriendListItem
    showSchedule: boolean
    selected: boolean
    onSelect: (selectedFriend: FriendListItem) => void
    onDelete: (deletingFriend: FriendListItem) => void
    onFavoriteToggle: (toggledFriend: FriendListItem) => void
}

function FriendRow({
    friend,
    showSchedule,
    selected,
    onSelect,
    onDelete,
    onFavoriteToggle,
}: FriendRowProps) {
    const theme = useTheme()
    
    const handleSelect = useCallback(() => {
        onSelect(friend)
    }, [onSelect, friend])

    const handleDelete = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            onDelete(friend)
        },
        [onDelete, friend],
    )

    const handleFavoriteToggle = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            onFavoriteToggle(friend)
        },
        [onFavoriteToggle, friend],
    )

    useEffect(() => {
        console.log('a')
    }, [])

    return (
        <FriendRowWrapper
            $selected={selected}
            direction={"row"}
            gap={8}
            align={"center"}
            padding="8px 8px 8px 12px"
            onClick={handleSelect}
        >
            <Typography type={"NormalBold"} color={"Text.default"}>
                {friend.name}
            </Typography>
            <FlexWrapper direction={"row"} gap={0} align={"center"} flex={"1"} justify={"flex-end"}>
                {showSchedule && friend.hasScheduleNow === true && (
                    <Icon size={18} color={"Text.default"} onClick={() => {}}>
                        <EventNote />
                    </Icon>
                )}
                {selected && (
                    <IconButton onClick={handleDelete} styles={{ padding: 6 }}>
                        <Icon size={18} color={theme.colors.Text.lighter} onClick={() => {}}>
                            <DeleteOutlineOutlined />
                        </Icon>
                    </IconButton>
                )}
                <IconButton onClick={handleFavoriteToggle} styles={{ padding: 6 }}>
                    <Icon size={18} color={friend.isFavorite ? theme.colors.Icon.yellow : theme.colors.Text.lighter} onClick={() => {}}>
                        {friend.isFavorite ? <Star /> : <StarBorder />}
                    </Icon>
                </IconButton>
            </FlexWrapper>
            
        </FriendRowWrapper>
    )
}

const FriendRowMemo = memo(FriendRow, (prevProps, nextProps) => {
    return (
        prevProps.friend.id === nextProps.friend.id &&
        prevProps.showSchedule === nextProps.showSchedule &&
        prevProps.selected === nextProps.selected &&
        prevProps.onDelete === nextProps.onDelete &&
        prevProps.onFavoriteToggle === nextProps.onFavoriteToggle &&
        prevProps.onSelect === nextProps.onSelect
    )
})

export default FriendRowMemo
