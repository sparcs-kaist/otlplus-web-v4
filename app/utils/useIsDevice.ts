import { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"

import type { DeviceType } from "@/styles/themes/_base/variables/breakpoints"

const useIsDevice = (type: DeviceType): boolean => {
    const theme = useTheme()

    const getIsMatch = (innerWidth: number) => {
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
    }

    const [isMatch, setIsMatch] = useState(getIsMatch(window.innerWidth))

    useEffect(() => {
        const handleResize = () => {
            setIsMatch(getIsMatch(window.innerWidth))
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [type, theme.breakpoints])

    return isMatch
}

export default useIsDevice
