import { useEffect } from "react"

import * as ChannelService from "@channel.io/channel-web-sdk-loader"

import { clientEnv } from "@/env"
import useUserStore from "@/utils/zustand/useUserStore"

const ChannelTalkProvider = () => {
    const { user } = useUserStore()
    const pluginKey = clientEnv.VITE_CHANNELTALK_PLUGIN_KEY

    useEffect(() => {
        if (!pluginKey) return

        ChannelService.loadScript()

        const bootOptions: ChannelService.BootOption = {
            pluginKey,
            hideChannelButtonOnBoot: true,
        }

        if (user) {
            bootOptions.memberId = String(user.id)
            bootOptions.profile = {
                name: user.name,
            }
        }

        ChannelService.boot(bootOptions)

        return () => {
            ChannelService.shutdown()
        }
    }, [pluginKey, user])

    return null
}

export default ChannelTalkProvider
