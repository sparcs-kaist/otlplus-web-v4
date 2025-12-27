import { useCallback, useEffect, useMemo, useState } from "react"

import { useTheme } from "@emotion/react"

import type { DeviceType } from "@/styles/themes/_base/variables/breakpoints"

const getInitialWidth = () => {
    if (typeof window === "undefined") return 1024
    return window.innerWidth
}

const useIsDevice = (type: DeviceType): boolean => {
    const theme = useTheme()

    const getIsMatch = useCallback(
        (innerWidth: number) => {
            switch (type) {
                case "mobile":
                    return innerWidth < theme.breakpoints.mobile
                case "tablet":
                    return innerWidth < theme.breakpoints.tablet
                case "laptop":
                    return innerWidth < theme.breakpoints.laptop
                case "desktop":
                    return innerWidth < theme.breakpoints.desktop
                case "wide":
                    return innerWidth >= theme.breakpoints.desktop
                default:
                    return false
            }
        },
        [type, theme.breakpoints],
    )

    const [isMatch, setIsMatch] = useState(() => getIsMatch(getInitialWidth()))

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null

        const handleResize = () => {
            if (timeoutId) clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                setIsMatch(getIsMatch(window.innerWidth))
            }, 100)
        }

        setIsMatch(getIsMatch(window.innerWidth))
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [getIsMatch])

    return isMatch
}

export default useIsDevice
