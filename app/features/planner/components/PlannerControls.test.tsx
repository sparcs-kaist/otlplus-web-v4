import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { describe, expect, it } from "vitest"

import darkTheme from "@/styles/themes/dark"
import { render, screen } from "@/test/test-utils"

import { ActionButton, StatusNotice } from "./PlannerControls"

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
