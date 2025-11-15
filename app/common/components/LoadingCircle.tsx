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

export default function LoadingCircle() {
    const theme = createTheme({})

    return (
        <LoadingCircleWrapper>
            <ThemeProvider theme={theme}>
                <CircularProgress color="inherit" />
            </ThemeProvider>
        </LoadingCircleWrapper>
    )
}
