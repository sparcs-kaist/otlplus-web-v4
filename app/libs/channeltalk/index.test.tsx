import { act, render, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { usePreferenceStore } from "@/utils/zustand/usePreferenceStore"

import ChannelTalkProvider from "."

const channelMocks = vi.hoisted(() => ({
    bootCallbacks: [] as Array<(error: Error | null) => void>,
    boot: vi.fn(
        (
            _settings: { readonly pluginKey: string },
            callback: (error: Error | null) => void,
        ) => {
            channelMocks.bootCallbacks.push(callback)
        },
    ),
    loadScript: vi.fn(),
    shutdown: vi.fn(),
    updateUser: vi.fn(),
}))
const userState = vi.hoisted(() => ({
    user: null as { id: number; name: string } | null,
}))

vi.mock("@channel.io/channel-web-sdk-loader", () => channelMocks)
vi.mock("@/env", () => ({
    clientEnv: { VITE_CHANNELTALK_PLUGIN_KEY: "plugin-key" },
}))
vi.mock("@/utils/zustand/useUserStore", () => ({
    default: () => ({ user: userState.user }),
}))

describe("ChannelTalkProvider", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        channelMocks.bootCallbacks.length = 0
        userState.user = null
        usePreferenceStore.setState({ channelTalkEnabled: true })
    })

    it("boots when enabled and shuts down when the user hides Channel Talk", async () => {
        render(<ChannelTalkProvider />)

        await waitFor(() => expect(channelMocks.boot).toHaveBeenCalledOnce())

        act(() => {
            usePreferenceStore.getState().setChannelTalkEnabled(false)
        })

        await waitFor(() => expect(channelMocks.shutdown).toHaveBeenCalled())
    })

    it("does not boot while disabled", () => {
        usePreferenceStore.setState({ channelTalkEnabled: false })

        render(<ChannelTalkProvider />)

        expect(channelMocks.loadScript).not.toHaveBeenCalled()
        expect(channelMocks.boot).not.toHaveBeenCalled()
    })

    it("synchronizes the logged-in user after asynchronous boot completes", async () => {
        userState.user = { id: 1, name: "Ada" }
        render(<ChannelTalkProvider />)

        await waitFor(() => expect(channelMocks.bootCallbacks).toHaveLength(1))
        expect(channelMocks.updateUser).not.toHaveBeenCalled()

        act(() => {
            channelMocks.bootCallbacks[0]?.(null)
        })

        await waitFor(() =>
            expect(channelMocks.updateUser).toHaveBeenCalledWith({
                profile: { name: "Ada" },
            }),
        )
    })

    it("ignores a stale boot callback after Channel Talk is re-enabled", async () => {
        userState.user = { id: 1, name: "Ada" }
        render(<ChannelTalkProvider />)

        await waitFor(() => expect(channelMocks.bootCallbacks).toHaveLength(1))
        act(() => {
            usePreferenceStore.getState().setChannelTalkEnabled(false)
        })
        await waitFor(() => expect(channelMocks.shutdown).toHaveBeenCalled())
        act(() => {
            usePreferenceStore.getState().setChannelTalkEnabled(true)
        })
        await waitFor(() => expect(channelMocks.bootCallbacks).toHaveLength(2))

        act(() => {
            channelMocks.bootCallbacks[0]?.(null)
        })
        expect(channelMocks.updateUser).not.toHaveBeenCalled()

        act(() => {
            channelMocks.bootCallbacks[1]?.(null)
        })
        await waitFor(() => expect(channelMocks.updateUser).toHaveBeenCalledOnce())
    })
})
