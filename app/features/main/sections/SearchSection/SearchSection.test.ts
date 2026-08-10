import { describe, expect, it } from "vitest"

import type { SearchParamsType } from "@/common/components/search/SearchArea"

import createDictionarySearchParams from "./createDictionarySearchParams"

describe("createDictionarySearchParams", () => {
    it("omits unresolved array values", () => {
        const params = {
            keyword: "algorithm",
            department: [9945, undefined, null],
        }

        expect(
            createDictionarySearchParams(
                params as unknown as SearchParamsType,
            ).toString(),
        ).toBe("keyword=algorithm&department=9945")
    })
})
