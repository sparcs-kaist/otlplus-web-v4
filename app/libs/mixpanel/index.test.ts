import { beforeEach, describe, expect, it, vi } from "vitest"

vi.stubEnv("VITE_APP_LOG_LEVEL", "info")

const initMock = vi.fn()
const whenReadyMock = vi.fn()
const isEnabledSyncMock = vi.fn()

vi.doMock("mixpanel-browser", () => ({
    default: {
        init: initMock,
        flags: { whenReady: whenReadyMock, is_enabled_sync: isEnabledSyncMock },
    },
}))

vi.doMock("@/env", async (importOriginal) => {
    const actual = await importOriginal<typeof import("@/env")>()
    return {
        ...actual,
        clientEnv: {
            ...actual.clientEnv,
            VITE_MIXPANEL_TOKEN: "test-token",
            VITE_MIXPANEL_RECORD_SESSIONS_PERCENT: 42,
        },
    }
})

describe("initMixpanel", () => {
    beforeEach(() => {
        vi.resetModules()
        initMock.mockClear()
        whenReadyMock.mockReset()
        isEnabledSyncMock.mockReset()
    })

    it("initializes with flags enabled and env-driven recording percent", async () => {
        const { initMixpanel } = await import("./index")

        await initMixpanel()

        expect(initMock).toHaveBeenCalledWith(
            "test-token",
            expect.objectContaining({
                flags: true,
                record_sessions_percent: 42,
                autocapture: true,
                track_pageview: true,
            }),
        )
    })

    it("is idempotent across repeated calls", async () => {
        const { initMixpanel } = await import("./index")

        await initMixpanel()
        await initMixpanel()

        expect(initMock).toHaveBeenCalledTimes(1)
    })

    it("never initializes without a token", async () => {
        vi.doMock("@/env", async (importOriginal) => {
            const actual = await importOriginal<typeof import("@/env")>()
            return {
                ...actual,
                clientEnv: { ...actual.clientEnv, VITE_MIXPANEL_TOKEN: undefined },
            }
        })
        vi.resetModules()
        const { initMixpanel } = await import("./index")

        await initMixpanel()

        expect(initMock).not.toHaveBeenCalled()
    })
})
