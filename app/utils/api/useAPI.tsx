import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { type AxiosHeaders } from "axios"
import { useTranslation } from "react-i18next"

import { axiosClient as axios } from "@/libs/axios"

import {
    type DynamicPath,
    type GetOriginalPath,
    type Method,
    type getAPIRequestType,
    type getAPIResponseType,
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
    Req extends getAPIRequestType<Method<GetOriginalPath<P>>, P>,
    Res extends getAPIResponseType<Method<GetOriginalPath<P>>, P>,
>(method: M, path: P, ops: UseAPIOptions = {}) {
    const [params, setParams] = useState<Req>(null as Req)
    const { i18n } = useTranslation()
    const { headers, enabled, staleTime = Infinity, gcTime = 5 * 60 * 1000 } = ops

    const q = useQuery<Res>({
        queryKey: [params, i18n.resolvedLanguage],
        queryFn: async () => {
            const { data, status, statusText } = await axios.request<Res>({
                method,
                url: path,
                params,
                data: params,
                headers: headers || {},
            })

            return data
        },
        initialData: null as Res,
        retry: 1,
        staleTime,
        gcTime,
        enabled: enabled === true || params !== null,
    })

    return [setParams, q] as const
}
