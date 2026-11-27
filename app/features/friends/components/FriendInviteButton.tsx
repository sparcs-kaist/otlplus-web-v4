import type { ReactNode } from "react"

import styled from "@emotion/styled"
import CheckIcon from "@mui/icons-material/Check"

import Icon from "@/common/primitives/Icon"

const FriendInviteButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    flex-shrink: 0;
    white-space: nowrap;
    min-height: 44px;
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.Background.Button.default};
    color: ${({ theme }) => theme.colors.Text.default};
    font: inherit;
    font-size: 14px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.Background.Button.dark};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`

// Both labels occupy the same grid cell so success never changes the button width.
const ButtonLabel = styled.span`
    display: inline-grid;

    & > span,
    &::before,
    &::after {
        grid-area: 1 / 1;
    }

    &::before {
        content: attr(data-label);
        visibility: hidden;
    }

    &::after {
        content: attr(data-success-label);
        visibility: hidden;
    }
`

export function FriendInviteButtonContent({
    icon,
    label,
    successLabel,
    succeeded,
}: {
    icon: ReactNode
    label: string
    successLabel: string
    succeeded: boolean
}) {
    return (
        <>
            <Icon size={16} onClick={() => {}}>
                {succeeded ? <CheckIcon /> : icon}
            </Icon>
            <ButtonLabel data-label={label} data-success-label={successLabel}>
                <span>{succeeded ? successLabel : label}</span>
            </ButtonLabel>
        </>
    )
}

export default FriendInviteButton
