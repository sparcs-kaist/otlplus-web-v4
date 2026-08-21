export const localStorageKeys = {
    theme: "theme",
    devStudentId: "devStudentId",
    accessToken: "accessToken",
    refreshToken: "refreshToken",
    channelTalkEnabled: "channelTalkEnabled",
} as const

export type LocalStorageKey = (typeof localStorageKeys)[keyof typeof localStorageKeys]

export const sessionStorageKeys = {
    serverErrorRedirected: "serverErrorRedirected",
} as const
