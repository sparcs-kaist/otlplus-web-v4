import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { type AxiosHeaders } from "axios"
import { useTranslation } from "react-i18next"

import { axiosClient } from "@/libs/axios"

import {
    type DynamicPath,
    type GetOriginalPath,
    type Method,
    type RequestMap,
    type ResponseMap,
} from "./getAPIType"

type UseAPIOptions = {
    headers?: AxiosHeaders
    enabled?: boolean
    staleTime?: number
    gcTime?: number
}

export function useAPI<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
    Req extends RequestMap[GetOriginalPath<P>][Extract<
        M,
        keyof RequestMap[GetOriginalPath<P>]
    >],
    Res extends ResponseMap[GetOriginalPath<P>][Extract<
        M,
        keyof ResponseMap[GetOriginalPath<P>]
    >],
>(method: M, path: P, ops: UseAPIOptions = {}) {
    const [params, setParams] = useState<Req>(null as Req)
    const { i18n } = useTranslation()
    const { headers, enabled, staleTime = Infinity, gcTime = 5 * 60 * 1000 } = ops

    return [
        setParams,
        useQuery<Res>({
            queryKey: [path, params, i18n.resolvedLanguage],
            queryFn: async () => {
                const { data, status, statusText } = await axiosClient.request<Res>({
                    method: method,
                    url: path,
                    params: params,
                    headers: headers || {},
                })

                return data
            },
            retry: 1,
            staleTime: staleTime,
            gcTime: gcTime,
            enabled: enabled || params !== null,
        }),
    ] as const
}
