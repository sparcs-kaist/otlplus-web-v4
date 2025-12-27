import React from "react"

import { describe, expect, it } from "vitest"

import { render, screen } from "@/test/test-utils"

import Widget from "./Widget"

describe("Widget", () => {
    it("renders children correctly", () => {
        render(
            <Widget direction="column" gap={0}>
                <span>Widget Content</span>
            </Widget>,
        )
        expect(screen.getByText("Widget Content")).toBeInTheDocument()
    })

    it("applies default border radius of 16px", () => {
        const { container } = render(
            <Widget direction="column" gap={0}>
                <span>Content</span>
            </Widget>,
        )
        const widget = container.firstChild as HTMLElement
        expect(widget).toHaveStyle({ borderRadius: "16px" })
    })

    it("applies custom border radius", () => {
        const { container } = render(
            <Widget direction="column" gap={0} borderRadius={12}>
                <span>Content</span>
            </Widget>,
        )
        const widget = container.firstChild as HTMLElement
        expect(widget).toHaveStyle({ borderRadius: "12px" })
    })

    it("applies custom width when provided", () => {
        const { container } = render(
            <Widget direction="column" gap={0} width={300}>
                <span>Content</span>
            </Widget>,
        )
        const widget = container.firstChild as HTMLElement
        expect(widget).toHaveStyle({ width: "300px" })
    })

    it("applies auto width by default", () => {
        const { container } = render(
            <Widget direction="column" gap={0}>
                <span>Content</span>
            </Widget>,
        )
        const widget = container.firstChild as HTMLElement
        expect(widget).toHaveStyle({ width: "auto" })
    })

    it("renders null children without error", () => {
        const { container } = render(<Widget direction="column" gap={0} />)
        expect(container.firstChild).toBeInTheDocument()
    })

    it("passes FlexWrapper props correctly", () => {
        const { container } = render(
            <Widget direction="row" gap={16} justify="center" align="stretch">
                <span>Content</span>
            </Widget>,
        )
        const widget = container.firstChild as HTMLElement
        expect(widget).toHaveStyle({ flexDirection: "row", gap: "16px" })
    })
})
