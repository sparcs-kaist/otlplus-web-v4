import { MIXPANEL_TOKEN, initMixpanel } from "@/libs/mixpanel"

type MixpanelClient = typeof import("mixpanel-browser").default

const READINESS_TIMEOUT_MS = 3000

interface ProviderState {
    readyPromise: Promise<void> | null
    settled: boolean
    client: MixpanelClient | null
}

const state: ProviderState = {
    readyPromise: null,
    settled: false,
    client: null,
}

async function defaultLoad(): Promise<unknown> {
    if (typeof window === "undefined") return null
    if (!MIXPANEL_TOKEN) return null
    const module = await import("mixpanel-browser")
    return module.default
}

/**
 * Test-only dependency injection. Swaps the loader/state so unit tests can
 * drive readiness without touching the real mixpanel-browser module graph.
 */

let loadRef: () => Promise<unknown> = defaultLoad

export function _resetForTests(): void {
    state.readyPromise = null
    state.settled = false
    state.client = null
    loadRef = defaultLoad
}

export function _configureForTests(
    overrides: { client?: unknown; load?: () => Promise<unknown> } | undefined,
): void {
    state.readyPromise = null
    state.settled = false
    state.client = null
    if (overrides?.client !== undefined) {
        const target: unknown = overrides.client
        loadRef = async () => target
    } else if (overrides?.load !== undefined) {
        loadRef = overrides.load
    }
}

/**
 * Resolves once the remote flag store is usable — loaded or timed out.
 * Failures are deliberately swallowed: env/registry defaults stay
 * authoritative whenever the provider is unavailable.
 */
export function ensureFlagsReady(): Promise<void> {
    if (state.settled) return Promise.resolve()
    state.readyPromise ??= (async () => {
        try {
            const mixpanel = (await loadRef()) as MixpanelClient | null
            if (!mixpanel) return
            await initMixpanel()
            await Promise.race([
                mixpanel.flags.whenReady(),
                new Promise<void>((resolve) => {
                    setTimeout(resolve, READINESS_TIMEOUT_MS)
                }),
            ])
            state.client = mixpanel
        } catch {
            // Provider unavailable; keep defaults.
        } finally {
            state.settled = true
        }
    })()
    return state.readyPromise
}

export function isFlagsSettled(): boolean {
    return state.settled
}

/**
 * Mixpanel exposes no "flag exists" check, so we probe with two different
 * fallbacks: a defined remote value returns the same result for both probes,
 * while an unset flag echoes whichever fallback it was handed. Divergence
 * therefore means "undefined", letting core fall through to env/default.
 */
export function getRemoteFlag(key: string): boolean | undefined {
    const { settled, client: current } = state
    if (!settled || !current) return undefined
    const probeTrue = current.flags.is_enabled_sync(key, true)
    const probeFalse = current.flags.is_enabled_sync(key, false)
    return probeTrue === probeFalse ? probeTrue : undefined
}
