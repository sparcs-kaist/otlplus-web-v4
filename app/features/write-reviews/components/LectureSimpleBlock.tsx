import { useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { type ThemeType } from "@/styles/themes"
import useUserStore from "@/utils/zustand/useUserStore"

interface LectureSimpleBlockProps {
    lecture: {
        name: string
        code: string
    }
    isSelected: boolean
    written: boolean
}

const HoveredStyle = (theme: ThemeType) => css`
    background: ${theme.colors.Background.Block.highlight};
    cursor: pointer;
`

const SelectedStyle = (theme: ThemeType) => css`
    background: ${theme.colors.Background.Block.darker};
`

const BlockInner = styled(FlexWrapper)<{
    isHovered: boolean
    isSelected: boolean
    written: boolean
}>`
    background: ${({ theme }) => theme.colors.Background.Block.default};
    border-radius: 5px;
    opacity: ${({ written, isSelected }) => (isSelected ? 1 : written ? 0.3 : 1)};
    text-align: center;

    ${({ theme, isHovered }) => isHovered && HoveredStyle(theme)};
    ${({ theme, isSelected }) => isSelected && SelectedStyle(theme)};
`

function LectureSimpleBlock({ lecture, isSelected, written }: LectureSimpleBlockProps) {
    const { status } = useUserStore()
    const [isHovered, setIsHovered] = useState(false)

    return (
        <BlockInner
            direction="column"
            align="center"
            gap={2}
            padding="8px 10px"
            isHovered={isHovered}
            isSelected={isSelected}
            written={written}
            onMouseOver={() => {
                if (status === "idle") return
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                if (status === "idle") return
                setIsHovered(false)
            }}
        >
            <FlexWrapper
                direction="row"
                gap={8}
                justify={written ? "space-between" : "center"}
                align="center"
                style={{ width: "100%" }}
            >
                {written && <div style={{ width: "37px" }}></div>}
                <Typography type="NormalBold" color="Text.default">
                    {lecture.name}
                </Typography>
                {written && (
                    <Typography type="Smaller" color="Text.lighter">
                        작성 완료
                    </Typography>
                )}
            </FlexWrapper>
            <Typography type="Normal" color="Text.default">
                {lecture.code}
            </Typography>
        </BlockInner>
    )
}

export default LectureSimpleBlock
