export type OS = "ios" | "android" | "mac" | "PC"

export const getPlatform = (): OS => {
    if (typeof window === "undefined") return "PC"

    const userAgent = window.navigator.userAgent.toLowerCase()

    if (!(navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
        if (/mac/.test(userAgent)) return "mac"
        return "PC"
    }

    if (/android/.test(userAgent) || /linux/.test(userAgent)) return "android"
    return "ios"
}
