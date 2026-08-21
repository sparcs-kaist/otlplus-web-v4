import type { PersistedClient, Persister } from "@tanstack/react-query-persist-client"
import { del, get, set } from "idb-keyval"

import logger from "@/utils/logger"

const IDB_KEY = "otlplus-query-cache"

type PersistenceOperation = "persist" | "restore" | "remove"

let hasWarnedPersistenceFailure = false

function warnPersistenceFailure(operation: PersistenceOperation, error: unknown) {
    if (hasWarnedPersistenceFailure) return
    hasWarnedPersistenceFailure = true
    logger.warn("Query cache persistence unavailable", {
        operation,
        errorName: error instanceof Error ? error.name : typeof error,
    })
}

async function removePersistedClient(): Promise<void> {
    try {
        await del(IDB_KEY)
    } catch (error) {
        warnPersistenceFailure("remove", error)
    }
}

function serialize(client: PersistedClient): string {
    return JSON.stringify(client)
}

function deserialize(cachedString: string): PersistedClient {
    return JSON.parse(cachedString) as PersistedClient
}

export function createIDBPersister(): Persister {
    return {
        persistClient: async (client: PersistedClient) => {
            const serializedClient = serialize(client)
            try {
                await set(IDB_KEY, serializedClient)
            } catch (error) {
                warnPersistenceFailure("persist", error)
            }
        },
        restoreClient: async () => {
            let cached: string | undefined
            try {
                cached = await get<string>(IDB_KEY)
            } catch (error) {
                warnPersistenceFailure("restore", error)
                return undefined
            }

            if (!cached) return undefined
            try {
                return deserialize(cached)
            } catch {
                await removePersistedClient()
                return undefined
            }
        },
        removeClient: removePersistedClient,
    }
}

export const idbPersister = createIDBPersister()

export async function clearQueryCache(): Promise<void> {
    await idbPersister.removeClient()
}
