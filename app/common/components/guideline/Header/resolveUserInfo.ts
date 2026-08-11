import { HttpStatusCode, isAxiosError } from "axios"

interface UserInfoQueryState<T> {
    enabled: boolean
    isLoading: boolean
    isError: boolean
    error: unknown
    data: T | undefined
}

export default function resolveUserInfo<T>({
    enabled,
    isLoading,
    isError,
    error,
    data,
}: UserInfoQueryState<T>): T | null | undefined {
    if (!enabled || isLoading) return undefined
    if (isError) {
        return isAxiosError(error) &&
            error.response?.status === HttpStatusCode.Unauthorized
            ? null
            : undefined
    }
    return data ?? null
}
