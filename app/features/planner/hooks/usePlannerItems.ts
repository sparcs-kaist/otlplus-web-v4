import { useCallback } from "react"

import {
    ArbitraryPlannerItemSchema,
    type PlannerDetail,
    type PlannerItem,
    type PlannerSemester,
} from "@/common/schemas/planner"
import {
    FuturePlannerItemResponseSchema,
    PlannerDetailResponseSchema,
    PlannerItemResponseSchema,
} from "@/common/schemas/plannerResponse"
import { useAPI } from "@/utils/api/useAPI"

import { normalizePlannerCourse } from "../domain/course"
import { removeLocalItem, updateLocalItem, updateLocalPlanner } from "../domain/local"
import {
    type AddFutureItem,
    type ArbitraryItemInput,
    ArbitraryItemInputSchema,
} from "./types"

type Options = {
    readonly userId: number
    readonly isAuthenticated: boolean
    readonly selectedPlanner: PlannerDetail | null
    readonly selectedPlannerId: number | null
    readonly setLocalPlanners: React.Dispatch<React.SetStateAction<PlannerDetail[]>>
    readonly allocateLocalId: () => number
    readonly refresh: () => Promise<void>
}

export function usePlannerItems(options: Options) {
    const plannerPath =
        `/users/${options.userId}/planners/${options.selectedPlannerId ?? 0}` as const
    const addFutureMutation = useAPI("POST", `${plannerPath}/add-future-item`, {
        apiPrefix: "/api",
    }).mutation
    const addArbitraryMutation = useAPI("POST", `${plannerPath}/add-arbitrary-item`, {
        apiPrefix: "/api",
    }).mutation
    const removeMutation = useAPI("POST", `${plannerPath}/remove-item`, {
        apiPrefix: "/api",
    }).mutation
    const updateMutation = useAPI("POST", `${plannerPath}/update-item`, {
        apiPrefix: "/api",
    }).mutation

    const addFuture: AddFutureItem = useCallback(
        async (course, year, semester, addOptions) => {
            if (options.selectedPlanner === null) return
            const plannerId = options.selectedPlanner.id
            if (options.isAuthenticated) {
                FuturePlannerItemResponseSchema.parse(
                    await addFutureMutation.mutateAsync({
                        course: course.id,
                        year,
                        semester,
                    }),
                )
                if (addOptions?.excludeTakenDuplicates) {
                    const duplicates = options.selectedPlanner.taken_items.filter(
                        (item) => !item.is_excluded && item.course.id === course.id,
                    )
                    await Promise.all(
                        duplicates.map((item) =>
                            updateMutation.mutateAsync({
                                item: item.id,
                                item_type: item.item_type,
                                is_excluded: true,
                            }),
                        ),
                    )
                }
                await options.refresh()
                return
            }
            const itemId = options.allocateLocalId()
            options.setLocalPlanners((current) =>
                updateLocalPlanner(current, plannerId, (planner) => ({
                    ...planner,
                    taken_items: addOptions?.excludeTakenDuplicates
                        ? planner.taken_items.map((item) =>
                              !item.is_excluded && item.course.id === course.id
                                  ? { ...item, is_excluded: true }
                                  : item,
                          )
                        : planner.taken_items,
                    future_items: [
                        ...planner.future_items,
                        {
                            id: itemId,
                            item_type: "FUTURE",
                            is_excluded: false,
                            year,
                            semester,
                            course: normalizePlannerCourse(course),
                        },
                    ],
                })),
            )
        },
        [addFutureMutation, options, updateMutation],
    )

    const addArbitrary = useCallback(
        async (rawInput: ArbitraryItemInput) => {
            if (options.selectedPlanner === null) return
            const parsed = ArbitraryItemInputSchema.safeParse(rawInput)
            if (!parsed.success) return
            const input = parsed.data
            const plannerId = options.selectedPlanner.id
            if (
                input.year < options.selectedPlanner.start_year ||
                input.year > options.selectedPlanner.end_year
            ) {
                return
            }
            if (options.isAuthenticated) {
                ArbitraryPlannerItemSchema.parse(
                    await addArbitraryMutation.mutateAsync({
                        year: input.year,
                        semester: input.semester,
                        department: input.department.id,
                        type: input.type,
                        type_en: input.typeEn,
                        credit: input.credit,
                        credit_au: input.creditAU,
                    }),
                )
                await options.refresh()
                return
            }
            const itemId = options.allocateLocalId()
            options.setLocalPlanners((current) =>
                updateLocalPlanner(current, plannerId, (planner) => ({
                    ...planner,
                    arbitrary_items: [
                        ...planner.arbitrary_items,
                        {
                            id: itemId,
                            item_type: "ARBITRARY",
                            is_excluded: false,
                            year: input.year,
                            semester: input.semester,
                            department: input.department,
                            type: input.type,
                            type_en: input.typeEn,
                            credit: input.credit,
                            credit_au: input.creditAU,
                        },
                    ],
                })),
            )
        },
        [addArbitraryMutation, options],
    )

    const updateItem = useCallback(
        async (
            item: PlannerItem,
            patch: { readonly semester?: PlannerSemester; readonly isExcluded?: boolean },
        ) => {
            if (options.selectedPlanner === null) return
            const plannerId = options.selectedPlanner.id
            if (options.isAuthenticated) {
                PlannerItemResponseSchema.parse(
                    await updateMutation.mutateAsync({
                        item: item.id,
                        item_type: item.item_type,
                        semester: patch.semester,
                        is_excluded: patch.isExcluded,
                    }),
                )
                await options.refresh()
                return
            }
            options.setLocalPlanners((current) =>
                updateLocalPlanner(current, plannerId, (planner) =>
                    updateLocalItem(planner, item, patch),
                ),
            )
        },
        [options, updateMutation],
    )

    const removeItem = useCallback(
        async (item: PlannerItem) => {
            if (options.selectedPlanner === null || item.item_type === "TAKEN") return
            const plannerId = options.selectedPlanner.id
            if (options.isAuthenticated) {
                PlannerDetailResponseSchema.parse(
                    await removeMutation.mutateAsync({
                        item: item.id,
                        item_type: item.item_type,
                    }),
                )
                await options.refresh()
                return
            }
            options.setLocalPlanners((current) =>
                updateLocalPlanner(current, plannerId, (planner) =>
                    removeLocalItem(planner, item),
                ),
            )
        },
        [options, removeMutation],
    )

    const mutations = [
        addFutureMutation,
        addArbitraryMutation,
        removeMutation,
        updateMutation,
    ]
    return {
        addFuture,
        addArbitrary,
        updateItem,
        removeItem,
        isBusy: mutations.some((mutation) => mutation.isPending),
        error: mutations.find((mutation) => mutation.error)?.error,
    }
}
