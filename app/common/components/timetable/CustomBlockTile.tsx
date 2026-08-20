import { memo } from "react"

import { type Theme, ThemeProvider, css } from "@emotion/react"
import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import lightTheme from "@/styles/themes/light"

import { flattenTimeTableColors } from "./Tile"

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
    rowStart: number
    rowEnd: number
    col: number
    blockId: number
}>`
    grid-column: ${({ col }) => col};
    grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
    overflow: hidden;
    pointer-events: none;

    &:has(.${CUSTOM_BLOCK_TILE_CLASSNAME}:hover) .${CUSTOM_BLOCK_TILE_CLASSNAME} {
        ${({ theme }) => CustomBlockTileHoverCss(theme)}
    }

    [data-selected-custom-block="${({ blockId }) => blockId}"] & {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`

const CustomBlockTileInner = styled(FlexWrapper)<{ blockId: number }>`
    background: ${({ theme, blockId }) => {
        const colors = flattenTimeTableColors(theme.colors.Tile.TimeTable.default)
        return colors[(blockId * 3 + 7) % colors.length]
    }};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.5;

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;

        &:hover {
            ${({ theme }) => CustomBlockTileHoverCss(theme)}
        }
    }

    [data-selected-custom-block=""] &,
    [data-selected-custom-block="${({ blockId }) => blockId}"] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-block="${({ blockId }) => blockId}"] & {
        ${({ theme }) => CustomBlockTileHoverCss(theme)}
    }
`

function CustomBlockTile({
    block,
    onSelect,
}: {
    block: CustomBlock
    onSelect?: (block: CustomBlock) => void
}) {
    return (
        <CustomBlockTileWrapper
            direction="column"
            gap={0}
            padding="1px 0"
            justify="stretch"
            align="stretch"
            col={block.day + 1}
            rowStart={block.begin / 30 - 14}
            rowEnd={block.end / 30 - 14}
            blockId={block.id}
            onPointerDown={() => onSelect?.(block)}
        >
            <CustomBlockTileInner
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
