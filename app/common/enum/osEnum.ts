export const OSEnum = {
    IOS: "ios",
    ANDROID: "android",
    MAC: "mac",
    PC: "PC",
} as const

export type OSEnum = (typeof OSEnum)[keyof typeof OSEnum]
