import { type AxiosError, type InternalAxiosRequestConfig } from "axios"

import { clientEnv } from "@/env"
import logger from "@/utils/logger"

const mockInterceptor = {
    onFulfilled(config: InternalAxiosRequestConfig) {
        if (clientEnv.VITE_APP_API_MOCK_MODE) {
            logger.debug("Mock API request", {
                method: config.method,
                url: config.url,
            })
        }

        return config
    },
    onRejected(error: AxiosError) {
        return Promise.reject(error)
    },
}

export default mockInterceptor
