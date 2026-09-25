import { MemoryRouter, Route, Routes } from "react-router-dom"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"
import useBackendStatusStore from "@/utils/zustand/useBackendStatusStore"
import useUserStore from "@/utils/zustand/useUserStore"

import Menu from "./Menu"
import MobileSidebar from "./MobileSidebar"

vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))
const flags = vi.hoisted(() => ({ plannerEnabled: false }))
vi.mock("@/libs/featureFlags", () => ({
    useFeatureFlag: () => ({ enabled: flags.plannerEnabled }),
}))

describe.each(["desktop", "mobile"])("friends %s navigation", (device) => {
    beforeEach(() => {
        flags.plannerEnabled = false
        useBackendStatusStore.setState({ isBackendReachable: true })
        useUserStore.setState({ user: { id: 1, name: "Test" }, status: "success" })
    })

    const renderNavigation = () => {
        const setMobileSidebarOpen = vi.fn()
        const navigation =
            device === "desktop" ? (
                <Menu setMobileSidebarOpen={setMobileSidebarOpen} />
            ) : (
                <MobileSidebar
                    mobileSidebarOpen
                    setMobileSidebarOpen={setMobileSidebarOpen}
                    sidebarHeader={null}
                />
            )
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={navigation} />
                    <Route path="/friends" element={<h1>Friends page</h1>} />
                </Routes>
            </MemoryRouter>,
        )
        return setMobileSidebarOpen
    }

    it.each([false, true])(
        "opens friends after existing tabs with planner enabled: %s",
        (plannerEnabled) => {
            flags.plannerEnabled = plannerEnabled
            const setMobileSidebarOpen = renderNavigation()
            const friendLink = screen.getByRole("link", { name: "header.friends" })
            expect(friendLink).toHaveAttribute("href", "/friends")
            expect(
                screen
                    .getAllByRole("link")
                    .map((link) => link.getAttribute("href"))
                    .filter((href) => href !== "/"),
            ).toEqual([
                "/dictionary",
                "/write-reviews",
                "/timetable",
                ...(plannerEnabled ? ["/planner"] : []),
                "/friends",
            ])

            fireEvent.click(friendLink)
            expect(
                screen.getByRole("heading", { name: "Friends page" }),
            ).toBeInTheDocument()
            if (device === "mobile") {
                expect(setMobileSidebarOpen).toHaveBeenCalledWith(false)
            }
        },
    )

    it("disables friends while keeping the timetable accessible offline", () => {
        useBackendStatusStore.setState({ isBackendReachable: false })
        renderNavigation()
        expect(screen.getByText("header.friends")).toBeInTheDocument()
        expect(
            screen.queryByRole("link", { name: "header.friends" }),
        ).not.toBeInTheDocument()
        expect(screen.getByRole("link", { name: "header.timetable" })).toHaveAttribute(
            "href",
            "/timetable",
        )
    })
})
