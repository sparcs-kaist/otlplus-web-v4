import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router"
import { describe, expect, it, vi } from "vitest"

vi.mock("./useFeatureFlag", () => ({
    useFeatureFlag: vi.fn(() => ({
        enabled: false,
        isReady: true,
        source: "remote" as const,
    })),
}))

const flagModule = await import("./useFeatureFlag")
const { RequireFeatureFlag } = await import("./RequireFeatureFlag")

function mockFlag(enabled: boolean) {
    vi.mocked(flagModule.useFeatureFlag).mockReturnValue({
        enabled,
        isReady: true,
        source: "remote",
    })
}

function renderAtPlanner() {
    return render(
        <MemoryRouter initialEntries={["/planner"]}>
            <Routes>
                <Route
                    path="/planner"
                    element={
                        <RequireFeatureFlag flag="planner-enabled">
                            <div>planner surface</div>
                        </RequireFeatureFlag>
                    }
                />
                <Route path="/" element={<div>home surface</div>} />
            </Routes>
        </MemoryRouter>,
    )
}

describe("RequireFeatureFlag", () => {
    it("renders children when the flag is enabled", () => {
        mockFlag(true)
        renderAtPlanner()

        expect(screen.getByText("planner surface")).toBeInTheDocument()
    })

    it("redirects home when settled and disabled", () => {
        mockFlag(false)
        renderAtPlanner()

        expect(screen.getByText("home surface")).toBeInTheDocument()
        expect(screen.queryByText("planner surface")).not.toBeInTheDocument()
    })

    it("renders nothing while the provider is pending and disabled", () => {
        vi.mocked(flagModule.useFeatureFlag).mockReturnValue({
            enabled: false,
            isReady: false,
            source: "default",
        })
        renderAtPlanner()

        expect(screen.queryByText("home surface")).not.toBeInTheDocument()
        expect(screen.queryByText("planner surface")).not.toBeInTheDocument()
    })
})
