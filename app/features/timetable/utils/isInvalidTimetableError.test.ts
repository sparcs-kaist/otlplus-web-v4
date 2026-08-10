import { AxiosError, AxiosHeaders, HttpStatusCode } from "axios"
import { describe, expect, it } from "vitest"

import isInvalidTimetableError from "./isInvalidTimetableError"

function createAxiosError(status?: number): AxiosError {
    return new AxiosError(
        "request failed",
        undefined,
        undefined,
        undefined,
        status === undefined
            ? undefined
            : {
                  data: {},
                  status,
                  statusText: "",
                  headers: new AxiosHeaders(),
                  config: { headers: new AxiosHeaders() },
              },
    )
}

describe("isInvalidTimetableError", () => {
    it("recognizes bad-request responses", () => {
        expect(isInvalidTimetableError(createAxiosError(HttpStatusCode.BadRequest))).toBe(
            true,
        )
    })

    it.each([
        HttpStatusCode.Unauthorized,
        HttpStatusCode.Forbidden,
        HttpStatusCode.NotFound,
        HttpStatusCode.Conflict,
        HttpStatusCode.InternalServerError,
    ])("preserves non-400 responses (%s)", (status) => {
        expect(isInvalidTimetableError(createAxiosError(status))).toBe(false)
    })

    it.each([createAxiosError(), new Error("boom"), null, undefined, "400"])(
        "ignores non-response errors",
        (error) => {
            expect(isInvalidTimetableError(error)).toBe(false)
        },
    )
})
