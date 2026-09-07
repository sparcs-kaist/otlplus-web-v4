export const ReviewLikeActionEnum = {
    LIKE: "like",
    UNLIKE: "unlike",
} as const

export type ReviewLikeActionEnum =
    (typeof ReviewLikeActionEnum)[keyof typeof ReviewLikeActionEnum]
