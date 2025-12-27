import type { Lecture } from "@/common/schemas/lecture"

import { timetableCache } from "./timetableCache"

export interface SyncResult {
    success: boolean
    error?: Error
    syncedAt?: string
}

export interface SyncState {
    isSyncing: boolean
    lastSyncAt: string | null
    error: Error | null
}

type FetchTimetableFunc = () => Promise<{
    year: number
    semester: string
    lectures: Lecture[]
}>

export async function syncTimetableToCache(
    userId: number,
    fetchTimetable: FetchTimetableFunc,
): Promise<SyncResult> {
    try {
        const data = await fetchTimetable()

        await timetableCache.save(userId, data.year, data.semester, data.lectures)

        return {
            success: true,
            syncedAt: new Date().toISOString(),
        }
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error : new Error(String(error)),
        }
    }
}

export function createSyncOnReconnect(
    userId: number | undefined,
    fetchTimetable: FetchTimetableFunc,
    onSync?: (result: SyncResult) => void,
): () => void {
    if (!userId) return () => {}

    const handleOnline = async () => {
        const result = await syncTimetableToCache(userId, fetchTimetable)
        onSync?.(result)
    }

    window.addEventListener("online", handleOnline)

    return () => {
        window.removeEventListener("online", handleOnline)
    }
}
