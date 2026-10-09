import type { ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, expect, it, vi } from "vitest"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import useUserStore from "@/utils/zustand/useUserStore"

import { useTimetableClone } from "./useTimetableClone"

const mocks = vi.hoisted(() => ({ mutateAsync: vi.fn() }))
vi.mock("@/utils/api/useAPI", () => ({
    useAPI: () => ({ mutation: { mutateAsync: mocks.mutateAsync, isPending: false } }),
}))
vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))

const items = [
    { kind: "lecture", data: { id: 11 } },
    { kind: "custom", data: { id: 11 } },
] as TimetableItem[]

beforeEach(() => {
    mocks.mutateAsync.mockReset().mockResolvedValue({ id: 43 })
    useUserStore.getState().setUser({ id: 7, name: "Tester" })
    useTimetableUIStore.setState({
        currentTimetableId: 42,
        year: 2026,
        semesterEnum: SemesterEnum.FALL,
    })
})

afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
    useUserStore.setState(useUserStore.getInitialState())
    useTimetableUIStore.setState(useTimetableUIStore.getInitialState())
})

function renderClone() {
    const client = new QueryClient()
    const invalidate = vi.spyOn(client, "invalidateQueries")
    const hook = renderHook(() => useTimetableClone(items), {
        wrapper: ({ children }: { children: ReactNode }) => (
            <QueryClientProvider client={client}>{children}</QueryClientProvider>
        ),
    })
    return { ...hook, invalidate }
}

it("duplicates the saved source in one request, including blocks", async () => {
    const { result, invalidate } = renderClone()
    await act(() => result.current.cloneTimetable())
    expect(mocks.mutateAsync).toHaveBeenCalledExactlyOnceWith({
        year: 2026,
        semester: SemesterEnum.FALL,
        sourceTimetableId: 42,
    })
    expect(useTimetableUIStore.getState().currentTimetableId).toBe(43)
    expect(invalidate).toHaveBeenCalledWith({ queryKey: ["/timetables"] })
})

it("uses the compatible lectureIds body for actual enrolled lectures", async () => {
    useTimetableUIStore.setState({ currentTimetableId: null })
    const { result } = renderClone()
    await act(() => result.current.cloneTimetable())
    expect(mocks.mutateAsync).toHaveBeenCalledWith({
        year: 2026,
        semester: SemesterEnum.FALL,
        lectureIds: [11],
    })
})

it.each(["tab", "semester", "user"])(
    "does not switch back after changing %s during duplication",
    async (change) => {
        let resolve!: (value: { id: number }) => void
        mocks.mutateAsync.mockReturnValue(
            new Promise((done) => {
                resolve = done
            }),
        )
        const { result } = renderClone()
        const pending = result.current.cloneTimetable()
        act(() => {
            if (change === "tab") useTimetableUIStore.setState({ currentTimetableId: 99 })
            if (change === "semester")
                useTimetableUIStore.setState({ semesterEnum: SemesterEnum.SPRING })
            if (change === "user")
                useUserStore.getState().setUser({ id: 8, name: "Other" })
        })
        await act(async () => {
            resolve({ id: 43 })
            await pending
        })
        expect(useTimetableUIStore.getState().currentTimetableId).toBe(
            change === "tab" ? 99 : 42,
        )
    },
)

it("deduplicates simultaneous button and shortcut requests", async () => {
    let resolve!: (value: { id: number }) => void
    mocks.mutateAsync.mockReturnValue(
        new Promise((done) => {
            resolve = done
        }),
    )
    const { result } = renderClone()
    const first = result.current.cloneTimetable()
    await result.current.cloneTimetable()
    expect(mocks.mutateAsync).toHaveBeenCalledTimes(1)
    await act(async () => {
        resolve({ id: 43 })
        await first
    })
})

it("refetches after an uncertain failure without retrying creation", async () => {
    mocks.mutateAsync.mockRejectedValue(new Error("Connection lost"))
    const alert = vi.fn()
    vi.stubGlobal("alert", alert)
    const { result, invalidate } = renderClone()
    await act(() => result.current.cloneTimetable())
    expect(mocks.mutateAsync).toHaveBeenCalledTimes(1)
    expect(invalidate).toHaveBeenCalledWith({ queryKey: ["/timetables"] })
    expect(useTimetableUIStore.getState().currentTimetableId).toBe(42)
    expect(alert).toHaveBeenCalled()
})
