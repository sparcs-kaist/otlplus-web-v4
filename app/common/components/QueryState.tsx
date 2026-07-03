import type { ReactNode } from "react"

import type { UseInfiniteQueryResult, UseQueryResult } from "@tanstack/react-query"

import LoadingCircle from "@/common/components/LoadingCircle"

type AnyQuery =
    | Pick<UseQueryResult<unknown, Error>, "isLoading" | "isError">
    | Pick<UseInfiniteQueryResult<unknown, Error>, "isLoading" | "isError">

interface QueryStateProps {
    query: AnyQuery
    isEmpty?: boolean
    loading?: ReactNode
    error?: ReactNode
    empty?: ReactNode
    children: ReactNode
}

export default function QueryState({
    query,
    isEmpty,
    loading,
    error,
    empty,
    children,
}: QueryStateProps) {
    if (query.isLoading) {
        return <>{loading ?? <LoadingCircle />}</>
    }
    if (query.isError) {
        return <>{error ?? null}</>
    }
    if (isEmpty) {
        return <>{empty ?? null}</>
    }
    return <>{children}</>
}
