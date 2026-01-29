import * as Sentry from "@sentry/react"
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
        if (Sentry.getClient()) {
            Sentry.captureException(error, {
                tags: {
                    type: "api_error",
                    url: error.config?.url,
                    method: error.config?.method,
                    status: error.response?.status,
                },
            })
        }

        if (isNetworkError(error)) {
            useBackendStatusStore.getState().setBackendReachable(false)
        } else if (error.response) {
            useBackendStatusStore.getState().setBackendReachable(true)
        }

        const status = error.response?.status

        if (isServerError(status)) {
            if (typeof window !== "undefined") {
                const { location, sessionStorage } = window
                const SERVER_ERROR_REDIRECT_FLAG = "serverErrorRedirected"

                const onServerErrorPage = location.pathname.includes("/server-error")
                let hasRedirected = false

                try {
                    hasRedirected =
                        sessionStorage.getItem(SERVER_ERROR_REDIRECT_FLAG) === "true"
                } catch {
                    // Access to sessionStorage can fail in some environments; ignore.
                }

                if (!onServerErrorPage && !hasRedirected) {
                    try {
                        sessionStorage.setItem(SERVER_ERROR_REDIRECT_FLAG, "true")
                    } catch {
                        // Ignore storage errors; redirect will still proceed.
                    }
                    location.assign("/server-error")
                }
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
