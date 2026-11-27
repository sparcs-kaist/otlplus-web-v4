import { StrictMode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { axiosClient } from "@/libs/axios"
import { act, fireEvent, render, screen, waitFor } from "@/test/test-utils"
import useIsDevice from "@/utils/useIsDevice"

import FriendInviteModal from "./FriendInviteModal"
import {
    copyFriendInvite,
    copyTextToClipboard,
    shareFriendInvite,
} from "./utils/shareFriendInvite"
import { copyFriendQr, downloadFriendQr } from "./utils/shareFriendQR"

const qrMock = vi.hoisted(() => ({ loadInLayoutEffect: false }))

vi.mock("@/libs/axios", () => ({ axiosClient: { request: vi.fn() } }))
vi.mock("@/utils/useIsDevice", () => ({ default: vi.fn() }))
vi.mock("./utils/shareFriendInvite", async (importOriginal) => ({
    ...(await importOriginal<typeof import("./utils/shareFriendInvite")>()),
    copyFriendInvite: vi.fn(),
    copyTextToClipboard: vi.fn(),
    shareFriendInvite: vi.fn(),
}))
vi.mock("./utils/shareFriendQR", () => ({
    copyFriendQr: vi.fn(),
    downloadFriendQr: vi.fn(),
}))
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

describe("friend code sharing", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.stubGlobal("alert", vi.fn())
        qrMock.loadInLayoutEffect = false
        vi.mocked(useIsDevice).mockReturnValue(false)
        vi.mocked(axiosClient.request).mockResolvedValue({ data: { code: "K7L4MX" } })
        vi.mocked(copyFriendInvite).mockResolvedValue(undefined)
        vi.mocked(copyTextToClipboard).mockResolvedValue(undefined)
        vi.mocked(shareFriendInvite).mockResolvedValue("shared")
        vi.mocked(downloadFriendQr).mockResolvedValue(undefined)
        vi.mocked(copyFriendQr).mockResolvedValue(undefined)
    })

    afterEach(() => {
        vi.useRealTimers()
        vi.unstubAllGlobals()
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

            fireEvent.click(screen.getByRole("button", { name: "friends.copyLink" }))
            await waitFor(() =>
                expect(copyTextToClipboard).toHaveBeenCalledExactlyOnceWith(url),
            )
            expect(
                await screen.findByRole("button", { name: "friends.copySuccess" }),
            ).toContainElement(screen.getByTestId("CheckIcon"))
            expect(copyFriendInvite).not.toHaveBeenCalled()
            fireEvent.click(screen.getByText("friends.copy"))
            await waitFor(() =>
                expect(copyFriendInvite).toHaveBeenCalledExactlyOnceWith("구백", url),
            )
            expect(
                await screen.findByRole("button", { name: "friends.copySuccess" }),
            ).toBeInTheDocument()
            expect(
                screen.getByRole("button", { name: "friends.copyLink" }),
            ).toBeInTheDocument()
            fireEvent.click(screen.getByText("friends.share"))
            await waitFor(() =>
                expect(shareFriendInvite).toHaveBeenCalledExactlyOnceWith("구백", url),
            )
            expect(
                await screen.findByRole("button", { name: "friends.shareSuccess" }),
            ).toContainElement(screen.getByTestId("CheckIcon"))
            expect(screen.queryByRole("status")).not.toBeInTheDocument()

            rerender(renderModal(false))
            rerender(renderModal(true))
            await waitFor(() => expect(axiosClient.request).toHaveBeenCalledTimes(2))
            expect(screen.getByText("friends.code: K7L4MX")).toBeInTheDocument()
            expect(
                screen.getByRole("button", { name: "friends.downloadQr" }),
            ).toBeDisabled()
            expect(screen.getByRole("button", { name: "friends.copyQr" })).toBeDisabled()
            expect(screen.queryByTestId("CheckIcon")).not.toBeInTheDocument()
        },
    )

    const openModal = async () => {
        render(<FriendInviteModal isOpen onClose={vi.fn()} userName="구백" />)
        await screen.findByText("friends.code: K7L4MX")
        return screen.getByRole("img", { name: "friends.inviteQr" })
    }

    it.each(["friends.copyLink", "friends.copyQr"])(
        "restores %s two seconds after the latest successful click",
        async (name) => {
            await openModal()
            fireEvent.load(screen.getByTestId("qr-logo"))
            vi.useFakeTimers()
            const button = screen.getByRole("button", { name })
            await act(async () => fireEvent.click(button))
            expect(button).toHaveTextContent("friends.copySuccess")
            expect(button).toContainElement(screen.getByTestId("CheckIcon"))

            act(() => vi.advanceTimersByTime(1000))
            await act(async () => fireEvent.click(button))
            act(() => vi.advanceTimersByTime(1000))
            expect(button).toHaveTextContent("friends.copySuccess")
            act(() => vi.advanceTimersByTime(1000))
            expect(button).toHaveTextContent(name)
            expect(screen.queryByTestId("CheckIcon")).not.toBeInTheDocument()
        },
    )

    it.each([
        ["shared", "friends.shareSuccess"],
        ["copied", "friends.shareSuccess"],
        ["cancelled", "friends.share"],
    ] as const)("reflects the actual share result: %s", async (result, label) => {
        await openModal()
        vi.mocked(shareFriendInvite).mockResolvedValueOnce(result)
        const button = screen.getByRole("button", { name: "friends.share" })
        await act(async () => fireEvent.click(button))
        expect(button).toHaveTextContent(label)
        expect(Boolean(button.querySelector('[data-testid="CheckIcon"]'))).toBe(
            result !== "cancelled",
        )
        expect(window.alert).not.toHaveBeenCalled()
        expect(screen.queryByRole("status")).not.toBeInTheDocument()
    })

    it.each([
        {
            name: "friends.copyLink",
            helper: copyTextToClipboard,
            message: "friends.copyError",
        },
        { name: "friends.copy", helper: copyFriendInvite, message: "friends.copyError" },
        {
            name: "friends.share",
            helper: shareFriendInvite,
            message: "friends.shareError",
        },
    ])(
        "alerts when $name fails without showing success",
        async ({ name, helper, message }) => {
            await openModal()
            vi.mocked(helper).mockRejectedValueOnce(new Error("Permission denied"))
            fireEvent.click(screen.getByRole("button", { name }))
            await waitFor(() =>
                expect(window.alert).toHaveBeenCalledExactlyOnceWith(message),
            )
            expect(screen.queryByTestId("CheckIcon")).not.toBeInTheDocument()
            expect(screen.queryByRole("alert")).not.toBeInTheDocument()
            expect(screen.getByRole("button", { name })).toBeEnabled()
        },
    )

    it("requires confirmation and updates the code, QR, copy and share together", async () => {
        await openModal()
        const description = screen.getByText("friends.inviteDescription")
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        expect(screen.getByText("friends.regenerateConfirm")).toBe(description)
        expect(screen.queryByText("friends.inviteDescription")).not.toBeInTheDocument()
        fireEvent.click(screen.getByRole("button", { name: "friends.cancel" }))
        expect(screen.getByText("friends.inviteDescription")).toBe(description)
        expect(axiosClient.request).toHaveBeenCalledTimes(1)

        let complete!: () => void
        vi.mocked(axiosClient.request).mockImplementationOnce(
            () =>
                new Promise((resolve) => {
                    complete = () => resolve({ data: { code: "ACDEFH" } })
                }),
        )
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        await waitFor(() =>
            expect(
                screen.getByRole("button", { name: "friends.regenerateCode" }),
            ).toBeDisabled(),
        )
        expect(
            screen.queryByRole("img", { name: "friends.inviteQr" }),
        ).not.toBeInTheDocument()
        expect(screen.getByRole("button", { name: "friends.copyLink" })).toBeDisabled()
        fireEvent.click(screen.getByRole("button", { name: "friends.copyLink" }))
        fireEvent.click(screen.getByText("friends.copy"))
        fireEvent.click(screen.getByText("friends.share"))
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        expect(copyFriendInvite).not.toHaveBeenCalled()
        expect(copyTextToClipboard).not.toHaveBeenCalled()
        expect(shareFriendInvite).not.toHaveBeenCalled()
        expect(axiosClient.request).toHaveBeenCalledTimes(2)
        expect(axiosClient.request).toHaveBeenLastCalledWith(
            expect.objectContaining({
                method: "PUT",
                url: "/api/v2/friends/code",
                data: {},
            }),
        )
        await act(async () => complete())
        await screen.findByText("friends.code: ACDEFH")
        expect(screen.getByText("friends.inviteDescription")).toBe(description)
        expect(
            await screen.findByRole("button", { name: "friends.regenerateSuccess" }),
        ).toContainElement(screen.getByTestId("CheckIcon"))
        const url = `${window.location.origin}/friends/invite#ACDEFH`
        expect(screen.getByRole("img", { name: "friends.inviteQr" })).toHaveAttribute(
            "data-value",
            url,
        )
        expect(screen.queryByText(/K7L4MX/)).not.toBeInTheDocument()
        fireEvent.click(screen.getByRole("button", { name: "friends.copyLink" }))
        fireEvent.click(screen.getByText("friends.copy"))
        fireEvent.click(screen.getByText("friends.share"))
        expect(copyFriendInvite).toHaveBeenCalledWith("구백", url)
        expect(copyTextToClipboard).toHaveBeenCalledWith(url)
        expect(shareFriendInvite).toHaveBeenCalledWith("구백", url)
        expect(screen.getByRole("button", { name: "friends.downloadQr" })).toBeDisabled()
        fireEvent.load(screen.getByTestId("qr-logo"))
        expect(screen.getByRole("button", { name: "friends.downloadQr" })).toBeEnabled()
    })

    it("allows closing during regeneration and keeps the in-flight result when reopened", async () => {
        const onClose = vi.fn()
        const { rerender } = render(
            <FriendInviteModal isOpen onClose={onClose} userName="구백" />,
        )
        await screen.findByText("friends.code: K7L4MX")
        let complete!: () => void
        vi.mocked(axiosClient.request).mockImplementationOnce(
            () =>
                new Promise((resolve) => {
                    complete = () => resolve({ data: { code: "ACDEFH" } })
                }),
        )
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        await screen.findByText("friends.regeneratingCode")
        fireEvent.click(screen.getByRole("button", { name: "common.search.close" }))
        expect(onClose).toHaveBeenCalledTimes(1)
        rerender(<FriendInviteModal isOpen={false} onClose={onClose} userName="구백" />)
        rerender(<FriendInviteModal isOpen onClose={onClose} userName="구백" />)
        expect(screen.getByText("friends.regeneratingCode")).toBeInTheDocument()
        expect(screen.queryByText(/K7L4MX/)).not.toBeInTheDocument()
        await act(async () => complete())
        await screen.findByText("friends.code: ACDEFH")
        expect(
            vi
                .mocked(axiosClient.request)
                .mock.calls.filter(([request]) => request.method === "PUT"),
        ).toHaveLength(1)
    })

    it.each(["K7L4MX", "ACDEFH"])(
        "reads the current code (%s) after a failed response without retrying the write",
        async (code) => {
            await openModal()
            vi.mocked(axiosClient.request)
                .mockRejectedValueOnce(new Error("Response lost"))
                .mockResolvedValueOnce({ data: { code } })
            fireEvent.click(
                screen.getByRole("button", { name: "friends.regenerateCode" }),
            )
            fireEvent.click(
                screen.getByRole("button", { name: "friends.regenerateCode" }),
            )
            await waitFor(() =>
                expect(window.alert).toHaveBeenCalledExactlyOnceWith(
                    "friends.regenerateError",
                ),
            )
            expect(screen.getByText(`friends.code: ${code}`)).toBeInTheDocument()
            expect(
                vi
                    .mocked(axiosClient.request)
                    .mock.calls.map(([request]) => request.method),
            ).toEqual(["GET", "PUT", "GET"])
            expect(screen.queryByTestId("CheckIcon")).not.toBeInTheDocument()
            expect(screen.queryByRole("alert")).not.toBeInTheDocument()
        },
    )

    it("hides the old code if neither regeneration nor recovery can be confirmed", async () => {
        await openModal()
        vi.mocked(axiosClient.request).mockRejectedValue(new Error("Offline"))
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        fireEvent.click(screen.getByRole("button", { name: "friends.regenerateCode" }))
        await waitFor(
            () =>
                expect(window.alert).toHaveBeenCalledExactlyOnceWith(
                    "friends.regenerateError",
                ),
            { timeout: 3000 },
        )
        expect(screen.queryByText(/K7L4MX/)).not.toBeInTheDocument()
        expect(
            screen.queryByRole("img", { name: "friends.inviteQr" }),
        ).not.toBeInTheDocument()
        fireEvent.click(screen.getByText("friends.share"))
        expect(shareFriendInvite).not.toHaveBeenCalled()
    })

    const exportActions = [
        {
            name: "friends.downloadQr",
            helper: downloadFriendQr,
            success: "friends.downloadSuccess",
            error: "friends.qrDownloadError",
        },
        {
            name: "friends.copyQr",
            helper: copyFriendQr,
            success: "friends.copySuccess",
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
            expect(screen.getByRole("button", { name: success })).toContainElement(
                screen.getByTestId("CheckIcon"),
            )
            expect(screen.queryByRole("status")).not.toBeInTheDocument()
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

            await waitFor(() =>
                expect(window.alert).toHaveBeenCalledExactlyOnceWith(message),
            )
            expect(screen.queryByTestId("CheckIcon")).not.toBeInTheDocument()
            expect(screen.queryByRole("alert")).not.toBeInTheDocument()
            expect(screen.getByRole("button", { name })).toBeEnabled()
        },
    )

    it.each(exportActions)(
        "clears stale success when a later $name fails",
        async ({ name, helper, success, error }) => {
            await openModal()
            fireEvent.load(screen.getByTestId("qr-logo"))
            fireEvent.click(screen.getByRole("button", { name }))
            const button = await screen.findByRole("button", { name: success })

            vi.mocked(helper).mockRejectedValueOnce(new Error("Export failed"))
            fireEvent.click(button)
            await waitFor(() =>
                expect(window.alert).toHaveBeenCalledExactlyOnceWith(error),
            )
            expect(screen.queryByText(success)).not.toBeInTheDocument()
        },
    )

    it("keeps image export disabled if the OTL logo cannot load", async () => {
        await openModal()
        fireEvent.error(screen.getByTestId("qr-logo"))

        expect(window.alert).toHaveBeenCalledExactlyOnceWith("friends.qrImageError")
        expect(screen.getByRole("button", { name: "friends.downloadQr" })).toBeDisabled()
        expect(screen.getByRole("button", { name: "friends.copyQr" })).toBeDisabled()
        expect(downloadFriendQr).not.toHaveBeenCalled()
        expect(copyFriendQr).not.toHaveBeenCalled()
    })
})
