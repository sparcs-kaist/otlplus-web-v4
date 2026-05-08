import { useEffect, useRef } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { handleLoginSuccess } from "@/utils/handleLoginSuccess"

export default function LoginSuccessPage() {
    const navigate = useNavigate()
    const qc = useQueryClient()
    const { i18n } = useTranslation()
    const isMounted = useRef(true)

    useEffect(() => {
        isMounted.current = true

        const run = async () => {
            const lang = i18n.resolvedLanguage || "ko"
            const { redirectedToApp } = await handleLoginSuccess(qc, lang)
            if (!redirectedToApp && isMounted.current) {
                navigate("/", { replace: true })
            }
        }

        run()

        return () => {
            isMounted.current = false
        }
    }, [navigate, qc, i18n.resolvedLanguage])

    return null
}
