import type { LocalStorageKey } from "@/utils/storageKeys"

// WARNING: MUST BE CALLED IN A BROWSER ENVIRONMENT

const LOCAL_STORAGE_SET_EVENT = "local-storage-set"

export const getLocalStorageItem = (key: LocalStorageKey) =>
    typeof window !== "undefined" ? localStorage.getItem(key) : null

export const setLocalStorageItem = (key: LocalStorageKey, value: string) => {
    localStorage.setItem(key, value)
    window.dispatchEvent(new Event(LOCAL_STORAGE_SET_EVENT))
}

export const removeLocalStorageItem = (key: LocalStorageKey) => {
    localStorage.removeItem(key)
    window.dispatchEvent(new Event(LOCAL_STORAGE_SET_EVENT))
}

export const subscribeLocalStorageSet = (callback: () => void) => {
    window.addEventListener(LOCAL_STORAGE_SET_EVENT, callback)
}

export const unsubscribeLocalStorageSet = (callback: () => void) => {
    window.removeEventListener(LOCAL_STORAGE_SET_EVENT, callback)
}
