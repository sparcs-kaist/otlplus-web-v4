import { HttpStatusCode, isAxiosError } from "axios"

import type { UserStatus } from "@/utils/zustand/useUserStore"

interface UserInfoQueryState<T> {
    enabled: boolean
    isPending: boolean
    isError: boolean
    error: unknown
    data: T | undefined
}

export default function resolveUserInfo<T>({
    enabled,
    isPending,
    isError,
    error,
    data,
}: UserInfoQueryState<T>): T | null | undefined {
    if (!enabled || isPending) return undefined
    if (isError) {
        return isAxiosError(error) &&
            error.response?.status === HttpStatusCode.Unauthorized
            ? null
            : undefined
    }
    return data ?? null
}

export function selectAuthenticatedUserInfo<T>(
    status: UserStatus,
    userInfo: T | null,
): T | null {
    return status === "success" ? userInfo : null
}
