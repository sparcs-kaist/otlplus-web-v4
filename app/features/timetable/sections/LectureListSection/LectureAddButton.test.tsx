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
})
