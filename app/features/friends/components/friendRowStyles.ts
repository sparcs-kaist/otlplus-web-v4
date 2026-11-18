import { type Theme, css } from "@emotion/react"

export const friendRowStyles = ({
    theme,
    $selected,
}: {
    theme: Theme
    $selected: boolean
}) => css`
    cursor: pointer;
    min-height: 44px;
    border-radius: 4px;
    background: ${$selected
        ? theme.colors.Background.Button.dark
        : theme.colors.Background.Section.default};

    &:hover {
        background-color: ${theme.colors.Background.Tab.dark};
    }
`
