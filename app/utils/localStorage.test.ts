import { beforeEach, describe, expect, it, vi } from "vitest"

import {
    getLocalStorageItem,
    removeLocalStorageItem,
    setLocalStorageItem,
    subscribeLocalStorageSet,
    unsubscribeLocalStorageSet,
} from "@/utils/localStorage"

describe("localStorage utilities", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe("getLocalStorageItem", () => {
        it("returns null when window is undefined", () => {
            const originalWindow = global.window
            // @ts-expect-error - intentionally setting window to undefined for test
            delete global.window
            const result = getLocalStorageItem("test-key")
            expect(result).toBeNull()
            global.window = originalWindow
        })

        it("returns value from localStorage when window exists", () => {
            vi.mocked(localStorage.getItem).mockReturnValue("test-value")
            const result = getLocalStorageItem("test-key")
            expect(localStorage.getItem).toHaveBeenCalledWith("test-key")
            expect(result).toBe("test-value")
        })
    })

    describe("setLocalStorageItem", () => {
        it("sets item in localStorage and dispatches event", () => {
            const dispatchEventSpy = vi.spyOn(window, "dispatchEvent")
            setLocalStorageItem("test-key", "test-value")
            expect(localStorage.setItem).toHaveBeenCalledWith("test-key", "test-value")
            expect(dispatchEventSpy).toHaveBeenCalled()
        })
    })

    describe("removeLocalStorageItem", () => {
        it("removes item from localStorage and dispatches event", () => {
            const dispatchEventSpy = vi.spyOn(window, "dispatchEvent")
            removeLocalStorageItem("test-key")
            expect(localStorage.removeItem).toHaveBeenCalledWith("test-key")
            expect(dispatchEventSpy).toHaveBeenCalled()
        })
    })

    describe("subscribeLocalStorageSet", () => {
        it("adds event listener to window", () => {
            const callback = vi.fn()
            const addEventListenerSpy = vi.spyOn(window, "addEventListener")
            subscribeLocalStorageSet(callback)
            expect(addEventListenerSpy).toHaveBeenCalledWith(
                "local-storage-set",
                callback,
            )
        })
    })

    describe("unsubscribeLocalStorageSet", () => {
        it("removes event listener from window", () => {
            const callback = vi.fn()
            const removeEventListenerSpy = vi.spyOn(window, "removeEventListener")
            unsubscribeLocalStorageSet(callback)
            expect(removeEventListenerSpy).toHaveBeenCalledWith(
                "local-storage-set",
                callback,
            )
        })
    })
})
