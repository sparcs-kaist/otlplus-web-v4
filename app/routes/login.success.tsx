import { useEffect } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { axiosClient } from "@/libs/axios"
import { clearQueryCache } from "@/libs/offline"

export default function LoginSuccessPage() {
    const navigate = useNavigate()
    const qc = useQueryClient()

    useEffect(() => {
        const handleLoginSuccess = async () => {
            const hash = window.location.hash.substring(1)
            const params = new URLSearchParams(hash)
            const accessToken = params.get("accessToken")
            const refreshToken = params.get("refreshToken")

            if (accessToken && refreshToken) {
                if (navigator.userAgent.includes("otl-app")) {
                    window.location.href = `org.sparcs.otl://login?accessToken=${accessToken}&refreshToken=${refreshToken}`
                    return
                }

                await clearQueryCache()

                qc.removeQueries({ queryKey: ["/users/info"] })
                qc.removeQueries({ queryKey: ["/timetables"] })

                await qc.prefetchQuery({
                    queryKey: ["/users/info", null, "ko"],
                    queryFn: async () => {
                        const { data } = await axiosClient.get("/api/v2/users/info")
                        return data
                    },
                })

                try {
                    const { data: semesterData } =
                        await axiosClient.get("/api/v2/semesters")
                    if (semesterData?.semesters?.length > 0) {
                        const latestSemester =
                            semesterData.semesters[semesterData.semesters.length - 1]
                        if (latestSemester) {
                            await qc.prefetchQuery({
                                queryKey: [
                                    "/timetables/my-timetable",
                                    {
                                        year: latestSemester.year,
                                        semester: latestSemester.semester,
                                    },
                                    "ko",
                                ],
                                queryFn: async () => {
                                    const { data } = await axiosClient.get(
                                        "/api/v2/timetables/my-timetable",
                                        {
                                            params: {
                                                year: latestSemester.year,
                                                semester: latestSemester.semester,
                                            },
                                        },
                                    )
                                    return data
                                },
                            })
                        }
                    }
                } catch {}

                navigate("/", { replace: true })
            } else {
                navigate("/", { replace: true })
            }
        }

        handleLoginSuccess()
    }, [navigate, qc])

    return null
}
