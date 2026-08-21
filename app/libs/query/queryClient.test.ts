import { QueryClient } from "@tanstack/react-query"
import { describe, expect, it } from "vitest"

import { shouldPersistQuery } from "./queryClient"
import { queryKeys } from "./queryKeys"

function getQuery(client: QueryClient, key: readonly unknown[]) {
    return client.getQueryCache().find({ queryKey: key, exact: true })
}

describe("shouldPersistQuery", () => {
    it("persists successful semester metadata", () => {
        const client = new QueryClient()
        client.setQueryData([queryKeys.semesters], { semesters: [] })

        expect(shouldPersistQuery(getQuery(client, [queryKeys.semesters])!)).toBe(true)
    })

    it.each([queryKeys.userInfo, queryKeys.timetables, queryKeys.timetableDetail(123)])(
        "does not persist authenticated query %s",
        (key) => {
            const client = new QueryClient()
            client.setQueryData([key], {})

            expect(shouldPersistQuery(getQuery(client, [key])!)).toBe(false)
        },
    )

    it("does not persist unrelated successful queries", () => {
        const client = new QueryClient()
        client.setQueryData(["/lectures"], { lectures: [] })

        expect(shouldPersistQuery(getQuery(client, ["/lectures"])!)).toBe(false)
    })

    it("does not persist pending semester queries", () => {
        const client = new QueryClient()
        const query = client.getQueryCache().build(client, {
            queryKey: [queryKeys.semesters],
            queryFn: async () => ({ semesters: [] }),
        })

        expect(shouldPersistQuery(query)).toBe(false)
    })

    it("retains successful semester data after a refetch error", () => {
        expect(
            shouldPersistQuery({
                queryKey: [queryKeys.semesters],
                state: { data: { semesters: [{ year: 2026 }] } },
            }),
        ).toBe(true)
    })
})
