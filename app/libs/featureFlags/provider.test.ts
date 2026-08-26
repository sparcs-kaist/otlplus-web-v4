import { beforeEach, describe, expect, it, vi } from "vitest"

vi.stubEnv("VITE_APP_LOG_LEVEL", "info")

const initMixpanelMock = vi.fn(async () => {})

vi.doMock("@/libs/mixpanel", () => ({
    MIXPANEL_TOKEN: "test-token",
    initMixpanel: initMixpanelMock,
}))

type FakeClient = {
    flags: {
        whenReady: () => Promise<void>
        is_enabled_sync: (key: string, fallback: boolean) => boolean
    }
}

async function freshProvider(options?: {
    client?: FakeClient
    load?: () => Promise<unknown>
}) {
    vi.resetModules()
    const provider = await import("./provider")
    provider._resetForTests()
    if (options !== undefined) {
        provider._configureForTests(options)
    }
    return { provider, initMixpanelMock }
}

function makeClient(impl: (fallback: boolean) => boolean): FakeClient {
    return {
        flags: {
            whenReady: () => Promise.resolve(),
            is_enabled_sync: (_key, fallback) => impl(fallback),
        },
    }
}

describe("remote flag provider", () => {
    beforeEach(() => {
        vi.useFakeTimers()
        initMixpanelMock.mockClear()
    })

    it("settles once flags are ready and probes the remote value", async () => {
        const { provider } = await freshProvider({ client: makeClient(() => true) })

        await provider.ensureFlagsReady()

        expect(provider.isFlagsSettled()).toBe(true)
        expect(provider.getRemoteFlag("planner-enabled")).toBe(true)
        expect(initMixpanelMock).toHaveBeenCalledTimes(1)
    })

    it("returns false when the remote flag is defined and false", async () => {
        const { provider } = await freshProvider({ client: makeClient(() => false) })

        await provider.ensureFlagsReady()

        expect(provider.getRemoteFlag("planner-enabled")).toBe(false)
    })

    it("yields undefined when mixpanel echoes the probe fallback", async () => {
        const { provider } = await freshProvider({
            client: makeClient((fallback) => fallback),
        })

        await provider.ensureFlagsReady()

        expect(provider.getRemoteFlag("planner-enabled")).toBeUndefined()
    })

    it("bounds readiness by the timeout and still settles", async () => {
        const hangingClient: FakeClient = {
            flags: {
                whenReady: () => new Promise<void>(() => {}),
                is_enabled_sync: (_key, fallback) => fallback,
            },
        }
        const { provider } = await freshProvider({
            load: async () => hangingClient as unknown as null,
        })

        const pending = provider.ensureFlagsReady()
        await vi.advanceTimersByTimeAsync(3000)
        await pending

        expect(provider.isFlagsSettled()).toBe(true)
        expect(provider.getRemoteFlag("planner-enabled")).toBeUndefined()
    })

    it("settles without throwing when readiness rejects", async () => {
        const rejectingClient: FakeClient = {
            flags: {
                whenReady: () => Promise.reject(new Error("boom")),
                is_enabled_sync: () => false,
            },
        }
        const { provider } = await freshProvider({
            load: async () => rejectingClient as unknown as null,
        })

        await expect(provider.ensureFlagsReady()).resolves.toBeUndefined()
        expect(provider.isFlagsSettled()).toBe(true)
    })

    it("shares a single readiness promise across concurrent callers", async () => {
        let calls = 0
        const countingClient: FakeClient = {
            flags: {
                whenReady: () => {
                    calls += 1
                    return Promise.resolve()
                },
                is_enabled_sync: (_k, f) => f,
            },
        }
        const { provider } = await freshProvider({
            load: async () => countingClient as unknown as null,
        })

        await Promise.all([provider.ensureFlagsReady(), provider.ensureFlagsReady()])

        expect(calls).toBe(1)
    })

    it("reports unsettled before any readiness call", async () => {
        const { provider } = await freshProvider()

        expect(provider.isFlagsSettled()).toBe(false)
        expect(provider.getRemoteFlag("planner-enabled")).toBeUndefined()
    })

    it("never initializes without a token path returning null", async () => {
        const { provider, initMixpanelMock: spy } = await freshProvider({
            load: async () => null,
        })

        await provider.ensureFlagsReady()

        expect(provider.isFlagsSettled()).toBe(true)
        expect(spy).not.toHaveBeenCalled()
        expect(provider.getRemoteFlag("planner-enabled")).toBeUndefined()
    })
})
