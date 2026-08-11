import { beforeEach, describe, expect, it, vi } from "vitest"

import useUserStore from "@/utils/zustand/useUserStore"

import { handleSessionExpired } from "./handleSessionExpired"

const mocks = vi.hoisted(() => ({
    clearPersistedCache: vi.fn(async () => {}),
    clearQueryClient: vi.fn(),
    getLocalStorageItem: vi.fn(),
    removeLocalStorageItem: vi.fn(),
    resetUser: vi.fn(),
}))

vi.mock("@/libs/mixpanel", () => ({ resetUser: mocks.resetUser }))
vi.mock("@/libs/offline", () => ({ clearQueryCache: mocks.clearPersistedCache }))
vi.mock("@/libs/query/queryClient", () => ({
    queryClient: { clear: mocks.clearQueryClient },
}))
vi.mock("@/utils/localStorage", () => ({
    getLocalStorageItem: mocks.getLocalStorageItem,
    removeLocalStorageItem: mocks.removeLocalStorageItem,
}))
vi.mock("@/utils/logger", () => ({
    default: { warn: vi.fn() },
}))

describe("handleSessionExpired", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        mocks.getLocalStorageItem.mockReturnValue(null)
        useUserStore.getState().setUser({ id: 1, name: "Test User" })
    })

    it("does not clear client state for an anonymous 401", async () => {
        useUserStore.getState().clearUser()

        await handleSessionExpired()

        expect(mocks.resetUser).not.toHaveBeenCalled()
        expect(mocks.clearQueryClient).not.toHaveBeenCalled()
        expect(mocks.clearPersistedCache).not.toHaveBeenCalled()
    })

    it("clears legacy credentials during an authenticated cold start", async () => {
        useUserStore.setState({ user: null, status: "loading" })
        mocks.getLocalStorageItem.mockImplementation((key: string) =>
            key === "accessToken" ? "expired-token" : null,
        )

        await handleSessionExpired()

        expect(mocks.clearQueryClient).toHaveBeenCalledOnce()
        expect(mocks.clearPersistedCache).toHaveBeenCalledOnce()
    })

    it("clears authenticated client state once for concurrent 401 responses", async () => {
        await Promise.all([handleSessionExpired(), handleSessionExpired()])

        expect(useUserStore.getState().status).toBe("idle")
        expect(mocks.resetUser).toHaveBeenCalledOnce()
        expect(mocks.clearQueryClient).toHaveBeenCalledOnce()
        expect(mocks.clearPersistedCache).toHaveBeenCalledOnce()
        expect(mocks.removeLocalStorageItem).toHaveBeenCalledWith("accessToken")
        expect(mocks.removeLocalStorageItem).toHaveBeenCalledWith("refreshToken")
    })

    it("clears a newly authenticated session after a previous expiration", async () => {
        await handleSessionExpired()
        useUserStore.getState().setUser({ id: 2, name: "Another User" })

        await handleSessionExpired()

        expect(mocks.resetUser).toHaveBeenCalledTimes(2)
        expect(mocks.clearQueryClient).toHaveBeenCalledTimes(2)
        expect(mocks.clearPersistedCache).toHaveBeenCalledTimes(2)
    })
})
