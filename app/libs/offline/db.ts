import Dexie, { type Table } from "dexie"

import type { Lecture } from "@/common/schemas/lecture"

/**
 * Cached timetable data structure for offline storage
 */
export interface CachedTimetable {
    /** Composite key: `${userId}-${year}-${semester}` */
    id: string
    userId: number
    year: number
    semester: string
    lectures: Lecture[]
    /** ISO timestamp of last successful sync */
    syncedAt: string
    /** ISO timestamp of last modification (for conflict resolution) */
    updatedAt: string
}

/**
 * Sync metadata for tracking replication state
 */
export interface SyncMeta {
    key: string
    value: string
}

/**
 * OTL Plus offline database using Dexie.js (IndexedDB wrapper)
 *
 * Schema:
 * - timetables: Stores cached timetable data with composite key
 * - syncMeta: Stores sync state metadata (last sync time, etc.)
 */
class OTLDatabase extends Dexie {
    timetables!: Table<CachedTimetable, string>
    syncMeta!: Table<SyncMeta, string>

    constructor() {
        super("OTLPlusDB")

        this.version(1).stores({
            // Primary key is 'id', indexed by 'userId' and 'syncedAt'
            timetables: "id, userId, syncedAt",
            // Simple key-value store for sync metadata
            syncMeta: "key",
        })
    }
}

export const db = new OTLDatabase()

/**
 * Generate composite ID for timetable cache
 */
export function generateTimetableId(
    userId: number,
    year: number,
    semester: string,
): string {
    return `${userId}-${year}-${semester}`
}
