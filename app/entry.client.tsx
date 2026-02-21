import { StrictMode, startTransition } from "react"

import * as Sentry from "@sentry/react"
import { hydrateRoot } from "react-dom/client"
import { HydratedRouter } from "react-router/dom"

import { clientEnv } from "@/env"

// Check if Sentry DSN is properly configured (not empty string)
if (clientEnv.VITE_SENTRY_DSN && clientEnv.VITE_SENTRY_DSN.trim() !== "") {
    Sentry.init({
        dsn: clientEnv.VITE_SENTRY_DSN,
        environment: clientEnv.VITE_DEV_MODE ? "development" : "production",
        sendDefaultPii: true,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.browserProfilingIntegration(),
            Sentry.replayIntegration({
                maskAllText: false,
                blockAllMedia: false,
            }),
        ],
        tracesSampleRate: clientEnv.VITE_DEV_MODE ? 1.0 : 0.1,
        // profilesSampleRate is relative to tracesSampleRate
        // e.g. 0.1 traces * 1.0 profiles = 10% of transactions profiled in prod
        profilesSampleRate: 1.0,
        tracePropagationTargets: [
            "localhost",
            /^https:\/\/otl\.sparcs\.org\/api/,
            /^https:\/\/otl\.dev\.sparcs\.org\/api/,
            /^https:\/\/api\.otl\.sparcs\.org/,
            /^https:\/\/api\.otl\.dev\.sparcs\.org/,
        ],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    })
}

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <HydratedRouter />
        </StrictMode>,
    )
})
