import { beforeEach, describe, expect, it, vi } from "vitest"

import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import useUserStore from "@/utils/zustand/useUserStore"

import { handleSessionExpired } from "./handleSessionExpired"

const mocks = vi.hoisted(() => ({
    clearPersistedCache: vi.fn(async () => {}),
    clearQueryClient: vi.fn(),
    getLocalStorageItem: vi.fn(),
    removeLocalStorageItem: vi.fn(),
    resetUser: vi.fn(async () => {}),
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
        expect(mocks.removeLocalStorageItem).not.toHaveBeenCalled()
    })

    it("clears the account-scoped timetable selection", async () => {
        useTimetableUIStore.setState({
            currentTimetableId: 42,
            currentTimetableName: "시간표 1",
            autoSelectedSemesterKeys: ["2026-1"],
        })

        await handleSessionExpired()

        const timetableState = useTimetableUIStore.getState()
        expect(timetableState.currentTimetableId).toBeNull()
        expect(timetableState.currentTimetableName).toBe("시간표 1")
        expect(timetableState.autoSelectedSemesterKeys).toEqual([])
    })

    it("clears legacy credentials during an authenticated cold start", async () => {
        useUserStore.setState({ user: null, status: "loading" })
        mocks.getLocalStorageItem.mockImplementation((key: string) =>
            key === "accessToken" ? "expired-token" : null,
        )

        await handleSessionExpired()

        expect(mocks.clearQueryClient).toHaveBeenCalledOnce()
        expect(mocks.clearPersistedCache).toHaveBeenCalledOnce()
        expect(mocks.removeLocalStorageItem).toHaveBeenCalledWith("accessToken")
        expect(mocks.removeLocalStorageItem).toHaveBeenCalledWith("refreshToken")
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

    it("waits for the analytics identity reset before clearing session state", async () => {
        let finishReset: (() => void) | undefined
        mocks.resetUser.mockImplementationOnce(
            () =>
                new Promise<void>((resolve) => {
                    finishReset = resolve
                }),
        )

        const expiration = handleSessionExpired()

        expect(mocks.clearQueryClient).not.toHaveBeenCalled()
        finishReset?.()
        await expiration
        expect(mocks.clearQueryClient).toHaveBeenCalledOnce()
    })

    it("continues security cleanup when the analytics reset fails", async () => {
        mocks.resetUser.mockRejectedValueOnce(new Error("mixpanel unavailable"))

        await handleSessionExpired()

        expect(useUserStore.getState().status).toBe("idle")
        expect(useUserStore.getState().user).toBeNull()
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

    it("does not re-run cleanup when the session is already cleared", async () => {
        await handleSessionExpired()
        mocks.resetUser.mockClear()
        mocks.clearQueryClient.mockClear()
        mocks.clearPersistedCache.mockClear()
        mocks.removeLocalStorageItem.mockClear()

        await handleSessionExpired()

        expect(useUserStore.getState().status).toBe("idle")
        expect(useUserStore.getState().user).toBeNull()
        expect(mocks.resetUser).not.toHaveBeenCalled()
        expect(mocks.clearQueryClient).not.toHaveBeenCalled()
        expect(mocks.clearPersistedCache).not.toHaveBeenCalled()
        expect(mocks.removeLocalStorageItem).not.toHaveBeenCalled()
    })
})
