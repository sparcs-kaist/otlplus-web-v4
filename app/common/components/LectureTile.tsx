import type { CSSProperties } from "react"
import { memo, useMemo } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"

import Icon from "@/common/primitives/Icon"
import type { ClassTime, Lecture } from "@/common/schemas/lecture"

const flattenTimeTableColors = (timeTable: any): Array<CSSProperties["color"]> => {
    return [
        timeTable?.red?.[1],
        timeTable?.red?.[2],
        timeTable?.orange?.[1],
        timeTable?.orange?.[2],
        timeTable?.yellow?.[1],
        timeTable?.yellow?.[2],
        timeTable?.green?.[1],
        timeTable?.green?.[2],
        timeTable?.green?.[3],
        timeTable?.blue?.[1],
        timeTable?.blue?.[2],
        timeTable?.purple?.[1],
        timeTable?.purple?.[2],
        timeTable?.pink?.[1],
        timeTable?.pink?.[2],
    ].map((c) => c ?? "#CCCCCC")
}

const TileWrapper = styled.div<{
    course_id: number
    isHighlighted: boolean
    isOverlapped: boolean
    hoverSelectBanned: boolean
}>`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: var(--tile-width);
    height: var(--tile-height);
    margin-bottom: 2px;
    margin-top: 2px;
    background-color: ${({ theme, course_id, isHighlighted, isOverlapped }) =>
        isOverlapped
            ? theme.colors.Text.default
            : isHighlighted
              ? theme.colors.Highlight.default
              : (() => {
                    const flat = flattenTimeTableColors(
                        theme.colors?.Tile?.TimeTable?.default,
                    )
                    return flat[course_id % flat.length]
                })()};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: ${({ hoverSelectBanned }) => (hoverSelectBanned ? "default" : "pointer")};
`

const TitleWrapper = styled.span<{ isHighlighted: boolean; isOverlapped: boolean }>`
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
    line-height: ${({ theme }) => `${theme.fonts.Small.lineHeight}px`};
    font-weight: ${({ theme }) => theme.fonts.Small.fontWeight};
    color: ${({ theme, isHighlighted, isOverlapped }) =>
        isHighlighted || isOverlapped ? "white" : theme.colors.Text.default};
    display: inline-block;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: normal;
`

const DescWrapper = styled.span<{ isHighlighted: boolean; isOverlapped: boolean }>`
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
    line-height: ${({ theme }) => `${theme.fonts.Small.lineHeight}px`};
    font-weight: ${({ theme }) => theme.fonts.Small.fontWeight};
    color: ${({ isHighlighted, isOverlapped }) =>
        isHighlighted || isOverlapped
            ? "rgba(255, 255, 255, 0.6)"
            : "rgba(102, 102, 102, 0.6)"};
    word-wrap: break-word;
    display: inline-block;
    word-break: break-word;
    white-space: normal;
`

const RemoveButton = styled.div`
    position: absolute;
    top: 6px;
    right: 4px;
    cursor: pointer;
`

const LectureTile: React.FC<{
    lecture: Lecture
    timeBlock: ClassTime
    cellWidth: number
    cellHeight: number
    isSelected: boolean | null
    isHovered: boolean | null
    hoverSelectBanned: boolean
    isOverlapped?: boolean
    removeFunction?: (lectureId: number) => void
}> = ({
    lecture,
    timeBlock,
    cellWidth,
    cellHeight,
    isSelected = false,
    isHovered = false,
    hoverSelectBanned,
    isOverlapped = false,
    removeFunction,
}) => {
    const isHighlighted = isSelected || isHovered || false
    const duration = (timeBlock.end - timeBlock.begin) / 30

    const cssVariables = useMemo(
        () =>
            ({
                "--tile-width": `${cellWidth}px`,
                "--tile-height": `${duration * cellHeight - 4}px`,
            }) as CSSProperties,
        [cellWidth, cellHeight, duration],
    )

    return (
        <TileWrapper
            style={cssVariables}
            course_id={lecture.courseId}
            isHighlighted={isHighlighted}
            isOverlapped={isOverlapped}
            hoverSelectBanned={hoverSelectBanned}
        >
            {removeFunction !== undefined && (isSelected || isHovered) && (
                <RemoveButton>
                    <Icon
                        size={13}
                        onClick={(e) => {
                            e.stopPropagation()
                            removeFunction(lecture.id)
                        }}
                        color="rgba(255, 255, 255, 0.6)"
                    >
                        <CloseIcon />
                    </Icon>
                </RemoveButton>
            )}
            <TitleWrapper isHighlighted={isHighlighted} isOverlapped={isOverlapped}>
                {lecture.name + lecture.subtitle}
            </TitleWrapper>
            <DescWrapper isHighlighted={isHighlighted} isOverlapped={isOverlapped}>
                {lecture.professors.map((prof) => prof.name).join(", ")}
            </DescWrapper>
            <DescWrapper isHighlighted={isHighlighted} isOverlapped={isOverlapped}>
                ({timeBlock.buildingCode}) {timeBlock.roomName}
            </DescWrapper>
        </TileWrapper>
    )
}

type LectureTileMemoProps = React.ComponentProps<typeof LectureTile>

const arePropsEqual = (
    prevProps: Readonly<LectureTileMemoProps>,
    nextProps: Readonly<LectureTileMemoProps>,
) => {
    if (
        prevProps.cellWidth !== nextProps.cellWidth ||
        prevProps.cellHeight !== nextProps.cellHeight ||
        prevProps.isSelected !== nextProps.isSelected ||
        prevProps.isHovered !== nextProps.isHovered ||
        prevProps.hoverSelectBanned !== nextProps.hoverSelectBanned ||
        prevProps.isOverlapped !== nextProps.isOverlapped ||
        prevProps.removeFunction !== nextProps.removeFunction
    ) {
        return false
    }

    if (
        prevProps.lecture.courseId !== nextProps.lecture.courseId ||
        prevProps.lecture.name !== nextProps.lecture.name
    ) {
        return false
    }

    if (prevProps.lecture.professors.length !== nextProps.lecture.professors.length) {
        return false
    }
    if (
        !prevProps.lecture.professors.every(
            (prevProf, i) => prevProf.name === nextProps.lecture.professors[i]?.name,
        )
    ) {
        return false
    }

    if (
        prevProps.timeBlock.begin !== nextProps.timeBlock.begin ||
        prevProps.timeBlock.end !== nextProps.timeBlock.end ||
        prevProps.timeBlock.buildingCode !== nextProps.timeBlock.buildingCode ||
        prevProps.timeBlock.roomName !== nextProps.timeBlock.roomName
    ) {
        return false
    }

    return true
}

export default memo(LectureTile, arePropsEqual)
