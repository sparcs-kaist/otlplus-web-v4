// Keys here must align with useAPI / useInfiniteAPI's queryKey shape
// ([path, params?, language?]). For invalidation we only include the path
// so invalidateQueries matches all param/language variants by prefix.

export const apiKeys = {
    users: {
        info: () => ["/users/info"] as const,
        writableReview: () => ["/users/writable-review"] as const,
        writtenReviews: () => ["/users/written-reviews"] as const,
        lectures: (userId: number | undefined) => [`/users/${userId}/lectures`] as const,
        wishlist: (userId: number | undefined) => [`/users/${userId}/wishlist`] as const,
        likedReviews: (userId: number | undefined) =>
            [`/users/${userId}/reviews/liked`] as const,
    },
    reviews: {
        all: () => ["/reviews"] as const,
    },
    timetables: {
        all: () => ["/timetables"] as const,
        myTimetable: () => ["/timetables/my-timetable"] as const,
        detail: (timetableId: number | string) => [`/timetables/${timetableId}`] as const,
    },
    semesters: {
        all: () => ["/semesters"] as const,
        current: () => ["/semesters/current"] as const,
    },
    courses: {
        all: () => ["/courses"] as const,
        detail: (courseId: number | string) => [`/courses/${courseId}`] as const,
    },
    departmentOptions: {
        all: () => ["/department-options"] as const,
    },
} as const
