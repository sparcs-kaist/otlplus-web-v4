import { useCallback, useRef } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import type { TimetableItem } from "@/common/schemas/timetableItem"
import { extractLectures } from "@/common/utils/timetableItems"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { queryKeys } from "@/libs/query/queryKeys"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

export function useTimetableClone(timetableItems: TimetableItem[]) {
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const pending = useRef(false)
    const { mutation } = useAPI("POST", "/timetables")

    const cloneTimetable = useCallback(async () => {
        const auth = useUserStore.getState()
        const source = useTimetableUIStore.getState()
        if (auth.status !== "success" || source.year < 0 || pending.current) return

        const sourceRect = document
            .querySelector(
                `[data-timetable-tab="${source.currentTimetableId ?? "academic"}"]`,
            )
            ?.getBoundingClientRect()
        pending.current = true
        try {
            const result = await mutation.mutateAsync({
                year: source.year,
                semester: source.semesterEnum,
                ...(source.currentTimetableId === null
                    ? {
                          lectureIds: extractLectures(timetableItems).map(({ id }) => id),
                      }
                    : { sourceTimetableId: source.currentTimetableId }),
            })
            void queryClient.invalidateQueries({ queryKey: [queryKeys.timetables] })
            void queryClient.invalidateQueries({ queryKey: [queryKeys.homeTimetable] })
            const current = useTimetableUIStore.getState()
            if (
                useUserStore.getState().user?.id === auth.user?.id &&
                current.currentTimetableId === source.currentTimetableId &&
                current.year === source.year &&
                current.semesterEnum === source.semesterEnum
            ) {
                current.setTimetableCopyMotion(
                    sourceRect ? { id: result.id, source: sourceRect } : null,
                )
                current.setCurrentTimetableId(result.id)
            }
        } catch {
            // Refetch in case creation succeeded but the response was lost; never retry the POST.
            void queryClient.invalidateQueries({ queryKey: [queryKeys.timetables] })
            void queryClient.invalidateQueries({ queryKey: [queryKeys.homeTimetable] })
            alert(t("timetable.cloneFailed"))
        } finally {
            pending.current = false
        }
    }, [mutation.mutateAsync, queryClient, t, timetableItems])

    return { cloneTimetable, isCloning: mutation.isPending }
}
