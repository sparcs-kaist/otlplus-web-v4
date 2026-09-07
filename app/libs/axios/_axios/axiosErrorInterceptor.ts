import * as Sentry from "@sentry/react"
import { AxiosError, type AxiosResponse, HttpStatusCode } from "axios"

import { sanitizeSentryUrl } from "@/libs/sentry/sentryEventFilter"
import { handleSessionExpired } from "@/utils/handleSessionExpired"
import { sessionStorageKeys } from "@/utils/storageKeys"
import useBackendStatusStore from "@/utils/zustand/useBackendStatusStore"

import { shouldCaptureApiError } from "./apiErrorReporting"

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
        const status = error.response?.status

        if (Sentry.getClient() && shouldCaptureApiError(status)) {
            const originalUrl = error.config?.url
            const safeUrlPath = originalUrl ? sanitizeSentryUrl(originalUrl) : undefined
            const safeError = new Error(error.message || "Axios request failed")

            const tags: Record<string, string> = { type: "api_error" }
            if (safeUrlPath) tags.url = safeUrlPath
            if (error.config?.method) tags.method = error.config.method
            if (status !== undefined) tags.status = String(status)

            Sentry.captureException(safeError, {
                tags,
                extra: { axiosCode: error.code },
            })
        }

        if (isNetworkError(error)) {
            useBackendStatusStore.getState().setBackendReachable(false)
        } else if (error.response) {
            useBackendStatusStore.getState().setBackendReachable(true)
        }

        if (shouldCaptureApiError(status)) {
            if (typeof window !== "undefined") {
                const { location, sessionStorage } = window
                const onServerErrorPage = location.pathname.includes("/server-error")
                let hasRedirected = false

                try {
                    hasRedirected =
                        sessionStorage.getItem(
                            sessionStorageKeys.serverErrorRedirected,
                        ) === "true"
                } catch {
                    // Access to sessionStorage can fail in some environments; ignore.
                }

                if (!onServerErrorPage && !hasRedirected) {
                    try {
                        sessionStorage.setItem(
                            sessionStorageKeys.serverErrorRedirected,
                            "true",
                        )
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
                if (typeof window !== "undefined") {
                    await handleSessionExpired()
                }
                return Promise.reject(error)
            }
            case HttpStatusCode.Forbidden: {
                // For now, just reject, but maybe redirect to an error page later
                return Promise.reject(error)
            }
            default: {
                return Promise.reject(error)
            }
        }
    },
}

export default errorInterceptor
