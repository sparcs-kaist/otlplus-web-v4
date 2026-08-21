import { beforeEach, describe, expect, it, vi } from "vitest"

import { localStorageKeys } from "@/utils/storageKeys"

import { parseChannelTalkPreference, usePreferenceStore } from "./usePreferenceStore"

describe("usePreferenceStore", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        usePreferenceStore.setState({ channelTalkEnabled: true })
    })

    it("keeps Channel Talk enabled until a user explicitly disables it", () => {
        expect(parseChannelTalkPreference(null)).toBe(true)
        expect(parseChannelTalkPreference("true")).toBe(true)
        expect(parseChannelTalkPreference("false")).toBe(false)
    })

    it("persists Channel Talk visibility changes", () => {
        usePreferenceStore.getState().setChannelTalkEnabled(false)

        expect(usePreferenceStore.getState().channelTalkEnabled).toBe(false)
        expect(localStorage.setItem).toHaveBeenCalledWith(
            localStorageKeys.channelTalkEnabled,
            "false",
        )
    })
})
