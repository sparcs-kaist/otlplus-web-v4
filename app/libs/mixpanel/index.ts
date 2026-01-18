import { clientEnv } from "@/env"

export const MIXPANEL_TOKEN = clientEnv.VITE_MIXPANEL_TOKEN

let isInitialized = false
let mixpanelInstance: typeof import("mixpanel-browser").default | null = null

const getMixpanel = async () => {
    if (typeof window === "undefined") return null
    if (!mixpanelInstance) {
        const module = await import("mixpanel-browser")
        mixpanelInstance = module.default
    }
    return mixpanelInstance
}

export const initMixpanel = async () => {
    if (typeof window === "undefined") return
    if (!MIXPANEL_TOKEN || isInitialized) return

    const mixpanel = await getMixpanel()
    if (!mixpanel) return

    mixpanel.init(MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV === "development",
        track_pageview: true,
        persistence: "localStorage",
        autocapture: true,
        record_sessions_percent: 100,
    })
    isInitialized = true
}

export const identifyUser = async (user: {
    id: number
    email: string
    name?: string
    studentNumber?: number
    degree?: string
}) => {
    if (typeof window === "undefined") return
    if (!MIXPANEL_TOKEN || !isInitialized) return

    const mixpanel = await getMixpanel()
    if (!mixpanel) return

    mixpanel.identify(user.id.toString())
    mixpanel.people.set({
        $email: user.email,
        $name: user.name,
        student_number: user.studentNumber,
        degree: user.degree,
    })
}

export const resetUser = async () => {
    if (typeof window === "undefined") return
    if (!MIXPANEL_TOKEN || !isInitialized) return

    const mixpanel = await getMixpanel()
    if (!mixpanel) return

    mixpanel.reset()
}

export const trackEvent = async (
    eventName: string,
    properties?: Record<string, unknown>,
) => {
    if (typeof window === "undefined") return
    if (!MIXPANEL_TOKEN || !isInitialized) return

    const mixpanel = await getMixpanel()
    if (!mixpanel) return

    mixpanel.track(eventName, properties)
}
