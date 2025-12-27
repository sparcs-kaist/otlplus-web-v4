import { useCallback, useEffect, useState } from "react"

import { useLiveQuery } from "dexie-react-hooks"

import type { Lecture } from "@/common/schemas/lecture"

import { db } from "./db"
import { timetableCache } from "./timetableCache"
import { useNetworkStatus } from "./useNetworkStatus"

export interface TimetableOfflineState {
    lectures: Lecture[]
    isOfflineMode: boolean
    isLoading: boolean
    isCached: boolean
    lastSyncedAt: string | null
    syncToCache: (lectures: Lecture[]) => Promise<void>
    loadFromCache: () => Promise<Lecture[] | null>
}

export function useTimetableOffline(
    userId: number | undefined,
    year: number | undefined,
    semester: string | undefined,
): TimetableOfflineState {
    const { isOnline } = useNetworkStatus()
    const [isLoading, setIsLoading] = useState(true)
    const [isOfflineMode, setIsOfflineMode] = useState(false)

    const cachedTimetable = useLiveQuery(async () => {
        if (!userId || !year || !semester) return undefined
        return timetableCache.get(userId, year, semester)
    }, [userId, year, semester])

    const syncToCache = useCallback(
        async (lectures: Lecture[]) => {
            if (!userId || !year || !semester) return
            await timetableCache.save(userId, year, semester, lectures)
        },
        [userId, year, semester],
    )

    const loadFromCache = useCallback(async (): Promise<Lecture[] | null> => {
        if (!userId || !year || !semester) return null
        const cached = await timetableCache.get(userId, year, semester)
        return cached?.lectures ?? null
    }, [userId, year, semester])

    useEffect(() => {
        setIsOfflineMode(!isOnline)
    }, [isOnline])

    useEffect(() => {
        if (cachedTimetable !== undefined) {
            setIsLoading(false)
        }
    }, [cachedTimetable])

    return {
        lectures: cachedTimetable?.lectures ?? [],
        isOfflineMode,
        isLoading,
        isCached: cachedTimetable !== undefined,
        lastSyncedAt: cachedTimetable?.syncedAt ?? null,
        syncToCache,
        loadFromCache,
    }
}

export function useAllCachedTimetables(userId: number | undefined) {
    return useLiveQuery(
        async () => {
            if (!userId) return []
            return db.timetables.where("userId").equals(userId).toArray()
        },
        [userId],
        [],
    )
}
