import { describe, expect, it } from "vitest"

import { render } from "@/test/test-utils"

import { createPlanner, csCourse } from "../domain/testFixtures"
import { PlannerSummary } from "./PlannerSummary"

const futureItem = {
    id: -2,
    item_type: "FUTURE" as const,
    is_excluded: false,
    year: 2023,
    semester: 1 as const,
    course: csCourse,
}

function track(container: HTMLElement, trackId: string): HTMLElement {
    const element = container.querySelector(`[data-track="${trackId}"]`)
    if (!(element instanceof HTMLElement)) {
        throw new Error(`Expected the ${trackId} progress track to render`)
    }
    return element
}

describe("PlannerSummary progress bars", () => {
    it("planned-segment-striped: stripes the planned portion of the bar", () => {
        const { container } = render(
            <PlannerSummary planner={createPlanner({ future_items: [futureItem] })} />,
        )

        const planned = track(container, "totalCredit").querySelector<HTMLElement>(
            '[data-segment="planned"]',
        )
        if (planned === null) throw new Error("Expected a planned segment")
        expect(window.getComputedStyle(planned).backgroundImage).toContain(
            "repeating-linear-gradient",
        )
    })

    it("planned-zero-renders-solid-only: omits the stripe without planned credits", () => {
        const { container } = render(<PlannerSummary planner={createPlanner()} />)

        expect(container.querySelectorAll('[data-segment="planned"]')).toHaveLength(0)
    })

    it("widths-proportional: sizes segments from taken and planned credits", () => {
        const electiveCourse = {
            ...csCourse,
            id: -5,
            type: "전공선택",
            type_en: "Major Elective",
        }
        const { container } = render(
            <PlannerSummary
                planner={createPlanner({
                    future_items: [
                        futureItem,
                        {
                            ...futureItem,
                            id: -6,
                            course: electiveCourse,
                        },
                    ],
                })}
            />,
        )

        const totalTrack = track(container, "totalCredit")
        const taken = totalTrack.querySelector<HTMLElement>('[data-segment="taken"]')
        const planned = totalTrack.querySelector<HTMLElement>('[data-segment="planned"]')
        if (taken === null || planned === null) {
            throw new Error("Expected both bar segments")
        }
        expect(Number.parseFloat(taken.dataset.ratio ?? "NaN")).toBeCloseTo(0, 5)
        expect(Number.parseFloat(planned.dataset.ratio ?? "NaN")).toBeCloseTo(6 / 130, 5)

        const electiveTrack = track(container, "PRIMARY:CS:elective")
        const electivePlanned = electiveTrack.querySelector<HTMLElement>(
            '[data-segment="planned"]',
        )
        if (electivePlanned === null) throw new Error("Expected an elective stripe")
        expect(Number.parseFloat(electivePlanned.dataset.ratio ?? "NaN")).toBeCloseTo(
            3 / 21,
            5,
        )
    })
})
