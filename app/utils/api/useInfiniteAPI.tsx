import { type Dispatch, type SetStateAction, useEffect, useState } from "react"

import {
    type InfiniteData,
    type UseInfiniteQueryResult,
    useInfiniteQuery,
} from "@tanstack/react-query"
import { type AxiosHeaders } from "axios"
import { useTranslation } from "react-i18next"

import { axiosClient } from "@/libs/axios"

import {
    type DynamicPath,
    type GetOriginalPath,
    type Method,
    type getAPIRequestType,
    type getAPIResponseType,
    getOriginalPathValue,
    getZodSchemaRequest,
    getZodSchemaResponse,
} from "./getAPIType"

type ArrayKeys<T> = {
    [K in keyof T]-?: T[K] extends any[] ? K : never
}[keyof T]

type NestedRes<Res> = ArrayKeys<Res>

type UseAPIQueryOptions<M extends Method<GetOriginalPath<P>>, P extends DynamicPath> = {
    infinites: ReadonlyArray<NestedRes<getAPIResponseType<M, P>>>
    limit: number
    initialOffset?: number
    headers?: AxiosHeaders
    enabled?: boolean
    staleTime?: number
    gcTime?: number
}

type NoLimitOffset<T> = Omit<T, "limit" | "offset">

export function useInfiniteAPI<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
    Req extends getAPIRequestType<M, P>,
    Res extends getAPIResponseType<M, P>,
    FReq extends NoLimitOffset<Req>,
>(
    method: M,
    path: P,
    ops: UseAPIQueryOptions<M, P>,
): {
    query: UseInfiniteQueryResult<InfiniteData<Res, unknown>, Error>
    setParams: Dispatch<SetStateAction<FReq>>
    data: Res | undefined
} {
    const { i18n } = useTranslation()
    const {
        infinites,
        headers = {},
        enabled = true,
        staleTime = Infinity,
        gcTime = 5 * 60 * 1000,
        initialOffset = 0,
        limit,
    } = ops
    const [flattenData, setFlattenData] = useState<Res | undefined>(undefined)
    const [params, setParams] = useState<FReq>(null as unknown as FReq)

    const requestSchema = getZodSchemaRequest<M, GetOriginalPath<P>>(
        method,
        getOriginalPathValue(path),
    )

    const query = useInfiniteQuery<Res>({
        queryKey: [path, params, i18n.resolvedLanguage],
        queryFn: async ({ pageParam = 0 }) => {
            let offset = initialOffset + (pageParam as number) * limit

            const { data } = await axiosClient.request<Res>({
                method,
                url: path,
                params: { ...params, offset, limit },
                headers,
            })

            return data
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            let flag = true

            infinites.forEach((key) => {
                const lastPageLength = (lastPage[key] as any[]).length
                if (lastPageLength < limit) flag = false
            })

            if (flag) return allPages.length
            return undefined
        },
        retry: 1,
        staleTime,
        gcTime,
        enabled:
            enabled && (params !== null || requestSchema.safeParse({})?.success === true),
    })

    useEffect(() => {
        if (!query.data?.pages) return

        setFlattenData((prev) => {
            if (prev === undefined) {
                return query.data.pages[0] as Res
            } else {
                const lastPage = query.data.pages[query.data.pages.length - 1]

                prev = { ...prev, ...(lastPage as {}) }

                infinites.forEach((key) => {
                    const mergedArray = query.data!.pages.flatMap((page) => page[key])
                    if (prev) (prev[key] as any[]) = mergedArray
                })

                return prev
            }
        })
    }, [query.data])

    useEffect(() => {
        if (query.isEnabled) query.refetch()
    }, [i18n.resolvedLanguage])

    return { query, setParams, data: flattenData }
}
