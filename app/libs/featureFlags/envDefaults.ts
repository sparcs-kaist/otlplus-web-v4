import { stringToBoolean } from "@/utils/booleanEnv"

const GENERIC_PREFIX = "VITE_APP_FLAG_"

/** Friendly aliases for the generic VITE_APP_FLAG_* form. */
const ALIASES: Record<string, string> = {
    VITE_APP_PLANNER_ENABLED: "planner-enabled",
}

export function parseFlagEnvDefaults(
    env: Record<string, unknown>,
): Record<string, boolean> {
    const aliases: Record<string, boolean> = {}
    const generics: Record<string, boolean> = {}

    for (const [rawKey, rawValue] of Object.entries(env)) {
        if (rawValue === undefined || rawValue === null || rawValue === "") continue
        if (rawKey.startsWith(GENERIC_PREFIX)) {
            const key = rawKey
                .slice(GENERIC_PREFIX.length)
                .toLowerCase()
                .replaceAll("_", "-")
            generics[key] = stringToBoolean(String(rawValue))
        } else if (rawKey in ALIASES) {
            const aliasKey = ALIASES[rawKey]
            if (aliasKey !== undefined) {
                aliases[aliasKey] = stringToBoolean(String(rawValue))
            }
        }
    }

    // Generic VITE_APP_FLAG_* values win over friendly aliases on conflict.
    return { ...aliases, ...generics }
}

export const flagEnvDefaults: Record<string, boolean> = parseFlagEnvDefaults(
    import.meta.env as unknown as Record<string, unknown>,
)
