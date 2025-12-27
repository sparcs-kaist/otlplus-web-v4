export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop" | "wide"

export const breakpoints: Record<DeviceType, number> = {
    mobile: 720,
    tablet: 960,
    laptop: 1440,
    desktop: 1700,
    wide: Infinity,
}
