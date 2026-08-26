import type { Breadcrumb, ErrorEvent, init } from "@sentry/react"

type SentryOptions = Parameters<typeof init>[0]
type TransactionEvent = Parameters<NonNullable<SentryOptions["beforeSendTransaction"]>>[0]
type SpanJSON = Parameters<NonNullable<SentryOptions["beforeSendSpan"]>>[0]
type ExceptionValue = NonNullable<NonNullable<ErrorEvent["exception"]>["values"]>[number]
type ExceptionStacktrace = ExceptionValue["stacktrace"]

export const IGNORED_SENTRY_ERROR_PATTERNS = [
    /^Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node\.$/,
    /^Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node\.$/,
    /^Non-Error promise rejection captured with value: null$/,
    // Client connectivity noise; backend uptime alerting owns real outages.
    /^Network Error$/,
    // Stale-deploy chunk failures self-heal via utils/chunkReload (loop-guarded).
    /Failed to fetch dynamically imported module/,
    /^Importing a module script failed\.$/,
    // Browser-internal IndexedDB failures outside application control.
    /^NotReadableError: The I\/O read operation failed\.$/,
    /^InvalidStateError: Failed to execute 'transaction' on 'IDBDatabase': The database connection is closing\.$/,
    /^UnknownError: Connection is closing because of: IO error: .*FILE_ERROR_NO_SPACE/,
] as const

const BREADCRUMB_URL_KEYS = ["url", "from", "to"] as const
const SPAN_URL_KEYS = ["url", "http.url"] as const
const SPAN_PRIVATE_SUFFIX_KEYS = ["http.query", "http.fragment"] as const

export function isSensitiveSentryPath(pathname: string): boolean {
    return pathname === "/login/success" || pathname === "/login/success/"
}

export function sanitizeSentryUrl(url: string): string {
    const queryIndex = url.indexOf("?")
    const fragmentIndex = url.indexOf("#")
    const suffixIndexes = [queryIndex, fragmentIndex].filter((index) => index >= 0)
    const suffixIndex = suffixIndexes.length > 0 ? Math.min(...suffixIndexes) : url.length

    return url.slice(0, suffixIndex)
}

export function sanitizeSentryBreadcrumb(breadcrumb: Breadcrumb): Breadcrumb {
    if (!breadcrumb.data) return breadcrumb

    const data = { ...breadcrumb.data }
    BREADCRUMB_URL_KEYS.forEach((key) => {
        const value = data[key]
        if (typeof value === "string") {
            data[key] = sanitizeSentryUrl(value)
        }
    })

    return { ...breadcrumb, data }
}

function sanitizeStacktrace(stacktrace: ExceptionStacktrace): ExceptionStacktrace {
    if (!stacktrace) return stacktrace

    return {
        ...stacktrace,
        frames: stacktrace.frames?.map((frame) => ({
            ...frame,
            filename:
                typeof frame.filename === "string"
                    ? sanitizeSentryUrl(frame.filename)
                    : frame.filename,
        })),
    }
}

function sanitizeRequest(request: ErrorEvent["request"]): ErrorEvent["request"] {
    if (!request) return request

    const headers = request.headers ? { ...request.headers } : request.headers
    if (headers) {
        for (const key of ["Referer", "referer"]) {
            const value = headers[key]
            if (typeof value === "string") {
                headers[key] = sanitizeSentryUrl(value)
            }
        }
    }

    return {
        ...request,
        url:
            typeof request.url === "string"
                ? sanitizeSentryUrl(request.url)
                : request.url,
        headers,
    }
}

export function sanitizeSentryEvent(event: ErrorEvent): ErrorEvent {
    return {
        ...event,
        request: sanitizeRequest(event.request),
        exception: event.exception
            ? {
                  ...event.exception,
                  values: event.exception.values?.map((exception) => ({
                      ...exception,
                      stacktrace: sanitizeStacktrace(exception.stacktrace),
                  })),
              }
            : event.exception,
        breadcrumbs: event.breadcrumbs?.map(sanitizeSentryBreadcrumb),
    }
}

export function sanitizeSentryTransaction(event: TransactionEvent): TransactionEvent {
    return {
        ...event,
        transaction:
            typeof event.transaction === "string"
                ? sanitizeSentryUrl(event.transaction)
                : event.transaction,
        request: sanitizeRequest(event.request),
        breadcrumbs: event.breadcrumbs?.map(sanitizeSentryBreadcrumb),
    }
}

export function sanitizeSentrySpan(span: SpanJSON): SpanJSON {
    const data = { ...span.data }
    SPAN_URL_KEYS.forEach((key) => {
        const value = data[key]
        if (typeof value === "string") {
            data[key] = sanitizeSentryUrl(value)
        }
    })
    SPAN_PRIVATE_SUFFIX_KEYS.forEach((key) => delete data[key])

    return {
        ...span,
        description:
            typeof span.description === "string" && span.op?.startsWith("http")
                ? sanitizeSentryUrl(span.description)
                : span.description,
        data,
    }
}
