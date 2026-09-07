import { describe, expect, it } from "vitest"

import { render, screen } from "@/test/test-utils"

import ReviewScoreSummary from "./ReviewScoreSummary"

describe("ReviewScoreSummary", () => {
    it("renders grade, load, and speech summaries in contract order", () => {
        render(
            <ReviewScoreSummary
                averageGrade={4.5}
                averageLoad={2}
                averageSpeech={3}
                reviewCount={2}
                labels={{ grade: "grade", load: "load", speech: "speech" }}
            />,
        )

        expect(screen.getByText("A")).toBeInTheDocument()
        expect(screen.getByText("C-")).toBeInTheDocument()
        expect(screen.getByText("B-")).toBeInTheDocument()
        expect(
            screen.getAllByText(/grade|load|speech/).map((node) => node.textContent),
        ).toEqual(["grade", "load", "speech"])
    })
})
