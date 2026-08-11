import { QueryClient } from "@tanstack/react-query"

import { queryKeys } from "./queryKeys"

export const QUERY_CACHE_MAX_AGE = 1000 * 60 * 60 * 24
export const QUERY_CACHE_BUSTER = "auth-cache-v2"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: QUERY_CACHE_MAX_AGE,
            staleTime: 1000 * 30,
            retry: 1,
        },
    },
})

queryClient.setQueryDefaults([queryKeys.semesters], {
    gcTime: QUERY_CACHE_MAX_AGE,
    staleTime: 1000 * 60 * 60,
    networkMode: "offlineFirst",
})

export function shouldPersistQuery(query: {
    queryKey: readonly unknown[]
    state: { status: string }
}): boolean {
    return query.state.status === "success" && query.queryKey[0] === queryKeys.semesters
}
