import { describe, expect, it } from "vitest"

import { parseFlagEnvDefaults } from "./envDefaults"

describe("parseFlagEnvDefaults", () => {
    it("maps generic VITE_APP_FLAG_* vars to normalized flag keys", () => {
        expect(
            parseFlagEnvDefaults({ VITE_APP_FLAG_PLANNER_ENABLED: "true" }),
        ).toEqual({ "planner-enabled": true })
    })

    it("normalizes underscores in suffixes and boolean-ish values", () => {
        expect(
            parseFlagEnvDefaults({ VITE_APP_FLAG_NEW_COOL_THING: "1" }),
        ).toEqual({ "new-cool-thing": true })
        expect(parseFlagEnvDefaults({ VITE_APP_FLAG_NEW_COOL_THING: "off" })).toEqual({
            "new-cool-thing": false,
        })
    })

    it("supports the explicit planner alias", () => {
        expect(parseFlagEnvDefaults({ VITE_APP_PLANNER_ENABLED: "on" })).toEqual({
            "planner-enabled": true,
        })
    })

    it("lets the generic form win over the alias on conflict", () => {
        expect(
            parseFlagEnvDefaults({
                VITE_APP_PLANNER_ENABLED: "true",
                VITE_APP_FLAG_PLANNER_ENABLED: "false",
            }),
        ).toEqual({ "planner-enabled": false })
    })

    it("ignores non-flag keys", () => {
        expect(parseFlagEnvDefaults({ VITE_MIXPANEL_TOKEN: "abc" })).toEqual({})
    })

    it("returns no entry for unset values", () => {
        expect(
            parseFlagEnvDefaults({ VITE_APP_FLAG_PLANNER_ENABLED: undefined }),
        ).toEqual({})
    })

    it("coerces non-string primitives through String()", () => {
        expect(parseFlagEnvDefaults({ VITE_APP_FLAG_PLANNER_ENABLED: 1 })).toEqual({
            "planner-enabled": true,
        })
    })
})
