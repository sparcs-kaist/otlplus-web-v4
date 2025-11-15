import { useState } from "react"

import { type UseMutationOptions, useMutation, useQuery } from "@tanstack/react-query"
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

type UseAPIQueryOptions = {
    enabled?: boolean
    staleTime?: number
    gcTime?: number
}

type UseAPIMutationOptions<Res, Req> = Omit<
    UseMutationOptions<Res, Error, Req, unknown>,
    "mutationFn"
>

type UseAPIOptions<Res, Req> = {
    headers?: AxiosHeaders
} & UseAPIQueryOptions &
    UseAPIMutationOptions<Res, Req>

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
>(method: M, path: P, ops: UseAPIOptions<Res, Req> = {}) {
    const { i18n } = useTranslation()
    const {
        headers,
        enabled,
        staleTime = Infinity,
        gcTime = 5 * 60 * 1000,
        ...mutationOps
    } = ops

    if (method === "GET") {
        const [params, setParams] = useState<Req>(null as Req)
        const query = useQuery<Res>({
            queryKey: [path, params, i18n.resolvedLanguage],
            queryFn: async () => {
                const { data } = await axiosClient.request<Res>({
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
        })
        return [query, setParams] as const
    }

    const mutation = useMutation<Res, Error, Req>({
        mutationFn: async (params: Req) => {
            const { data } = await axiosClient.request<Res>({
                method: method,
                url: path,
                data: ["POST", "PUT", "PATCH"].includes(method) ? params : undefined,
                params: ["DELETE"].includes(method) ? params : undefined,
                headers: headers || {},
            })
            return data
        },
        ...mutationOps,
    })

    return [mutation.mutate, mutation] as const
}
