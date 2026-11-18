import type { ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, fireEvent, renderHook, waitFor } from "@testing-library/react"
import { afterEach, expect, it, vi } from "vitest"

import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { axiosClient } from "@/libs/axios"
import { useAPI } from "@/utils/api/useAPI"

import { useTimetableKeyboard } from "./useTimetableKeyboard"

vi.mock("@/libs/axios", () => ({ axiosClient: { request: vi.fn() } }))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key, i18n: { resolvedLanguage: "ko" } }),
}))

const lecture = (id: number, begin = 600): TimetableItem => ({
    kind: "lecture",
    data: {
        id,
        name: "Lecture",
        classes: [{ day: 1, begin, end: begin + 60 }],
    } as Lecture,
})
const custom = (id: number, begin = 600): TimetableItem => ({
    kind: "custom",
    data: { id, block_name: "Study", place: "", day: 1, begin, end: begin + 60 },
})
const clients: QueryClient[] = []
const unmounts: (() => void)[] = []
afterEach(() => {
    unmounts.splice(0).forEach((unmount) => unmount())
    clients.splice(0).forEach((client) => client.clear())
    vi.unstubAllGlobals()
    vi.clearAllMocks()
    useTimetableUIStore.setState(useTimetableUIStore.getInitialState())
})

function setup(items: TimetableItem[] = [lecture(7), custom(7)]) {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
    })
    clients.push(queryClient)
    useTimetableUIStore.setState({ currentTimetableId: 1, year: 2026, semesterEnum: 1 })
    const operations = {
        undo: vi.fn(async () => true),
        redo: vi.fn(async () => true),
        addItems: vi.fn(
            async (_items: TimetableItem[], _replace?: TimetableItem[]) => true,
        ),
        removeItems: vi.fn(async (_items: TimetableItem[]) => true),
        addLectures: vi.fn(async () => true),
        removeLectures: vi.fn(async () => true),
        changeSemester: vi.fn(),
        duplicateTimetable: vi.fn(),
    }
    const hook = renderHook(
        () => ({
            ...useTimetableKeyboard({
                currentTimetableItems: items,
                ...operations,
                timetableIds: [null, 1],
                isLoggedIn: true,
            }),
            list: useAPI("GET", "/timetables", { enabled: false }),
        }),
        {
            wrapper: ({ children }: { children: ReactNode }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        },
    )
    unmounts.push(hook.unmount)
    return { ...hook, operations, queryClient }
}
const shortcut = (key: string) =>
    fireEvent.keyDown(document.body, { key, ctrlKey: true, metaKey: true })

it.each(["Delete", "m"])(
    "invalidates the actual rc list key after shortcut %s",
    async (key) => {
        const { result, queryClient } = setup()
        const listKey = ["/timetables", { year: 2026, semester: 1 }, "ko", "/api/v2"]
        queryClient.setQueryData(listKey, { timetables: [] })
        vi.stubGlobal(
            "confirm",
            vi.fn(() => true),
        )
        vi.mocked(axiosClient.request).mockResolvedValue({ data: { id: 2 } })
        shortcut(key)
        await waitFor(() =>
            expect(queryClient.getQueryState(listKey)?.isInvalidated).toBe(true),
        )
        expect(axiosClient.request).toHaveBeenCalledWith(
            expect.objectContaining({
                method: key === "Delete" ? "DELETE" : "POST",
                url: "/api/v2/timetables",
                data:
                    key === "Delete"
                        ? { id: 1 }
                        : { year: 2026, semester: 1, lectureIds: [] },
            }),
        )
        expect(result.current).toBeDefined()
    },
)

it("selects both kinds with identical numeric IDs and deletes them in one call without deleting the timetable", async () => {
    const items = [lecture(7), custom(7)]
    const { operations } = setup(items)
    const confirm = vi.fn()
    vi.stubGlobal("confirm", confirm)
    shortcut("a")
    expect(useTimetableUIStore.getState().selectedItems).toEqual(items)
    fireEvent.keyDown(document.body, { key: "Delete" })
    await waitFor(() => expect(operations.removeItems).toHaveBeenCalledWith(items))
    expect(confirm).not.toHaveBeenCalled()
    expect(axiosClient.request).not.toHaveBeenCalled()
})

it("uses kind and id for modifier selection and includes custom blocks in shift ranges", () => {
    const items = [lecture(7, 600), custom(7, 720), custom(8, 780)]
    const { result } = setup(items)
    act(() => result.current.onItemSelect(items[0]!))
    act(() =>
        result.current.onItemSelect(items[2]!, { shiftKey: true } as React.MouseEvent),
    )
    expect(useTimetableUIStore.getState().selectedItems).toEqual(items)
    act(() =>
        result.current.onItemSelect(items[1]!, {
            ctrlKey: true,
            metaKey: true,
        } as React.MouseEvent),
    )
    expect(useTimetableUIStore.getState().selectedItems).toEqual([items[0], items[2]])
})

it("pastes mixed items and removes both kinds of conflicts with one atomic editor call", async () => {
    const existing = [custom(7, 600), lecture(9, 720)]
    const incoming = [lecture(1, 600), custom(10, 720)]
    const { operations } = setup(existing)
    vi.stubGlobal(
        "confirm",
        vi.fn(() => true),
    )
    useTimetableUIStore
        .getState()
        .setClipboard({ items: incoming, sourceKey: "2-2026-1" })
    shortcut("v")
    await waitFor(() =>
        expect(operations.addItems).toHaveBeenCalledWith(incoming, existing),
    )
    expect(operations.addItems).toHaveBeenCalledTimes(1)
    expect(operations.removeItems).not.toHaveBeenCalled()
})

it("leaves native time selectors in control of keys instead of deleting blocks or changing tabs", () => {
    const { operations } = setup()
    act(() => useTimetableUIStore.setState({ selectedItems: [custom(7)] }))
    const select = document.createElement("select")
    document.body.append(select)
    fireEvent.keyDown(select, { key: "Delete" })
    fireEvent.keyDown(select, { key: "1" })
    expect(operations.removeItems).not.toHaveBeenCalled()
    expect(useTimetableUIStore.getState().currentTimetableId).toBe(1)
    select.remove()
})

it.each([
    ["Enter", false],
    [" ", false],
    ["Enter", true],
    [" ", true],
] as const)(
    "preserves button activation for %j with enrolled=%s and keeps undo available",
    (key, enrolled) => {
        const item = lecture(7)
        const { operations } = setup(enrolled ? [item] : [])
        act(() =>
            useTimetableUIStore.setState({
                searchLectures: [item.data as Lecture],
                hoveredLectures: [item.data as Lecture],
            }),
        )
        const button = document.createElement("button")
        document.body.append(button)
        try {
            const activation = new KeyboardEvent("keydown", {
                key,
                bubbles: true,
                cancelable: true,
            })
            fireEvent(button, activation)
            expect(activation.defaultPrevented).toBe(false)
            expect(operations.addLectures).not.toHaveBeenCalled()
            expect(operations.removeLectures).not.toHaveBeenCalled()

            fireEvent.keyDown(button, { key: "z", ctrlKey: true, metaKey: true })
            expect(operations.undo).toHaveBeenCalledOnce()
        } finally {
            button.remove()
        }
    },
)

it("shares duplication with the copy button callback and clears the block editor on Escape inside an input", () => {
    const { operations } = setup()
    shortcut("d")
    expect(operations.duplicateTimetable).toHaveBeenCalledTimes(1)
    const input = document.createElement("input")
    document.body.append(input)
    act(() =>
        useTimetableUIStore.setState({
            selectedItems: [custom(7)],
            selectedCustomBlock: custom(7).data as never,
            isCustomBlockSectionOpen: true,
        }),
    )
    fireEvent.keyDown(input, { key: "Escape" })
    expect(useTimetableUIStore.getState().selectedItems).toEqual([])
    expect(useTimetableUIStore.getState().isCustomBlockSectionOpen).toBe(false)
    expect(useTimetableUIStore.getState().selectedCustomBlock).toBeNull()
    input.remove()
})

it("copies and cuts custom selection while protecting actual enrolled timetable edits", () => {
    const { operations } = setup()
    act(() => useTimetableUIStore.setState({ selectedItems: [custom(7)] }))
    shortcut("c")
    expect(useTimetableUIStore.getState().clipboard?.items).toEqual([custom(7)])
    shortcut("x")
    expect(operations.removeItems).toHaveBeenCalledWith([custom(7)])
    operations.removeItems.mockClear()
    act(() => useTimetableUIStore.getState().setCurrentTimetableId(null))
    fireEvent.keyDown(document.body, { key: "Delete" })
    expect(operations.removeItems).not.toHaveBeenCalled()
})

it("does not delete a clipboard lecture already in the target when pasting a legacy overlapping block", async () => {
    const existing = lecture(1)
    const incoming = custom(10)
    const { operations } = setup([existing])
    vi.stubGlobal(
        "confirm",
        vi.fn(() => true),
    )
    useTimetableUIStore
        .getState()
        .setClipboard({ items: [existing, incoming], sourceKey: "2-2026-1" })
    shortcut("v")
    await waitFor(() => expect(operations.addItems).toHaveBeenCalledWith([incoming], []))
    expect(operations.removeItems).not.toHaveBeenCalled()
})
