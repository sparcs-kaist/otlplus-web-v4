import { type DeviceType, breakpoints } from "@/styles/themes/_base/variables/breakpoints"

export const media = Object.keys(breakpoints as Record<DeviceType, number>).reduce(
    (acc, label) => {
        const breakpoint = label as DeviceType
        acc[breakpoint] = `@media (max-width: ${breakpoints[breakpoint]}px)`
        return acc
    },
    {} as Record<DeviceType, string>,
)
