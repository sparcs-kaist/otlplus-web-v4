import { useQueryClient } from "@tanstack/react-query"

import { useAPI } from "@/utils/api/useAPI"

export default function useFriendInviteCode(isOpen: boolean, onSettled: () => void) {
    const queryClient = useQueryClient()
    const { query } = useAPI("GET", "/friends/code", {
        enabled: isOpen,
    })
    const { mutation: regenerate, requestFunction: regenerateCode } = useAPI(
        "PUT",
        "/friends/code",
        {
            retry: false,
            onMutate: () => queryClient.cancelQueries({ queryKey: ["/friends/code"] }),
            onSuccess: async (data) => {
                await queryClient.cancelQueries({ queryKey: ["/friends/code"] })
                queryClient.setQueriesData({ queryKey: ["/friends/code"] }, data)
            },
            // A lost response may still have changed the code; read it instead of rotating again.
            onError: async () => {
                await query.refetch()
            },
            onSettled,
        },
    )
    const code = query.isSuccess && !regenerate.isPending ? query.data.code : null
    return { query, regenerate, regenerateCode, code }
}
