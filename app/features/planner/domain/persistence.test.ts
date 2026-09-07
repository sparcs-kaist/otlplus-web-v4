import { describe, expect, it } from "vitest"

import {
    PLANNER_STORAGE_VERSION,
    getPlannerStorage,
    readPlannerStorage,
    writePlannerStorage,
} from "./persistence"
import { createPlanner } from "./testFixtures"

type PlannerStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">

function createMemoryStorage(initialValue: string | null = null) {
    let value = initialValue
    const storage: PlannerStorage = {
        getItem: () => value,
        setItem: (_key, nextValue) => {
            value = nextValue
        },
        removeItem: () => {
            value = null
        },
    }
    return { storage, value: () => value }
}

describe("planner persistence", () => {
    it("migrates the legacy planner array into a versioned envelope", () => {
        const planner = createPlanner()
        const memory = createMemoryStorage(JSON.stringify([planner]))

        expect(readPlannerStorage(memory.storage, "planner-key")).toEqual({
            status: "loaded",
            planners: [planner],
        })
        expect(JSON.parse(memory.value() ?? "null")).toEqual({
            version: PLANNER_STORAGE_VERSION,
            planners: [planner],
        })
    })

    it("writes and reads the current versioned envelope", () => {
        const planner = createPlanner()
        const memory = createMemoryStorage()

        expect(writePlannerStorage(memory.storage, "planner-key", [planner])).toBe(true)
        expect(readPlannerStorage(memory.storage, "planner-key")).toEqual({
            status: "loaded",
            planners: [planner],
        })
    })

    it("does not throw when browser storage is unavailable", () => {
        const unavailable: PlannerStorage = {
            getItem: () => {
                throw new DOMException("blocked", "SecurityError")
            },
            setItem: () => {
                throw new DOMException("full", "QuotaExceededError")
            },
            removeItem: () => {
                throw new DOMException("blocked", "SecurityError")
            },
        }

        expect(readPlannerStorage(unavailable, "planner-key")).toEqual({
            status: "unavailable",
        })
        expect(writePlannerStorage(unavailable, "planner-key", [createPlanner()])).toBe(
            false,
        )
    })

    it("contains errors thrown while acquiring browser storage", () => {
        const provider = {
            get localStorage(): Storage {
                throw new DOMException("blocked", "SecurityError")
            },
        }

        expect(getPlannerStorage(provider)).toBeNull()
    })

    it("preserves unsupported future storage versions", () => {
        const stored = JSON.stringify({ version: 2, planners: [] })
        const memory = createMemoryStorage(stored)

        expect(readPlannerStorage(memory.storage, "planner-key")).toEqual({
            status: "unsupported-version",
        })
        expect(memory.value()).toBe(stored)
    })

    it("does not overwrite a future version written by another tab", () => {
        const stored = JSON.stringify({ version: 2, planners: [] })
        const memory = createMemoryStorage(stored)

        expect(
            writePlannerStorage(memory.storage, "planner-key", [createPlanner()]),
        ).toBe(false)
        expect(memory.value()).toBe(stored)
    })

    it.each([
        ["missing version", {}],
        ["planner-like object without version", { planners: [] }],
        ["null version", { version: null }],
        ["string version", { version: "2" }],
        ["older version", { version: 0, planners: [] }],
    ])("removes malformed %s objects", (_name, value) => {
        const memory = createMemoryStorage(JSON.stringify(value))

        expect(readPlannerStorage(memory.storage, "planner-key")).toEqual({
            status: "loaded",
            planners: [],
        })
        expect(memory.value()).toBeNull()
    })

    it("removes malformed values only when cleanup is available", () => {
        const memory = createMemoryStorage("{")
        expect(readPlannerStorage(memory.storage, "planner-key")).toEqual({
            status: "loaded",
            planners: [],
        })
        expect(memory.value()).toBeNull()

        const cleanupBlocked: PlannerStorage = {
            getItem: () => "{",
            setItem: () => undefined,
            removeItem: () => {
                throw new DOMException("blocked", "SecurityError")
            },
        }
        expect(readPlannerStorage(cleanupBlocked, "planner-key")).toEqual({
            status: "unavailable",
        })
    })

    it("keeps legacy planners loaded when migration writes fail", () => {
        const planner = createPlanner()
        const legacy = JSON.stringify([planner])
        const migrationBlocked: PlannerStorage = {
            getItem: () => legacy,
            setItem: () => {
                throw new DOMException("full", "QuotaExceededError")
            },
            removeItem: () => undefined,
        }

        expect(readPlannerStorage(migrationBlocked, "planner-key")).toEqual({
            status: "loaded",
            planners: [planner],
        })
    })
})
