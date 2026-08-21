import type { ErrorEvent } from "@sentry/react"
import { describe, expect, it } from "vitest"

import {
    IGNORED_SENTRY_ERROR_PATTERNS,
    isSensitiveSentryPath,
    sanitizeSentryBreadcrumb,
    sanitizeSentryEvent,
    sanitizeSentrySpan,
    sanitizeSentryTransaction,
    sanitizeSentryUrl,
} from "./sentryEventFilter"

describe("isSensitiveSentryPath", () => {
    it("identifies the credential-bearing login callback", () => {
        expect(isSensitiveSentryPath("/login/success")).toBe(true)
        expect(isSensitiveSentryPath("/login/success/")).toBe(true)
        expect(isSensitiveSentryPath("/login")).toBe(false)
    })
})

describe("sanitizeSentryUrl", () => {
    it("removes query parameters and fragments from absolute and relative URLs", () => {
        expect(
            sanitizeSentryUrl(
                "https://otl.kaist.ac.kr/login/success?lang=ko#accessToken=secret",
            ),
        ).toBe("https://otl.kaist.ac.kr/login/success")
        expect(sanitizeSentryUrl("/dictionary?keyword=secret#results")).toBe(
            "/dictionary",
        )
    })
})

describe("sanitizeSentryBreadcrumb", () => {
    it("sanitizes navigation URLs before breadcrumbs can reach errors or Replay", () => {
        expect(
            sanitizeSentryBreadcrumb({
                category: "navigation",
                data: {
                    from: "/login/success#accessToken=secret",
                    to: "/dictionary?keyword=private",
                },
            }),
        ).toMatchObject({
            data: {
                from: "/login/success",
                to: "/dictionary",
            },
        })
    })
})

describe("sanitizeSentryEvent", () => {
    it("removes sensitive URL suffixes from requests and navigation breadcrumbs", () => {
        const event: ErrorEvent = {
            type: undefined,
            request: {
                url: "https://otl.kaist.ac.kr/login/success#accessToken=secret",
            },
            exception: {
                values: [
                    {
                        type: "Error",
                        value: "callback failed",
                        stacktrace: {
                            frames: [
                                {
                                    filename:
                                        "https://otl.kaist.ac.kr/login/success#refreshToken=secret",
                                },
                            ],
                        },
                    },
                ],
            },
            breadcrumbs: [
                {
                    category: "navigation",
                    data: {
                        from: "/login?token=secret",
                        to: "/dictionary?keyword=private",
                        url: "https://api.otl.sparcs.org/reviews?studentId=1234",
                    },
                },
            ],
        }

        expect(sanitizeSentryEvent(event)).toMatchObject({
            request: { url: "https://otl.kaist.ac.kr/login/success" },
            exception: {
                values: [
                    {
                        stacktrace: {
                            frames: [
                                { filename: "https://otl.kaist.ac.kr/login/success" },
                            ],
                        },
                    },
                ],
            },
            breadcrumbs: [
                {
                    data: {
                        from: "/login",
                        to: "/dictionary",
                        url: "https://api.otl.sparcs.org/reviews",
                    },
                },
            ],
        })
    })
})

describe("sanitizeSentryTransaction", () => {
    it("removes URL suffixes from transaction request data and names", () => {
        expect(
            sanitizeSentryTransaction({
                type: "transaction",
                transaction: "GET /dictionary?keyword=private",
                request: {
                    url: "https://otl.sparcs.org/dictionary?keyword=private",
                    headers: {
                        Referer:
                            "https://otl.sparcs.org/login/success#refreshToken=secret",
                    },
                },
            }),
        ).toMatchObject({
            transaction: "GET /dictionary",
            request: {
                url: "https://otl.sparcs.org/dictionary",
                headers: { Referer: "https://otl.sparcs.org/login/success" },
            },
        })
    })
})

describe("sanitizeSentrySpan", () => {
    it("removes query and fragment attributes from HTTP spans", () => {
        const span = sanitizeSentrySpan({
            data: {
                url: "https://api.otl.sparcs.org/reviews?studentId=1234",
                "http.url": "https://api.otl.sparcs.org/reviews#token=secret",
                "http.query": "studentId=1234",
                "http.fragment": "token=secret",
            },
            description: "GET /reviews?studentId=1234",
            op: "http.client",
            span_id: "0123456789abcdef",
            start_timestamp: 0,
            trace_id: "0123456789abcdef0123456789abcdef",
        })

        expect(span).toMatchObject({
            data: {
                url: "https://api.otl.sparcs.org/reviews",
                "http.url": "https://api.otl.sparcs.org/reviews",
            },
            description: "GET /reviews",
        })
        expect(span.data).not.toHaveProperty("http.query")
        expect(span.data).not.toHaveProperty("http.fragment")
    })
})

describe("IGNORED_SENTRY_ERROR_PATTERNS", () => {
    it("matches browser DOM mutation errors without matching application errors", () => {
        const messages = [
            "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.",
            "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.",
        ]

        expect(
            messages.every((message) =>
                IGNORED_SENTRY_ERROR_PATTERNS.some((pattern) => pattern.test(message)),
            ),
        ).toBe(true)
        expect(
            IGNORED_SENTRY_ERROR_PATTERNS.some((pattern) =>
                pattern.test("Non-Error promise rejection captured with value: null"),
            ),
        ).toBe(true)
        expect(
            IGNORED_SENTRY_ERROR_PATTERNS.some((pattern) =>
                pattern.test("Cannot read properties of undefined"),
            ),
        ).toBe(false)
    })
})
