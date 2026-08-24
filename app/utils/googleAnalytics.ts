import { useEffect } from "react"

import { useLocation } from "react-router"

import { clientEnv } from "@/env"

declare global {
    interface Window {
        gtag: (
            command: "config" | "event" | "js",
            targetId: string | Date,
            config?: Record<string, any>,
        ) => void
        dataLayer: any[]
    }
}

export const GA_TRACKING_ID = clientEnv.VITE_GA_MEASUREMENT_ID

export const pageview = (url: string) => {
    if (!GA_TRACKING_ID || typeof window.gtag === "undefined") return
    try {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        })
    } catch {
        // Third-party snippet failures must never break the app surface.
    }
}

export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string
    category: string
    label: string
    value?: number
}) => {
    if (!GA_TRACKING_ID || typeof window.gtag === "undefined") return
    try {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    } catch {}
}

export const useGoogleAnalytics = () => {
    const location = useLocation()

    useEffect(() => {
        if (!GA_TRACKING_ID) return

        pageview(location.pathname + location.search)
    }, [location.pathname, location.search])
}
