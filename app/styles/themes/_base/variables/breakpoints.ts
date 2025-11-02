export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop"

export const breakpoints: Record<DeviceType, number> = {
    mobile: 720,
    tablet: 960,
    laptop: 1440,
    desktop: Infinity,
}
