import { type CSSProperties, useEffect } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"

import Icon from "@/common/primitives/Icon"
import type { ClassTime, Lecture } from "@/common/schemas/lecture"
import useThemeStore from "@/utils/zustand/useThemeStore"

// tile Color를 mapping 해주는 부분
export const colorMap: Array<CSSProperties["color"]> = [
    "#F2CECE",
    "#F4B3AE",
    "#F2BCA0",
    "#F0D3AB",
    "#F1E1A9",
    "#F4F2B3",
    "#DBF4BE",
    "#BEEDD7",
    "#B7D2DE",
    "#C9DAF4",
    "#B4D3ED",
    "#B9C5ED",
    "#D8C1F0",
    "#EBCAEF",
    "#F4BADB",
]

export const darkColorMap: Array<CSSProperties["color"]> = [
    "#EDA0A0",
    "#F5837A",
    "#F49A6B",
    "#F0BE78",
    "#F1D676",
    "#F4F180",
    "#C3F38C",
    "#8FE9BF",
    "#8BDBD4",
    "#99DDF1",
    "#84BCEA",
    "#89A0EA",
    "#BE92EC",
    "#E19DE9",
    "#F487C5",
]

const TileWrapper = styled.div<{
    course_id: number
    duration: number
    cellWidth: number
    isHighlighted: boolean
    isOverlapped: boolean
    cellHeight: number
    isDarkMode: boolean
}>`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: ${({ cellWidth }) => `${cellWidth}px`};
    height: ${({ duration, cellHeight }) => `${duration * cellHeight - 4}px`};
    margin-bottom: 2px;
    margin-top: 2px;
    justify-content: center;
    background-color: ${({
        theme,
        course_id,
        isHighlighted,
        isOverlapped,
        isDarkMode,
    }) =>
        isOverlapped
            ? theme.colors.Text.default
            : isHighlighted
              ? theme.colors.Highlight.default
              : isDarkMode
                ? darkColorMap[course_id % 15]
                : colorMap[course_id % 15]};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: pointer;
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
    isOverlapped?: boolean
    removeFunction?: (lectureId: number) => void
}> = ({
    lecture,
    timeBlock,
    cellWidth,
    cellHeight,
    isSelected = false,
    isHovered = false,
    isOverlapped = false,
    removeFunction,
}) => {
    const { displayedTheme } = useThemeStore()

    const isHighlighted = isSelected || isHovered || false

    return (
        <TileWrapper
            course_id={lecture.courseId}
            duration={(timeBlock.end - timeBlock.begin) / 30}
            cellWidth={cellWidth}
            isHighlighted={isHighlighted}
            isOverlapped={isOverlapped}
            cellHeight={cellHeight}
            isDarkMode={displayedTheme === "dark"}
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
                {lecture.name}
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

export default LectureTile
