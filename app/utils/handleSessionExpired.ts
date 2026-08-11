import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { resetUser } from "@/libs/mixpanel"
import { clearQueryCache } from "@/libs/offline"
import { queryClient } from "@/libs/query/queryClient"
import { getLocalStorageItem, removeLocalStorageItem } from "@/utils/localStorage"
import logger from "@/utils/logger"
import useUserStore from "@/utils/zustand/useUserStore"

let sessionExpirationPromise: Promise<void> | null = null
const AUTH_STORAGE_KEYS = ["accessToken", "refreshToken"] as const

function hasStoredAuthCredentials(): boolean {
    try {
        return AUTH_STORAGE_KEYS.some((key) => getLocalStorageItem(key) !== null)
    } catch (error) {
        logger.warn("Failed to inspect stored auth credentials", error)
        return false
    }
}

export async function clearClientSession(): Promise<void> {
    resetUser()
    useUserStore.getState().clearUser()
    useTimetableUIStore.getState().resetTimetableSelection()
    queryClient.clear()

    for (const key of AUTH_STORAGE_KEYS) {
        try {
            removeLocalStorageItem(key)
        } catch (error) {
            logger.warn(`Failed to clear ${key}`, error)
        }
    }

    try {
        await clearQueryCache()
    } catch (error) {
        logger.warn("Failed to clear persisted query cache", error)
    }
}

export function handleSessionExpired(): Promise<void> {
    if (sessionExpirationPromise) return sessionExpirationPromise
    if (useUserStore.getState().status !== "success" && !hasStoredAuthCredentials()) {
        return Promise.resolve()
    }

    sessionExpirationPromise = clearClientSession().finally(() => {
        sessionExpirationPromise = null
    })
    return sessionExpirationPromise
}
