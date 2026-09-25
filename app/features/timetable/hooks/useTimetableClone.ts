import { useCallback, useRef } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
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

        pending.current = true
        try {
            const result = await mutation.mutateAsync({
                year: source.year,
                semester: source.semesterEnum,
                ...(source.currentTimetableId === null
                    ? {
                          lectureIds: timetableItems.flatMap((item) =>
                              item.kind === TimetableItemKind.LECTURE
                                  ? [item.data.id]
                                  : [],
                          ),
                      }
                    : { sourceTimetableId: source.currentTimetableId }),
            })
            void queryClient.invalidateQueries({ queryKey: ["/timetables"] })
            const current = useTimetableUIStore.getState()
            if (
                useUserStore.getState().user?.id === auth.user?.id &&
                current.currentTimetableId === source.currentTimetableId &&
                current.year === source.year &&
                current.semesterEnum === source.semesterEnum
            ) {
                current.setCurrentTimetableId(result.id)
            }
        } catch {
            // Refetch in case creation succeeded but the response was lost; never retry the POST.
            void queryClient.invalidateQueries({ queryKey: ["/timetables"] })
            alert(t("timetable.cloneFailed"))
        } finally {
            pending.current = false
        }
    }, [mutation.mutateAsync, queryClient, t, timetableItems])

    return { cloneTimetable, isCloning: mutation.isPending }
}
