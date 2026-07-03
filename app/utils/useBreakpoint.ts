import { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"

import type { DeviceType } from "@/styles/themes/_base/variables/breakpoints"

type BreakpointMatches = Record<DeviceType, boolean>

const computeMatches = (
    innerWidth: number,
    breakpoints: Record<DeviceType, number>,
): BreakpointMatches => ({
    mobile: innerWidth <= breakpoints.mobile,
    tablet: innerWidth <= breakpoints.tablet,
    laptop: innerWidth <= breakpoints.laptop,
    desktop: innerWidth <= breakpoints.desktop,
    wide: innerWidth >= breakpoints.desktop,
})

const SSR_MATCHES: BreakpointMatches = {
    mobile: false,
    tablet: false,
    laptop: false,
    desktop: false,
    wide: false,
}

const useBreakpoint = (): BreakpointMatches => {
    const theme = useTheme()

    const [matches, setMatches] = useState<BreakpointMatches>(() =>
        typeof window !== "undefined"
            ? computeMatches(window.innerWidth, theme.breakpoints)
            : SSR_MATCHES,
    )

    useEffect(() => {
        const handleResize = () => {
            setMatches(computeMatches(window.innerWidth, theme.breakpoints))
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [theme.breakpoints])

    return matches
}

export default useBreakpoint
