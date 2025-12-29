import { useEffect, useRef } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { axiosClient, axiosClientWithAuth } from "@/libs/axios"
import { clearQueryCache } from "@/libs/offline"

export default function LoginSuccessPage() {
    const navigate = useNavigate()
    const qc = useQueryClient()
    const { i18n } = useTranslation()
    const isMounted = useRef(true)

    useEffect(() => {
        isMounted.current = true

        const handleLoginSuccess = async () => {
            const hash = window.location.hash.substring(1)
            const params = new URLSearchParams(hash)
            const accessToken = params.get("accessToken")
            const refreshToken = params.get("refreshToken")
            const lang = i18n.resolvedLanguage || "ko"

            if (accessToken && refreshToken) {
                if (navigator.userAgent.includes("otl-app")) {
                    window.location.href = `org.sparcs.otl://login?accessToken=${accessToken}&refreshToken=${refreshToken}`
                    return
                }

                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("refreshToken", refreshToken)

                await clearQueryCache()

                qc.removeQueries({ queryKey: ["/users/info"] })
                qc.removeQueries({ queryKey: ["/timetables"] })

                await qc.prefetchQuery({
                    queryKey: ["/users/info", null, lang],
                    queryFn: async () => {
                        const { data } =
                            await axiosClientWithAuth.get("/api/v2/users/info")
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
                                    lang,
                                ],
                                queryFn: async () => {
                                    const { data } = await axiosClientWithAuth.get(
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
                } catch (error) {
                    console.error("Failed to prefetch timetable:", error)
                }

                if (isMounted.current) {
                    navigate("/", { replace: true })
                }
            } else if (isMounted.current) {
                navigate("/", { replace: true })
            }
        }

        handleLoginSuccess()

        return () => {
            isMounted.current = false
        }
    }, [navigate, qc, i18n.resolvedLanguage])

    return null
}
