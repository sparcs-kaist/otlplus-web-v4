import { type CSSProperties, memo, useCallback } from "react"

import { type Theme, css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Close } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import { type Lecture } from "@/common/schemas/lecture"

const DAYS = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
]

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

const HoverTileInner = styled(FlexWrapper)<{ isCustomBlockSectionOpen: boolean }>`
    background: ${({ isCustomBlockSectionOpen }) =>
        isCustomBlockSectionOpen ? "rgba(255, 87, 249, 0.4)" : "rgba(229, 76, 101, 0.4)"};
    border-radius: 4px;
`

function HoverTile({
    isCustomBlockSectionOpen,
}: {
    isCustomBlockSectionOpen: boolean | undefined
}) {
    return (
        <HoverTileWrapper direction="column" gap={0} padding="1px 0px" align="stretch">
            <HoverTileInner
                direction="column"
                gap={0}
                flex="1 1 auto"
                isCustomBlockSectionOpen={isCustomBlockSectionOpen || false}
            />
        </HoverTileWrapper>
    )
}

const MemoizedHoverTile = memo(HoverTile)

export const LECTURE_TILE_CLASSNAME = "lecture-tile"

export const LectureTileHoverCss = (theme: Theme) => css`
    background: ${theme.colors.Highlight.default};

    .lecture-title {
        color: #ffffff;
    }

    .lecture-info {
        color: rgba(255, 255, 255, 0.5);
    }

    .lecture-delete-wrapper {
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

const LectureTileWrapper = styled(FlexWrapper)<{
    rowStart: number
    rowEnd: number
    col: number
    lectureId: number
}>`
    grid-column: ${({ col }) => col};
    grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lectures~="${({ lectureId }) => lectureId}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    [data-flash-lectures~="${({ lectureId }) => lectureId}"] & {
        animation: ${tileFlash} 0.3s ease-out forwards;
    }
`

const LectureTileInner = styled(FlexWrapper)<{
    courseId: number
    lectureId: number
}>`
    background: ${({ theme, courseId }) =>
        () => {
            const flat = flattenTimeTableColors(theme.colors.Tile.TimeTable.default)
            return flat[courseId % flat.length]
        }};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({ theme }) => LectureTileHoverCss(theme)}
            }
        }
    }

    transition: opacity 0.2s ease;

    opacity: 0.5;

    .custom-timetable[data-selected-lectures=""] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({ lectureId }) =>
                lectureId}"]
            &,
        [data-selected-lectures~="${({ lectureId }) => lectureId}"] & {
            ${({ theme }) => LectureTileHoverCss(theme)}
        }
    }

    [data-selected-lectures~="${({ lectureId }) => lectureId}"] & {
        opacity: 1;
    }
`

const LectureDeleteWrapper = styled(FlexWrapper)`
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

interface LectureTileProps {
    lecture: Lecture
    classIdx: number
    handleLectureTileHover?: (lecture: Lecture) => void
    handleLectureTileLeave?: () => void
    handleLectureTileSelect?: (lecture: Lecture, e?: React.PointerEvent) => void
    deleteLecture?: (lecture: Lecture) => void
}

function LectureTile({
    lecture,
    classIdx,
    deleteLecture,
    handleLectureTileSelect,
    handleLectureTileHover,
    handleLectureTileLeave,
}: LectureTileProps) {
    const cls = lecture.classes[classIdx]

    if (cls == null) return null

    const handleMouseClick = useCallback(
        (e: React.PointerEvent) => {
            handleLectureTileSelect?.(lecture, e)
        },
        [handleLectureTileSelect, lecture],
    )

    const handlePointerEnter = useCallback(() => {
        handleLectureTileHover?.(lecture)
    }, [handleLectureTileHover, lecture])

    const handlePointerLeave = useCallback(() => {
        handleLectureTileLeave?.()
    }, [handleLectureTileLeave])

    return (
        <LectureTileWrapper
            direction="column"
            gap={0}
            padding="1px 0px"
            justify="stretch"
            align="stretch"
            col={cls.day + 1}
            rowStart={cls.begin / 30 - 14}
            rowEnd={cls.end / 30 - 14}
            lectureId={lecture.id}
            data-class-time={cls.day * 24 * 60 + cls.begin}
            onPointerDown={handleMouseClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <LectureTileInner
                direction="row"
                gap={0}
                flex="1 1 auto"
                align="stretch"
                justify="stretch"
                padding="2px"
                courseId={lecture.courseId}
                lectureId={lecture.id}
                className={LECTURE_TILE_CLASSNAME}
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
                            className="lecture-title"
                            color="TimeTable.title"
                        >
                            {lecture.name + " " + lecture.subtitle}
                        </Typography>
                        <Typography
                            type="Small"
                            className="lecture-info"
                            color="TimeTable.detail"
                        >
                            {lecture.professors
                                .map((professor) => professor.name)
                                .join(", ")}
                        </Typography>
                        <Typography
                            type="Small"
                            className="lecture-info"
                            color="TimeTable.detail"
                        >
                            {`(${cls.buildingCode}) ${cls.roomName}`}
                        </Typography>
                    </FlexWrapper>
                </FlexWrapper>

                {deleteLecture && (
                    <LectureDeleteWrapper
                        direction="column"
                        flex="1 1 auto"
                        gap={0}
                        className="lecture-delete-wrapper"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IconButton
                            styles={{ padding: 3 }}
                            onClick={() => deleteLecture(lecture)}
                        >
                            <Icon
                                size={12}
                                style={{
                                    color: "rgba(255, 255, 255, 0.6)",
                                    opacity: 1,
                                    pointerEvents: "auto",
                                }}
                            >
                                <Close />
                            </Icon>
                        </IconButton>
                    </LectureDeleteWrapper>
                )}
            </LectureTileInner>
        </LectureTileWrapper>
    )
}

const MemoizedLectureTile = memo(LectureTile, (prevProps, nextProps) => {
    return (
        prevProps.lecture === nextProps.lecture &&
        prevProps.classIdx === nextProps.classIdx
    )
})

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

const OverflowTileInner = styled(FlexWrapper)<{ courseId: number; lectureId: number }>`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme, courseId }) =>
        () => {
            const flat = flattenTimeTableColors(theme.colors.Tile.TimeTable.default)
            return flat[courseId % flat.length]
        }};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({ lectureId }) =>
                lectureId}"]
            &,
        [data-selected-lectures~="${({ lectureId }) => lectureId}"] & {
            ${({ theme }) => LectureTileHoverCss(theme)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({ theme }) => LectureTileHoverCss(theme)}
            }
        }
    }

    [data-selected-lectures~="${({ lectureId }) => lectureId}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        opacity: 1;
    }

    .custom-timetable[data-selected-lectures=""] & {
        transform: none;
        box-shadow: none;
        opacity: 1;
    }

    [data-flash-lectures~="${({ lectureId }) => lectureId}"] & {
        animation: ${tileFlash} 0.3s ease-out forwards;
    }
`

interface OverflowTileProps {
    lecture: Lecture
    classIdx?: number
    deleteLecture?: () => void
}

function OverflowTile({ lecture, classIdx, deleteLecture }: OverflowTileProps) {
    const cls = classIdx == null ? null : lecture.classes[classIdx]
    const { t } = useTranslation()

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
                        {t(`common.days.${DAYS[cls.day]}`)} {Math.floor(cls.begin / 60)}:
                        {cls.begin % 60 === 0 ? "00" : "30"} - {Math.floor(cls.end / 60)}:
                        {cls.end % 60 === 0 ? "00" : "30"}
                    </Typography>
                ) : (
                    <Typography type="Smaller" color="Text.light">
                        {t("timetable.noTimeInfo")}
                    </Typography>
                )}
            </FlexWrapper>
            <OverflowTileInner
                direction="column"
                gap={0}
                align="flex-start"
                padding="6px"
                courseId={lecture.courseId}
                lectureId={lecture.id}
                flex="1 1 auto"
                className={LECTURE_TILE_CLASSNAME}
            >
                <Typography
                    type="SmallMedium"
                    className="lecture-title"
                    color="TimeTable.title"
                >
                    {lecture.name + " " + lecture.subtitle}
                </Typography>
                <Typography
                    type="Small"
                    className="lecture-info"
                    color="TimeTable.detail"
                >
                    {lecture.professors.map((professor) => professor.name).join(", ")}
                </Typography>
                <Typography
                    type="Small"
                    className="lecture-info"
                    color="TimeTable.detail"
                >
                    {cls != null ? `(${cls.buildingCode}) ${cls.roomName}` : ""}
                </Typography>

                {deleteLecture && (
                    <LectureDeleteWrapper
                        direction="column"
                        flex="1 1 auto"
                        gap={0}
                        className="lecture-delete-wrapper"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IconButton
                            styles={{ padding: 3 }}
                            onClick={() => deleteLecture()}
                        >
                            <Icon
                                size={12}
                                style={{
                                    color: "rgba(255, 255, 255, 0.6)",
                                    opacity: 1,
                                    pointerEvents: "auto",
                                }}
                            >
                                <Close />
                            </Icon>
                        </IconButton>
                    </LectureDeleteWrapper>
                )}
            </OverflowTileInner>
        </OverflowTileWrapper>
    )
}

export {
    MemoizedHoverTile as HoverTile,
    MemoizedLectureTile as LectureTile,
    OverlapTile,
    OverflowTile,
}
