import mixpanel from "mixpanel-browser"

import { clientEnv } from "@/env"

export const MIXPANEL_TOKEN = clientEnv.VITE_MIXPANEL_TOKEN

let isInitialized = false

export const initMixpanel = () => {
    if (!MIXPANEL_TOKEN || isInitialized) return

    mixpanel.init(MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV === "development",
        track_pageview: true,
        persistence: "localStorage",
        autocapture: true,
        record_sessions_percent: 100,
    })
    isInitialized = true
}

export const identifyUser = (user: {
    id: number
    email: string
    name?: string
    studentNumber?: number
    degree?: string
}) => {
    if (!MIXPANEL_TOKEN || !isInitialized) return

    mixpanel.identify(user.id.toString())
    mixpanel.people.set({
        $email: user.email,
        $name: user.name,
        student_number: user.studentNumber,
        degree: user.degree,
    })
}

export const resetUser = () => {
    if (!MIXPANEL_TOKEN || !isInitialized) return

    mixpanel.reset()
}

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!MIXPANEL_TOKEN || !isInitialized) return

    mixpanel.track(eventName, properties)
}
