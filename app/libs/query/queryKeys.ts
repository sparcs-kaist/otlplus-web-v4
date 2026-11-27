export const queryKeys = {
    reviews: "/reviews",
    semesters: "/semesters",
    timetables: "/timetables",
    timetableDetail: (timetableId: number): `/timetables/${number}/items` =>
        `/timetables/${timetableId}/items`,
    myTimetable: "/timetables/my-timetable",
    homeTimetable: "/timetables/home",
    sharedTimetable: "/timetables/shared",
    sharedTimetableSemesters: "/timetables/shared/semesters",
    userInfo: "/users/info",
    userLectures: (userId: number) => `/users/${userId}/lectures`,
    userWishlist: (userId: number) => `/users/${userId}/wishlist`,
    writtenReviews: "/users/written-reviews",
    writableReview: "/users/writable-review",
} as const
