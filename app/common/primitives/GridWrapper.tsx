import styled from "@emotion/styled"

export interface GridWrapperProps {
    columns: string
    rows: string
    gap: string
    flow: "row" | "column"
    alignItems?: "stretch" | "center" | "start" | "end"
    justifyItems?: "stretch" | "center" | "start" | "end"
    alignContents?:
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "space-between"
        | "space-around"
        | "space-evenly"
    justifyContents?:
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "space-between"
        | "space-around"
        | "space-evenly"
    padding?: string
}

const GridWrapper = styled.div<GridWrapperProps>`
    width: 100%;
    height: 100%;
    display: grid;
    position: relative;
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
    gap: ${({ gap }) => gap};
    align-items: ${({ alignItems }) => alignItems ?? "start"};
    justify-items: ${({ justifyItems }) => justifyItems ?? "start"};
    align-content: ${({ alignContents }) => alignContents ?? "start"};
    justify-content: ${({ justifyContents }) => justifyContents ?? "start"};
    grid-auto-flow: ${({ flow }) => flow};
    padding: ${({ padding }) => padding ?? "0px"};
`

export default GridWrapper
