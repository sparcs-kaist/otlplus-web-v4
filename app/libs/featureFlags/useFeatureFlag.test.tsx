import { beforeEach, describe, expect, it, vi } from "vitest"

import { renderHook, waitFor } from "@/test/test-utils"

const providerState = {
    settled: false,
    remote: undefined as boolean | undefined,
}

vi.mock("./provider", () => ({
    isFlagsSettled: () => providerState.settled,
    ensureFlagsReady: async () => {
        providerState.settled = true
    },
    getRemoteFlag: () => providerState.remote,
}))

const { useFeatureFlag } = await import("./useFeatureFlag")

describe("useFeatureFlag", () => {
    beforeEach(() => {
        providerState.settled = false
        providerState.remote = undefined
    })
    it("starts from the env default while the provider is pending", () => {
        vi.stubEnv("VITE_APP_FLAG_PLANNER_ENABLED", "true")
        try {
            const { result } = renderHook(() => useFeatureFlag("planner-enabled"))

            expect(result.current).toEqual({
                enabled: true,
                isReady: false,
                source: "env",
            })
        } finally {
            vi.unstubAllEnvs()
        }
    })

    it("defaults to the registry value without env or remote input", () => {
        const { result } = renderHook(() => useFeatureFlag("planner-enabled"))

        expect(result.current).toEqual({
            enabled: false,
            isReady: false,
            source: "default",
        })
    })

    it("flips to the remote value once the provider settles", async () => {
        const { result } = renderHook(() => useFeatureFlag("planner-enabled"))

        providerState.remote = true
        providerState.settled = true
        // Trigger the post-settle refresh path.
        await Promise.resolve()
        await waitFor(() => {
            expect(result.current.enabled).toBe(true)
        })
        expect(result.current.isReady).toBe(true)
        expect(result.current.source).toBe("remote")
    })

    it("keeps the env value when the remote flag stays undefined", async () => {
        vi.stubEnv("VITE_APP_PLANNER_ENABLED", "true")
        try {
            const { result } = renderHook(() => useFeatureFlag("planner-enabled"))

            providerState.settled = true
            await Promise.resolve()
            await waitFor(() => {
                expect(result.current.isReady).toBe(true)
            })
            expect(result.current).toEqual({
                enabled: true,
                isReady: true,
                source: "env",
            })
        } finally {
            vi.unstubAllEnvs()
        }
    })
})
