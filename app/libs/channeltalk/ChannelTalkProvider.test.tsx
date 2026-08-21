import { beforeEach, describe, expect, it, vi } from "vitest"

import { render } from "@/test/test-utils"

import ChannelTalkProvider from "."

const channelServiceMocks = vi.hoisted(() => ({
    boot: vi.fn(),
    loadScript: vi.fn(),
    shutdown: vi.fn(),
    updateUser: vi.fn(),
}))

const channelTalkConfig = vi.hoisted(() => ({
    buttonHidden: false,
}))

vi.mock("@channel.io/channel-web-sdk-loader", () => channelServiceMocks)

vi.mock("@/env", () => ({
    clientEnv: {
        get VITE_CHANNELTALK_BUTTON_HIDDEN() {
            return channelTalkConfig.buttonHidden
        },
        VITE_CHANNELTALK_PLUGIN_KEY: "test-plugin-key",
    },
}))

vi.mock("@/utils/zustand/useUserStore", () => ({
    default: () => ({ user: null }),
}))

describe("ChannelTalkProvider", () => {
    beforeEach(() => {
        channelServiceMocks.boot.mockClear()
        channelServiceMocks.loadScript.mockClear()
        channelServiceMocks.shutdown.mockClear()
        channelServiceMocks.updateUser.mockClear()
        channelTalkConfig.buttonHidden = false
    })

    it("hides the default ChannelTalk button when configured", () => {
        channelTalkConfig.buttonHidden = true

        render(<ChannelTalkProvider />)

        expect(channelServiceMocks.boot).toHaveBeenCalledWith(
            {
                hideChannelButtonOnBoot: true,
                pluginKey: "test-plugin-key",
            },
            expect.any(Function),
        )
    })

    it("shows the default ChannelTalk button by default", () => {
        render(<ChannelTalkProvider />)

        expect(channelServiceMocks.boot).toHaveBeenCalledWith(
            {
                hideChannelButtonOnBoot: false,
                pluginKey: "test-plugin-key",
            },
            expect.any(Function),
        )
    })
})
