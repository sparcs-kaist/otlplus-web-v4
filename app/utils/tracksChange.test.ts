import { describe, expect, it } from "vitest"

import {
    computeTracksSignature,
    resolveTracksNotice,
    storeTracksVersion,
} from "./tracksChange"

const tracksA = { general: [{ id: 1 }], major: [{ id: 2 }], additional: [] }
const tracksB = { major: [{ id: 2 }], additional: [], general: [{ id: 1 }] }
const tracksChanged = { general: [], major: [{ id: 99 }], additional: [] }

function fakeStorage(initial: Record<string, string> = {}) {
    const store = new Map(Object.entries(initial))
    return {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => {
            store.set(key, value)
        },
    }
}

describe("computeTracksSignature", () => {
    it("signature-key-order-stable: ignores key ordering", () => {
        expect(computeTracksSignature(tracksA)).toBe(computeTracksSignature(tracksB))
    })

    it("signature-content-sensitive: changes when track ids change", () => {
        expect(computeTracksSignature(tracksA)).not.toBe(
            computeTracksSignature(tracksChanged),
        )
    })
})

describe("resolveTracksNotice", () => {
    const storageKey = "otlplus.tracks.signature"

    it("first-visit-silent: no notice and no stored signature", () => {
        const outcome = resolveTracksNotice(tracksA, fakeStorage(), storageKey)
        expect(outcome).toEqual({ show: false })
    })

    it("changed-signature-shows: notice when stored differs", () => {
        const outcome = resolveTracksNotice(
            tracksChanged,
            fakeStorage({ [storageKey]: computeTracksSignature(tracksA) }),
            storageKey,
        )
        expect(outcome.show).toBe(true)
        expect(outcome.current).toBe(computeTracksSignature(tracksChanged))
    })

    it("unchanged-signature-silent: no notice when identical", () => {
        const signature = computeTracksSignature(tracksA)
        const outcome = resolveTracksNotice(
            tracksA,
            fakeStorage({ [storageKey]: signature }),
            storageKey,
        )
        expect(outcome).toEqual({ show: false })
    })
})

describe("storeTracksVersion", () => {
    it("persists the provided signature", () => {
        const storage = fakeStorage()
        const signature = computeTracksSignature(tracksA)

        storeTracksVersion(signature, storage, "otlplus.tracks.signature")

        expect(
            storage.getItem("otlplus.tracks.signature"),
        ).toBe(signature)
    })
})
