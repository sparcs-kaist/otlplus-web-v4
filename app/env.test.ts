import { describe, expect, it, vi } from "vitest"

vi.stubEnv("VITE_APP_LOG_LEVEL", "info")

const { publicEnvSchema, stringToBoolean } = await import("./env")

const minimalEnv = { VITE_APP_LOG_LEVEL: "info" }

describe("stringToBoolean", () => {
    it.each(["true", "1", "yes", "y", "on", "enable", "enabled"])(
        "treats %s as true",
        (value) => {
            expect(stringToBoolean(value)).toBe(true)
        },
    )

    it.each(["false", "0", "", "no", "off"])("treats %s as false", (value) => {
        expect(stringToBoolean(value)).toBe(false)
    })
})

describe("publicEnvSchema VITE_MIXPANEL_RECORD_SESSIONS_PERCENT", () => {
    it("defaults to 100 when unset", () => {
        const parsed = publicEnvSchema.parse(minimalEnv)
        expect(parsed.VITE_MIXPANEL_RECORD_SESSIONS_PERCENT).toBe(100)
    })

    it("defaults to 100 when empty", () => {
        const parsed = publicEnvSchema.parse({
            ...minimalEnv,
            VITE_MIXPANEL_RECORD_SESSIONS_PERCENT: "",
        })
        expect(parsed.VITE_MIXPANEL_RECORD_SESSIONS_PERCENT).toBe(100)
    })

    it("parses numeric strings within range", () => {
        const parsed = publicEnvSchema.parse({
            ...minimalEnv,
            VITE_MIXPANEL_RECORD_SESSIONS_PERCENT: "42",
        })
        expect(parsed.VITE_MIXPANEL_RECORD_SESSIONS_PERCENT).toBe(42)
    })

    it("accepts the boundaries 0 and 100", () => {
        for (const value of ["0", "100"]) {
            const parsed = publicEnvSchema.parse({
                ...minimalEnv,
                VITE_MIXPANEL_RECORD_SESSIONS_PERCENT: value,
            })
            expect(parsed.VITE_MIXPANEL_RECORD_SESSIONS_PERCENT).toBe(Number(value))
        }
    })

    it("rejects values above 100", () => {
        expect(() =>
            publicEnvSchema.parse({
                ...minimalEnv,
                VITE_MIXPANEL_RECORD_SESSIONS_PERCENT: "150",
            }),
        ).toThrow()
    })

    it("rejects non-numeric values", () => {
        expect(() =>
            publicEnvSchema.parse({
                ...minimalEnv,
                VITE_MIXPANEL_RECORD_SESSIONS_PERCENT: "abc",
            }),
        ).toThrow()
    })
})
