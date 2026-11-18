import { StrictMode } from "react"

import { MemoryRouter, useLocation, useNavigate } from "react-router-dom"
import { beforeEach, describe, expect, it, vi } from "vitest"

import FriendInvitePage from "@/routes/friends_.invite"
import { fireEvent, render, screen } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("@/utils/handleLoginLogout", () => ({ handleLogin: vi.fn() }))
vi.mock("@/utils/zustand/useUserStore", () => ({
    default: vi.fn(),
}))
vi.mock("react-i18next", async () => {
    const { friends } = await import("@/i18n/locales/ko/friends")
    return {
        useTranslation: () => ({
            t: (key: string, options?: { name?: string }) => {
                const name = key.replace(/^friends\./, "")
                if (name.startsWith("selfInvite") || name === "backToFriends")
                    return friends[name as keyof typeof friends].replace(
                        "{{name}}",
                        options?.name ?? "",
                    )
                return key
            },
        }),
    }
})

function NavigationProbe() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <div data-testid="location">
                {location.pathname + location.search + location.hash}
            </div>
            <button type="button" onClick={() => navigate(-1)}>
                Browser back
            </button>
            <button type="button" onClick={() => navigate("/friends/invite#ACD347")}>
                Open another invite
            </button>
        </>
    )
}

const invitePage = () => (
    <MemoryRouter initialEntries={["/before", "/friends/invite#K7L4MX"]} initialIndex={1}>
        <FriendInvitePage />
        <NavigationProbe />
    </MemoryRouter>
)

const user = { id: 7, name: "테스트 이름" }
const selfInviteTitle = "앗! 테스트 이름 님의 친구 초대 링크에요!"

describe("friend invite acceptance", () => {
    const accept = vi.fn()

    beforeEach(() => {
        accept.mockClear()
        vi.mocked(useUserStore).mockReturnValue({ status: "success", user })
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

            vi.mocked(useUserStore).mockReturnValue({ status: "success", user })
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
        vi.mocked(useUserStore).mockReturnValue({ status: "success", user })
        rerender(page())
        expect(accept).toHaveBeenCalledTimes(2)
    })

    const mockError = (status = 400, code = "SELF_FRIENDSHIP") =>
        vi.mocked(useAPI).mockReturnValue({
            mutation: {
                isError: true,
                error: {
                    isAxiosError: true,
                    response: { status, data: { message: { code } } },
                },
            },
            requestFunction: accept,
        } as unknown as ReturnType<typeof useAPI>)

    it("shows the named self-invite illustration and returns to friends without retaining the error page", async () => {
        const { rerender } = render(invitePage())
        expect(accept).toHaveBeenCalledExactlyOnceWith({ code: "K7L4MX" })
        mockError()
        rerender(invitePage())

        const { friends } = await import("@/i18n/locales/ko/friends")
        expect(screen.getByText(selfInviteTitle)).toBeInTheDocument()
        expect(
            screen.getByText("자기 자신을 친구로 추가할 수 없어요!"),
        ).toBeInTheDocument()
        expect(
            screen.getByRole("img", { name: friends.selfInviteImageAlt }),
        ).toHaveAttribute("src", "/images/friends/self-invite.png")
        expect(screen.queryByText("friends.inviteInvalid")).not.toBeInTheDocument()

        fireEvent.click(screen.getByRole("button", { name: friends.backToFriends }))
        expect(screen.getByTestId("location")).toHaveTextContent(/^\/friends$/)
        fireEvent.click(screen.getByRole("button", { name: "Browser back" }))
        expect(screen.getByTestId("location")).toHaveTextContent(/^\/before$/)
    })

    it.each([
        [400, "NOT_SELF_FRIENDSHIP"],
        [404, "SELF_FRIENDSHIP"],
    ])("keeps non-self API errors generic (status=%s, code=%s)", (status, code) => {
        const { rerender } = render(invitePage())
        mockError(status, code)
        rerender(invitePage())

        expect(screen.getByRole("alert")).toHaveTextContent("friends.inviteInvalid")
        expect(screen.queryByText(selfInviteTitle)).not.toBeInTheDocument()
        expect(screen.queryByRole("img")).not.toBeInTheDocument()
    })

    it("hides a stale self-invite error after logging out", () => {
        const { rerender } = render(invitePage())
        mockError()
        rerender(invitePage())
        expect(screen.getByText(selfInviteTitle)).toBeInTheDocument()

        vi.mocked(useUserStore).mockReturnValue({ status: "idle", user: null })
        rerender(invitePage())
        expect(screen.getByText("friends.inviteLogin")).toBeInTheDocument()
        expect(screen.queryByText(selfInviteTitle)).not.toBeInTheDocument()
        expect(screen.queryByRole("img")).not.toBeInTheDocument()
        expect(accept).toHaveBeenCalledTimes(1)
    })

    it("does not label another code as a self invite while its request is pending", () => {
        const { rerender } = render(invitePage())
        mockError()
        rerender(invitePage())
        expect(screen.getByText(selfInviteTitle)).toBeInTheDocument()

        fireEvent.click(screen.getByRole("button", { name: "Open another invite" }))
        expect(accept).toHaveBeenNthCalledWith(2, { code: "ACD347" })
        expect(screen.queryByText(selfInviteTitle)).not.toBeInTheDocument()

        vi.mocked(useAPI).mockReturnValue({
            mutation: { isError: false, isPending: true },
            requestFunction: accept,
        } as unknown as ReturnType<typeof useAPI>)
        rerender(invitePage())
        expect(screen.getByText("friends.inviteAccepting")).toBeInTheDocument()
        expect(screen.queryByRole("img")).not.toBeInTheDocument()
    })

    it("retries the same code once when switching authenticated accounts without carrying over the self-invite view", () => {
        const { rerender } = render(invitePage())
        mockError()
        rerender(invitePage())
        expect(screen.getByText(selfInviteTitle)).toBeInTheDocument()

        vi.mocked(useUserStore).mockReturnValue({
            status: "success",
            user: { id: 8, name: "다른 사용자" },
        })
        rerender(invitePage())
        expect(accept).toHaveBeenCalledTimes(2)
        expect(accept).toHaveBeenLastCalledWith({ code: "K7L4MX" })
        expect(screen.queryByText(/님의 친구 초대 링크에요!/)).not.toBeInTheDocument()

        vi.mocked(useAPI).mockReturnValue({
            mutation: { isError: false, isPending: true },
            requestFunction: accept,
        } as unknown as ReturnType<typeof useAPI>)
        rerender(invitePage())
        expect(accept).toHaveBeenCalledTimes(2)
        expect(screen.getByText("friends.inviteAccepting")).toBeInTheDocument()
    })
})
