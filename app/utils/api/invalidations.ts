import { useQueryClient } from "@tanstack/react-query"

import useUserStore from "@/utils/zustand/useUserStore"

import { apiKeys } from "./apiKeys"

export function useInvalidateReviewCaches() {
    const queryClient = useQueryClient()
    const { user } = useUserStore()

    return () => {
        queryClient.invalidateQueries({ queryKey: apiKeys.reviews.all() })
        queryClient.invalidateQueries({ queryKey: apiKeys.users.lectures(user?.id) })
        queryClient.invalidateQueries({ queryKey: apiKeys.users.writtenReviews() })
        queryClient.invalidateQueries({ queryKey: apiKeys.users.writableReview() })
    }
}

export function useInvalidateTimetable(timetableId: number | string | null | undefined) {
    const queryClient = useQueryClient()

    return () => {
        if (timetableId !== undefined && timetableId !== null) {
            queryClient.invalidateQueries({
                queryKey: apiKeys.timetables.detail(timetableId),
            })
        }
        queryClient.invalidateQueries({ queryKey: apiKeys.timetables.myTimetable() })
    }
}

export function useInvalidateWishlist() {
    const queryClient = useQueryClient()
    const { user } = useUserStore()

    return () => {
        queryClient.invalidateQueries({ queryKey: apiKeys.users.wishlist(user?.id) })
    }
}

export function useInvalidateUserInfo() {
    const queryClient = useQueryClient()

    return () => {
        queryClient.invalidateQueries({ queryKey: apiKeys.users.info() })
    }
}
