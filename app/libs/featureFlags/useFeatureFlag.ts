import { useEffect, useState } from "react"

import { type FlagKey, type FlagSource, resolveFlag } from "./core"
import { getFlagEnvDefault } from "./envDefaults"
import { ensureFlagsReady, getRemoteFlag, isFlagsSettled } from "./provider"

export type FeatureFlagState = {
    enabled: boolean
    isReady: boolean
    source: FlagSource
}

function resolveCurrent(key: FlagKey): FeatureFlagState {
    const ready = isFlagsSettled()
    const resolved = resolveFlag(key, {
        remote: ready ? getRemoteFlag(key) : undefined,
        envDefault: getFlagEnvDefault(key),
    })
    return { ...resolved, isReady: ready }
}

/**
 * Resolves a feature flag across its three sources (remote > env > default).
 * The first render uses the env/registry default so surfaces never flash on;
 * once the provider settles (bounded by its internal timeout) the value
 * re-resolves and, when it changes, triggers a re-render.
 */
export function useFeatureFlag(key: FlagKey): FeatureFlagState {
    const [state, setState] = useState<FeatureFlagState>(() => resolveCurrent(key))

    useEffect(() => {
        let active = true
        void ensureFlagsReady().then(() => {
            if (active) setState(resolveCurrent(key))
        })
        return () => {
            active = false
        }
    }, [key])

    // Another surface may have settled the provider between render and commit;
    // prefer the fresher resolution instead of waiting for the next effect.
    if (!state.isReady) {
        const fresh = resolveCurrent(key)
        if (fresh.isReady) return fresh
    }
    return state
}
