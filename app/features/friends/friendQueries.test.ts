import { QueryClient } from "@tanstack/react-query"
import { describe, expect, it } from "vitest"

import { invalidateFriendQueries, removeFriendTimetableQueries } from "./friendQueries"

describe("friend query updates", () => {
    it("invalidates friend lists and overlaps across languages using the useAPI key order", async () => {
        const client = new QueryClient()
        const affected = [
            ["/friends", null, "ko", "/api/v2"],
            ["/friends", null, "en", "/api/v2"],
            ["/friends/lectures/42/overlaps", null, "ko", "/api/v2"],
        ]
        const unaffected = [
            ["/friends/7/timetables", { year: 2026, semester: 3 }, "ko", "/api/v2"],
            ["/lectures/42", null, "ko", "/api/v2"],
            ["/friends", null, "ko", "/api"],
        ]
        for (const key of [...affected, ...unaffected]) client.setQueryData(key, {})

        await invalidateFriendQueries(client)

        for (const key of affected)
            expect(client.getQueryState(key)?.isInvalidated).toBe(true)
        for (const key of unaffected)
            expect(client.getQueryState(key)?.isInvalidated).toBe(false)
        client.clear()
    })

    it("removes only the deleted friend's timetable caches across semesters and languages", () => {
        const client = new QueryClient()
        const removed = [
            ["/friends/7/timetables", { year: 2026, semester: 3 }, "ko", "/api/v2"],
            ["/friends/7/timetables", { year: 2025, semester: 1 }, "en", "/api/v2"],
            ["/friends/7/timetables/my-timetable", null, "ko", "/api/v2"],
            ["/friends/7/timetables/42", null, "en", "/api/v2"],
        ]
        const retained = [
            ["/friends/70/timetables", null, "ko", "/api/v2"],
            ["/timetables/42", null, "ko", "/api/v2"],
            ["/friends/7/timetables", null, "ko", "/api"],
            ["/friends", null, "ko", "/api/v2"],
            ["/friends/lectures/42/overlaps", null, "ko", "/api/v2"],
        ]
        for (const key of [...removed, ...retained]) client.setQueryData(key, {})

        removeFriendTimetableQueries(client, 7)

        for (const key of removed) expect(client.getQueryState(key)).toBeUndefined()
        for (const key of retained) expect(client.getQueryState(key)).toBeDefined()
        client.clear()
    })
})
