export const SyncStatusEnum = {
    WAIT: "wait",
    IN_PROGRESS: "inProgress",
    COMPLETE: "complete",
    ERROR: "error",
} as const

export type SyncStatusEnum = (typeof SyncStatusEnum)[keyof typeof SyncStatusEnum]
