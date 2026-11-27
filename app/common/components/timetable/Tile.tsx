import { type CSSProperties, memo, useCallback } from "react"

import { type Theme, css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import Close from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import { type Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import {
    getPaletteColor,
    getTimetableItemColorIndex,
    isLectureItem,
    timetableItemKey,
    toLectureItem,
} from "@/common/utils/timetableItems"
import { media } from "@/styles/themes/media"
import { formatMinuteToString } from "@/utils/timetable/formatTimeblockToString"

const DAYS = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
] as const

export const flattenTimeTableColors = (
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

const HoverTileWrapper = styled(FlexWrapper)`
    display: none;
    grid-column: var(--hover-day);
    grid-row: var(--hover-start) / var(--hover-end);
    pointer-events: none;

    [data-is-dragging="true"] &,
    [data-is-dragging="wait"] & {
        display: flex;
    }

    transition: opacity 0.2s ease;

    [data-is-dragging="wait"] & {
        opacity: 0.5;
    }
`

const HoverTileInner = styled(FlexWrapper)`
    background: ${({ theme }) => theme.colors.Highlight.medium};
    border-radius: 4px;
`

function HoverTile({ style, className }: { style?: CSSProperties; className?: string }) {
    return (
        <HoverTileWrapper
            direction="column"
            gap={0}
            padding="1px 0px"
            align="stretch"
            style={style}
            className={className}
        >
            <HoverTileInner direction="column" gap={0} flex="1 1 auto" />
        </HoverTileWrapper>
    )
}

const MemoizedHoverTile = memo(HoverTile)

export const LECTURE_TILE_CLASSNAME = "lecture-tile"
export const CUSTOM_BLOCK_TILE_CLASSNAME = "custom-block-tile"

export const TileHoverCss = (theme: Theme) => css`
    background: ${theme.colors.Highlight.default};

    .tile-title,
    .friend-overlap-label {
        color: ${theme.colors.Text.onHighlight.default};
    }

    .tile-info {
        color: ${theme.colors.Text.onHighlight.muted};
    }

    .tile-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`

const tileFlashKeyframes = `
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`

const tileFlash = keyframes`${tileFlashKeyframes}`

const SelectableTileBase = styled(FlexWrapper)<{ itemKey: string }>`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({ itemKey }) => itemKey}"] & {
        opacity: 1;
    }
`

const TileWrapper = styled(FlexWrapper)<{
    rowStart?: number
    rowEnd?: number
    col: number
    itemKey: string
}>`
    grid-column: ${({ col }) => col};
    grid-row: ${({ rowStart, rowEnd }) =>
        rowStart === undefined ? "auto" : `${rowStart} / ${rowEnd}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-items~="${({ itemKey }) => itemKey}"] & {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.elevation.raised};
    }

    [data-flash-items~="${({ itemKey }) => itemKey}"] & {
        animation: ${tileFlash} 0.3s ease-out forwards;
    }
`

const TileInner = styled(SelectableTileBase)<{
    colorIndex: number
    lectureId?: number
    customBlockId?: number
}>`
    background: ${({ theme, colorIndex }) =>
        getPaletteColor(
            flattenTimeTableColors(theme.colors.Tile.TimeTable.default),
            colorIndex,
        )};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] &.${LECTURE_TILE_CLASSNAME},
    [data-custom-block-interaction="true"] &.${CUSTOM_BLOCK_TILE_CLASSNAME} {
        pointer-events: auto;
        cursor: pointer;
    }

    [data-interaction="true"] &.${LECTURE_TILE_CLASSNAME} {
        @media (hover: hover) {
            &:hover {
                ${({ theme }) => TileHoverCss(theme)}
            }
        }
    }

    ${({ customBlockId, theme }) =>
        customBlockId !== undefined &&
        css`
            @media (hover: hover) {
                .custom-timetable[data-interaction="true"]:has(
                        [data-custom-block-id="${customBlockId}"][data-custom-block-interaction="true"]
                            .${CUSTOM_BLOCK_TILE_CLASSNAME}:hover
                    )
                    & {
                    ${TileHoverCss(theme)}
                }
            }
        `}

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-items~="${({ itemKey }) => itemKey}"] & {
        ${({ theme }) => TileHoverCss(theme)}
    }

    ${({ lectureId, theme }) =>
        lectureId !== undefined &&
        css`
            @media (hover: hover) {
                .custom-timetable:not(:hover)[data-hovered-lectures~="${lectureId}"] & {
                    ${TileHoverCss(theme)}
                }
            }
        `}

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${media.tablet} {
            padding: 2px;
        }
    }
`

const LectureTitleRow = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 4px;
    align-items: start;
    width: 100%;
    min-width: 0;
    flex-shrink: 0;

    .lecture-title {
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .friend-overlap-label {
        white-space: nowrap;
    }

    ${media.tablet} {
        display: flex;
        flex-direction: column;

        .friend-overlap-label {
            order: -1;
            align-self: flex-end;
            font-size: ${({ theme }) => theme.fonts.Smaller.fontSize}px;
            line-height: ${({ theme }) => theme.fonts.Smaller.lineHeight}px;
        }
    }
`

function LectureTileTitle({
    lecture,
    overlapLabel,
}: {
    lecture: Lecture
    overlapLabel?: string
}) {
    const title = (
        <Typography
            type="SmallMedium"
            className="tile-title lecture-title"
            color="TimeTable.title"
        >
            {lecture.name + " " + lecture.subtitle}
        </Typography>
    )
    return overlapLabel ? (
        <LectureTitleRow>
            {title}
            <Typography
                type="SmallBold"
                className="friend-overlap-label"
                color="TimeTable.title"
            >
                {overlapLabel}
            </Typography>
        </LectureTitleRow>
    ) : (
        title
    )
}

const TimetableItemDeleteWrapper = styled(FlexWrapper)`
    pointer-events: none;
    visibility: hidden;
    position: absolute;
    top: 4px;
    right: 4px;
    backdrop-filter: blur(16px);

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        display: none !important;
    }
`

export function TimetableItemDeleteButton({
    onDelete,
    ariaLabel,
    className = "tile-delete-wrapper lecture-delete-wrapper",
}: {
    onDelete: () => void
    ariaLabel?: string
    className?: string
}) {
    return (
        <TimetableItemDeleteWrapper
            direction="column"
            flex="1 1 auto"
            gap={0}
            className={className}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
        >
            <IconButton aria-label={ariaLabel} styles={{ padding: 3 }} onClick={onDelete}>
                <Icon
                    size={12}
                    style={{
                        color: "rgba(255, 255, 255, 0.6)",
                        opacity: 1,
                        pointerEvents: "auto",
                    }}
                    onClick={() => {}}
                >
                    <Close />
                </Icon>
            </IconButton>
        </TimetableItemDeleteWrapper>
    )
}

interface TimetableTileProps {
    item: TimetableItem
    time: TimeBlock
    classIdx?: number
    displayedDayCount?: 5 | 7
    overflow?: boolean
    overlapLabel?: string
    onSelect?: (item: TimetableItem, event?: React.PointerEvent) => void
    onHover?: (item: TimetableItem) => void
    onLeave?: () => void
    onDelete?: (item: TimetableItem) => void
}

function TimetableTile({
    item,
    time,
    classIdx,
    displayedDayCount = 5,
    overflow = false,
    overlapLabel,
    onSelect,
    onHover,
    onLeave,
    onDelete,
}: TimetableTileProps) {
    const { t } = useTranslation()
    const isLecture = isLectureItem(item)
    const itemKey = timetableItemKey(item)

    const handlePointerDown = useCallback(
        (event: React.PointerEvent) => {
            onSelect?.(item, event)
        },
        [onSelect, item],
    )

    const handlePointerEnter = useCallback(() => {
        onHover?.(item)
    }, [onHover, item])

    const handlePointerLeave = useCallback(() => {
        onLeave?.()
    }, [onLeave])

    const handleDelete = useCallback(() => {
        onDelete?.(item)
    }, [onDelete, item])

    const cls = isLecture && classIdx !== undefined ? item.data.classes[classIdx] : null
    if (isLecture && classIdx !== undefined && cls == null) return null

    const day = DAYS[time.day]
    const timeLabel = `${t(`common.days.${day}`)} ${formatMinuteToString(time.begin)}–${formatMinuteToString(time.end)}`
    const colorIndex = getTimetableItemColorIndex(item)

    return (
        <TileWrapper
            direction="column"
            gap={0}
            padding="1px 0px"
            justify="stretch"
            align="stretch"
            col={Math.min(time.day, displayedDayCount - 1) + 1}
            rowStart={overflow ? undefined : time.begin / 30 - 14}
            rowEnd={overflow ? undefined : time.end / 30 - 14}
            itemKey={itemKey}
            data-class-time={time.day * 24 * 60 + time.begin}
            data-custom-block-id={isLecture ? undefined : item.data.id}
            data-custom-block-interaction={isLecture ? undefined : Boolean(onSelect)}
            title={isLecture ? undefined : `${item.data.block_name} · ${timeLabel}`}
            onPointerDown={onSelect ? handlePointerDown : undefined}
            onPointerEnter={onHover ? handlePointerEnter : undefined}
            onPointerLeave={onLeave ? handlePointerLeave : undefined}
        >
            <TileInner
                itemKey={itemKey}
                direction="row"
                gap={0}
                flex="1 1 auto"
                align="stretch"
                justify="stretch"
                padding="2px"
                colorIndex={colorIndex}
                lectureId={isLecture ? item.data.id : undefined}
                customBlockId={isLecture ? undefined : item.data.id}
                className={
                    isLecture ? LECTURE_TILE_CLASSNAME : CUSTOM_BLOCK_TILE_CLASSNAME
                }
                data-friend-overlap={isLecture && overlapLabel ? true : undefined}
                role={!isLecture && onSelect ? "button" : undefined}
                tabIndex={!isLecture && onSelect ? 0 : undefined}
                aria-label={
                    !isLecture && onSelect
                        ? `${item.data.block_name} · ${timeLabel}`
                        : undefined
                }
                onKeyDown={
                    !isLecture && onSelect
                        ? (event) => {
                              if (event.target !== event.currentTarget) return
                              if (event.key === "Enter" || event.key === " ") {
                                  event.preventDefault()
                                  onSelect(item)
                              }
                          }
                        : undefined
                }
            >
                <FlexWrapper
                    className={isLecture ? "lecture-content" : undefined}
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
                        {isLecture ? (
                            <>
                                <LectureTileTitle
                                    lecture={item.data}
                                    overlapLabel={overlapLabel}
                                />
                                <Typography
                                    type="Small"
                                    className="tile-info lecture-info"
                                    color="TimeTable.detail"
                                >
                                    {item.data.professors
                                        .map((professor) => professor.name)
                                        .join(", ")}
                                </Typography>
                                <Typography
                                    type="Small"
                                    className="tile-info lecture-info"
                                    color="TimeTable.detail"
                                >
                                    {cls ? `(${cls.buildingCode}) ${cls.roomName}` : ""}
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography
                                    type="SmallMedium"
                                    color="TimeTable.title"
                                    className="tile-title block-title"
                                >
                                    {item.data.block_name}
                                </Typography>
                                {item.data.place && (
                                    <Typography
                                        type="Small"
                                        color="TimeTable.detail"
                                        className="tile-info block-info"
                                    >
                                        {item.data.place}
                                    </Typography>
                                )}
                                {overflow && (
                                    <Typography
                                        type="Small"
                                        color="TimeTable.detail"
                                        className="tile-info block-info"
                                    >
                                        {timeLabel}
                                    </Typography>
                                )}
                            </>
                        )}
                    </FlexWrapper>
                </FlexWrapper>

                {onDelete && (
                    <TimetableItemDeleteButton
                        onDelete={handleDelete}
                        ariaLabel={
                            isLecture
                                ? undefined
                                : `Delete custom block: ${item.data.block_name}`
                        }
                        className={
                            isLecture
                                ? "tile-delete-wrapper lecture-delete-wrapper"
                                : "tile-delete-wrapper custom-block-delete-wrapper"
                        }
                    />
                )}
            </TileInner>
        </TileWrapper>
    )
}

const MemoizedTimetableTile = memo(TimetableTile)

const OverlapTileWrapper = styled(FlexWrapper)<{
    day: number
    begin: number
    end: number
}>`
    grid-column: ${({ day }) => day + 1};
    grid-row: ${({ begin, end }) => `${begin + 2} / ${end + 2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`

const OverlapTileInner = styled(FlexWrapper)`
    border-radius: 2px;
`

interface OverlapTileProps {
    day: number
    begin: number
    end: number
}

function OverlapTile({ day, begin, end }: OverlapTileProps) {
    return (
        <OverlapTileWrapper
            direction="column"
            gap={0}
            day={day}
            begin={begin}
            end={end}
            align="stretch"
            justify="stretch"
        >
            <OverlapTileInner direction="column" gap={0} flex="1 1 auto" />
        </OverlapTileWrapper>
    )
}

const OverflowTileWrapper = styled(FlexWrapper)<{ lectureId: number }>`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`

const OverflowTileInner = styled(TileInner)`
    position: relative;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    [data-selected-items~="${({ itemKey }) => itemKey}"] & {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.elevation.raised};
    }

    [data-flash-items~="${({ itemKey }) => itemKey}"] & {
        animation: ${tileFlash} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${media.tablet} {
            padding: 2px;
        }
    }
`

interface OverflowTileProps {
    lecture: Lecture
    classIdx?: number
    overlapLabel?: string
    deleteLecture?: () => void
}

function OverflowTile({
    lecture,
    classIdx,
    overlapLabel,
    deleteLecture,
}: OverflowTileProps) {
    const cls = classIdx == null ? null : lecture.classes[classIdx]
    const { t } = useTranslation()
    const item = toLectureItem(lecture)

    return (
        <OverflowTileWrapper
            direction="column"
            gap={2}
            align="stretch"
            justify="stretch"
            padding="2px"
            flex="1 1 auto"
            lectureId={lecture.id}
        >
            <FlexWrapper direction="column" gap={0} align="center">
                {cls != null && DAYS[cls.day] && cls.begin != null && cls.end != null ? (
                    <Typography type="Smaller" color="Text.light">
                        {t(`common.days.${DAYS[cls.day]}`)}{" "}
                        {formatMinuteToString(cls.begin)} -{" "}
                        {formatMinuteToString(cls.end)}
                    </Typography>
                ) : (
                    <Typography type="Smaller" color="Text.light">
                        {t("timetable.noTimeInfo")}
                    </Typography>
                )}
            </FlexWrapper>
            <OverflowTileInner
                itemKey={timetableItemKey(item)}
                direction="column"
                gap={0}
                align="flex-start"
                padding="6px"
                colorIndex={getTimetableItemColorIndex(item)}
                lectureId={lecture.id}
                flex="1 1 auto"
                className={LECTURE_TILE_CLASSNAME}
                data-friend-overlap={overlapLabel ? true : undefined}
            >
                <LectureTileTitle lecture={lecture} overlapLabel={overlapLabel} />
                <Typography
                    type="Small"
                    className="tile-info lecture-info"
                    color="TimeTable.detail"
                >
                    {lecture.professors.map((professor) => professor.name).join(", ")}
                </Typography>
                <Typography
                    type="Small"
                    className="tile-info lecture-info"
                    color="TimeTable.detail"
                >
                    {cls != null ? `(${cls.buildingCode}) ${cls.roomName}` : ""}
                </Typography>

                {deleteLecture && <TimetableItemDeleteButton onDelete={deleteLecture} />}
            </OverflowTileInner>
        </OverflowTileWrapper>
    )
}

export {
    MemoizedHoverTile as HoverTile,
    MemoizedTimetableTile as TimetableTile,
    OverlapTile,
    OverflowTile,
}
