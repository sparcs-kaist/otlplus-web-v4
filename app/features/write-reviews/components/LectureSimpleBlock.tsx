import { useEffect, useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { type ThemeType } from "@/styles/themes"

interface LectureSimpleBlockProps {
    lecture: {
        name: string
        code: string
    }
    isSelected: boolean
}

const HoveredStyle = (theme: ThemeType) => css`
    background: ${theme.colors.Background.Block.highlight};
`

const SelectedStyle = (theme: ThemeType) => css`
    background: ${theme.colors.Background.Block.darker};
`

const BlockInner = styled(FlexWrapper)<{ isHovered: boolean; isSelected: boolean }>`
    background: ${({ theme }) => theme.colors.Background.Block.default};
    cursor: pointer;
    border-radius: 5px;

    ${({ theme, isHovered }) => isHovered && HoveredStyle(theme)};
    ${({ theme, isSelected }) => isSelected && SelectedStyle(theme)};
`

function LectureSimpleBlock({ lecture, isSelected }: LectureSimpleBlockProps) {
    const [isHovered, setIsHovered] = useState(false)
    useEffect(() => {
        console.log(lecture, isSelected)
    }, [isSelected])

    return (
        <BlockInner
            direction="column"
            align="center"
            gap={2}
            padding="8px 0px"
            isHovered={isHovered}
            isSelected={isSelected}
            onMouseOver={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <Typography type="NormalBold" color="Text.default">
                {lecture.name}
            </Typography>
            <Typography type="Normal" color="Text.default">
                {lecture.code}
            </Typography>
        </BlockInner>
    )
}

export default LectureSimpleBlock
