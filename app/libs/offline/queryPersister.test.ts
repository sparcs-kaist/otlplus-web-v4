import type { PersistedClient } from "@tanstack/react-query-persist-client"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { createIDBPersister } from "./queryPersister"

const idbMocks = vi.hoisted(() => ({
    del: vi.fn(),
    get: vi.fn(),
    set: vi.fn(),
}))

vi.mock("idb-keyval", () => idbMocks)
vi.mock("@/utils/logger", () => ({
    default: { warn: vi.fn() },
}))

const persistedClient: PersistedClient = {
    timestamp: 0,
    buster: "test",
    clientState: {
        mutations: [],
        queries: [],
    },
}

describe("createIDBPersister", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("keeps the app usable when IndexedDB writes fail", async () => {
        idbMocks.set.mockRejectedValueOnce(new ReferenceError("indexedDB is unavailable"))

        await expect(
            createIDBPersister().persistClient(persistedClient),
        ).resolves.toBeUndefined()
    })

    it("keeps serialization defects actionable instead of treating them as IndexedDB failures", async () => {
        const cyclicClient: PersistedClient = {
            ...persistedClient,
            clientState: {
                mutations: [],
                queries: [],
            },
        }
        Object.defineProperty(cyclicClient, "cycle", {
            enumerable: true,
            value: cyclicClient,
        })

        await expect(createIDBPersister().persistClient(cyclicClient)).rejects.toThrow(
            TypeError,
        )
        expect(idbMocks.set).not.toHaveBeenCalled()
    })

    it("returns no cache when IndexedDB reads fail", async () => {
        idbMocks.get.mockRejectedValueOnce(
            new DOMException("database closing", "InvalidStateError"),
        )

        await expect(createIDBPersister().restoreClient()).resolves.toBeUndefined()
    })

    it("keeps session cleanup usable when IndexedDB deletion fails", async () => {
        idbMocks.del.mockRejectedValueOnce(new DOMException("denied", "UnknownError"))

        await expect(createIDBPersister().removeClient()).resolves.toBeUndefined()
    })
})
