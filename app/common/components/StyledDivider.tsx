import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const StyledDividerRow = styled.div<{ color: string }>`
    width: 100%;
    height: 1px;
    background: ${({ color }) => color};
`

const StyledDividerColumn = styled.div<{ color: string }>`
    width: 1px;
    background: ${({ color }) => color};
    align-self: stretch;
`

const StyledDivider: React.FC<{ direction?: "column" | "row"; color?: string }> = ({
    direction = "row",
    color,
}) => {
    const theme = useTheme()

    return direction == "row" ? (
        <StyledDividerRow color={color ? color : theme.colors.Line.divider} />
    ) : (
        <StyledDividerColumn color={color ? color : theme.colors.Line.divider} />
    )
}

export default StyledDivider
