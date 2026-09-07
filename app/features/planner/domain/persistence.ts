import { z } from "zod"

import { type PlannerDetail, PlannerListSchema } from "@/common/schemas/planner"

export const PLANNER_STORAGE_KEY = "otlplus.planner.local"
export const PLANNER_STORAGE_VERSION = 1

type PlannerStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">
type PlannerStorageProvider = Pick<Window, "localStorage">

export type PlannerStorageReadResult =
    | { readonly status: "loaded"; readonly planners: PlannerDetail[] }
    | { readonly status: "unavailable" }
    | { readonly status: "unsupported-version" }

const PlannerStorageEnvelopeSchema = z
    .object({
        version: z.literal(PLANNER_STORAGE_VERSION),
        planners: PlannerListSchema,
    })
    .strict()

const PlannerStorageVersionSchema = z
    .object({ version: z.number().int().nonnegative() })
    .passthrough()

export function getPlannerStorage(
    provider: PlannerStorageProvider,
): PlannerStorage | null {
    try {
        return provider.localStorage
    } catch {
        return null
    }
}

function removeInvalidValue(storage: PlannerStorage, key: string): boolean {
    try {
        storage.removeItem(key)
        return true
    } catch {
        return false
    }
}

function hasFutureStorageVersion(stored: string | null): boolean {
    if (stored === null) return false
    try {
        const versioned = PlannerStorageVersionSchema.safeParse(JSON.parse(stored))
        return versioned.success && versioned.data.version > PLANNER_STORAGE_VERSION
    } catch {
        return false
    }
}

export function writePlannerStorage(
    storage: PlannerStorage,
    key: string,
    planners: readonly PlannerDetail[],
): boolean {
    const parsed = PlannerListSchema.safeParse(planners)
    if (!parsed.success) return false

    try {
        if (hasFutureStorageVersion(storage.getItem(key))) return false
        storage.setItem(
            key,
            JSON.stringify({
                version: PLANNER_STORAGE_VERSION,
                planners: parsed.data,
            }),
        )
        return true
    } catch {
        return false
    }
}

export function readPlannerStorage(
    storage: PlannerStorage,
    key: string,
): PlannerStorageReadResult {
    let stored: string | null
    try {
        stored = storage.getItem(key)
    } catch {
        return { status: "unavailable" }
    }
    if (stored === null) return { status: "loaded", planners: [] }

    let value: unknown
    try {
        value = JSON.parse(stored)
    } catch {
        return removeInvalidValue(storage, key)
            ? { status: "loaded", planners: [] }
            : { status: "unavailable" }
    }

    const envelope = PlannerStorageEnvelopeSchema.safeParse(value)
    if (envelope.success) {
        return { status: "loaded", planners: envelope.data.planners }
    }

    const versioned = PlannerStorageVersionSchema.safeParse(value)
    if (versioned.success && versioned.data.version > PLANNER_STORAGE_VERSION) {
        return { status: "unsupported-version" }
    }

    const legacy = PlannerListSchema.safeParse(value)
    if (legacy.success) {
        writePlannerStorage(storage, key, legacy.data)
        return { status: "loaded", planners: legacy.data }
    }

    return removeInvalidValue(storage, key)
        ? { status: "loaded", planners: [] }
        : { status: "unavailable" }
}
