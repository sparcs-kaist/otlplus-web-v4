import { describe, expect, it } from "vitest"

import { isExpectedClipboardError } from "./clipboardErrors"

describe("isExpectedClipboardError", () => {
    it.each(["NotAllowedError", "NotReadableError"])(
        "classifies %s as an expected clipboard failure",
        (name) => {
            expect(isExpectedClipboardError(new DOMException("clipboard", name))).toBe(
                true,
            )
        },
    )

    it("keeps unexpected failures actionable", () => {
        expect(isExpectedClipboardError(new Error("canvas failed"))).toBe(false)
    })
})
