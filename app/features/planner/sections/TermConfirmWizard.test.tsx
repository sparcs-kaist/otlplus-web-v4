import { describe, expect, it, vi } from "vitest"

import { render, screen } from "@/test/test-utils"

import { createPlanner, csCourse } from "../domain/testFixtures"
import { TermConfirmWizard } from "./TermConfirmWizard"

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key, i18n: { resolvedLanguage: "en" } }),
}))

function pastFutureItem(id: number) {
    return {
        id,
        item_type: "FUTURE" as const,
        is_excluded: false,
        year: 2024,
        semester: 3 as const,
        course: csCourse,
    }
}

describe("TermConfirmWizard", () => {
    it("wizard-hidden-without-past-items: renders nothing for future-only plans", () => {
        const futureOnly = {
            ...createPlanner({ future_items: [{ ...pastFutureItem(-2), year: 2027 }] }),
        }
        const { container } = render(
            <TermConfirmWizard planner={futureOnly} busy={false} onConfirm={vi.fn()} />,
        )

        expect(container).toBeEmptyDOMElement()
    })

    it("wizard-lists-past-future-items: surfaces each past planned course", () => {
        render(
            <TermConfirmWizard
                planner={createPlanner({
                    future_items: [pastFutureItem(-2), pastFutureItem(-3)],
                })}
                busy={false}
                onConfirm={vi.fn()}
            />,
        )

        expect(screen.getAllByRole("checkbox")).toHaveLength(2)
    })

    it("wizard-confirm-emits-selected: emits only the checked items", async () => {
        const user = vi.fn(async () => {})
        render(
            <TermConfirmWizard
                planner={createPlanner({
                    future_items: [pastFutureItem(-2), pastFutureItem(-3)],
                })}
                busy={false}
                onConfirm={user}
            />,
        )

        const firstCheckbox = screen.getAllByRole("checkbox")[0]
        if (firstCheckbox === undefined) throw new Error("Expected checkboxes")
        firstCheckbox.click()
        screen.getByRole("button", { name: "planner.wizard.confirm" }).click()

        await vi.waitFor(() => {
            expect(user).toHaveBeenCalledWith([expect.objectContaining({ id: -3 })])
        })
    })
})
