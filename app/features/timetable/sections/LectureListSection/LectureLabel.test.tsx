import React from "react"

import { describe, expect, it } from "vitest"

import { render, screen } from "@/test/test-utils"

import LectureLabel from "./LectureLabel"

describe("LectureLabel", () => {
    it("renders nothing for graduate lectures without class metadata", () => {
        const { container } = render(<LectureLabel classNo="" subtitle="" />)

        expect(container).toBeEmptyDOMElement()
    })

    it("renders available lecture metadata", () => {
        render(<LectureLabel classNo="A" subtitle="Special Topics" />)

        expect(screen.getByText("A Special Topics")).toBeInTheDocument()
    })
})
