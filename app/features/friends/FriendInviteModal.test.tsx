import { StrictMode } from "react"

import { beforeEach, describe, expect, it, vi } from "vitest"

import { axiosClient } from "@/libs/axios"
import { fireEvent, render, screen, waitFor } from "@/test/test-utils"
import useIsDevice from "@/utils/useIsDevice"

import FriendInviteModal from "./FriendInviteModal"
import { copyFriendInvite } from "./shareFriendInvite"

vi.mock("@/libs/axios", () => ({ axiosClient: { request: vi.fn() } }))
vi.mock("@/utils/useIsDevice", () => ({ default: vi.fn() }))
vi.mock("./shareFriendInvite", async (importOriginal) => ({
    ...(await importOriginal<typeof import("./shareFriendInvite")>()),
    copyFriendInvite: vi.fn(),
}))
vi.mock("qrcode.react", async (importOriginal) => {
    const { QRCodeSVG } = await importOriginal<typeof import("qrcode.react")>()
    return {
        QRCodeSVG: (props: Parameters<typeof QRCodeSVG>[0]) => (
            <QRCodeSVG {...props} data-value={props.value} />
        ),
    }
})
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key, i18n: { resolvedLanguage: "ko" } }),
}))

describe("permanent friend code sharing", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.mocked(useIsDevice).mockReturnValue(false)
        vi.mocked(axiosClient.request).mockResolvedValue({ data: { code: "K7L4MX" } })
    })

    it.each([false, true])(
        "loads a code on open and reuses it for sharing and QR (mobile=%s)",
        async (mobile) => {
            vi.mocked(useIsDevice).mockReturnValue(mobile)
            const renderModal = (isOpen: boolean) => (
                <StrictMode>
                    <FriendInviteModal
                        isOpen={isOpen}
                        onClose={vi.fn()}
                        userName="구백"
                    />
                </StrictMode>
            )
            const { rerender } = render(renderModal(false))
            expect(axiosClient.request).not.toHaveBeenCalled()
            expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

            rerender(renderModal(true))
            await screen.findByText("friends.code: K7L4MX")
            expect(axiosClient.request).toHaveBeenCalledTimes(1)
            expect(axiosClient.request).toHaveBeenCalledWith(
                expect.objectContaining({ method: "GET", url: "/api/v2/friends/code" }),
            )
            const url = `${window.location.origin}/friends/invite#K7L4MX`
            expect(
                screen.getByText(/구백님과 OTL 시간표 친구를 맺어보세요!/),
            ).toHaveTextContent(url)
            expect(screen.getByRole("img")).toHaveAttribute("data-value", url)
            expect(screen.getByRole("img").querySelector("path")).not.toBeNull()
            expect(screen.getByRole("dialog")).toHaveStyle({
                minWidth: mobile ? "100dvw" : "630px",
            })

            fireEvent.click(screen.getByText("friends.copy"))
            await waitFor(() =>
                expect(copyFriendInvite).toHaveBeenCalledExactlyOnceWith("구백", url),
            )

            rerender(renderModal(false))
            rerender(renderModal(true))
            await waitFor(() => expect(axiosClient.request).toHaveBeenCalledTimes(2))
            expect(screen.getByText("friends.code: K7L4MX")).toBeInTheDocument()
        },
    )
})
