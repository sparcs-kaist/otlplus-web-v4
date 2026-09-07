export const ReviewModeEnum = {
    DEFAULT: "default",
    RECENT: "recent",
    HALL_OF_FAME: "hall-of-fame",
    REVIEW_FEED: "review-feed",
    POPULAR_FEED: "popular-feed",
} as const

export type ReviewModeEnum = (typeof ReviewModeEnum)[keyof typeof ReviewModeEnum]

export const MAIN_REVIEW_FEED_MODES = [
    ReviewModeEnum.RECENT,
    ReviewModeEnum.POPULAR_FEED,
    ReviewModeEnum.HALL_OF_FAME,
] as const

export type MainReviewFeedMode = (typeof MAIN_REVIEW_FEED_MODES)[number]
