import { Navigate } from "react-router"

import type { FlagKey } from "./core"
import { useFeatureFlag } from "./useFeatureFlag"

type Props = {
    flag: FlagKey
    children: React.ReactNode
}

/**
 * Renders children only while the flag is enabled. While the remote provider
 * is still pending it renders nothing (default-off, no premature redirect);
 * once settled and disabled it sends the user home.
 */
export function RequireFeatureFlag({ flag, children }: Props) {
    const { enabled, isReady } = useFeatureFlag(flag)

    if (enabled) return <>{children}</>
    if (!isReady) return null
    return <Navigate to="/" replace />
}
