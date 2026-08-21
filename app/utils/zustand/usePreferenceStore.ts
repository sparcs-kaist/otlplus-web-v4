import { create } from "zustand"

import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage"
import { localStorageKeys } from "@/utils/storageKeys"

export function parseChannelTalkPreference(value: string | null): boolean {
    return value !== "false"
}

type PreferenceState = {
    readonly channelTalkEnabled: boolean
    readonly setChannelTalkEnabled: (enabled: boolean) => void
}

export const usePreferenceStore = create<PreferenceState>((set) => ({
    channelTalkEnabled: parseChannelTalkPreference(
        getLocalStorageItem(localStorageKeys.channelTalkEnabled),
    ),
    setChannelTalkEnabled: (enabled) => {
        setLocalStorageItem(localStorageKeys.channelTalkEnabled, String(enabled))
        set({ channelTalkEnabled: enabled })
    },
}))
