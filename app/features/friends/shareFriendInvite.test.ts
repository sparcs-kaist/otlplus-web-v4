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
})
