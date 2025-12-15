import React, { forwardRef } from "react"

import styled from "@emotion/styled"
import { CircularProgress, ThemeProvider, createTheme } from "@mui/material"

const LoadingCircleWrapper = styled.div`
    color: ${({ theme }) => theme.colors.Highlight.default};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
`

export default forwardRef<HTMLDivElement, object>(function LoadingCircle(_, ref) {
    const theme = createTheme({})

    return (
        <LoadingCircleWrapper ref={ref}>
            <ThemeProvider theme={theme}>
                <CircularProgress color="inherit" />
            </ThemeProvider>
        </LoadingCircleWrapper>
    )
})
