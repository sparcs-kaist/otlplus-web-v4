import { describe, expect, it } from "vitest"

import resolveDocumentLanguage, {
    DEFAULT_DOCUMENT_LANGUAGE,
} from "./resolveDocumentLanguage"

describe("resolveDocumentLanguage", () => {
    it("falls back to Korean when the language is unresolved", () => {
        expect(resolveDocumentLanguage(undefined)).toBe(DEFAULT_DOCUMENT_LANGUAGE)
        expect(resolveDocumentLanguage("")).toBe(DEFAULT_DOCUMENT_LANGUAGE)
    })

    it("normalizes regional variants to the base language", () => {
        expect(resolveDocumentLanguage("ko-KR")).toBe("ko")
        expect(resolveDocumentLanguage("en-US")).toBe("en")
    })

    it("keeps an already normalized language", () => {
        expect(resolveDocumentLanguage("en")).toBe("en")
    })
})
