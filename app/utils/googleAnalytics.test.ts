import { beforeEach, describe, expect, it, vi } from "vitest"

vi.stubEnv("VITE_APP_LOG_LEVEL", "info")
vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST")

const { pageview, event } = await import("./googleAnalytics")

describe("googleAnalytics guards", () => {
    const originalGtag = window.gtag

    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("forwards pageview payloads to gtag", () => {
        const gtag = vi.fn()
        window.gtag = gtag

        pageview("/timetable")

        expect(gtag).toHaveBeenCalledWith("config", "G-TEST", {
            page_path: "/timetable",
        })
        window.gtag = originalGtag
    })

    it("forwards event payloads to gtag", () => {
        const gtag = vi.fn()
        window.gtag = gtag

        event({ action: "click", category: "engagement", label: "tab" })

        expect(gtag).toHaveBeenCalledWith("event", "click", {
            event_category: "engagement",
            event_label: "tab",
            value: undefined,
        })
        window.gtag = originalGtag
    })

    it("swallows third-party script failures instead of surfacing 'ga' errors", () => {
        window.gtag = (() => {
            throw new Error("ga")
        }) as unknown as typeof window.gtag

        expect(() => pageview("/x")).not.toThrow()
        expect(() =>
            event({ action: "a", category: "c", label: "l" }),
        ).not.toThrow()
        window.gtag = originalGtag
    })
})
