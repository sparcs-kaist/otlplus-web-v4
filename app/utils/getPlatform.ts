import { OSEnum } from "@/common/enum/osEnum"

export const getPlatform = (): OSEnum => {
    if (typeof window === "undefined") return OSEnum.PC

    const userAgent = window.navigator.userAgent.toLowerCase()

    if (!(navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
        if (/mac/.test(userAgent)) return OSEnum.MAC
        return OSEnum.PC
    }

    if (/android/.test(userAgent) || /linux/.test(userAgent)) return OSEnum.ANDROID
    return OSEnum.IOS
}
