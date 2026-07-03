import type { QueryClient } from "@tanstack/react-query"

import { axiosClient } from "@/libs/axios"
import { identifyUser, trackEvent } from "@/libs/mixpanel"
import { clearQueryCache } from "@/libs/offline"

interface UserInfo {
    id: number
    mail: string
    name?: string
    studentNumber?: number
    degree?: string
}

interface Semester {
    year: number
    semester: number
}

interface SemestersResponse {
    semesters: Semester[]
}

async function prefetchUserInfo(
    qc: QueryClient,
    lang: string,
): Promise<UserInfo | undefined> {
    await qc.prefetchQuery({
        queryKey: ["/users/info", null, lang],
        queryFn: async () => {
            const { data } = await axiosClient.get("/api/v2/users/info", {
                headers: { "Cache-Control": "no-cache" },
            })
            return data
        },
    })
    return qc.getQueryData<UserInfo>(["/users/info", null, lang])
}

function trackSignIn(userInfo: UserInfo) {
    identifyUser({
        id: userInfo.id,
        email: userInfo.mail,
        name: userInfo.name,
        studentNumber: userInfo.studentNumber,
        degree: userInfo.degree,
    })
    trackEvent("Sign In", {
        user_id: userInfo.id,
        login_method: "sso",
        success: true,
    })
}

async function prefetchLatestTimetable(qc: QueryClient, lang: string) {
    try {
        const { data: semesterData } = await axiosClient.get<SemestersResponse>(
            "/api/v2/semesters",
            {
                headers: { "Cache-Control": "no-cache" },
            },
        )
        if (!semesterData?.semesters?.length) return

        const latestSemester = semesterData.semesters[semesterData.semesters.length - 1]
        if (!latestSemester) return

        await qc.prefetchQuery({
            queryKey: [
                "/timetables/my-timetable",
                { year: latestSemester.year, semester: latestSemester.semester },
                lang,
            ],
            queryFn: async () => {
                const { data } = await axiosClient.get(
                    "/api/v2/timetables/my-timetable",
                    {
                        params: {
                            year: latestSemester.year,
                            semester: latestSemester.semester,
                        },
                        headers: { "Cache-Control": "no-cache" },
                    },
                )
                return data
            },
        })
    } catch (error) {
        console.error("Failed to prefetch timetable:", error)
    }
}

export interface HandleLoginSuccessResult {
    redirectedToApp: boolean
}

export async function handleLoginSuccess(
    qc: QueryClient,
    lang: string,
): Promise<HandleLoginSuccessResult> {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const accessToken = params.get("accessToken")
    const refreshToken = params.get("refreshToken")

    if (!accessToken || !refreshToken) {
        return { redirectedToApp: false }
    }

    if (navigator.userAgent.includes("otl-app")) {
        window.location.href = `org.sparcs.otl://login?accessToken=${accessToken}&refreshToken=${refreshToken}`
        return { redirectedToApp: true }
    }

    await clearQueryCache()
    qc.removeQueries({ queryKey: ["/users/info"] })
    qc.removeQueries({ queryKey: ["/timetables"] })

    const userInfo = await prefetchUserInfo(qc, lang)
    if (userInfo) trackSignIn(userInfo)

    await prefetchLatestTimetable(qc, lang)

    return { redirectedToApp: false }
}
