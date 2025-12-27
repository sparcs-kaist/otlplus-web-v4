import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from "react"

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
} from "./getAPIType"

type ArrayKeys<T> = {
    [K in keyof T]-?: T[K] extends any[] ? K : never
}[keyof T]

type NestedRes<Res> = ArrayKeys<Res>

type UseAPIQueryOptions<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
    Res,
> = {
    infinites: ReadonlyArray<NestedRes<getAPIResponseType<M, P>>>
    limit: number
    initialOffset?: number
    headers?: AxiosHeaders
    enabled?: boolean
    staleTime?: number
    gcTime?: number
    select?: (data: Res | undefined) => Res | undefined
    iterate?: (data: Res) => number
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
    ops: UseAPIQueryOptions<M, P, Res>,
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
        select = (data) => data,
        iterate = () => -1,
    } = ops
    const [flattenData, setFlattenData] = useState<Res | undefined>(undefined)
    const [params, setParams] = useState<FReq>(null as unknown as FReq)

    const selectRef = useRef(select)
    const infinitesRef = useRef(infinites)

    useEffect(() => {
        selectRef.current = select
    }, [select])

    useEffect(() => {
        infinitesRef.current = infinites
    }, [infinites])

    const requestSchema = getZodSchemaRequest<M, GetOriginalPath<P>>(
        method,
        getOriginalPathValue(path),
    )

    const query = useInfiniteQuery<Res>({
        queryKey: [path, params],
        queryFn: async ({ pageParam = 0 }) => {
            const offset = initialOffset + (pageParam as number) * limit

            const { data } = await axiosClient.request<Res>({
                method,
                url: "/api/v2" + path,
                params: { ...params, offset, limit },
                headers,
            })

            return data
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const iteratedCount = iterate(lastPage)
            if (iteratedCount !== -1) {
                return iteratedCount > 0 ? allPages.length : undefined
            }

            for (const key of infinitesRef.current) {
                const lastPageLength = (lastPage[key] as any[]).length
                if (lastPageLength < limit) {
                    return undefined
                }
            }

            return infinitesRef.current.length > 0 ? allPages.length : undefined
        },
        retry: 1,
        staleTime,
        gcTime,
        enabled:
            // TODO: fix ts-expect-error
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            enabled && (params !== null || requestSchema.safeParse({})?.success === true),
    })

    useEffect(() => {
        const pages = query.data?.pages
        if (!pages || pages.length === 0) {
            setFlattenData(undefined)
            return
        }

        if (infinitesRef.current.length === 0) {
            const latestPage = pages[pages.length - 1] as Res
            setFlattenData(selectRef.current(latestPage))
            return
        }

        const latestPage = pages[pages.length - 1]
        const merged = { ...(latestPage as object) } as Res

        infinitesRef.current.forEach((key) => {
            const aggregated = pages.flatMap((page) => page[key] as any[])
            ;(merged[key] as any[]) = aggregated
        })

        setFlattenData(selectRef.current(merged))
    }, [query.data])

    useEffect(() => {
        if (query.isEnabled) query.refetch()
    }, [i18n.resolvedLanguage])

    return { query, setParams, data: flattenData }
}
