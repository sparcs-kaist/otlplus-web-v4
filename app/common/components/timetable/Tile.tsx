import { type CSSProperties, memo, useEffect } from "react"

import { type Theme, ThemeProvider, css } from "@emotion/react"
import styled from "@emotion/styled"
import { Close } from "@mui/icons-material"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import { type Lecture } from "@/common/schemas/lecture"
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

const HoverTileWrapper = styled(FlexWrapper)`
    display: none;
    grid-column: var(--hover-day);
    grid-row: var(--hover-start) / var(--hover-end);
    pointer-events: none;

    [data-is-dragging="true"] &,
    [data-is-dragging="wait"] & {
        display: flex;
    }
`

const HoverTileInner = styled(FlexWrapper)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`

function HoverTile() {
    return (
        <HoverTileWrapper direction="column" gap={0} padding="1px 0px" align="stretch">
            <HoverTileInner direction="column" gap={0} flex="1 1 auto" />
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

const LectureTileWrapper = styled(FlexWrapper)<{
    rowStart: number
    rowEnd: number
    col: number
}>`
    grid-column: ${({ col }) => col};
    grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
    overflow: hidden;
    pointer-events: none;
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
        &:hover {
            ${({ theme }) => LectureTileHoverCss(theme)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-lectures~="${({ lectureId }) => lectureId}"]
        &,
    [data-selected-lecture="${({ lectureId }) => lectureId}"] & {
        ${({ theme }) => LectureTileHoverCss(theme)}
    }
`

const LectureDeleteWrapper = styled(FlexWrapper)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`

interface LectureTileProps {
    lecture: Lecture
    classIdx: number
    deleteLecture?: () => void
}

function LectureTile({ lecture, classIdx, deleteLecture }: LectureTileProps) {
    const cls = lecture.classes[classIdx]

    if (cls == null) return null

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
                                className="lecture-title"
                            >
                                {lecture.name}
                                {lecture.subtitle}
                            </Typography>
                            <Typography
                                type="Small"
                                color="Text.lighter"
                                className="lecture-info"
                            >
                                {lecture.professors
                                    .map((professor) => professor.name)
                                    .join(", ")}
                            </Typography>
                            <Typography
                                type="Small"
                                color="Text.lighter"
                                className="lecture-info"
                            >
                                {`(${cls.buildingCode}) ${cls.roomName}`}
                            </Typography>
                        </ThemeProvider>
                    </FlexWrapper>
                </FlexWrapper>

                <LectureDeleteWrapper
                    direction="column"
                    flex="0 1 0"
                    gap={0}
                    align="flex-end"
                    justify="flex-start"
                    className="lecture-delete-wrapper"
                >
                    <IconButton styles={{ padding: 3 }} onClick={deleteLecture}>
                        <Icon
                            size={12}
                            onClick={() => {}}
                            style={{
                                color: "rgba(255, 255, 255, 0.6)",
                                opacity: deleteLecture ? 1 : 0,
                                pointerEvents: deleteLecture ? "auto" : "none",
                            }}
                        >
                            <Close />
                        </Icon>
                    </IconButton>
                </LectureDeleteWrapper>
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

export { MemoizedHoverTile as HoverTile, MemoizedLectureTile as LectureTile, OverlapTile }
