import { describe, expect, it, vi } from "vitest"

import { render, screen } from "@/test/test-utils"

import { createPlanner } from "../domain/testFixtures"
import PlannerItemCard from "./PlannerItemCard"

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

describe("PlannerItemCard", () => {
    it("labels academic credits and AU separately", () => {
        const item = {
            id: -2,
            item_type: "ARBITRARY" as const,
            is_excluded: false,
            year: 2024,
            semester: 1 as const,
            department: null,
            type: "General Required",
            type_en: "General Required",
            credit: 0,
            credit_au: 2,
        }
        const planner = createPlanner({ arbitrary_items: [item] })

        render(
            <PlannerItemCard
                planner={planner}
                item={item}
                title="Physical Education"
                code="ARBITRARY"
                busy={false}
                onUpdate={vi.fn()}
                onRemove={vi.fn()}
            />,
        )

        expect(
            screen.getByText(
                "ARBITRARY · 0planner.items.credits · 2 planner.items.au",
            ),
        ).toBeInTheDocument()
    })
})
