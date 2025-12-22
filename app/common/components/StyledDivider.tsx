import styled from "@emotion/styled"

const StyledDividerRow = styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.Line.divider};
`

const StyledDividerColumn = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.colors.Line.divider};
    align-self: stretch;
`

const StyledDivider: React.FC<{ direction?: "column" | "row" }> = ({
    direction = "row",
}) => {
    return direction == "row" ? <StyledDividerRow /> : <StyledDividerColumn />
}

export default StyledDivider
