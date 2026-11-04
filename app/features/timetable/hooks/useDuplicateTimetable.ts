import { useQueryClient } from "@tanstack/react-query"

import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { queryKeys } from "@/libs/query/queryKeys"
import { useAPI } from "@/utils/api/useAPI"

export function useDuplicateTimetable() {
    const queryClient = useQueryClient()
    const { requestFunction } = useAPI("POST", "/timetables", {
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: [queryKeys.timetables] })
        },
    })

    return (lectureIds: number[]) => {
        const { currentTimetableId, year, semesterEnum } = useTimetableUIStore.getState()
        const source = document
            .querySelector(`[data-timetable-tab="${currentTimetableId ?? "academic"}"]`)
            ?.getBoundingClientRect()

        requestFunction(
            { year, semester: semesterEnum, lectureIds },
            {
                onSuccess: ({ id }) => {
                    const current = useTimetableUIStore.getState()
                    if (current.year !== year || current.semesterEnum !== semesterEnum)
                        return
                    current.setTimetableCopyMotion(source ? { id, source } : null)
                    current.setCurrentTimetableId(id)
                },
            },
        )
    }
}
