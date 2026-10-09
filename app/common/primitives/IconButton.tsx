import type { ReactNode } from "react"

import { IconButton as MUIIconButton, ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme()

interface IconButtonProps {
    children?: ReactNode | null
    styles?: React.CSSProperties | null
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | null
    "aria-label"?: string
    "aria-pressed"?: boolean
    disabled?: boolean
}

export const IconButton = (props: IconButtonProps) => {
    return (
        <ThemeProvider theme={theme}>
            <MUIIconButton
                aria-label={props["aria-label"]}
                aria-pressed={props["aria-pressed"]}
                disabled={props.disabled}
                onClick={props.onClick}
                style={props.styles ?? undefined}
            >
                {props.children}
            </MUIIconButton>
        </ThemeProvider>
    )
}
