import React from "react"

import { describe, expect, it } from "vitest"

import { render, screen } from "@/test/test-utils"

import FlexWrapper from "./FlexWrapper"

describe("FlexWrapper", () => {
    it("renders children correctly", () => {
        render(
            <FlexWrapper direction="row" gap={10}>
                <span>Test Child</span>
            </FlexWrapper>,
        )
        expect(screen.getByText("Test Child")).toBeInTheDocument()
    })

    it("applies flex direction correctly", () => {
        const { container } = render(
            <FlexWrapper direction="column" gap={20}>
                <span>Content</span>
            </FlexWrapper>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ flexDirection: "column" })
    })

    it("applies gap correctly", () => {
        const { container } = render(
            <FlexWrapper direction="row" gap={16}>
                <span>Content</span>
            </FlexWrapper>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ gap: "16px" })
    })

    it("applies justify-content correctly", () => {
        const { container } = render(
            <FlexWrapper direction="row" gap={0} justify="center">
                <span>Content</span>
            </FlexWrapper>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ justifyContent: "center" })
    })

    it("applies align-items correctly", () => {
        const { container } = render(
            <FlexWrapper direction="row" gap={0} align="stretch">
                <span>Content</span>
            </FlexWrapper>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ alignItems: "stretch" })
    })

    it("applies padding correctly", () => {
        const { container } = render(
            <FlexWrapper direction="row" gap={0} padding="10px 20px">
                <span>Content</span>
            </FlexWrapper>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ padding: "10px 20px" })
    })

    it("defaults justify-content to flex-start", () => {
        const { container } = render(
            <FlexWrapper direction="row" gap={0}>
                <span>Content</span>
            </FlexWrapper>,
        )
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toHaveStyle({ justifyContent: "flex-start" })
    })
})
