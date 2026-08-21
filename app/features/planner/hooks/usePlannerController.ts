import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import {
    type PlannerDetail,
    PlannerListSchema,
    TracksResponseSchema,
} from "@/common/schemas/planner"
import { PlannerListResponseSchema } from "@/common/schemas/plannerResponse"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import { createLocalIdAllocator } from "../domain/local"
import { usePlannerItems } from "./usePlannerItems"
import { usePlannerManagement } from "./usePlannerManagement"

export const PLANNER_STORAGE_KEY = "otlplus.planner.local"

export function usePlannerController() {
    const { status, user } = useUserStore()
    const isAuthenticated = status === "success" && user !== null
    const userId = user?.id ?? 0
    const [localPlanners, setLocalPlanners] = useState<PlannerDetail[]>([])
    const [isHydrated, setIsHydrated] = useState(false)
    const [selectedPlannerId, setSelectedPlannerId] = useState<number | null>(null)
    const localIdAllocatorRef = useRef(createLocalIdAllocator())

    const tracksQuery = useAPI("GET", "/tracks", {
        select: (data) => TracksResponseSchema.parse(data),
        apiPrefix: "/api",
    }).query
    const plannersQuery = useAPI("GET", `/users/${userId}/planners`, {
        enabled: isAuthenticated,
        select: (data) => PlannerListResponseSchema.parse(data),
        apiPrefix: "/api",
    }).query

    useEffect(() => {
        const stored = window.localStorage.getItem(PLANNER_STORAGE_KEY)
        if (stored !== null) {
            try {
                const parsed = PlannerListSchema.safeParse(JSON.parse(stored))
                if (parsed.success) {
                    setLocalPlanners(parsed.data)
                    localIdAllocatorRef.current.reserve(parsed.data)
                } else {
                    window.localStorage.removeItem(PLANNER_STORAGE_KEY)
                }
            } catch (error) {
                if (!(error instanceof SyntaxError)) throw error
                window.localStorage.removeItem(PLANNER_STORAGE_KEY)
            }
        }
        setIsHydrated(true)
    }, [])

    useEffect(() => {
        if (!isHydrated) return
        const parsed = PlannerListSchema.safeParse(localPlanners)
        if (!parsed.success) return
        window.localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(parsed.data))
    }, [isHydrated, localPlanners])

    const planners = useMemo(
        () =>
            [...(isAuthenticated ? (plannersQuery.data ?? []) : localPlanners)].sort(
                (a, b) => a.arrange_order - b.arrange_order,
            ),
        [isAuthenticated, localPlanners, plannersQuery.data],
    )
    const selectedPlanner =
        planners.find((planner) => planner.id === selectedPlannerId) ??
        planners[0] ??
        null

    useEffect(() => {
        if (selectedPlanner !== null && selectedPlanner.id !== selectedPlannerId) {
            setSelectedPlannerId(selectedPlanner.id)
        }
    }, [selectedPlanner, selectedPlannerId])

    const refresh = useCallback(async () => {
        if (isAuthenticated) await plannersQuery.refetch()
    }, [isAuthenticated, plannersQuery])
    const sharedOptions = {
        userId,
        isAuthenticated,
        selectedPlanner,
        selectedPlannerId,
        setLocalPlanners,
        allocateLocalId: localIdAllocatorRef.current.next,
        refresh,
    }
    const management = usePlannerManagement({
        ...sharedOptions,
        user,
        planners,
        tracks: tracksQuery.data,
        setSelectedPlannerId,
    })
    const items = usePlannerItems(sharedOptions)

    return {
        planners,
        selectedPlanner,
        selectedPlannerId,
        setSelectedPlannerId,
        tracks: tracksQuery.data,
        isLoading: tracksQuery.isLoading || (isAuthenticated && plannersQuery.isLoading),
        isBusy: management.isBusy || items.isBusy,
        error:
            tracksQuery.error ?? plannersQuery.error ?? management.error ?? items.error,
        createPlanner: management.createPlanner,
        deletePlanner: management.deletePlanner,
        updateTracks: management.updateTracks,
        reorderPlanner: management.reorderPlanner,
        addFuture: items.addFuture,
        addArbitrary: items.addArbitrary,
        updateItem: items.updateItem,
        removeItem: items.removeItem,
    }
}

export type { ArbitraryItemInput } from "./types"
