import { describe, expect, it } from "vitest"

import { FLAGS, type FlagKey, resolveFlag } from "./core"

const key: FlagKey = "planner-enabled"

describe("FLAGS registry", () => {
    it("registers the planner flag with a disabled default", () => {
        expect(FLAGS["planner-enabled"].default).toBe(false)
    })
})

describe("resolveFlag precedence", () => {
    it("prefers a defined remote value over env default", () => {
        expect(resolveFlag(key, { remote: true, envDefault: false })).toEqual({
            enabled: true,
            source: "remote",
        })
        expect(resolveFlag(key, { remote: false, envDefault: true })).toEqual({
            enabled: false,
            source: "remote",
        })
    })

    it("falls back to the env default when remote is undefined", () => {
        expect(resolveFlag(key, { remote: undefined, envDefault: true })).toEqual({
            enabled: true,
            source: "env",
        })
    })

    it("falls back to the registry default when nothing is set", () => {
        expect(resolveFlag(key, { remote: undefined, envDefault: undefined })).toEqual({
            enabled: FLAGS[key].default,
            source: "default",
        })
    })

    it("reads defaults from the registry for any registered key", () => {
        for (const registered of Object.keys(FLAGS) as FlagKey[]) {
            expect(
                resolveFlag(registered, {
                    remote: undefined,
                    envDefault: undefined,
                }).source,
            ).toBe("default")
        }
    })
})
