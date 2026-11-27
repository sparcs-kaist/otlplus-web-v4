import { useQuery } from "@tanstack/react-query"
import { renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { useAPI } from "./useAPI"

vi.mock("@tanstack/react-query", async (importOriginal) => ({
    ...(await importOriginal<typeof import("@tanstack/react-query")>()),
    useQuery: vi.fn(() => ({})),
}))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ i18n: { resolvedLanguage: "ko" } }),
}))

describe("useAPI polling options", () => {
    beforeEach(() => vi.clearAllMocks())

    it("forwards the polling interval to TanStack Query", () => {
        renderHook(() =>
            useAPI("GET", "/friends", {
                refetchInterval: 60_000,
            }),
        )
        expect(useQuery).toHaveBeenLastCalledWith(
            expect.objectContaining({
                enabled: true,
                refetchInterval: 60_000,
            }),
        )
    })

    it("forwards an explicit false interval when a friend's list is not visible", () => {
        renderHook(() =>
            useAPI("GET", "/friends", {
                refetchInterval: false,
            }),
        )
        expect(useQuery).toHaveBeenLastCalledWith(
            expect.objectContaining({
                refetchInterval: false,
            }),
        )
    })
})
