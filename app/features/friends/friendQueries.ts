import type { QueryClient } from "@tanstack/react-query"

export function invalidateFriendQueries(queryClient: QueryClient) {
    return queryClient.invalidateQueries({
        predicate: ({ queryKey: [path, , , apiPrefix] }) =>
            apiPrefix === "/api/v2" &&
            typeof path === "string" &&
            (path === "/friends" || /^\/friends\/lectures\/\d+\/overlaps$/.test(path)),
    })
}

export function removeFriendTimetableQueries(queryClient: QueryClient, friendId: number) {
    const pathPrefix = `/friends/${friendId}/timetables`
    queryClient.removeQueries({
        predicate: ({ queryKey: [path, , , apiPrefix] }) =>
            apiPrefix === "/api/v2" &&
            typeof path === "string" &&
            (path === pathPrefix || path.startsWith(`${pathPrefix}/`)),
    })
}
