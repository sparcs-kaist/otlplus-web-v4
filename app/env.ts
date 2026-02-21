import z from "zod"

const possibleTrueValues = ["true", "1", "yes", "y", "on", "enable", "enabled"]

const stringToBoolean = (value: string) => {
    return possibleTrueValues.includes(value)
}

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

const publicEnvSchema = z.object({
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
})

export const clientEnv = publicEnvSchema.parse(import.meta.env)

if (process.env.NODE_ENV === "development") {
    console.log("[Current Environment]", clientEnv)
}
