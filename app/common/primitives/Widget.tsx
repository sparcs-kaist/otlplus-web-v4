import type { ReactNode } from "react"

import styled from "@emotion/styled"

import FlexWrapper, { type FlexWrapperProps } from "@/common/primitives/FlexWrapper"

const WidgetInner = styled(FlexWrapper)<{
    width: number | string | undefined
    maxWidth?: number | string | undefined
    borderRadius?: number
}>`
    width: ${(props) =>
        typeof props.width === "number" ? `${props.width}px` : (props.width ?? "auto")};
    max-width: ${(props) =>
        typeof props.maxWidth === "number"
            ? `${props.maxWidth}px`
            : (props.maxWidth ?? "none")};
    background: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: ${(props) => props.borderRadius}px;
`

interface WidgetProps extends FlexWrapperProps {
    width?: number | string | undefined
    maxWidth?: number | string | undefined
    borderRadius?: number
    children?: ReactNode | null
}

function Widget({
    width = undefined,
    maxWidth = undefined,
    borderRadius = 16,
    children = null,
    ...props
}: WidgetProps) {
    return (
        <WidgetInner
            width={width}
            maxWidth={maxWidth}
            borderRadius={borderRadius}
            {...props}
        >
            {children}
        </WidgetInner>
    )
}

export default Widget
