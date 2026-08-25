import { describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"

import { createPlanner, csMajorTrack, generalTrack } from "../domain/testFixtures"
import { TrackSettings } from "./TrackSettings"

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key, i18n: { resolvedLanguage: "ko" } }),
}))

const tracks = {
    general: [generalTrack],
    major: [csMajorTrack],
    additional: [
        {
            id: 901,
            start_year: 2020,
            end_year: 2100,
            type: "MINOR" as const,
            department: {
                id: 110,
                name: "물리학과",
                name_en: "Department of Physics",
                code: "PH",
            },
            major_required: 0,
            major_elective: 21,
        },
        {
            id: 902,
            start_year: 2020,
            end_year: 2100,
            type: "MINOR" as const,
            department: {
                id: 151,
                name: "수리과학과",
                name_en: "Department of Mathematical Sciences",
                code: "MAS",
            },
            major_required: 0,
            major_elective: 21,
        },
    ],
}

function setup() {
    return render(
        <TrackSettings
            planner={createPlanner()}
            tracks={tracks}
            busy={false}
            onSave={vi.fn(async () => {})}
        />,
    )
}

function additionalOptions(): HTMLOptionElement[] {
    const listbox = screen.getByRole("listbox")
    return Array.from(listbox.querySelectorAll("option"))
}

describe("TrackSettings additional track browsing", () => {
    it("additional-options-all-visible: lists every additional track initially", () => {
        setup()

        expect(additionalOptions()).toHaveLength(2)
    })

    it("additional-filter-narrows-by-korean: typing a ko name keeps matches", () => {
        setup()

        fireEvent.change(
            screen.getByRole("textbox", { name: "planner.settings.additionalFilter" }),
            {
                target: { value: "물리" },
            },
        )

        const options = additionalOptions()
        expect(options).toHaveLength(1)
        expect(options[0]?.value).toBe("901")
    })

    it("additional-filter-narrows-by-english: typing an en name keeps matches", () => {
        setup()

        fireEvent.change(
            screen.getByRole("textbox", { name: "planner.settings.additionalFilter" }),
            {
                target: { value: "Mathematical" },
            },
        )

        const options = additionalOptions()
        expect(options).toHaveLength(1)
        expect(options[0]?.value).toBe("902")
    })

    it("additional-filter-empty-restores-all: clearing the filter restores the catalog", () => {
        setup()

        const input = screen.getByRole("textbox", {
            name: "planner.settings.additionalFilter",
        })
        fireEvent.change(input, { target: { value: "물리" } })
        fireEvent.change(input, { target: { value: "" } })

        expect(additionalOptions()).toHaveLength(2)
    })
})
