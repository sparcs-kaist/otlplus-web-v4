const STORAGE_KEY = "otlplus.tracks.signature"

type TracksLike = unknown

/**
 * Deterministic signature over the tracks payload. Object keys are sorted so
 * equivalent payloads from different serialization orders collide on purpose.
 */
export function computeTracksSignature(tracks: TracksLike): string {
    const stable = (value: unknown): string => {
        if (Array.isArray(value)) {
            return `[${value.map(stable).join(",")}]`
        }
        if (value !== null && typeof value === "object") {
            const entries = Object.entries(value as Record<string, unknown>).sort(
                ([a], [b]) => (a < b ? -1 : a > b ? 1 : 0),
            )
            return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${stable(v)}`).join(",")}}`
        }
        return JSON.stringify(value) ?? "null"
    }
    return djb2(stable(tracks))
}

function djb2(input: string): string {
    let hash = 5381
    for (let index = 0; index < input.length; index += 1) {
        hash = ((hash << 5) + hash + input.charCodeAt(index)) | 0
    }
    return `h${(hash >>> 0).toString(16)}`
}

export type TracksNoticeOutcome = {
    show: boolean
    current?: string
}

export function resolveTracksNotice(
    tracks: TracksLike,
    storage: Pick<Storage, "getItem">,
    storageKey: string = STORAGE_KEY,
): TracksNoticeOutcome {
    const current = computeTracksSignature(tracks)
    const stored = storage.getItem(storageKey)
    if (stored === null || stored === current) return { show: false }
    return { show: true, current }
}

export function storeTracksVersion(
    signature: string,
    storage: Pick<Storage, "setItem">,
    storageKey: string = STORAGE_KEY,
): void {
    storage.setItem(storageKey, signature)
}
