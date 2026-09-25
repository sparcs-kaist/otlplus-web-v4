import { StrictMode } from "react"

import { MemoryRouter } from "react-router-dom"
import { beforeEach, describe, expect, it, vi } from "vitest"

import FriendInvitePage from "@/routes/friends_.invite"
import { render, screen } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("@/utils/handleLoginLogout", () => ({ handleLogin: vi.fn() }))
vi.mock("@/utils/zustand/useUserStore", () => ({
    default: vi.fn(),
}))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

describe("friend invite acceptance", () => {
    const accept = vi.fn()

    beforeEach(() => {
        accept.mockClear()
        vi.mocked(useUserStore).mockReturnValue({ status: "success" })
        vi.mocked(useAPI).mockReturnValue({
            mutation: { isError: false },
            requestFunction: accept,
        } as unknown as ReturnType<typeof useAPI>)
    })

    it.each([
        "",
        "#%E0%A4%A",
        "#ACD34",
        "#ACD3479",
        "#OIL025",
        "#eyJhbGci.eyJzdWI.signature",
    ])("rejects missing, malformed, invalid or old JWT links: %s", (hash) => {
        render(
            <MemoryRouter initialEntries={[`/friends/invite${hash}`]}>
                <FriendInvitePage />
            </MemoryRouter>,
        )

        expect(screen.getByText("friends.inviteInvalid")).toBeInTheDocument()
        expect(accept).not.toHaveBeenCalled()
    })

    it("normalizes and submits the fragment code only once, including StrictMode replay", () => {
        render(
            <StrictMode>
                <MemoryRouter initialEntries={["/friends/invite#%20k7l4mx%20"]}>
                    <FriendInvitePage />
                </MemoryRouter>
            </StrictMode>,
        )

        expect(useAPI).toHaveBeenCalledWith("POST", "/friends", expect.any(Object))
        expect(accept).toHaveBeenCalledExactlyOnceWith({ code: "K7L4MX" })
    })

    it.each(["idle", "loading"])(
        "does not add a friend while authentication is %s",
        (status) => {
            vi.mocked(useUserStore).mockReturnValue({ status })
            const { rerender } = render(
                <MemoryRouter initialEntries={["/friends/invite#K7L4MX"]}>
                    <FriendInvitePage />
                </MemoryRouter>,
            )
            expect(accept).not.toHaveBeenCalled()
            if (status === "idle")
                expect(screen.getByText("friends.inviteLogin")).toBeInTheDocument()

            vi.mocked(useUserStore).mockReturnValue({ status: "success" })
            rerender(
                <MemoryRouter initialEntries={["/friends/invite#K7L4MX"]}>
                    <FriendInvitePage />
                </MemoryRouter>,
            )
            expect(accept).toHaveBeenCalledExactlyOnceWith({ code: "K7L4MX" })
        },
    )

    it.each([
        [400, "friends.inviteInvalid"],
        [404, "friends.inviteInvalid"],
        [429, "friends.inviteRateLimited"],
        [503, "friends.inviteAddError"],
        [undefined, "friends.inviteAddError"],
    ])("distinguishes API error %s from an invalid code", (status, message) => {
        vi.mocked(useAPI).mockReturnValue({
            mutation: {
                isError: true,
                error: { isAxiosError: true, response: { status } },
            },
            requestFunction: accept,
        } as unknown as ReturnType<typeof useAPI>)
        render(
            <MemoryRouter initialEntries={["/friends/invite#K7L4MX"]}>
                <FriendInvitePage />
            </MemoryRouter>,
        )
        expect(screen.getByRole("alert")).toHaveTextContent(message!)
    })

    it("can resume the same code after the session expires and the user signs back in", () => {
        const page = () => (
            <MemoryRouter initialEntries={["/friends/invite#K7L4MX"]}>
                <FriendInvitePage />
            </MemoryRouter>
        )
        const { rerender } = render(page())
        expect(accept).toHaveBeenCalledTimes(1)
        vi.mocked(useUserStore).mockReturnValue({ status: "idle" })
        rerender(page())
        expect(accept).toHaveBeenCalledTimes(1)
        expect(screen.getByText("friends.inviteLogin")).toBeInTheDocument()
        vi.mocked(useUserStore).mockReturnValue({ status: "success" })
        rerender(page())
        expect(accept).toHaveBeenCalledTimes(2)
    })
})
