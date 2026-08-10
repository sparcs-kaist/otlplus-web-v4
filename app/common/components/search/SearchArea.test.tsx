import React from "react"

import { afterEach, describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"

import SearchArea from "./SearchArea"
import resolveDepartmentIds from "./resolveDepartmentIds"

vi.mock("@/utils/api/useAPI", () => ({
    useAPI: () => ({
        query: {
            data: {
                departments: [
                    { id: 9945, code: "CS", name: "전산학부" },
                    { id: 9947, code: "EE", name: "전기및전자공학부" },
                ],
            },
        },
    }),
}))

afterEach(() => {
    vi.unstubAllGlobals()
})

const departments = [
    { id: 9945, code: "CS" },
    { id: 9947, code: "EE" },
]

describe("resolveDepartmentIds", () => {
    it("resolves department codes without leaving undefined values", () => {
        expect(resolveDepartmentIds(["CS", "UNKNOWN", "EE"], departments)).toEqual([
            9945, 9947,
        ])
    })

    it("returns no ids while department data is unavailable", () => {
        expect(resolveDepartmentIds(["CS"], undefined)).toEqual([])
    })
})

describe("SearchArea", () => {
    it("blocks submission when a selected department cannot be resolved", () => {
        const onSearch = vi.fn()
        const alertSpy = vi.fn()
        vi.stubGlobal("alert", alertSpy)

        render(<SearchArea options={["department"]} onSearch={onSearch} />)

        fireEvent.click(screen.getByText(/기타|Other|etcShort/i))
        fireEvent.click(
            screen.getAllByText(/검색|Search|common\.search\.submit/i).at(-1)!,
        )

        expect(alertSpy).toHaveBeenCalledTimes(1)
        expect(onSearch).not.toHaveBeenCalled()
    })
})
