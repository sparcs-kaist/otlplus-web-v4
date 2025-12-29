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

function isServerError(status: number | undefined): boolean {
    return status !== undefined && status >= 500 && status < 600
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

        const status = error.response?.status

        if (isServerError(status)) {
            if (
                typeof window !== "undefined" &&
                !window.location.pathname.includes("/server-error")
            ) {
                window.location.href = "/server-error"
            }
            return Promise.reject(error)
        }

        switch (status) {
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
