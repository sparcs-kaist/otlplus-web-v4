import { describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"

import LectureAddButton from "./LectureAddButton"

describe("LectureAddButton", () => {
    it("does not fire when disabled", () => {
        const onClick = vi.fn()
        render(
            <LectureAddButton
                ariaLabel="Add to timetable"
                color="#000"
                disabled
                onClick={onClick}
                size={15}
            />,
        )

        fireEvent.click(screen.getByRole("button", { name: "Add to timetable" }))

        expect(onClick).not.toHaveBeenCalled()
    })

    it("fires when enabled", () => {
        const onClick = vi.fn()
        render(
            <LectureAddButton
                ariaLabel="Add to timetable"
                color="#000"
                disabled={false}
                onClick={onClick}
                size={15}
            />,
        )

        fireEvent.click(screen.getByRole("button", { name: "Add to timetable" }))

        expect(onClick).toHaveBeenCalledOnce()
    })

    it("does not expose an add activation path while disabled", () => {
        const onClick = vi.fn()
        render(
            <LectureAddButton
                ariaLabel="Add to timetable"
                color="#000"
                disabled
                onClick={onClick}
                size={15}
            />,
        )

        const button = screen.getByRole("button", { name: "Add to timetable" })
        expect(button).toBeDisabled()

        fireEvent.keyDown(button, { key: "Enter" })
        fireEvent.keyDown(button, { key: " " })
        fireEvent.click(button)

        expect(onClick).not.toHaveBeenCalled()
    })

    it("exposes the disabled reason from a hoverable wrapper", () => {
        const onClick = vi.fn()
        render(
            <LectureAddButton
                ariaLabel="Add to timetable"
                color="#000"
                disabled
                onClick={onClick}
                size={15}
                title="Cannot add lectures to My Timetable."
            />,
        )

        const button = screen.getByRole("button", { name: "Add to timetable" })
        const tooltipTarget = screen.getByTitle("Cannot add lectures to My Timetable.")

        expect(tooltipTarget).not.toBe(button)
        expect(tooltipTarget).toContainElement(button)
    })
})
