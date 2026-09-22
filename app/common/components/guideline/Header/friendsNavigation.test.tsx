import { MemoryRouter } from "react-router-dom"
import { describe, expect, it, vi } from "vitest"

import { render, screen } from "@/test/test-utils"

import Menu from "./Menu"
import MobileSidebar from "./MobileSidebar"

vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))
vi.mock("@/libs/featureFlags", () => ({ useFeatureFlag: () => ({ enabled: false }) }))

describe("link-only friends rollout", () => {
    it.each([
        ["desktop", <Menu key="desktop" setMobileSidebarOpen={vi.fn()} />],
        [
            "mobile",
            <MobileSidebar
                key="mobile"
                mobileSidebarOpen
                setMobileSidebarOpen={vi.fn()}
                sidebarHeader={null}
            />,
        ],
    ])("does not advertise friends in the %s navigation", (_device, navigation) => {
        render(<MemoryRouter>{navigation}</MemoryRouter>)
        expect(screen.getByRole("link", { name: "header.timetable" })).toHaveAttribute(
            "href",
            "/timetable",
        )
        expect(screen.queryByText("header.friends")).not.toBeInTheDocument()
        expect(document.querySelector('a[href^="/friends"]')).not.toBeInTheDocument()
    })
})
