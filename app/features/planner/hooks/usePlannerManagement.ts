import { useCallback } from "react"

import {
    PlannerBasicSchema,
    type PlannerDetail,
    type TracksResponse,
} from "@/common/schemas/planner"
import { PlannerDetailResponseSchema } from "@/common/schemas/plannerResponse"
import { useAPI } from "@/utils/api/useAPI"
import type { User } from "@/utils/zustand/useUserStore"

import {
    type PlannerTrackSelection,
    createLocalPlanner,
    reorderLocalPlanners,
    updateLocalPlanner,
} from "../domain/local"
import { getDefaultTrackSelection } from "../domain/trackPolicy"

type Options = {
    readonly userId: number
    readonly user: User | null
    readonly isAuthenticated: boolean
    readonly planners: readonly PlannerDetail[]
    readonly selectedPlanner: PlannerDetail | null
    readonly selectedPlannerId: number | null
    readonly tracks: TracksResponse | undefined
    readonly setLocalPlanners: React.Dispatch<React.SetStateAction<PlannerDetail[]>>
    readonly setSelectedPlannerId: React.Dispatch<React.SetStateAction<number | null>>
    readonly allocateLocalId: () => number
    readonly refresh: () => Promise<void>
}

export function usePlannerManagement(options: Options) {
    const createMutation = useAPI("POST", `/users/${options.userId}/planners`, {
        apiPrefix: "/api",
    }).mutation
    const plannerPath =
        `/users/${options.userId}/planners/${options.selectedPlannerId ?? 0}` as const
    const updateMutation = useAPI("PATCH", plannerPath, { apiPrefix: "/api" }).mutation
    const deleteMutation = useAPI("DELETE", plannerPath, { apiPrefix: "/api" }).mutation
    const reorderMutation = useAPI("POST", `${plannerPath}/reorder`, {
        apiPrefix: "/api",
    }).mutation

    const defaultSelection = useCallback(
        (): PlannerTrackSelection | null =>
            getDefaultTrackSelection(
                options.tracks,
                options.user,
                new Date().getFullYear(),
            ),
        [options.tracks, options.user],
    )

    const createPlanner = useCallback(
        async (copy: boolean) => {
            const source = copy ? options.selectedPlanner : null
            const selection = source
                ? {
                      startYear: source.start_year,
                      endYear: source.end_year,
                      generalTrack: source.general_track,
                      majorTrack: source.major_track,
                      additionalTracks: source.additional_tracks,
                  }
                : defaultSelection()
            if (selection === null) return
            if (!options.isAuthenticated) {
                const planner = createLocalPlanner(
                    selection,
                    options.allocateLocalId,
                    source ?? undefined,
                )
                options.setLocalPlanners((current) => [
                    ...current,
                    { ...planner, arrange_order: current.length },
                ])
                options.setSelectedPlannerId(planner.id)
                return
            }
            const created = PlannerDetailResponseSchema.parse(
                await createMutation.mutateAsync({
                    start_year: selection.startYear,
                    end_year: selection.endYear,
                    general_track: selection.generalTrack.id,
                    major_track: selection.majorTrack.id,
                    additional_tracks: selection.additionalTracks.map(
                        (track) => track.id,
                    ),
                    should_update_taken_semesters: source === null ? true : undefined,
                    taken_items_to_copy: source?.taken_items.map((item) => item.id) ?? [],
                    future_items_to_copy:
                        source?.future_items.map((item) => item.id) ?? [],
                    arbitrary_items_to_copy:
                        source?.arbitrary_items.map((item) => item.id) ?? [],
                }),
            )
            await options.refresh()
            options.setSelectedPlannerId(created.id)
        },
        [createMutation, defaultSelection, options],
    )

    const deletePlanner = useCallback(async () => {
        if (options.selectedPlanner === null) return
        const plannerId = options.selectedPlanner.id
        if (options.isAuthenticated) {
            await deleteMutation.mutateAsync({})
            await options.refresh()
        } else {
            options.setLocalPlanners((current) =>
                current.filter((planner) => planner.id !== plannerId),
            )
        }
        options.setSelectedPlannerId(null)
    }, [deleteMutation, options])

    const updateTracks = useCallback(
        async (selection: PlannerTrackSelection) => {
            if (options.selectedPlanner === null) return
            const plannerId = options.selectedPlanner.id
            if (options.isAuthenticated) {
                const updated = PlannerDetailResponseSchema.parse(
                    await updateMutation.mutateAsync({
                        start_year: selection.startYear,
                        end_year: selection.endYear,
                        general_track: selection.generalTrack.id,
                        major_track: selection.majorTrack.id,
                        additional_tracks: selection.additionalTracks.map(
                            (track) => track.id,
                        ),
                        should_update_taken_semesters: true,
                    }),
                )
                options.setSelectedPlannerId(updated.id)
                await options.refresh()
                return
            }
            options.setLocalPlanners((current) =>
                updateLocalPlanner(current, plannerId, (planner) => ({
                    ...planner,
                    start_year: selection.startYear,
                    end_year: selection.endYear,
                    general_track: selection.generalTrack,
                    major_track: selection.majorTrack,
                    additional_tracks: [...selection.additionalTracks],
                    taken_items: planner.taken_items.filter(
                        (item) =>
                            item.lecture.year >= selection.startYear &&
                            item.lecture.year <= selection.endYear,
                    ),
                    future_items: planner.future_items.filter(
                        (item) =>
                            item.year >= selection.startYear &&
                            item.year <= selection.endYear,
                    ),
                    arbitrary_items: planner.arbitrary_items.filter(
                        (item) =>
                            item.year >= selection.startYear &&
                            item.year <= selection.endYear,
                    ),
                })),
            )
        },
        [options, updateMutation],
    )

    const reorderPlanner = useCallback(
        async (direction: -1 | 1) => {
            if (options.selectedPlanner === null) return
            const plannerId = options.selectedPlanner.id
            const nextOrder = options.selectedPlanner.arrange_order + direction
            if (nextOrder < 0 || nextOrder >= options.planners.length) return
            if (options.isAuthenticated) {
                PlannerBasicSchema.parse(
                    await reorderMutation.mutateAsync({ arrange_order: nextOrder }),
                )
                await options.refresh()
                return
            }
            options.setLocalPlanners((current) =>
                reorderLocalPlanners(current, plannerId, direction),
            )
        },
        [options, reorderMutation],
    )

    const mutations = [createMutation, updateMutation, deleteMutation, reorderMutation]
    return {
        createPlanner,
        deletePlanner,
        updateTracks,
        reorderPlanner,
        isBusy: mutations.some((mutation) => mutation.isPending),
        error: mutations.find((mutation) => mutation.error)?.error,
    }
}
