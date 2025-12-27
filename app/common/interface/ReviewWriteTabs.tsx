export const TabTypes = ["write", "recentFeed", "hallOfFameFeed", "liked"] as const
export type TabType = (typeof TabTypes)[number]
