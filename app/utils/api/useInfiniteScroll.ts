import { useEffect } from "react"

import type { UseInfiniteQueryResult } from "@tanstack/react-query"
import { useInView } from "react-intersection-observer"

export function useInfiniteScroll<T>(
    query: Pick<
        UseInfiniteQueryResult<T, Error>,
        "hasNextPage" | "isFetchingNextPage" | "fetchNextPage"
    >,
) {
    const { ref, inView } = useInView({ threshold: 0 })

    useEffect(() => {
        if (inView && query.hasNextPage && !query.isFetchingNextPage) {
            query.fetchNextPage()
        }
    }, [inView, query.hasNextPage, query.isFetchingNextPage])

    return { ref }
}
