import type { PersistedClient, Persister } from "@tanstack/react-query-persist-client"
import { del, get, set } from "idb-keyval"

const IDB_KEY = "otlplus-query-cache"

export function createIDBPersister(): Persister {
    return {
        persistClient: async (client: PersistedClient) => {
            await set(IDB_KEY, client)
        },
        restoreClient: async () => {
            return await get<PersistedClient>(IDB_KEY)
        },
        removeClient: async () => {
            await del(IDB_KEY)
        },
    }
}

export const idbPersister = createIDBPersister()

/**
 * Clear all persisted query cache from IndexedDB.
 * Should be called on logout to prevent stale user data.
 */
export async function clearQueryCache(): Promise<void> {
    await del(IDB_KEY)
}
