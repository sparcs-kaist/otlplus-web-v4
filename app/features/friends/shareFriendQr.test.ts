import { afterEach, describe, expect, it, vi } from "vitest"

import { copyFriendQr, downloadFriendQr } from "./shareFriendQr"

class MockClipboardItem {
    constructor(readonly data: Record<string, Promise<Blob>>) {}
}

describe("friend QR image sharing", () => {
    afterEach(() => {
        vi.restoreAllMocks()
        vi.unstubAllGlobals()
    })

    it("downloads the canvas as PNG without retaining a temporary link", async () => {
        const canvas = document.createElement("canvas")
        const toDataURL = vi
            .spyOn(canvas, "toDataURL")
            .mockReturnValue("data:image/png;base64,cXItcG5n")
        const click = vi
            .spyOn(HTMLAnchorElement.prototype, "click")
            .mockImplementation(function (this: HTMLAnchorElement) {
                expect(this.isConnected).toBe(true)
                expect(this.href).toBe("data:image/png;base64,cXItcG5n")
                expect(this.download).toBe("otl-friend-qr.png")
            })

        await downloadFriendQr(canvas)

        expect(toDataURL).toHaveBeenCalledWith("image/png")
        expect(click).toHaveBeenCalledOnce()
        expect(document.querySelector('a[download="otl-friend-qr.png"]')).toBeNull()
    })

    it("rejects an empty PNG instead of starting a broken download", async () => {
        const canvas = document.createElement("canvas")
        vi.spyOn(canvas, "toDataURL").mockReturnValue("data:,")
        const click = vi.spyOn(HTMLAnchorElement.prototype, "click")

        await expect(downloadFriendQr(canvas)).rejects.toThrow("Could not encode")
        expect(click).not.toHaveBeenCalled()
    })

    it("starts the clipboard write before asynchronous PNG encoding finishes", async () => {
        const canvas = document.createElement("canvas")
        let finishEncoding: BlobCallback | undefined
        const toBlob = vi.spyOn(canvas, "toBlob").mockImplementation((callback) => {
            finishEncoding = callback
        })
        const write = vi.fn(async (items: MockClipboardItem[]) => {
            await items[0]?.data["image/png"]
        })
        vi.stubGlobal("ClipboardItem", MockClipboardItem)
        vi.stubGlobal("navigator", { clipboard: { write } })

        const copying = copyFriendQr(canvas)

        expect(write).toHaveBeenCalledOnce()
        expect(toBlob).toHaveBeenCalledWith(expect.any(Function), "image/png")
        const png = new Blob(["qr-png"], { type: "image/png" })
        finishEncoding?.(png)
        await copying
        await expect(write.mock.calls[0]?.[0][0]?.data["image/png"]).resolves.toBe(png)
    })

    it.each(["missing-write", "missing-item"])(
        "identifies unsupported image clipboard APIs (%s)",
        async (missing) => {
            vi.stubGlobal(
                "ClipboardItem",
                missing === "missing-item" ? undefined : MockClipboardItem,
            )
            vi.stubGlobal("navigator", {
                clipboard: missing === "missing-write" ? {} : { write: vi.fn() },
            })
            const canvas = document.createElement("canvas")
            const toBlob = vi.spyOn(canvas, "toBlob")

            await expect(copyFriendQr(canvas)).rejects.toMatchObject({
                name: "NotSupportedError",
            })
            expect(toBlob).not.toHaveBeenCalled()
        },
    )

    it.each(["null-blob", "security-error"])(
        "propagates PNG encoding failures (%s)",
        async (failure) => {
            const canvas = document.createElement("canvas")
            vi.spyOn(canvas, "toBlob").mockImplementation((callback) => {
                if (failure === "security-error") {
                    throw new DOMException("Tainted canvas", "SecurityError")
                }
                callback(null)
            })
            vi.stubGlobal("ClipboardItem", MockClipboardItem)
            vi.stubGlobal("navigator", {
                clipboard: {
                    write: async (items: MockClipboardItem[]) => {
                        await items[0]?.data["image/png"]
                    },
                },
            })

            await expect(copyFriendQr(canvas)).rejects.toThrow(
                failure === "security-error" ? "Tainted canvas" : "Could not encode",
            )
        },
    )

    it("propagates clipboard permission rejection", async () => {
        const canvas = document.createElement("canvas")
        vi.spyOn(canvas, "toBlob").mockImplementation((callback) => {
            callback(new Blob(["qr-png"], { type: "image/png" }))
        })
        const denied = new DOMException("Permission denied", "NotAllowedError")
        vi.stubGlobal("ClipboardItem", MockClipboardItem)
        vi.stubGlobal("navigator", {
            clipboard: { write: vi.fn().mockRejectedValue(denied) },
        })

        await expect(copyFriendQr(canvas)).rejects.toBe(denied)
    })
})
