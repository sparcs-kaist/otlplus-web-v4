import { StrictMode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { axiosClient } from "@/libs/axios"
import { act, fireEvent, render, screen, waitFor } from "@/test/test-utils"
import useIsDevice from "@/utils/useIsDevice"

import FriendInviteModal from "./FriendInviteModal"
import { copyFriendInvite, shareFriendInvite } from "./shareFriendInvite"
import { copyFriendQr, downloadFriendQr } from "./shareFriendQr"

const qrMock = vi.hoisted(() => ({ loadInLayoutEffect: false }))

vi.mock("@/libs/axios", () => ({ axiosClient: { request: vi.fn() } }))
vi.mock("@/utils/useIsDevice", () => ({ default: vi.fn() }))
vi.mock("./shareFriendInvite", async (importOriginal) => ({
    ...(await importOriginal<typeof import("./shareFriendInvite")>()),
    copyFriendInvite: vi.fn(),
    shareFriendInvite: vi.fn(),
}))
vi.mock("./shareFriendQr", () => ({ copyFriendQr: vi.fn(), downloadFriendQr: vi.fn() }))
vi.mock("qrcode.react", async (importOriginal) => {
    const { forwardRef, useLayoutEffect, useRef } = await import("react")
    const { QRCodeCanvas } = await importOriginal<typeof import("qrcode.react")>()
    return {
        QRCodeCanvas: forwardRef<HTMLCanvasElement, Parameters<typeof QRCodeCanvas>[0]>(
            function MockQRCodeCanvas(
                {
                    value,
                    size,
                    imageSettings,
                    level,
                    marginSize,
                    bgColor,
                    fgColor,
                    ...props
                },
                ref,
            ) {
                const imageRef = useRef<HTMLImageElement>(null)
                useLayoutEffect(() => {
                    if (qrMock.loadInLayoutEffect)
                        imageRef.current?.dispatchEvent(new Event("load"))
                }, [])
                return (
                    <>
                        <canvas
                            {...props}
                            ref={ref}
                            width={size}
                            height={size}
                            data-value={value}
                            data-level={level}
                            data-margin={marginSize}
                            data-background={bgColor}
                            data-foreground={fgColor}
                            data-logo={JSON.stringify(imageSettings)}
                        />
                        <img
                            ref={imageRef}
                            data-testid="qr-logo"
                            src={imageSettings?.src}
                            alt=""
                            style={{ display: "none" }}
                        />
                    </>
                )
            },
        ),
    }
})
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key, i18n: { resolvedLanguage: "ko" } }),
}))

describe("permanent friend code sharing", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        qrMock.loadInLayoutEffect = false
        vi.mocked(useIsDevice).mockReturnValue(false)
        vi.mocked(axiosClient.request).mockResolvedValue({ data: { code: "K7L4MX" } })
        vi.mocked(copyFriendInvite).mockResolvedValue(undefined)
        vi.mocked(shareFriendInvite).mockResolvedValue("shared")
        vi.mocked(downloadFriendQr).mockResolvedValue(undefined)
        vi.mocked(copyFriendQr).mockResolvedValue(undefined)
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
            const canvas = screen.getByRole("img", { name: "friends.inviteQr" })
            expect(canvas).toBeInstanceOf(HTMLCanvasElement)
            expect(canvas).toHaveAttribute("data-value", url)
            expect(canvas).toHaveAttribute("width", "512")
            expect(canvas).toHaveAttribute("height", "512")
            expect(canvas).toHaveStyle({ width: "200px", height: "200px" })
            expect(canvas).toHaveAttribute("data-level", "H")
            expect(canvas).toHaveAttribute("data-margin", "4")
            expect(canvas.getAttribute("data-background")).toMatch(/^#fff(?:fff)?$/i)
            expect(canvas.getAttribute("data-foreground")).toMatch(/^#000(?:000)?$/i)
            const logo = JSON.parse(canvas.getAttribute("data-logo")!)
            expect(logo).toMatchObject({
                src: "/static/favicon-192.png",
                width: 88,
                height: 88,
                excavate: true,
            })
            expect(logo.x).toBeUndefined()
            expect(logo.y).toBeUndefined()
            expect(screen.getByRole("dialog")).toHaveStyle({
                minWidth: mobile ? "100dvw" : "630px",
            })

            fireEvent.click(screen.getByText("friends.copy"))
            await waitFor(() =>
                expect(copyFriendInvite).toHaveBeenCalledExactlyOnceWith("구백", url),
            )
            fireEvent.click(screen.getByText("friends.share"))
            await waitFor(() =>
                expect(shareFriendInvite).toHaveBeenCalledExactlyOnceWith("구백", url),
            )

            rerender(renderModal(false))
            rerender(renderModal(true))
            await waitFor(() => expect(axiosClient.request).toHaveBeenCalledTimes(2))
            expect(screen.getByText("friends.code: K7L4MX")).toBeInTheDocument()
            expect(
                screen.getByRole("button", { name: "friends.downloadQr" }),
            ).toBeDisabled()
            expect(screen.getByRole("button", { name: "friends.copyQr" })).toBeDisabled()
        },
    )

    const openModal = async () => {
        render(<FriendInviteModal isOpen onClose={vi.fn()} userName="구백" />)
        await screen.findByText("friends.code: K7L4MX")
        return screen.getByRole("img", { name: "friends.inviteQr" })
    }

    const exportActions = [
        {
            name: "friends.downloadQr",
            helper: downloadFriendQr,
            success: "friends.qrDownloaded",
            error: "friends.qrDownloadError",
        },
        {
            name: "friends.copyQr",
            helper: copyFriendQr,
            success: "friends.qrCopied",
            error: "friends.qrCopyError",
        },
    ]

    it("retains QR readiness when a cached logo loads before the modal's passive effects", async () => {
        const queryClient = new QueryClient({
            defaultOptions: { queries: { retry: false, gcTime: 0 } },
        })
        queryClient.setQueryData(["/friends/code", null, "ko", "/api/v2"], {
            code: "K7L4MX",
        })
        qrMock.loadInLayoutEffect = true
        render(
            <QueryClientProvider client={queryClient}>
                <FriendInviteModal isOpen onClose={vi.fn()} userName="구백" />
            </QueryClientProvider>,
        )

        await waitFor(() =>
            expect(
                screen.getByRole("button", { name: "friends.downloadQr" }),
            ).toBeEnabled(),
        )
        expect(screen.getByRole("button", { name: "friends.copyQr" })).toBeEnabled()
    })

    it.each(exportActions)(
        "exports the rendered canvas through $name only after the logo loads, disabling actions while pending",
        async ({ name, helper, success }) => {
            const canvas = await openModal()
            const download = screen.getByRole("button", { name: "friends.downloadQr" })
            const copy = screen.getByRole("button", { name: "friends.copyQr" })
            expect(download).toHaveAttribute("type", "button")
            expect(copy).toHaveAttribute("type", "button")
            expect(download).toBeDisabled()
            expect(copy).toBeDisabled()
            fireEvent.click(screen.getByRole("button", { name }))
            expect(helper).not.toHaveBeenCalled()

            fireEvent.load(screen.getByTestId("qr-logo"))
            expect(download).toBeEnabled()
            expect(copy).toBeEnabled()
            let complete!: () => void
            vi.mocked(helper).mockReturnValueOnce(
                new Promise<void>((resolve) => {
                    complete = resolve
                }),
            )
            fireEvent.click(screen.getByRole("button", { name }))
            expect(helper).toHaveBeenCalledTimes(1)
            expect(vi.mocked(helper).mock.calls[0]?.[0]).toBe(canvas)
            expect(download).toBeDisabled()
            expect(copy).toBeDisabled()

            await act(async () => complete())
            expect(screen.getByRole("status")).toHaveTextContent(success)
            expect(download).toBeEnabled()
            expect(copy).toBeEnabled()
        },
    )

    it.each([
        {
            name: "friends.downloadQr",
            helper: downloadFriendQr,
            error: new Error("PNG export failed"),
            message: "friends.qrDownloadError",
        },
        {
            name: "friends.copyQr",
            helper: copyFriendQr,
            error: new DOMException("Clipboard unavailable", "NotSupportedError"),
            message: "friends.qrCopyUnsupported",
        },
        {
            name: "friends.copyQr",
            helper: copyFriendQr,
            error: new DOMException("Clipboard denied", "NotAllowedError"),
            message: "friends.qrCopyError",
        },
    ])(
        "reports $message without a false success",
        async ({ name, helper, error, message }) => {
            await openModal()
            fireEvent.load(screen.getByTestId("qr-logo"))
            vi.mocked(helper).mockRejectedValueOnce(error)
            fireEvent.click(screen.getByRole("button", { name }))

            expect(await screen.findByRole("alert")).toHaveTextContent(message)
            expect(screen.queryByText("friends.qrDownloaded")).not.toBeInTheDocument()
            expect(screen.queryByText("friends.qrCopied")).not.toBeInTheDocument()
            expect(screen.getByRole("button", { name })).toBeEnabled()
        },
    )

    it.each(exportActions)(
        "clears stale success when a later $name fails",
        async ({ name, helper, success, error }) => {
            await openModal()
            fireEvent.load(screen.getByTestId("qr-logo"))
            fireEvent.click(screen.getByRole("button", { name }))
            expect(await screen.findByRole("status")).toHaveTextContent(success)

            vi.mocked(helper).mockRejectedValueOnce(new Error("Export failed"))
            fireEvent.click(screen.getByRole("button", { name }))
            expect(await screen.findByRole("alert")).toHaveTextContent(error)
            expect(screen.queryByText(success)).not.toBeInTheDocument()
        },
    )

    it("keeps image export disabled if the OTL logo cannot load", async () => {
        await openModal()
        fireEvent.error(screen.getByTestId("qr-logo"))

        expect(screen.getByRole("alert")).toHaveTextContent("friends.qrImageError")
        expect(screen.getByRole("button", { name: "friends.downloadQr" })).toBeDisabled()
        expect(screen.getByRole("button", { name: "friends.copyQr" })).toBeDisabled()
        expect(downloadFriendQr).not.toHaveBeenCalled()
        expect(copyFriendQr).not.toHaveBeenCalled()
    })
})
