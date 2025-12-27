import type { JSX } from "react"

const renderGrid = (
    n: number,
    m: number,
    cellWidth: number,
    cellHeight: number,
    colPadding: number,
    placeholderIndex: number[],
    placeholderWidth: number,
    pageStart: number,
) => {
    const grid: JSX.Element[] = []
    const lastRowIndex = n - 1
    const lastColIndex = m - 1

    for (let i = 0; i < n; i++) {
        const row: JSX.Element[] = []
        const isEvenRow = i % 2 === 0
        const isLastRow = i === lastRowIndex

        for (let j = 0; j < m; j++) {
            const isShown = !placeholderIndex.includes(j + pageStart)
            const isLastCol = j === lastColIndex

            row.push(
                <div
                    key={j}
                    style={{
                        width: isShown ? cellWidth : placeholderWidth,
                        height: cellHeight,
                        display: "inline-block",
                        textAlign: "center",
                        borderTop: isShown
                            ? isEvenRow
                                ? "1px solid rgba(232, 232, 232, 1)"
                                : "1px dashed rgba(232, 232, 232, 1)"
                            : undefined,
                        borderBottom:
                            isShown && isLastRow
                                ? "1px solid rgba(232, 232, 232, 1)"
                                : undefined,
                        marginRight: isLastCol ? undefined : colPadding,
                    }}
                />,
            )
        }
        grid.push(
            <div key={i} style={{ display: "flex" }}>
                {row}
            </div>,
        )
    }
    return grid
}

export default renderGrid
