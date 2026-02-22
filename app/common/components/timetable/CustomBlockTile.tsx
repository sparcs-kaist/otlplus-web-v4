import { type CSSProperties, memo } from "react"

import { type Theme, ThemeProvider, css } from "@emotion/react"
import styled from "@emotion/styled"
import { Close } from "@mui/icons-material"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import lightTheme from "@/styles/themes/light"

const flattenTimeTableColors = (
    timeTable: Theme["colors"]["Tile"]["TimeTable"]["default"],
): Array<CSSProperties["color"]> => {
    return [
        timeTable.red[1],
        timeTable.red[2],
        timeTable.orange[1],
        timeTable.orange[2],
        timeTable.yellow[1],
        timeTable.yellow[2],
        timeTable.green[1],
        timeTable.green[2],
        timeTable.green[3],
        timeTable.blue[1],
        timeTable.blue[2],
        timeTable.purple[1],
        timeTable.purple[2],
        timeTable.pink[1],
        timeTable.pink[2],
    ]
}

export const CUSTOM_BLOCK_TILE_CLASSNAME = "custom-block-tile"

export const CustomBlockTileHoverCss = (theme: Theme) => css`
    background: ${theme.colors.Highlight.default};

    .block-title {
        color: #ffffff;
    }

    .block-info {
        color: rgba(255, 255, 255, 0.5);
    }

    .block-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`

const CustomBlockTileWrapper = styled(FlexWrapper)<{
    rowStart: number
    rowEnd: number
    col: number
    blockId: number
}>`
    display: contents;

    &:has(.${CUSTOM_BLOCK_TILE_CLASSNAME}:hover) .${CUSTOM_BLOCK_TILE_CLASSNAME} {
        ${({ theme }) => CustomBlockTileHoverCss(theme)}
    }

    grid-column: ${({ col }) => col};
    grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
    overflow: hidden;
    pointer-events: none;

    [data-selected-custom-block="${({ blockId }) => blockId}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`

const CustomBlockTileInner = styled(FlexWrapper)<{
    blockId: number
}>`
    background: ${({ theme, blockId }) =>
        () => {
            const flat = flattenTimeTableColors(theme.colors.Tile.TimeTable.default)
            // Use blockId directly for unique-ish color, offset a bit so it looks different from course 0
            return flat[(blockId * 3 + 7) % flat.length]
        }};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    grid-column: inherit;
    grid-row: inherit;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        &:hover {
            ${({ theme }) => CustomBlockTileHoverCss(theme)}
        }
    }

    transition: opacity 0.2s ease;

    opacity: 0.5;

    [data-selected-custom-block=""] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-custom-blocks~="${({ blockId }) => blockId}"]
        &,
    [data-selected-custom-block="${({ blockId }) => blockId}"] & {
        ${({ theme }) => CustomBlockTileHoverCss(theme)}
    }

    [data-selected-custom-block="${({ blockId }) => blockId}"] & {
        opacity: 1;
    }
`

const BlockDeleteWrapper = styled(FlexWrapper)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`

interface CustomBlockTileProps {
    block: CustomBlock
    deleteBlock?: () => void
    handleBlockTileHover?: (block: CustomBlock) => void
    handleBlockTileSelect?: (block: CustomBlock) => void
    isGhost?: boolean
}

export function CustomBlockTile({
    block,
    deleteBlock,
    handleBlockTileHover,
    handleBlockTileSelect,
    isGhost = false,
}: CustomBlockTileProps) {
    return (
        <CustomBlockTileWrapper
            direction="column"
            gap={0}
            padding="1px 0px"
            justify="stretch"
            align="stretch"
            col={block.day + 1}
            rowStart={block.begin / 30 - 14}
            rowEnd={block.end / 30 - 14}
            blockId={block.id}
            onPointerEnter={() => handleBlockTileHover?.(block)}
            onPointerDown={() => handleBlockTileSelect?.(block)}
            onTouchMove={() => handleBlockTileHover?.(block)}
            {...(isGhost ? { "data-ghost": true } : {})}
        >
            <CustomBlockTileInner
                direction="row"
                gap={0}
                flex="1 1 auto"
                align="stretch"
                justify="stretch"
                padding="2px"
                blockId={block.id}
                className={CUSTOM_BLOCK_TILE_CLASSNAME}
            >
                <FlexWrapper
                    direction="column"
                    justify="flex-start"
                    flex="1 1 auto"
                    gap={0}
                    padding="4px 0px 4px 4px"
                >
                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="flex-start"
                        style={{ overflow: "hidden" }}
                    >
                        <ThemeProvider theme={lightTheme}>
                            <Typography
                                type="Small"
                                color="Text.dark"
                                className="block-title"
                            >
                                {block.blockName}
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
                    </FlexWrapper>
                </FlexWrapper>

                <BlockDeleteWrapper
                    direction="column"
                    flex="0 1 0"
                    gap={0}
                    align="flex-end"
                    justify="flex-start"
                    className="block-delete-wrapper"
                >
                    <IconButton styles={{ padding: 3 }} onClick={deleteBlock}>
                        <Icon
                            size={12}
                            onClick={() => {}}
                            style={{
                                color: "rgba(255, 255, 255, 0.6)",
                                opacity: deleteBlock ? 1 : 0,
                                pointerEvents: deleteBlock ? "auto" : "none",
                            }}
                        >
                            <Close />
                        </Icon>
                    </IconButton>
                </BlockDeleteWrapper>
            </CustomBlockTileInner>
        </CustomBlockTileWrapper>
    )
}

export const MemoizedCustomBlockTile = memo(CustomBlockTile)
