import { useEffect, useState } from "react"

export type OS = "ios" | "android" | "mac" | "PC"

const getOS = (): OS => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (!(navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
        if (/mac/.test(userAgent)) return "mac"
        else return "PC"
    }
    if (/android/.test(userAgent)) return "android"
    else return "ios"
}

export const useDetectOS = (): OS => {
    const [os, setOs] = useState<OS>("PC")

    useEffect(() => {
        setOs(getOS())
    }, [])

    return os
}
