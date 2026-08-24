import z from "zod"

import { stringToBoolean } from "./utils/booleanEnv"

export { stringToBoolean }

/**
 * In production, the API is served from the same origin (like legacy OTL v3).
 * Default to window.location.origin when VITE_APP_API_URL is not set.
 */
const getDefaultApiUrl = (): string => {
    if (typeof window !== "undefined") {
        return window.location.origin
    }
    return "http://localhost:8080"
}

export const publicEnvSchema = z.object({
    VITE_APP_LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]),
    VITE_APP_API_URL: z.preprocess(
        (value) => (value && String(value).trim() !== "" ? value : getDefaultApiUrl()),
        z.url(),
    ),
    VITE_DEV_MODE: z.preprocess((value) => stringToBoolean(value as string), z.boolean()),
    VITE_APP_API_MOCK_MODE: z.preprocess(
        (value) => stringToBoolean(value as string),
        z.boolean(),
    ),
    VITE_APP_DEV_API_AUTH_TOKEN: z.string().optional(),
    VITE_CHANNELTALK_PLUGIN_KEY: z.string().optional(),
    VITE_GA_MEASUREMENT_ID: z.string().optional(),
    VITE_SENTRY_DSN: z.string().optional(),
    VITE_MIXPANEL_TOKEN: z.string().optional(),
    VITE_MIXPANEL_RECORD_SESSIONS_PERCENT: z.preprocess(
        (value) =>
            value === undefined || value === "" ? 100 : Number(value),
        z.number().int().min(0).max(100),
    ),
})

export const clientEnv = publicEnvSchema.parse(import.meta.env)
