import { memo } from "react"

import { type Theme, css } from "@emotion/react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { TimeBlock } from "@/common/schemas/timeblock"
import { timetableItemKey } from "@/common/utils/timetableItems"

import { TimetableItemDeleteButton, flattenTimeTableColors } from "./Tile"
import TimetableItemTile from "./TimetableItemTile"

const CUSTOM_BLOCK_TILE_CLASSNAME = "custom-block-tile"

const CustomBlockTileHoverCss = (theme: Theme) => css`
    background: ${theme.colors.Highlight.default};

    .block-title {
        color: ${theme.colors.Text.onHighlight.default};
    }

    .block-info {
        color: ${theme.colors.Text.onHighlight.muted};
    }

    .custom-block-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`

const CustomBlockTileWrapper = styled(FlexWrapper)<{
    rowStart?: number
    rowEnd?: number
    col: number
    blockId: number
}>`
    grid-column: ${({ col }) => col};
    grid-row: ${({ rowStart, rowEnd }) =>
        rowStart === undefined ? "auto" : `${rowStart} / ${rowEnd}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-custom-blocks~="${({ blockId }) => blockId}"] & {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.elevation.raised};
    }
`

const CustomBlockTileInner = styled(TimetableItemTile)<{ blockId: number }>`
    background: ${({ theme, blockId }) => {
        const colors = flattenTimeTableColors(theme.colors.Tile.TimeTable.default)
        return colors[(blockId * 3 + 7) % colors.length]
    }};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-custom-block-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
    }

    @media (hover: hover) {
        .custom-timetable[data-interaction="true"]:has(
                [data-custom-block-id="${({ blockId }) =>
                        blockId}"][data-custom-block-interaction="true"]
                    .${CUSTOM_BLOCK_TILE_CLASSNAME}:hover
            )
            & {
            ${({ theme }) => CustomBlockTileHoverCss(theme)}
        }
    }

    [data-flash-custom-blocks~="${({ blockId }) => blockId}"] & {
        background: ${({ theme }) => theme.colors.Highlight.default};
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-blocks~="${({ blockId }) => blockId}"] & {
        ${({ theme }) => CustomBlockTileHoverCss(theme)}
    }
`

function CustomBlockTile({
    block,
    time,
    onSelect,
    onDelete,
    overflow = false,
    displayedDayCount = 5,
}: {
    block: CustomBlock
    time: TimeBlock
    onSelect?: (block: CustomBlock, event?: React.PointerEvent) => void
    onDelete?: (block: CustomBlock) => void
    overflow?: boolean
    displayedDayCount?: 5 | 7
}) {
    const { t } = useTranslation()
    const day = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ][time.day]
    const formatTime = (minutes: number) =>
        `${Math.floor(minutes / 60)
            .toString()
            .padStart(2, "0")}:${(minutes % 60).toString().padStart(2, "0")}`
    const timeLabel = `${t(`common.days.${day}`)} ${formatTime(time.begin)}–${formatTime(time.end)}`
    return (
        <CustomBlockTileWrapper
            direction="column"
            gap={0}
            padding="1px 0"
            justify="stretch"
            align="stretch"
            col={Math.min(time.day, displayedDayCount - 1) + 1}
            rowStart={overflow ? undefined : time.begin / 30 - 14}
            rowEnd={overflow ? undefined : time.end / 30 - 14}
            blockId={block.id}
            onPointerDown={(event) => onSelect?.(block, event)}
            data-custom-block-id={block.id}
            data-custom-block-interaction={Boolean(onSelect)}
            data-class-time={time.day * 1440 + time.begin}
            title={`${block.block_name} · ${timeLabel}`}
        >
            <CustomBlockTileInner
                itemKey={timetableItemKey({
                    kind: TimetableItemKind.CUSTOM,
                    data: block,
                })}
                direction="row"
                gap={0}
                flex="1 1 auto"
                align="stretch"
                justify="stretch"
                padding="2px"
                blockId={block.id}
                className={CUSTOM_BLOCK_TILE_CLASSNAME}
                role={onSelect ? "button" : undefined}
                tabIndex={onSelect ? 0 : undefined}
                aria-label={onSelect ? `${block.block_name} · ${timeLabel}` : undefined}
                onKeyDown={
                    onSelect
                        ? (event) => {
                              if (event.target !== event.currentTarget) return
                              if (event.key === "Enter" || event.key === " ") {
                                  event.preventDefault()
                                  onSelect(block)
                              }
                          }
                        : undefined
                }
            >
                <FlexWrapper
                    direction="column"
                    justify="center"
                    flex="1 1 auto"
                    gap={0}
                    padding="4px"
                >
                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="flex-start"
                        style={{ overflow: "hidden" }}
                    >
                        <Typography
                            type="SmallMedium"
                            color="TimeTable.title"
                            className="block-title"
                        >
                            {block.block_name}
                        </Typography>
                        {block.place && (
                            <Typography
                                type="Small"
                                color="TimeTable.detail"
                                className="block-info"
                            >
                                {block.place}
                            </Typography>
                        )}
                        {overflow && (
                            <Typography
                                type="Small"
                                color="TimeTable.detail"
                                className="block-info"
                            >
                                {timeLabel}
                            </Typography>
                        )}
                    </FlexWrapper>
                </FlexWrapper>
                {onDelete && (
                    <TimetableItemDeleteButton
                        onDelete={() => onDelete(block)}
                        ariaLabel={`Delete custom block: ${block.block_name}`}
                        className="custom-block-delete-wrapper"
                    />
                )}
            </CustomBlockTileInner>
        </CustomBlockTileWrapper>
    )
}

export default memo(CustomBlockTile)
