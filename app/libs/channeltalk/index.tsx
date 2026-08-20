import { useEffect, useRef, useState } from "react"

import * as ChannelService from "@channel.io/channel-web-sdk-loader"

import { clientEnv } from "@/env"
import logger from "@/utils/logger"
import { usePreferenceStore } from "@/utils/zustand/usePreferenceStore"
import useUserStore from "@/utils/zustand/useUserStore"

function clearChannelTalkGlobals() {
    if (typeof window === "undefined") return
    Reflect.deleteProperty(window, "ChannelIO")
    Reflect.deleteProperty(window, "ChannelIOInitialized")
}

/**
 * Initializes Channel Talk independently from user updates so changing users does not
 * reboot the SDK. A generation counter prevents an old asynchronous boot callback from
 * reactivating a disabled or remounted provider.
 */
const ChannelTalkProvider = () => {
    const { user } = useUserStore()
    const channelTalkEnabled = usePreferenceStore((state) => state.channelTalkEnabled)
    const pluginKey = clientEnv.VITE_CHANNELTALK_PLUGIN_KEY
    const bootGenerationRef = useRef(0)
    const [isBooted, setIsBooted] = useState(false)

    useEffect(() => {
        const generation = ++bootGenerationRef.current
        if (!pluginKey || !channelTalkEnabled) {
            setIsBooted(false)
            return
        }

        setIsBooted(false)
        ChannelService.loadScript()
        ChannelService.boot({ pluginKey }, (error) => {
            if (bootGenerationRef.current !== generation) return
            if (error) {
                logger.warn("ChannelTalk boot failed", error)
                setIsBooted(false)
                return
            }
            setIsBooted(true)
        })

        return () => {
            if (bootGenerationRef.current === generation) {
                bootGenerationRef.current += 1
            }
            ChannelService.shutdown()
            clearChannelTalkGlobals()
        }
    }, [channelTalkEnabled, pluginKey])

    useEffect(() => {
        if (!channelTalkEnabled || !isBooted || !pluginKey || !user) return

        ChannelService.updateUser({
            profile: {
                name: user.name,
            },
        })
    }, [channelTalkEnabled, isBooted, pluginKey, user])

    return null
}

export default ChannelTalkProvider
