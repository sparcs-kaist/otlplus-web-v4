import { describe, expect, it, vi } from "vitest"

import { handleChunkLoadError, isChunkLoadErrorMessage } from "./chunkReload"

function fakeStorage(initial: Record<string, string> = {}) {
    const store = new Map(Object.entries(initial))
    return {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => {
            store.set(key, value)
        },
    }
}

const baseDeps = (storage: Record<string, string>) => ({
    now: () => 1_700_000_000_000,
    storage: fakeStorage(storage),
    reload: vi.fn(),
    capture: vi.fn(),
})

describe("isChunkLoadErrorMessage", () => {
    it("matches the two production chunk-failure messages", () => {
        expect(
            isChunkLoadErrorMessage(
                "Failed to fetch dynamically imported module: https://otl.kaist.ac.kr/assets/TimeTableSection-D0o1l5VZ.js",
            ),
        ).toBe(true)
        expect(isChunkLoadErrorMessage("Importing a module script failed.")).toBe(
            true,
        )
    })

    it("rejects unrelated failures", () => {
        expect(isChunkLoadErrorMessage("Network Error")).toBe(false)
        expect(isChunkLoadErrorMessage("TypeError: Failed to fetch")).toBe(false)
        expect(isChunkLoadErrorMessage(undefined)).toBe(false)
    })
})

describe("handleChunkLoadError", () => {
    it("reloads once and records the bucket key", () => {
        const store = new Map<string, string>()
        const deps = {
            now: () => 1_700_000_000_000,
            storage: {
                getItem: (key: string) => store.get(key) ?? null,
                setItem: (key: string, value: string) => {
                    store.set(key, value)
                },
            },
            reload: vi.fn(),
            capture: vi.fn(),
        }

        const outcome = handleChunkLoadError("/timetable", deps)

        expect(outcome).toBe("reloaded")
        expect(deps.reload).toHaveBeenCalledTimes(1)
        expect(deps.capture).not.toHaveBeenCalled()
        const [recordedKey] = [...store.keys()]
        expect(recordedKey).toContain("/timetable")
        expect(store.get(recordedKey ?? "")).toBe("1")
    })

    it("captures a loop signal instead of reloading twice in one bucket", () => {
        const storage: Record<string, string> = {}
        const deps = { ...baseDeps(storage) }

        handleChunkLoadError("/timetable", deps)
        const second = handleChunkLoadError("/timetable", deps)

        expect(second).toBe("loop")
        expect(deps.reload).toHaveBeenCalledTimes(1)
        expect(deps.capture).toHaveBeenCalledWith("chunk reload loop detected", {
            extra: { pathname: "/timetable" },
        })
    })

    it("allows a fresh reload in the next minute bucket", () => {
        let clock = 1_700_000_000_000
        const storage: Record<string, string> = {}
        const reload = vi.fn()
        const capture = vi.fn()
        const deps = {
            now: () => clock,
            storage: fakeStorage(storage),
            reload,
            capture,
        }

        handleChunkLoadError("/", deps)
        clock += 60_000
        const next = handleChunkLoadError("/", deps)

        expect(next).toBe("reloaded")
        expect(reload).toHaveBeenCalledTimes(2)
    })

    it("keeps buckets independent per pathname", () => {
        const storage: Record<string, string> = {}
        const first = handleChunkLoadError("/a", { ...baseDeps(storage) })
        const other = handleChunkLoadError("/b", { ...baseDeps(storage) })

        expect(first).toBe("reloaded")
        expect(other).toBe("reloaded")
    })

    it("degrades to reload-once when storage throws", () => {
        const reload = vi.fn()
        const capture = vi.fn()
        const throwingStorage = {
            getItem: () => {
                throw new Error("blocked")
            },
            setItem: () => {
                throw new Error("blocked")
            },
        }
        const outcome = handleChunkLoadError("/x", {
            now: () => 0,
            storage: throwingStorage,
            reload,
            capture,
        })

        expect(outcome).toBe("reloaded")
        expect(reload).toHaveBeenCalledTimes(1)
    })
})
