import { type Dispatch, type SetStateAction, useState } from "react"

import { type UseMutationOptions, useMutation, useQuery } from "@tanstack/react-query"
import {
    type UseMutateFunction,
    type UseMutationResult,
    type UseQueryResult,
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

type UseAPIQueryOptions = {
    headers?: AxiosHeaders
    enabled?: boolean
    staleTime?: number
    gcTime?: number
}

type Merge<A, B> = [B] extends [never] ? A : A & B

type UseAPIMutationOptions<Res, Req> = Omit<
    UseMutationOptions<Res, Error, Req, unknown>,
    "mutationFn"
>

type UseAPIOptions<M, Req, Res> = Merge<
    UseAPIQueryOptions,
    M extends "GET" ? never : UseAPIMutationOptions<Res, Req>
>

type UseAPIReturn<M, Req, Res> = M extends "GET"
    ? [UseQueryResult<Res, Error>, Dispatch<SetStateAction<Req>>]
    : [
          UseMutationResult<Res, Error, Req, unknown>,
          UseMutateFunction<Res, Error, Req, unknown>,
      ]

export function useAPI<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
    Req extends getAPIRequestType<M, P>,
    Res extends getAPIResponseType<M, P>,
>(
    method: M,
    path: P,
    ops: UseAPIOptions<M, Req, Res> = {} as UseAPIOptions<M, Req, Res>,
): UseAPIReturn<M, Req, Res> {
    const { i18n } = useTranslation()
    const {
        headers = {},
        enabled = true,
        staleTime = Infinity,
        gcTime = 5 * 60 * 1000,
        ...mutationOps
    } = ops

    const requestSchema = getZodSchemaRequest(method, getOriginalPathValue(path))
    const responseSchema = getZodSchemaResponse(method, getOriginalPathValue(path))

    if (method === "GET") {
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
                enabled &&
                (params !== null || requestSchema.safeParse({})?.success === true),
        })

        return [query, setParams] as unknown as UseAPIReturn<M, Req, Res>
    } else {
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

        return [mutation, mutation.mutate] as UseAPIReturn<M, Req, Res>
    }
}
