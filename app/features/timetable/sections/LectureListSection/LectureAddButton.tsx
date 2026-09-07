import type { MouseEventHandler } from "react"

import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"

import Icon from "@/common/primitives/Icon"

const Button = styled.button<{ iconSize: number }>`
    width: ${({ iconSize }) => iconSize}px;
    height: ${({ iconSize }) => iconSize}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }
`

const TooltipTarget = styled.span`
    display: inline-flex;
`

interface LectureAddButtonProps {
    ariaLabel: string
    color: string
    disabled: boolean
    onClick: MouseEventHandler<HTMLButtonElement>
    size: number
    title?: string
}

export default function LectureAddButton({
    ariaLabel,
    color,
    disabled,
    onClick,
    size,
    title,
}: LectureAddButtonProps) {
    return (
        <TooltipTarget title={title}>
            <Button
                type="button"
                aria-label={ariaLabel}
                disabled={disabled}
                iconSize={size}
                onClick={onClick}
            >
                <Icon size={size} color={color}>
                    <AddIcon />
                </Icon>
            </Button>
        </TooltipTarget>
    )
}
