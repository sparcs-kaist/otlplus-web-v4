import { type HTMLAttributes, type MouseEventHandler, type ReactNode, memo } from "react"

import styled from "@emotion/styled"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlined"
import { ThemeProvider, createTheme } from "@mui/material"

interface IconProps extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "children" | "color" | "onClick"
> {
    children: ReactNode
    size: number
    onClick?: MouseEventHandler<HTMLDivElement>
    color?: string
}

const theme = createTheme()

const IconWrapper = styled.div<{ size: string; clickable: boolean; color: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    display: flex;
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};

    & > svg {
        width: 100%;
        height: 100%;
    }
`

const Icon: React.FC<IconProps> = ({
    children,
    size,
    onClick = undefined,
    color = "inherit",
    ...rest
}) => {
    if (!children) {
        return (
            <IconWrapper
                onClick={onClick}
                size={`${size}px`}
                clickable={!!onClick}
                color={color}
                {...rest}
            >
                <ThemeProvider theme={theme}>
                    <ErrorOutlineIcon style={{ fontSize: `${size}px`, color }} />
                </ThemeProvider>
            </IconWrapper>
        )
    }

    return (
        <IconWrapper
            onClick={onClick}
            size={`${size}px`}
            clickable={!!onClick}
            color={color}
            {...rest}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </IconWrapper>
    )
}

export default memo(Icon)
