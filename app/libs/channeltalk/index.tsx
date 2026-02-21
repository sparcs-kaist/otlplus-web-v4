import { useCallback, useEffect, useRef } from "react"

import * as ChannelService from "@channel.io/channel-web-sdk-loader"

import { clientEnv } from "@/env"
import useUserStore from "@/utils/zustand/useUserStore"

/**
 * ChannelTalkProvider
 *
 * Initializes the Channel Talk SDK and keeps user profile in sync.
 *
 * Key design decisions:
 * - SDK boot is separated from user updates to avoid shutdown/reboot cycles.
 *   The old code had `user` in the useEffect deps, causing shutdown() → loadScript()
 *   (no-op because window.ChannelIO already exists) → boot() which silently failed
 *   because the SDK was in a shutdown state.
 * - bootAttemptedRef prevents double-boot during the same mount cycle.
 * - On unmount, we call shutdown() AND clear window.ChannelIO so that
 *   loadScript() can re-initialize on remount (React 18 StrictMode).
 */
const ChannelTalkProvider = () => {
    const { user } = useUserStore()
    const pluginKey = clientEnv.VITE_CHANNELTALK_PLUGIN_KEY
    const isBootedRef = useRef(false)

    const bootChannelTalk = useCallback(() => {
        if (!pluginKey) return

        ChannelService.loadScript()

        ChannelService.boot(
            {
                pluginKey,
            },
            (error) => {
                if (error) {
                    console.error("[ChannelTalk] Boot failed:", error)
                } else {
                    isBootedRef.current = true
                }
            },
        )
    }, [pluginKey])

    // Load and boot the SDK once on mount
    useEffect(() => {
        if (!pluginKey) return

        bootChannelTalk()

        return () => {
            isBootedRef.current = false
            ChannelService.shutdown()

            // Clear global state so loadScript() can re-initialize on remount.
            // Without this, React 18 StrictMode (mount → unmount → remount) breaks:
            // shutdown() destroys SDK internals, but loadScript() sees window.ChannelIO
            // still exists and skips re-initialization, leaving boot() with a dead SDK.
            if (typeof window !== "undefined") {
                const w = window as unknown as Record<string, unknown>
                delete w.ChannelIO
                delete w.ChannelIOInitialized
            }
        }
    }, [pluginKey, bootChannelTalk])

    // Update user info when user changes (without rebooting the SDK)
    useEffect(() => {
        if (!isBootedRef.current || !pluginKey || !user) return

        ChannelService.updateUser({
            profile: {
                name: user.name,
            },
        })
    }, [user, pluginKey])

    return null
}

export default ChannelTalkProvider
