import type { ReactNode } from "react"

import { Tooltip as MUITooltip, ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme()

export default function Tooltip({
    title,
    children,
}: {
    title: string
    children: ReactNode
}) {
    return (
        <ThemeProvider theme={theme}>
            <MUITooltip
                title={title}
                placement="top"
                arrow
                describeChild
                disableInteractive
            >
                <span style={{ display: "inline-flex", flexShrink: 0 }}>{children}</span>
            </MUITooltip>
        </ThemeProvider>
    )
}
