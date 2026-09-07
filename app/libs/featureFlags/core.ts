/**
 * Registry of feature flags. Adding a flag = one line here (+ an optional
 * VITE_APP_FLAG_<NAME> env default or a remote provider flag of the same key).
 * Precedence for a resolved value is always: remote > env > registry default.
 */
export const FLAGS = {
    "planner-enabled": { default: false },
} as const

export type FlagKey = keyof typeof FLAGS

export type FlagSource = "remote" | "env" | "default"

export function resolveFlag(
    key: FlagKey,
    input: {
        remote?: boolean | undefined
        envDefault?: boolean | undefined
    },
): { enabled: boolean; source: FlagSource } {
    if (typeof input.remote === "boolean") {
        return { enabled: input.remote, source: "remote" }
    }
    if (typeof input.envDefault === "boolean") {
        return { enabled: input.envDefault, source: "env" }
    }
    return { enabled: FLAGS[key].default, source: "default" }
}
