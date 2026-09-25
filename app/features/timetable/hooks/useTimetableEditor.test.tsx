import type { ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, expect, it, vi } from "vitest"

import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableChange, TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { axiosClient } from "@/libs/axios"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import { useTimetableEditor } from "./useTimetableEditor"

const translation = vi.hoisted(() => ({ resolvedLanguage: "ko" }))

vi.mock("@/libs/axios", () => ({ axiosClient: { request: vi.fn() } }))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key, i18n: translation }),
}))

const lecture = (id: number): TimetableItem => ({
    kind: "lecture",
    data: { id, name: `강의 ${id}`, classes: [] } as unknown as Lecture,
})
const block: TimetableItem = {
    kind: "custom",
    data: {
        id: 10,
        block_name: "Study",
        place: "Original",
        day: 1,
        begin: 600,
        end: 660,
    },
}
const detail = (timetableItems: TimetableItem[]) => ({
    timetableItems,
    lectures: timetableItems.flatMap((item) =>
        item.kind === "lecture" ? [item.data] : [],
    ),
})
const clients: QueryClient[] = []
const unmounts: (() => void)[] = []

afterEach(() => {
    unmounts.splice(0).forEach((unmount) => unmount())
    clients.splice(0).forEach((client) => client.clear())
    vi.clearAllMocks()
    translation.resolvedLanguage = "ko"
    vi.unstubAllGlobals()
    useUserStore.setState(useUserStore.getInitialState())
    useTimetableUIStore.setState(useTimetableUIStore.getInitialState())
})

async function setup(initial: TimetableItem[] = [lecture(1), block]) {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
    })
    clients.push(queryClient)
    useUserStore.getState().setUser({ id: 1, name: "Tester" })
    useTimetableUIStore.setState({ currentTimetableId: 1, year: 2026, semesterEnum: 1 })
    vi.stubGlobal("alert", vi.fn())
    const server = new Map<number, TimetableItem[]>([
        [1, initial],
        [2, [lecture(2)]],
    ])
    let customId = 100
    let intercept: ((apply: () => unknown) => Promise<unknown>) | null = null
    const writes: { id: number; changes: TimetableChange[] }[] = []
    vi.mocked(axiosClient.request).mockImplementation(async ({ method, url, data }) => {
        if (url === "/api/v2/semesters") return { data: { semesters: [] } }
        const id = Number(url?.match(/timetables\/(\d+)/)?.[1])
        if (method === "GET") return { data: detail(server.get(id) ?? []) }
        const changes = (data as { changes: TimetableChange[] }).changes
        writes.push({ id, changes })
        const apply = () => {
            let items = [...(server.get(id) ?? [])]
            const results = changes.map((change, index) => {
                let itemId: number
                if (change.op === "add") {
                    const item: TimetableItem =
                        change.kind === "lecture"
                            ? lecture(change.lectureId)
                            : { kind: "custom", data: { ...change.data, id: ++customId } }
                    items.push(item)
                    itemId = item.data.id
                } else {
                    itemId = change.id
                    if (change.op === "remove")
                        items = items.filter(
                            (item) =>
                                !(
                                    item.kind === change.kind &&
                                    item.data.id === change.id
                                ),
                        )
                    else
                        items = items.map((item) =>
                            item.kind === "custom" && item.data.id === change.id
                                ? {
                                      kind: "custom",
                                      data: { ...item.data, ...change.data },
                                  }
                                : item,
                        )
                }
                return { index, kind: change.kind, id: itemId }
            })
            server.set(id, items)
            return { data: { timetableItems: items, results } }
        }
        return (intercept ? await intercept(apply) : apply()) as never
    })
    const hook = renderHook(
        () => {
            const id = useTimetableUIStore((state) => state.currentTimetableId)
            const { query } = useAPI("GET", `/timetables/${id}`)
            const editor = useTimetableEditor({
                currentTimetableItems: query.data?.timetableItems ?? [],
                nonLoginTimetable: [],
                setNonLoginTimetable: vi.fn(),
            })
            return { query, editor }
        },
        {
            wrapper: ({ children }: { children: ReactNode }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        },
    )
    unmounts.push(hook.unmount)
    await waitFor(() => expect(hook.result.current.query.data).toEqual(detail(initial)))
    return {
        ...hook,
        queryClient,
        server,
        writes,
        intercept: (handler: typeof intercept) => {
            intercept = handler
        },
    }
}

it("commits a mixed batch and history only after success, blocks concurrent edits, and preserves other locales", async () => {
    const { result, queryClient, writes, intercept } = await setup()
    const englishKey = ["/timetables/1", null, "en", "/api/v2"]
    const english = detail([
        {
            ...lecture(1),
            data: { ...lecture(1).data, name: "English lecture" },
        } as TimetableItem,
    ])
    queryClient.setQueryData(englishKey, english)
    const otherKey = ["/timetables/2", null, "ko", "/api/v2"]
    queryClient.setQueryData(otherKey, detail([lecture(2)]))
    let finish!: () => void
    intercept(
        (apply) =>
            new Promise((resolve) => {
                finish = () => resolve(apply())
            }),
    )
    let pending!: Promise<boolean>
    act(() => {
        pending = result.current.editor.removeItems([lecture(1), block])
    })
    await waitFor(() => expect(writes).toHaveLength(1))
    expect(result.current.editor.canUndo).toBe(false)
    expect(result.current.query.data).toEqual(detail([lecture(1), block]))
    await act(async () => {
        expect(
            await result.current.editor.addLectures([
                (lecture(3) as { kind: "lecture"; data: Lecture }).data,
            ]),
        ).toBe(false)
    })
    expect(writes).toHaveLength(1)
    await act(async () => {
        finish()
        expect(await pending).toBe(true)
    })
    await waitFor(() => expect(result.current.query.data).toEqual(detail([])))
    expect(result.current.editor.canUndo).toBe(true)
    expect(queryClient.getQueryData(englishKey)).toEqual(english)
    expect(queryClient.getQueryState(englishKey)?.isInvalidated).toBe(true)
    expect(queryClient.getQueryData(otherKey)).toEqual(detail([lecture(2)]))
})

it("remaps recreated custom IDs through older history and the source clipboard", async () => {
    const { result, writes } = await setup([block])
    useTimetableUIStore.getState().setClipboard({ sourceKey: "1-2026-1", items: [block] })
    await act(async () => {
        await result.current.editor.updateCustomBlock(10, {
            ...block.data,
            place: "Edited",
        } as never)
    })
    await act(async () => {
        await result.current.editor.removeItems([block])
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(useTimetableUIStore.getState().clipboard?.items[0]?.data.id).toBe(101)
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(writes.at(-1)?.changes).toEqual([
        {
            op: "update",
            kind: "custom",
            id: 101,
            data: {
                block_name: "Study",
                place: "Original",
                day: 1,
                begin: 600,
                end: 660,
                times: [{ day: 1, begin: 600, end: 660 }],
            },
        },
    ])
    await act(async () => {
        await result.current.editor.redo()
    })
    await act(async () => {
        await result.current.editor.redo()
    })
    expect(writes.at(-1)?.changes).toEqual([{ op: "remove", kind: "custom", id: 101 }])
    await act(async () => {
        await result.current.editor.undo()
    })
    expect(useTimetableUIStore.getState().clipboard?.items[0]?.data.id).toBe(102)
    expect(result.current.query.data?.timetableItems).toEqual([
        {
            kind: "custom",
            data: {
                ...block.data,
                id: 102,
                place: "Edited",
                times: [{ day: 1, begin: 600, end: 660 }],
            },
        },
    ])
})

it("keeps every time slot under one ID through updates, deletion, undo and clipboard remapping", async () => {
    const { result, writes } = await setup([block])
    const times = [
        { day: 1, begin: 600, end: 660 },
        { day: 1, begin: 780, end: 840 },
        { day: 5, begin: 1380, end: 1440 },
    ]
    await act(async () => {
        expect(
            await result.current.editor.updateCustomBlock(10, {
                block_name: "Study",
                place: "Original",
                ...times[0]!,
                times,
            }),
        ).toBe(true)
    })
    expect(writes.at(-1)?.changes).toEqual([
        expect.objectContaining({
            op: "update",
            id: 10,
            data: expect.objectContaining({ times }),
        }),
    ])
    const multiTimeBlock = result.current.query.data!.timetableItems[0]!
    expect(result.current.query.data!.timetableItems).toHaveLength(1)
    useTimetableUIStore
        .getState()
        .setClipboard({ sourceKey: "1-2026-1", items: [multiTimeBlock] })
    await act(async () => {
        await result.current.editor.removeItems([multiTimeBlock])
    })
    expect(writes.at(-1)?.changes).toEqual([{ op: "remove", kind: "custom", id: 10 }])
    await act(async () => {
        await result.current.editor.undo()
    })
    expect(result.current.query.data!.timetableItems).toEqual([
        { kind: "custom", data: { ...multiTimeBlock.data, id: 101 } },
    ])
    expect(useTimetableUIStore.getState().clipboard?.items).toEqual([
        { kind: "custom", data: { ...multiTimeBlock.data, id: 101 } },
    ])
    await act(async () => {
        await result.current.editor.undo()
    })
    expect(writes.at(-1)?.changes).toEqual([
        expect.objectContaining({
            id: 101,
            data: expect.objectContaining({ times: [times[0]] }),
        }),
    ])
    await act(async () => {
        await result.current.editor.redo()
    })
    expect(result.current.query.data!.timetableItems).toEqual([
        { kind: "custom", data: { ...multiTimeBlock.data, id: 101 } },
    ])
})

it("retains history and canonical state when a definite failure rejects undo", async () => {
    const { result, intercept } = await setup([block])
    await act(async () => {
        await result.current.editor.removeItems([block])
    })
    intercept(async () => {
        throw Object.assign(new Error("Conflict"), {
            isAxiosError: true,
            response: { status: 409 },
        })
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(false)
    })
    expect(result.current.editor.canUndo).toBe(true)
    expect(result.current.editor.canRedo).toBe(false)
    expect(result.current.query.data).toEqual(detail([]))
})

it("refetches a lost successful response without retrying and discards unsafe history", async () => {
    const { result, intercept, writes } = await setup([block])
    await act(async () => {
        await result.current.editor.updateCustomBlock(10, {
            ...block.data,
            place: "Edited",
        } as never)
    })
    act(() =>
        useTimetableUIStore.setState({
            selectedItems: [block],
            selectedCustomBlock: block.data as never,
            isCustomBlockSectionOpen: true,
        }),
    )
    intercept(async (apply) => {
        apply()
        throw new Error("Network Error")
    })
    await act(async () => {
        expect(await result.current.editor.removeItems([block])).toBe(false)
    })
    await waitFor(() => expect(result.current.query.data).toEqual(detail([])))
    expect(writes).toHaveLength(2)
    expect(useTimetableUIStore.getState().selectedItems).toEqual([])
    expect(useTimetableUIStore.getState().isCustomBlockSectionOpen).toBe(false)
    expect(result.current.editor.canUndo).toBe(false)
    expect(result.current.editor.canRedo).toBe(false)
})

it("keeps a pending mutation and its history attached to the originating tab", async () => {
    const { result, writes, intercept, queryClient } = await setup([block])
    let finish!: () => void
    intercept(
        (apply) =>
            new Promise((resolve) => {
                finish = () => resolve(apply())
            }),
    )
    let pending!: Promise<boolean>
    act(() => {
        pending = result.current.editor.removeItems([block])
    })
    await waitFor(() => expect(writes).toHaveLength(1))
    act(() => {
        useTimetableUIStore.getState().setCurrentTimetableId(2)
    })
    await waitFor(() => expect(result.current.query.data).toEqual(detail([lecture(2)])))
    useTimetableUIStore.getState().setSelectedItems([lecture(2)])
    await act(async () => {
        finish()
        await pending
    })
    expect(writes[0]?.id).toBe(1)
    expect(result.current.query.data).toEqual(detail([lecture(2)]))
    expect(useTimetableUIStore.getState().selectedItems).toEqual([lecture(2)])
    expect(result.current.editor.canUndo).toBe(false)
    expect(queryClient.getQueryData(["/timetables/1", null, "ko", "/api/v2"])).toEqual(
        detail([]),
    )
    act(() => {
        useTimetableUIStore.getState().setCurrentTimetableId(1)
    })
    await waitFor(() => expect(result.current.editor.canUndo).toBe(true))
})

it("does not overwrite current-language selection with a response from an earlier language", async () => {
    const { result, rerender, intercept, queryClient } = await setup([lecture(1), block])
    let finish!: () => void
    intercept(
        (apply) =>
            new Promise((resolve) => {
                finish = () => resolve(apply())
            }),
    )
    let pending!: Promise<boolean>
    act(() => {
        pending = result.current.editor.removeItems([block])
    })
    await waitFor(() => expect(finish).toBeDefined())
    const english: TimetableItem = {
        kind: "lecture",
        data: {
            ...(lecture(1) as { kind: "lecture"; data: Lecture }).data,
            name: "English lecture",
        },
    }
    queryClient.setQueryData(["/timetables/1", null, "en", "/api/v2"], detail([english]))
    act(() => {
        translation.resolvedLanguage = "en"
        useTimetableUIStore.getState().setSelectedItems([english])
        rerender()
    })
    await act(async () => {
        finish()
        await pending
    })
    expect(useTimetableUIStore.getState().selectedItems).toEqual([english])
})

it("discards a completed request after the signed-in account changes", async () => {
    const { result, intercept, queryClient } = await setup([block])
    let finish!: () => void
    intercept(
        (apply) =>
            new Promise((resolve) => {
                finish = () => resolve(apply())
            }),
    )
    let pending!: Promise<boolean>
    act(() => {
        pending = result.current.editor.removeItems([block])
    })
    await waitFor(() => expect(finish).toBeDefined())
    act(() => {
        useUserStore.getState().setUser({ id: 2, name: "Other" })
    })
    queryClient.setQueryData(
        ["/timetables/1", null, "ko", "/api/v2"],
        detail([lecture(2)]),
    )
    await act(async () => {
        finish()
        expect(await pending).toBe(false)
    })
    expect(queryClient.getQueryData(["/timetables/1", null, "ko", "/api/v2"])).toEqual(
        detail([lecture(2)]),
    )
    expect(result.current.editor.canUndo).toBe(false)
})
