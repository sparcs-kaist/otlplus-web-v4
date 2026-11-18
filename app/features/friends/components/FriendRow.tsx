import { memo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined"
import EventNote from "@mui/icons-material/EventNote"
import Star from "@mui/icons-material/Star"
import StarBorder from "@mui/icons-material/StarBorder"
import { ThemeProvider, Tooltip, createTheme } from "@mui/material"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import type { FriendListItem } from "@/common/schemas/friend"
import { invalidateFriendQueries } from "@/features/friends/friendQueries"
import { useAPI } from "@/utils/api/useAPI"

const FriendRowWrapper = styled(FlexWrapper)<{ $selected: boolean }>`
    cursor: pointer;
    min-height: 44px;
    flex-shrink: 0;
    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Tab.dark};
    }
    background: ${({ $selected, theme }) =>
        $selected
            ? theme.colors.Background.Button.dark
            : theme.colors.Background.Section.default};
    border-radius: 4px;
`

const tooltipTheme = createTheme()

const FriendIdentity = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    flex: 1;
`

const FriendName = styled(Typography)`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

interface FriendRowProps {
    friend: FriendListItem
    showSchedule: boolean
    selected: boolean
    onSelect: () => void
    onDelete: () => void
}

function FriendRow({
    friend,
    showSchedule,
    selected,
    onSelect,
    onDelete,
}: FriendRowProps) {
    const { t } = useTranslation()
    const theme = useTheme()
    const queryClient = useQueryClient()
    const { mutation, requestFunction } = useAPI(
        "PATCH",
        `/friends/${friend.id}/favorite`,
        {
            onSuccess: () => invalidateFriendQueries(queryClient),
        },
    )

    return (
        <FriendRowWrapper
            $selected={selected}
            direction="row"
            gap={8}
            align="center"
            padding="8px 8px 8px 12px"
            role="button"
            tabIndex={0}
            onClick={onSelect}
            onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    onSelect()
                }
            }}
        >
            <FriendIdentity>
                <FriendName type="NormalBold" color="Text.default">
                    {friend.name}
                </FriendName>
                {showSchedule && friend.hasScheduleNow === true && (
                    <ThemeProvider theme={tooltipTheme}>
                        <Tooltip title={t("friends.scheduleNow")} placement="top" arrow>
                            <span
                                role="img"
                                aria-label={t("friends.scheduleNow")}
                                tabIndex={0}
                                style={{ display: "inline-flex", flexShrink: 0 }}
                            >
                                <Icon size={18} color={theme.colors.Text.default}>
                                    <EventNote />
                                </Icon>
                            </span>
                        </Tooltip>
                    </ThemeProvider>
                )}
            </FriendIdentity>
            {selected && (
                <IconButton
                    aria-label={t("friends.delete")}
                    onClick={(event) => {
                        event.stopPropagation()
                        onDelete()
                    }}
                    styles={{ padding: 6 }}
                >
                    <Icon size={18} color={theme.colors.Text.lighter}>
                        <DeleteOutlineOutlined />
                    </Icon>
                </IconButton>
            )}
            <IconButton
                aria-label={t("friends.favorite")}
                aria-pressed={friend.isFavorite}
                disabled={mutation.isPending}
                onClick={(event) => {
                    event.stopPropagation()
                    requestFunction({ isFavorite: !friend.isFavorite })
                }}
                styles={{ padding: 6 }}
            >
                <Icon
                    size={18}
                    color={
                        friend.isFavorite
                            ? theme.colors.Icon.yellow
                            : theme.colors.Text.lighter
                    }
                >
                    {friend.isFavorite ? <Star /> : <StarBorder />}
                </Icon>
            </IconButton>
            {mutation.isError && (
                <Typography type="Small" color="Highlight.default" role="alert">
                    {t("friends.updateError")}
                </Typography>
            )}
        </FriendRowWrapper>
    )
}

export default memo(FriendRow)
