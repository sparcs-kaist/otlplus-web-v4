import { describe, expect, it } from "vitest"

import { shouldCaptureApiError } from "./apiErrorReporting"

describe("shouldCaptureApiError", () => {
    it.each([undefined, 0, 400, 401, 403, 404, 409, 429])(
        "does not report expected or connection errors with status %s",
        (status) => {
            expect(shouldCaptureApiError(status)).toBe(false)
        },
    )

    it.each([500, 502, 503, 599])("reports server errors with status %s", (status) => {
        expect(shouldCaptureApiError(status)).toBe(true)
    })
})
