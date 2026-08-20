export const ReviewWriteTab = {
    WRITE: "write",
    RECENT_FEED: "recentFeed",
    HALL_OF_FAME_FEED: "hallOfFameFeed",
    LIKED: "liked",
} as const

export type ReviewWriteTabKey = (typeof ReviewWriteTab)[keyof typeof ReviewWriteTab]

export const REVIEW_WRITE_TABS = [
    ReviewWriteTab.WRITE,
    ReviewWriteTab.RECENT_FEED,
    ReviewWriteTab.HALL_OF_FAME_FEED,
    ReviewWriteTab.LIKED,
] as const satisfies readonly ReviewWriteTabKey[]
