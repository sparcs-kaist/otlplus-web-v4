import { AxiosError, AxiosHeaders, HttpStatusCode } from "axios"
import { describe, expect, it } from "vitest"

import resolveUserInfo from "./resolveUserInfo"

function createAxiosError(status: number): AxiosError {
    return new AxiosError("request failed", undefined, undefined, undefined, {
        data: {},
        status,
        statusText: "",
        headers: new AxiosHeaders(),
        config: { headers: new AxiosHeaders() },
    })
}

describe("resolveUserInfo", () => {
    it("waits while authentication is disabled or pending", () => {
        expect(
            resolveUserInfo({
                enabled: false,
                isPending: false,
                isError: false,
                error: null,
                data: undefined,
            }),
        ).toBeUndefined()
        expect(
            resolveUserInfo({
                enabled: true,
                isPending: true,
                isError: false,
                error: null,
                data: undefined,
            }),
        ).toBeUndefined()
    })

    it("treats an authentication error as logged out even when stale data remains", () => {
        expect(
            resolveUserInfo({
                enabled: true,
                isPending: false,
                isError: true,
                error: createAxiosError(HttpStatusCode.Unauthorized),
                data: { id: 1 },
            }),
        ).toBeNull()
    })

    it("preserves the current state after a transient refetch error", () => {
        expect(
            resolveUserInfo({
                enabled: true,
                isPending: false,
                isError: true,
                error: createAxiosError(HttpStatusCode.ServiceUnavailable),
                data: { id: 1 },
            }),
        ).toBeUndefined()
    })

    it("returns authenticated user data on success", () => {
        const user = { id: 1 }

        expect(
            resolveUserInfo({
                enabled: true,
                isPending: false,
                isError: false,
                error: null,
                data: user,
            }),
        ).toBe(user)
    })
})
