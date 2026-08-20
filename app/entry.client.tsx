import { StrictMode, startTransition } from "react"

import * as Sentry from "@sentry/react"
import { hydrateRoot } from "react-dom/client"
import { HydratedRouter } from "react-router/dom"

import { clientEnv } from "@/env"
import {
    IGNORED_SENTRY_ERROR_PATTERNS,
    isSensitiveSentryPath,
    sanitizeSentryBreadcrumb,
    sanitizeSentryEvent,
    sanitizeSentrySpan,
    sanitizeSentryTransaction,
} from "@/libs/sentry/sentryEventFilter"

const isSensitiveLoginCallback = isSensitiveSentryPath(window.location.pathname)

// Check if Sentry DSN is properly configured (not empty string)
if (clientEnv.VITE_SENTRY_DSN && clientEnv.VITE_SENTRY_DSN.trim() !== "") {
    Sentry.init({
        dsn: clientEnv.VITE_SENTRY_DSN,
        environment: clientEnv.VITE_DEV_MODE ? "development" : "production",
        sendDefaultPii: false,
        ignoreErrors: [...IGNORED_SENTRY_ERROR_PATTERNS],
        beforeBreadcrumb: sanitizeSentryBreadcrumb,
        beforeSend: sanitizeSentryEvent,
        beforeSendTransaction: sanitizeSentryTransaction,
        beforeSendSpan: sanitizeSentrySpan,
        integrations: isSensitiveLoginCallback
            ? []
            : [Sentry.browserTracingIntegration(), Sentry.browserProfilingIntegration()],
        tracesSampleRate: isSensitiveLoginCallback
            ? 0
            : clientEnv.VITE_DEV_MODE
              ? 1.0
              : 0.1,
        profileSessionSampleRate: isSensitiveLoginCallback
            ? 0
            : clientEnv.VITE_DEV_MODE
              ? 1.0
              : 0.1,
        // "trace" mode: profiler runs automatically with active spans
        // (default "manual" mode requires explicit start/stop calls)
        profileLifecycle: "trace",
        tracePropagationTargets: [
            "localhost",
            /^https:\/\/otl\.sparcs\.org\/api/,
            /^https:\/\/otl\.dev\.sparcs\.org\/api/,
            /^https:\/\/api\.otl\.sparcs\.org/,
            /^https:\/\/api\.otl\.dev\.sparcs\.org/,
        ],
        // Replay records the full page URL before custom event sanitizers run.
        // Keep it disabled while auth credentials and search terms can appear in URLs.
        replaysSessionSampleRate: 0,
        replaysOnErrorSampleRate: 0,
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
