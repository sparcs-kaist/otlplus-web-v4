import React from "react"

import { describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"

import Button from "./Button"

describe("Button", () => {
    it("renders children correctly", () => {
        render(<Button>Click Me</Button>)
        expect(screen.getByText("Click Me")).toBeInTheDocument()
    })

    it("handles click events", () => {
        const handleClick = vi.fn()
        render(<Button onClick={handleClick}>Click Me</Button>)
        fireEvent.click(screen.getByText("Click Me"))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("does not call onClick when disabled", () => {
        const handleClick = vi.fn()
        render(
            <Button type="disabled" onClick={handleClick}>
                Disabled
            </Button>,
        )
        fireEvent.click(screen.getByText("Disabled"))
        expect(handleClick).not.toHaveBeenCalled()
    })

    it("renders with default type", () => {
        const { container } = render(<Button>Default</Button>)
        expect(container.firstChild).toBeInTheDocument()
    })

    it("renders with selected type", () => {
        const { container } = render(<Button type="selected">Selected</Button>)
        expect(container.firstChild).toBeInTheDocument()
    })

    it("renders with highlighted type", () => {
        const { container } = render(<Button type="highlighted">Highlighted</Button>)
        expect(container.firstChild).toBeInTheDocument()
    })

    it("renders with dark type", () => {
        const { container } = render(<Button type="dark">Dark</Button>)
        expect(container.firstChild).toBeInTheDocument()
    })

    it("applies custom padding", () => {
        render(
            <Button $paddingLeft={32} $paddingTop={16}>
                Padded
            </Button>,
        )
        expect(screen.getByText("Padded")).toBeInTheDocument()
    })

    it("expands to full width with $isFlexRow", () => {
        const { container } = render(<Button $isFlexRow>Full Width</Button>)
        const button = container.firstChild as HTMLElement
        expect(button).toHaveStyle({ width: "100%" })
    })

    it("expands to full height with $isFlexColumn", () => {
        const { container } = render(<Button $isFlexColumn>Full Height</Button>)
        const button = container.firstChild as HTMLElement
        expect(button).toHaveStyle({ height: "100%" })
    })
})
