import type { MouseEventHandler } from "react"

import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"

import Icon from "@/common/primitives/Icon"

const Button = styled.button<{ iconSize: number; blocked: boolean }>`
    width: ${({ iconSize }) => Math.max(iconSize, 28)}px;
    height: ${({ iconSize }) => Math.max(iconSize, 28)}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    cursor: ${({ blocked }) => (blocked ? "not-allowed" : "pointer")};
    opacity: ${({ blocked }) => (blocked ? 0.55 : 1)};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        cursor: default;
    }
`

interface LectureAddButtonProps {
    readonly ariaDisabled?: boolean
    readonly ariaLabel: string
    readonly color: string
    readonly disabled: boolean
    readonly onClick: MouseEventHandler<HTMLButtonElement>
    readonly size: number
    readonly title?: string
}

export default function LectureAddButton({
    ariaDisabled = false,
    ariaLabel,
    color,
    disabled,
    onClick,
    size,
    title,
}: LectureAddButtonProps) {
    return (
        <Button
            type="button"
            aria-disabled={ariaDisabled}
            aria-label={ariaLabel}
            blocked={ariaDisabled || disabled}
            disabled={disabled}
            iconSize={size}
            onClick={onClick}
            title={title}
        >
            <Icon size={size} color={color}>
                <AddIcon />
            </Icon>
        </Button>
    )
}
