import { describe, expect, it, vi } from "vitest"

import { render, screen } from "@/test/test-utils"

import { createPlanner, csCourse } from "../domain/testFixtures"
import { CurriculumRoadmap } from "./CurriculumRoadmap"

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { resolvedLanguage: "en" },
    }),
}))

const futureItem = {
    id: -2,
    item_type: "FUTURE" as const,
    is_excluded: false,
    year: 2023,
    semester: 1 as const,
    course: csCourse,
}

describe("CurriculumRoadmap", () => {
    it("roadmap-renders-year-rows: one row per planner year", () => {
        render(
            <CurriculumRoadmap planner={createPlanner({ future_items: [futureItem] })} />,
        )

        expect(screen.getAllByTestId("roadmap-year-row")).toHaveLength(4)
    })

    it("roadmap-groups-by-slot: chips land in their year/semester cell", () => {
        render(
            <CurriculumRoadmap planner={createPlanner({ future_items: [futureItem] })} />,
        )

        const cell = document.querySelector('[data-roadmap-cell="2023-1"]')
        if (cell === null) throw new Error("Expected the 2023-1 roadmap cell")
        expect(cell.textContent).toContain("Programming Basics")
    })

    it("roadmap-empty-hint: shows a hint without planned items", () => {
        render(<CurriculumRoadmap planner={createPlanner()} />)

        expect(screen.getByText("planner.roadmap.empty")).toBeInTheDocument()
    })
})
