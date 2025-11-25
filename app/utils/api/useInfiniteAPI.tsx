import { type Dispatch, type SetStateAction, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { type UseQueryResult } from "@tanstack/react-query"
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

type UseAPIQueryOptions = {
    headers?: AxiosHeaders
    enabled?: boolean
    staleTime?: number
    gcTime?: number
}

function useInfiniteAPI<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
    Req extends getAPIRequestType<M, P>,
    Res extends getAPIResponseType<M, P>,
>(
    method: M,
    path: P,
    ops: UseAPIQueryOptions,
): [UseQueryResult<Res, Error>, Dispatch<SetStateAction<Req>>] {
    const { i18n } = useTranslation()
    const {
        headers = {},
        enabled = true,
        staleTime = Infinity,
        gcTime = 5 * 60 * 1000,
    } = ops
    const requestSchema = getZodSchemaRequest<M, GetOriginalPath<P>>(
        method,
        getOriginalPathValue(path),
    )

    const [params, setParams] = useState<Req>(null as Req)
    const query = useQuery<Res>({
        queryKey: [path, params, i18n.resolvedLanguage],
        queryFn: async () => {
            const { data } = await axiosClient.request<Res>({
                method,
                url: path,
                params,
                headers,
            })

            return data
        },
        retry: 1,
        staleTime,
        gcTime,
        enabled:
            enabled && (params !== null || requestSchema.safeParse({})?.success === true),
    })

    return [query, setParams]
}
