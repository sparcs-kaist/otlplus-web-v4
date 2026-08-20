import { useEffect, useRef } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import type { GETUserInfoResponse } from "@/api/users/info"
import { axiosClient } from "@/libs/axios"
import { DEFAULT_DOCUMENT_LANGUAGE } from "@/libs/i18n/resolveDocumentLanguage"
import { identifyUser, trackEvent } from "@/libs/mixpanel"
import { clearQueryCache } from "@/libs/offline"
import { queryKeys } from "@/libs/query/queryKeys"
import logger from "@/utils/logger"

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
            const lang = i18n.resolvedLanguage || DEFAULT_DOCUMENT_LANGUAGE

            if (accessToken && refreshToken) {
                if (navigator.userAgent.includes("otl-app")) {
                    window.location.href = `org.sparcs.otl://login?accessToken=${accessToken}&refreshToken=${refreshToken}`
                    return
                }

                await clearQueryCache()

                qc.removeQueries({ queryKey: [queryKeys.userInfo] })
                qc.removeQueries({ queryKey: [queryKeys.timetables] })

                await qc.prefetchQuery({
                    queryKey: [queryKeys.userInfo, null, lang],
                    queryFn: async () => {
                        const { data } = await axiosClient.get("/api/v2/users/info", {
                            headers: { "Cache-Control": "no-cache" },
                        })
                        return data
                    },
                })

                const userInfo = qc.getQueryData<GETUserInfoResponse>([
                    queryKeys.userInfo,
                    null,
                    lang,
                ])
                if (userInfo) {
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

                try {
                    const { data: semesterData } = await axiosClient.get(
                        "/api/v2/semesters",
                        {
                            headers: { "Cache-Control": "no-cache" },
                        },
                    )
                    if (semesterData?.semesters?.length > 0) {
                        const latestSemester =
                            semesterData.semesters[semesterData.semesters.length - 1]
                        if (latestSemester) {
                            await qc.prefetchQuery({
                                queryKey: [
                                    queryKeys.myTimetable,
                                    {
                                        year: latestSemester.year,
                                        semester: latestSemester.semester,
                                    },
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
                        }
                    }
                } catch (error) {
                    logger.warn("Timetable prefetch failed", error)
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
