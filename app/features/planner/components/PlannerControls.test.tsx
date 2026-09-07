import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { describe, expect, it } from "vitest"

import darkTheme from "@/styles/themes/dark"
import { render, screen } from "@/test/test-utils"

import { ActionButton, Field, Select, StatusNotice } from "./PlannerControls"

const SurfaceProbe = styled.div`
    color: ${({ theme }) => theme.colors.Text.disable};
    background: ${({ theme }) => theme.colors.Background.Block.default};
`

describe("PlannerControls under the dark theme", () => {
    it("statusnotice-dark-tokens: renders the dedicated notice token pair", () => {
        render(
            <ThemeProvider theme={darkTheme}>
                <StatusNotice role="note">summary disclaimer</StatusNotice>
            </ThemeProvider>,
        )

        const notice = screen.getByRole("note")
        expect(notice).toHaveStyle({
            color: darkTheme.colors.Notice.text,
            backgroundColor: darkTheme.colors.Notice.background,
            borderColor: darkTheme.colors.Notice.border,
        })
    })

    it("actionbutton-disabled-explicit: disables without opacity fading", () => {
        render(
            <ThemeProvider theme={darkTheme}>
                <ActionButton type="button" disabled>
                    copy
                </ActionButton>
            </ThemeProvider>,
        )

        const button = screen.getByRole("button", { name: "copy" })
        expect(button).not.toHaveStyle({ opacity: "0.45" })
        expect(button).toHaveStyle({
            color: darkTheme.colors.Text.disable,
            backgroundColor: darkTheme.colors.Background.Input.disabled,
        })
    })

    it("exposes the dark disabled pair used by explicit treatments", () => {
        render(
            <ThemeProvider theme={darkTheme}>
                <SurfaceProbe data-testid="probe" />
            </ThemeProvider>,
        )

        expect(screen.getByTestId("probe")).toHaveStyle({
            color: "#8a8a8a",
            backgroundColor: "#282828",
        })
    })
})

describe("PlannerControls light-theme parity", () => {
    it("actionbutton-shared-typography: uses the shared 14px normal scale", () => {
        render(<ActionButton type="button">search</ActionButton>)

        expect(screen.getByRole("button", { name: "search" })).toHaveStyle({
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "17.5px",
        })
    })

    it("field-disabled-treatment: disables fields with explicit tokens", () => {
        render(<Field data-testid="field" disabled placeholder="keyword" />)

        const field = screen.getByTestId("field")
        expect(field).toHaveStyle({
            backgroundColor: "#F5F5F5",
            color: "#AAAAAA",
        })
    })

    it("select-disabled-treatment: disables selects with explicit tokens", () => {
        render(
            <Select data-testid="select" disabled aria-label="semester">
                <option value="1">1</option>
            </Select>,
        )

        const select = screen.getByTestId("select")
        expect(select).toHaveStyle({
            backgroundColor: "#F5F5F5",
            color: "#AAAAAA",
        })
    })
})
