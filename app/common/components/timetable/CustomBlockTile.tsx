import { memo } from "react"

import { type Theme, ThemeProvider, css } from "@emotion/react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import { timetableItemKey } from "@/common/utils/timetableItems"
import lightTheme from "@/styles/themes/light"

import { flattenTimeTableColors } from "./Tile"
import TimetableItemTile from "./TimetableItemTile"

const CUSTOM_BLOCK_TILE_CLASSNAME = "custom-block-tile"

const CustomBlockTileHoverCss = (theme: Theme) => css`
    background: ${theme.colors.Highlight.default};

    .block-title {
        color: #ffffff;
    }

    .block-info {
        color: rgba(255, 255, 255, 0.5);
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

    &:has(.${CUSTOM_BLOCK_TILE_CLASSNAME}:hover) .${CUSTOM_BLOCK_TILE_CLASSNAME} {
        ${({ theme }) => CustomBlockTileHoverCss(theme)}
    }

    [data-selected-custom-blocks~="${({ blockId }) => blockId}"] & {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;

        &:hover {
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
    onSelect,
    overflow = false,
}: {
    block: CustomBlock
    onSelect?: (block: CustomBlock, event?: React.PointerEvent) => void
    overflow?: boolean
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
    ][block.day]
    const formatTime = (minutes: number) =>
        `${Math.floor(minutes / 60)
            .toString()
            .padStart(2, "0")}:${(minutes % 60).toString().padStart(2, "0")}`
    const timeLabel = `${t(`common.days.${day}`)} ${formatTime(block.begin)}–${formatTime(block.end)}`
    return (
        <CustomBlockTileWrapper
            direction="column"
            gap={0}
            padding="1px 0"
            justify="stretch"
            align="stretch"
            col={Math.min(block.day, 4) + 1}
            rowStart={overflow ? undefined : block.begin / 30 - 14}
            rowEnd={overflow ? undefined : block.end / 30 - 14}
            blockId={block.id}
            onPointerDown={(event) => onSelect?.(block, event)}
            data-custom-block-id={block.id}
            title={`${block.block_name} · ${timeLabel}`}
        >
            <CustomBlockTileInner
                itemKey={timetableItemKey({
                    kind: TimetableItemKind.CUSTOM,
                    data: block,
                })}
                direction="column"
                gap={0}
                flex="1 1 auto"
                align="flex-start"
                justify="flex-start"
                padding="6px"
                blockId={block.id}
                className={CUSTOM_BLOCK_TILE_CLASSNAME}
            >
                <ThemeProvider theme={lightTheme}>
                    <Typography type="Small" color="Text.dark" className="block-title">
                        {block.block_name}
                    </Typography>
                    {overflow && (
                        <Typography
                            type="Small"
                            color="Text.lighter"
                            className="block-info"
                        >
                            {timeLabel}
                        </Typography>
                    )}
                    {block.place && (
                        <Typography
                            type="Small"
                            color="Text.lighter"
                            className="block-info"
                        >
                            {block.place}
                        </Typography>
                    )}
                </ThemeProvider>
            </CustomBlockTileInner>
        </CustomBlockTileWrapper>
    )
}

export default memo(CustomBlockTile)
