import { useQuery } from "@tanstack/react-query"
import { AxiosHeaders, type Method } from "axios"
import { useTranslation } from "react-i18next"
import { ZodObject } from "zod"

import { axiosClient } from "@/libs/axios"

interface useAPIProps {
    endpoint: string
    method: Method
    params?: any
    body?: any
    headers?: AxiosHeaders
    responseSchema: ZodObject<any>
    enabled?: boolean
}

export const useAPI = <T>({
    endpoint,
    method,
    params,
    body,
    headers,
    responseSchema,
    enabled = true,
}: useAPIProps) => {
    const { i18n } = useTranslation()

    return useQuery<T>({
        queryKey: [endpoint, params, body, i18n.resolvedLanguage],
        queryFn: async () => {
            const response = await axiosClient.request({
                method: method,
                url: endpoint,
                params: params,
                data: body,
                headers: headers,
            })

            return responseSchema.parse(response.data) as T
        },
        retry: 1,
        staleTime: Infinity,
        enabled: enabled && Boolean(endpoint),
    })
}
