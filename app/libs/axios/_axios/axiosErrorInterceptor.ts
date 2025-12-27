import { AxiosError, type AxiosResponse, HttpStatusCode } from "axios"

import useBackendStatusStore from "@/utils/zustand/useBackendStatusStore"

function isNetworkError(error: AxiosError): boolean {
    return (
        !error.response &&
        (error.code === "ERR_NETWORK" ||
            error.code === "ECONNABORTED" ||
            error.message.includes("Network Error"))
    )
}

const errorInterceptor = {
    onFulfilled(values: AxiosResponse) {
        useBackendStatusStore.getState().setBackendReachable(true)
        return values
    },
    async onRejected(error: AxiosError) {
        if (isNetworkError(error)) {
            useBackendStatusStore.getState().setBackendReachable(false)
        } else if (error.response) {
            useBackendStatusStore.getState().setBackendReachable(true)
        }

        switch (error.response?.status) {
            case HttpStatusCode.Unauthorized: {
                // TODO: Handle Application Logic
                return Promise.reject(error)
            }
            case HttpStatusCode.Forbidden: {
                // TODO: Handle Application Logic
                return Promise.reject(error)
            }
            default: {
                return Promise.reject(error)
            }
        }
    },
}

export default errorInterceptor
