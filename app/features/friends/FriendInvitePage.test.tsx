import { StrictMode } from "react"

import { MemoryRouter } from "react-router-dom"
import { beforeEach, describe, expect, it, vi } from "vitest"

import FriendInvitePage from "@/routes/friends_.invite"
import { render, screen } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("@/utils/handleLoginLogout", () => ({ handleLogin: vi.fn() }))
vi.mock("@/utils/zustand/useUserStore", () => ({
    default: () => ({ status: "success" }),
}))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

describe("friend invite acceptance", () => {
    const accept = vi.fn()

    beforeEach(() => {
        accept.mockClear()
        vi.mocked(useAPI).mockReturnValue({
            mutation: { isError: false },
            requestFunction: accept,
        } as unknown as ReturnType<typeof useAPI>)
    })

    it.each(["", "#%E0%A4%A"])("handles a missing or malformed token: %s", (hash) => {
        render(
            <MemoryRouter initialEntries={[`/friends/invite${hash}`]}>
                <FriendInvitePage />
            </MemoryRouter>,
        )

        expect(screen.getByText("friends.inviteInvalid")).toBeInTheDocument()
        expect(accept).not.toHaveBeenCalled()
    })

    it("submits the fragment token only once, including StrictMode effect replay", () => {
        render(
            <StrictMode>
                <MemoryRouter initialEntries={["/friends/invite#opaque-token"]}>
                    <FriendInvitePage />
                </MemoryRouter>
            </StrictMode>,
        )

        expect(accept).toHaveBeenCalledExactlyOnceWith({ token: "opaque-token" })
    })
})
