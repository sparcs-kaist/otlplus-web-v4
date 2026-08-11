interface UserInfoQueryState<T> {
    enabled: boolean
    isLoading: boolean
    isError: boolean
    data: T | undefined
}

export default function resolveUserInfo<T>({
    enabled,
    isLoading,
    isError,
    data,
}: UserInfoQueryState<T>): T | null | undefined {
    if (!enabled || isLoading) return undefined
    if (isError) return null
    return data ?? null
}
