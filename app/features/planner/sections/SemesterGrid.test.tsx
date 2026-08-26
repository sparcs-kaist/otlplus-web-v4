import { describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"

import { createPlanner } from "../domain/testFixtures"
import { SemesterGrid } from "./SemesterGrid"

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key, i18n: { resolvedLanguage: "en" } }),
}))

function setup(busy = false) {
    const onRequestAdd = vi.fn()
    const utils = render(
        <SemesterGrid
            planner={createPlanner()}
            busy={busy}
            onUpdate={vi.fn()}
            onRemove={vi.fn()}
            onRequestAdd={onRequestAdd}
        />,
    )
    return { onRequestAdd, ...utils }
}

describe("SemesterGrid quick-add chip", () => {
    it("empty-slot-renders-chip: renders one chip per empty semester", () => {
        setup()

        expect(
            screen
                .getAllByRole("button")
                .filter((element) => element.getAttribute("data-slot-chip") === "true"),
        ).toHaveLength(16)
    })

    it("chip-fires-onRequestAdd: passes the exact year and semester", () => {
        const { onRequestAdd } = setup()

        const winterChip = screen
            .getAllByRole("button")
            .filter((element) => element.getAttribute("data-slot-chip") === "true")[3]
        if (!(winterChip instanceof HTMLElement)) {
            throw new Error("Expected the Winter chip to render")
        }
        fireEvent.click(winterChip)

        expect(onRequestAdd).toHaveBeenCalledWith(2023, 4)
    })

    it("busy-disables-chips: prevents slot requests while busy", () => {
        setup(true)

        const chips = screen
            .getAllByRole("button")
            .filter((element) => element.getAttribute("data-slot-chip") === "true")
        expect(chips.length).toBeGreaterThan(0)
        for (const chip of chips) {
            expect(chip).toBeDisabled()
        }
    })

    it("chips-disable-explicitly: uses token colors instead of opacity", () => {
        setup(true)

        const chip = screen
            .getAllByRole("button")
            .filter((element) => element.getAttribute("data-slot-chip") === "true")[0]
        if (!(chip instanceof HTMLElement)) {
            throw new Error("Expected a slot chip")
        }
        expect(chip).not.toHaveStyle({ opacity: "0.6" })
        expect(chip).toHaveStyle({
            color: "#AAAAAA",
            backgroundColor: "#F5F5F5",
        })
    })
})
