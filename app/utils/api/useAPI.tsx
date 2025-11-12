import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import { axiosClient as axios } from "@/libs/axios"

import {
    type Method,
    type Path,
    type getAPIRequestType,
    type getAPIResponseType,
} from "./getAPIType"

export function useAPI<
    M extends Method<P>,
    P extends Path,
    Req extends getAPIRequestType<M, P>,
    Res extends getAPIResponseType<M, P>,
>(method: M, path: P, initialParams: Req = null as Req) {
    const [params, setParams] = useState<Req>(initialParams)
    const { i18n } = useTranslation()

    const q = useQuery<Res>({
        queryKey: [params, i18n.resolvedLanguage],
        queryFn: async () => {
            const { data, status, statusText } = await axios.request<Res>({
                method,
                url: path,
                params,
            })

            return data
        },
        initialData: null as Res,
        enabled: params !== null,
    })

    return [setParams, q] as const
}
