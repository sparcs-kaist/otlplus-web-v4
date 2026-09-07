const CHUNK_ERROR_PATTERNS = [
    /Failed to fetch dynamically imported module/,
    /^Importing a module script failed\.$/,
] as const

export function isChunkLoadErrorMessage(message: unknown): boolean {
    if (typeof message !== "string") return false
    return CHUNK_ERROR_PATTERNS.some((pattern) => pattern.test(message))
}

export type ChunkReloadDeps = {
    now: () => number
    storage: Pick<Storage, "getItem" | "setItem">
    reload: () => void
    capture: (message: string, extra: { extra: Record<string, unknown> }) => void
}

const BUCKET_MS = 60_000

function bucketKey(pathname: string, now: number): string {
    return `chunk-reload:${pathname}:${Math.floor(now / BUCKET_MS)}`
}

export type ChunkReloadOutcome = "reloaded" | "loop"

export function handleChunkLoadError(
    pathname: string,
    deps: ChunkReloadDeps,
): ChunkReloadOutcome {
    const key = bucketKey(pathname, deps.now())
    let alreadyReloaded = false
    try {
        alreadyReloaded = deps.storage.getItem(key) === "1"
        if (!alreadyReloaded) deps.storage.setItem(key, "1")
    } catch {
        // Storage unavailable (private mode/extension); reload once per load.
    }
    if (alreadyReloaded) {
        deps.capture("chunk reload loop detected", { extra: { pathname } })
        return "loop"
    }
    deps.reload()
    return "reloaded"
}
