import { afterEach, describe, expect, it, vi } from "vitest"

import { friendInviteMessage, shareFriendInvite } from "./shareFriendInvite"

describe("friend invite sharing", () => {
    afterEach(() => vi.unstubAllGlobals())

    it("falls back to the complete message when native sharing fails", async () => {
        const writeText = vi.fn().mockResolvedValue(undefined)
        vi.stubGlobal("navigator", {
            share: vi.fn().mockRejectedValue(new Error("unavailable")),
            clipboard: { writeText },
        })

        await expect(shareFriendInvite("구백", "https://otl.test/i")).resolves.toBe(
            "copied",
        )
        expect(writeText).toHaveBeenCalledWith(
            friendInviteMessage("구백", "https://otl.test/i"),
        )
    })

    it("shares the invitation text and link together", async () => {
        const share = vi.fn().mockResolvedValue(undefined)
        vi.stubGlobal("navigator", { share })

        await expect(shareFriendInvite("친구", "https://otl.test/i")).resolves.toBe(
            "shared",
        )
        expect(share).toHaveBeenCalledWith({
            title: "OTL 시간표 친구 초대",
            text: "친구님과 OTL 시간표 친구를 맺어보세요!",
            url: "https://otl.test/i",
        })
    })

    it("does not copy when the user cancels native sharing", async () => {
        const writeText = vi.fn()
        vi.stubGlobal("navigator", {
            share: vi.fn().mockRejectedValue(new DOMException("Cancelled", "AbortError")),
            clipboard: { writeText },
        })

        await expect(shareFriendInvite("친구", "https://otl.test/i")).resolves.toBe(
            "cancelled",
        )
        expect(writeText).not.toHaveBeenCalled()
    })
})
