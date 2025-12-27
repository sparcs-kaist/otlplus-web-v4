import type { Lecture } from "@/common/schemas/lecture"

import { type CachedTimetable, db, generateTimetableId } from "./db"

/**
 * Timetable cache service for offline functionality
 *
 * Responsibilities:
 * - Cache timetable data to IndexedDB when online
 * - Retrieve cached data when offline
 * - Track sync status for data freshness
 */
export const timetableCache = {
    /**
     * Save or update timetable data in cache
     */
    async save(
        userId: number,
        year: number,
        semester: string,
        lectures: Lecture[],
    ): Promise<void> {
        const id = generateTimetableId(userId, year, semester)
        const now = new Date().toISOString()

        const cached: CachedTimetable = {
            id,
            userId,
            year,
            semester,
            lectures,
            syncedAt: now,
            updatedAt: now,
        }

        await db.timetables.put(cached)
        await db.syncMeta.put({ key: "lastSyncTime", value: now })
    },

    /**
     * Get cached timetable for specific user and semester
     */
    async get(
        userId: number,
        year: number,
        semester: string,
    ): Promise<CachedTimetable | undefined> {
        const id = generateTimetableId(userId, year, semester)
        return db.timetables.get(id)
    },

    /**
     * Get all cached timetables for a user
     */
    async getAllForUser(userId: number): Promise<CachedTimetable[]> {
        return db.timetables.where("userId").equals(userId).toArray()
    },

    /**
     * Get the most recently synced timetable for a user
     */
    async getLatestForUser(userId: number): Promise<CachedTimetable | undefined> {
        const timetables = await db.timetables
            .where("userId")
            .equals(userId)
            .reverse()
            .sortBy("syncedAt")

        return timetables[0]
    },

    /**
     * Delete cached timetable
     */
    async delete(userId: number, year: number, semester: string): Promise<void> {
        const id = generateTimetableId(userId, year, semester)
        await db.timetables.delete(id)
    },

    /**
     * Clear all cached timetables for a user (e.g., on logout)
     */
    async clearUserCache(userId: number): Promise<void> {
        const timetables = await db.timetables.where("userId").equals(userId).toArray()
        const ids = timetables.map((t) => t.id)
        await db.timetables.bulkDelete(ids)
    },

    /**
     * Get last sync timestamp
     */
    async getLastSyncTime(): Promise<string | null> {
        const meta = await db.syncMeta.get("lastSyncTime")
        return meta?.value ?? null
    },

    /**
     * Check if cache has data for user
     */
    async hasCache(userId: number): Promise<boolean> {
        const count = await db.timetables.where("userId").equals(userId).count()
        return count > 0
    },

    /**
     * Check if cached data is stale (older than specified minutes)
     */
    async isStale(
        userId: number,
        year: number,
        semester: string,
        maxAgeMinutes: number = 60,
    ): Promise<boolean> {
        const cached = await this.get(userId, year, semester)
        if (!cached) return true

        const syncedAt = new Date(cached.syncedAt)
        const now = new Date()
        const ageMinutes = (now.getTime() - syncedAt.getTime()) / (1000 * 60)

        return ageMinutes > maxAgeMinutes
    },
}
