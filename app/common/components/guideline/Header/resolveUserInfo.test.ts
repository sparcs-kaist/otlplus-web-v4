import { describe, expect, it } from "vitest"

import resolveUserInfo from "./resolveUserInfo"

describe("resolveUserInfo", () => {
    it("waits while authentication is disabled or loading", () => {
        expect(
            resolveUserInfo({
                enabled: false,
                isLoading: false,
                isError: false,
                data: undefined,
            }),
        ).toBeUndefined()
        expect(
            resolveUserInfo({
                enabled: true,
                isLoading: true,
                isError: false,
                data: undefined,
            }),
        ).toBeUndefined()
    })

    it("treats an error as logged out even when stale data remains", () => {
        expect(
            resolveUserInfo({
                enabled: true,
                isLoading: false,
                isError: true,
                data: { id: 1 },
            }),
        ).toBeNull()
    })

    it("returns authenticated user data on success", () => {
        const user = { id: 1 }

        expect(
            resolveUserInfo({
                enabled: true,
                isLoading: false,
                isError: false,
                data: user,
            }),
        ).toBe(user)
    })
})
