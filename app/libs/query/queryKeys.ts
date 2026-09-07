export const queryKeys = {
    reviews: "/reviews",
    semesters: "/semesters",
    timetables: "/timetables",
    timetableDetail: (timetableId: number): `/timetables/${number}` =>
        `/timetables/${timetableId}`,
    myTimetable: "/timetables/my-timetable",
    userInfo: "/users/info",
    userLectures: (userId: number) => `/users/${userId}/lectures`,
    userWishlist: (userId: number) => `/users/${userId}/wishlist`,
    writtenReviews: "/users/written-reviews",
    writableReview: "/users/writable-review",
} as const
