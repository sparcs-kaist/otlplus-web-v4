import React from "react"

import { describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"

import Icon from "./Icon"

describe("Icon", () => {
    it("renders children correctly", () => {
        render(
            <Icon size={24}>
                <svg data-testid="test-icon" />
            </Icon>,
        )
        expect(screen.getByTestId("test-icon")).toBeInTheDocument()
    })

    it("applies correct size", () => {
        const { container } = render(
            <Icon size={32}>
                <svg />
            </Icon>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ width: "32px", height: "32px" })
    })

    it("applies color prop", () => {
        const { container } = render(
            <Icon size={24} color="red">
                <svg />
            </Icon>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ color: "red" })
    })

    it("defaults to inherit color", () => {
        const { container } = render(
            <Icon size={24}>
                <svg />
            </Icon>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ color: "inherit" })
    })

    it("handles click events", () => {
        const handleClick = vi.fn()
        render(
            <Icon size={24} onClick={handleClick}>
                <svg data-testid="clickable-icon" />
            </Icon>,
        )
        fireEvent.click(screen.getByTestId("clickable-icon").parentElement!)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("shows pointer cursor when clickable", () => {
        const { container } = render(
            <Icon size={24} onClick={() => {}}>
                <svg />
            </Icon>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ cursor: "pointer" })
    })

    it("shows default cursor when not clickable", () => {
        const { container } = render(
            <Icon size={24}>
                <svg />
            </Icon>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ cursor: "default" })
    })

    it("renders fallback icon when children is null", () => {
        const { container } = render(<Icon size={24}>{null}</Icon>)
        expect(container.firstChild).toBeInTheDocument()
    })
})
