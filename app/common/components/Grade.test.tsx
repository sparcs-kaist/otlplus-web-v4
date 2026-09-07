import { ThemeProvider } from "@emotion/react"
import { describe, expect, it } from "vitest"

import darkTheme from "@/styles/themes/dark"
import { render, screen } from "@/test/test-utils"

import Grade from "./Grade"

describe("Grade", () => {
    it("default-border-token-light: draws the faint outline from Line.subtle", () => {
        render(<Grade isSelected={false}>A</Grade>)

        expect(screen.getByRole("button", { name: "A" })).toHaveStyle({
            border: "1px solid rgba(194, 194, 194, 0.2)",
        })
    })

    it("default-border-token-dark: adapts the outline via the dark Line.subtle", () => {
        render(
            <ThemeProvider theme={darkTheme}>
                <Grade isSelected={false}>A</Grade>
            </ThemeProvider>,
        )

        expect(screen.getByRole("button", { name: "A" })).toHaveStyle({
            border: `1px solid ${darkTheme.colors.Line.subtle}`,
        })
    })
})
