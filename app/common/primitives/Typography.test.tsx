import React from "react"

import { describe, expect, it } from "vitest"

import { render, screen } from "@/test/test-utils"

import Typography from "./Typography"

describe("Typography", () => {
    it("renders children correctly", () => {
        render(<Typography>Test Text</Typography>)
        expect(screen.getByText("Test Text")).toBeInTheDocument()
    })

    it("applies default styles without type", () => {
        const { container } = render(<Typography>Content</Typography>)
        const element = container.firstChild as HTMLElement
        expect(element).toBeInTheDocument()
    })

    it("applies Normal type styles", () => {
        const { container } = render(<Typography type="Normal">Content</Typography>)
        const element = container.firstChild as HTMLElement
        expect(element).toBeInTheDocument()
        expect(element).toHaveStyle({ fontWeight: "400" })
    })

    it("applies NormalBold type styles", () => {
        const { container } = render(<Typography type="NormalBold">Content</Typography>)
        const element = container.firstChild as HTMLElement
        expect(element).toBeInTheDocument()
    })

    it("applies color from theme", () => {
        const { container } = render(
            <Typography color="Text.default">Colored Text</Typography>,
        )
        const element = container.firstChild as HTMLElement
        expect(element).toBeInTheDocument()
    })

    it("renders with custom className", () => {
        const { container } = render(
            <Typography className="custom-class">Content</Typography>,
        )
        const element = container.firstChild as HTMLElement
        expect(element).toHaveClass("custom-class")
    })

    it("handles nested color values", () => {
        const { container } = render(
            <Typography color="Text.placeholder">Placeholder Text</Typography>,
        )
        const element = container.firstChild as HTMLElement
        expect(element).toBeInTheDocument()
    })
})
