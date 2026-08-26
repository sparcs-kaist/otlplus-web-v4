import { type Dispatch, type SetStateAction, useState } from "react"

import {
    type UseMutateFunction,
    type UseMutationOptions,
    type UseMutationResult,
    type UseQueryOptions,
    type UseQueryResult,
    useMutation,
    useQuery,
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

type UseAPIQueryOptions<Res> = {
    headers?: AxiosHeaders
    enabled?: boolean
    staleTime?: number
    gcTime?: number
    retry?: UseQueryOptions<Res, Error>["retry"]
    select?: (data: Res) => Res
    apiPrefix?: "/api" | "/api/v2"
    apiPath?: string
}

type Merge<A, B> = [B] extends [never] ? A : A & B

type UseAPIMutationOptions<Res, Req> = Omit<
    UseMutationOptions<Res, Error, Req, unknown>,
    "mutationFn"
>

type UseAPIOptions<M, Req, Res> = Merge<
    UseAPIQueryOptions<Res>,
    M extends "GET" ? never : UseAPIMutationOptions<Res, Req>
>

type UseAPIReturn<M, Req, Res> = M extends "GET"
    ? { query: UseQueryResult<Res, Error>; setParams: Dispatch<SetStateAction<Req>> }
    : {
          mutation: UseMutationResult<Res, Error, Req, unknown>
          requestFunction: UseMutateFunction<Res, Error, Req, unknown>
      }

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
        select,
        apiPrefix = "/api/v2",
        apiPath,
        ...mutationOps
    } = ops

    const requestSchema = getZodSchemaRequest(method, getOriginalPathValue(path))
    const responseSchema = getZodSchemaResponse(method, getOriginalPathValue(path))

    if (method === "GET") {
        const retry = (ops as UseAPIQueryOptions<Res>).retry ?? 1
        const [params, setParams] = useState<Req>(null as Req)
        const query = useQuery<Res>({
            queryKey: [apiPrefix, apiPath ?? path, params, i18n.resolvedLanguage],
            queryFn: async () => {
                const { data } = await axiosClient.request<Res>({
                    method,
                    url: apiPrefix + (apiPath ?? path),
                    params,
                    headers: { "Accept-Language": i18n.resolvedLanguage, ...headers },
                })

                // return responseSchema.parse(data)
                return data
            },
            select: select,
            retry,
            staleTime,
            gcTime,
            enabled:
                enabled &&
                (params !== null || requestSchema.safeParse({})?.success === true),
        })

        return { query, setParams } as unknown as UseAPIReturn<M, Req, Res>
    } else {
        const mutation = useMutation<Res, Error, Req>({
            mutationFn: async (params: Req) => {
                const { data } = await axiosClient.request<Res>({
                    method: method,
                    url: apiPrefix + (apiPath ?? path),
                    data: ["POST", "PUT", "PATCH", "DELETE"].includes(method)
                        ? params
                        : undefined,
                    headers: {
                        "Accept-Language": i18n.resolvedLanguage,
                        ...(headers || {}),
                    },
                })
                return data
            },
            ...mutationOps,
        })

        return { mutation, requestFunction: mutation.mutate } as UseAPIReturn<M, Req, Res>
    }
}
