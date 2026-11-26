import type { ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, expect, it, vi } from "vitest"

import {
    DELETERequest,
    PATCHRequest,
    POSTRequest,
} from "@/api/timetables/$timetableId/items"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableChange, TimetableItem } from "@/common/schemas/timetableItem"
import { toTimetableItems } from "@/common/utils/timetableItems"
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
    lectures: timetableItems.flatMap((item) =>
        item.kind === "lecture" ? [item.data] : [],
    ),
    customBlocks: timetableItems.flatMap((item) =>
        item.kind === "custom" ? [item.data] : [],
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
        defaultOptions: {
            queries: { retry: false },
            mutations: { retry: 2, retryDelay: 0 },
        },
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
    let detailReadError: Error | null = null
    let intercept: ((apply: () => unknown) => Promise<unknown>) | null = null
    const writes: {
        id: number
        method: string
        data: unknown
        changes: TimetableChange[]
    }[] = []
    vi.mocked(axiosClient.request).mockImplementation(async ({ method, url, data }) => {
        if (url === "/api/v2/semesters") return { data: { semesters: [] } }
        const id = Number(url?.match(/timetables\/(\d+)/)?.[1])
        if (method === "GET") {
            if (detailReadError) throw detailReadError
            return { data: detail(server.get(id) ?? []) }
        }
        let changes: TimetableChange[]
        if (method === "POST") {
            const { lectureIds = [], customBlocks = [] } = POSTRequest.parse(data)
            changes = [
                ...lectureIds.map((lectureId) => ({
                    op: "add" as const,
                    kind: "lecture" as const,
                    lectureId,
                })),
                ...customBlocks.map((data) => ({
                    op: "add" as const,
                    kind: "custom" as const,
                    data,
                })),
            ]
        } else if (method === "DELETE") {
            const { lectureIds = [], customBlockIds = [] } = DELETERequest.parse(data)
            changes = [
                ...lectureIds.map((id) => ({
                    op: "remove" as const,
                    kind: "lecture" as const,
                    id,
                })),
                ...customBlockIds.map((id) => ({
                    op: "remove" as const,
                    kind: "custom" as const,
                    id,
                })),
            ]
        } else changes = PATCHRequest.parse(data).changes
        writes.push({ id, method: method!, data, changes })
        const apply = () => {
            let items = [...(server.get(id) ?? [])]
            const addedItems: TimetableItem[] = []
            const results = changes.map((change, index) => {
                let itemId: number
                if (change.op === "add") {
                    const item: TimetableItem =
                        change.kind === "lecture"
                            ? lecture(change.lectureId)
                            : { kind: "custom", data: { ...change.data, id: ++customId } }
                    items.push(item)
                    addedItems.push(item)
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
            return {
                data:
                    method === "PATCH"
                        ? { timetableItems: items, results }
                        : method === "POST"
                          ? {
                                lectures: addedItems.flatMap((item) =>
                                    item.kind === "lecture" ? [item.data] : [],
                                ),
                                customBlocks: addedItems.flatMap((item) =>
                                    item.kind === "custom" ? [item.data] : [],
                                ),
                            }
                          : {
                                lectureIds: results
                                    .filter(({ kind }) => kind === "lecture")
                                    .map(({ id }) => id),
                                customBlockIds: results
                                    .filter(({ kind }) => kind === "custom")
                                    .map(({ id }) => id),
                            },
            }
        }
        return (intercept ? await intercept(apply) : apply()) as never
    })
    const hook = renderHook(
        () => {
            const id = useTimetableUIStore((state) => state.currentTimetableId)
            const { query } = useAPI("GET", `/timetables/${id}`)
            const editor = useTimetableEditor({
                currentTimetableItems: toTimetableItems(query.data),
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
        failDetailReads: (error: Error | null) => {
            detailReadError = error
        },
        intercept: (handler: typeof intercept) => {
            intercept = handler
        },
    }
}

it.each([
    ["POST", POSTRequest],
    ["DELETE", DELETERequest],
] as const)("requires at least one item across the %s groups", (_method, schema) => {
    expect(schema.safeParse({}).success).toBe(false)
    expect(
        schema.safeParse({ lectureIds: [], customBlocks: [], customBlockIds: [] })
            .success,
    ).toBe(false)
    expect(schema.safeParse({ lectureIds: [1] }).success).toBe(true)
    expect(schema.safeParse({ lectureIds: [0] }).success).toBe(false)
})

it("accepts custom-only requests without a lectureIds field", () => {
    expect(POSTRequest.safeParse({ customBlocks: [block.data] }).success).toBe(true)
    expect(DELETERequest.safeParse({ customBlockIds: [10] }).success).toBe(true)
})

it("uses separate POST and DELETE fields and remaps custom IDs through undo and redo", async () => {
    const { result, writes } = await setup([lecture(1)])
    await act(async () => {
        expect(await result.current.editor.addItems([block, lecture(2)])).toBe(true)
    })
    const customData = {
        block_name: "Study",
        place: "Original",
        day: 1,
        begin: 600,
        end: 660,
        times: [{ day: 1, begin: 600, end: 660 }],
    }
    expect(writes[0]?.method).toBe("POST")
    expect(writes[0]?.data).toEqual({
        lectureIds: [2],
        customBlocks: [customData],
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(writes[1]?.method).toBe("DELETE")
    expect(writes[1]?.data).toEqual({
        lectureIds: [2],
        customBlockIds: [101],
    })
    expect(result.current.query.data).toEqual(detail([lecture(1)]))
    await act(async () => {
        expect(await result.current.editor.redo()).toBe(true)
    })
    expect(writes.map(({ method }) => method)).toEqual(["POST", "DELETE", "POST"])
    expect(result.current.query.data).toEqual(
        detail([
            lecture(1),
            lecture(2),
            { kind: "custom", data: { ...customData, id: 102 } },
        ]),
    )
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(writes[3]?.data).toEqual({
        lectureIds: [2],
        customBlockIds: [102],
    })
})

it("maps interleaved custom additions using the returned customBlocks order", async () => {
    const { result, writes } = await setup([])
    const secondBlock: TimetableItem = {
        kind: "custom",
        data: { ...block.data, id: 11, block_name: "Second" },
    }
    await act(async () => {
        expect(
            await result.current.editor.addItems([block, lecture(2), secondBlock]),
        ).toBe(true)
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(writes[1]?.data).toEqual({ lectureIds: [2], customBlockIds: [102, 101] })
    expect(result.current.query.data).toEqual(detail([]))
})

it("reloads the canonical detail after POST so concurrent edits remain visible", async () => {
    const { result, server, intercept } = await setup([lecture(1)])
    intercept(async (apply) => {
        const response = apply()
        server.set(1, [...server.get(1)!, lecture(99)])
        return response
    })
    await act(async () => {
        expect(await result.current.editor.addItems([lecture(2)])).toBe(true)
    })
    expect(result.current.query.data).toEqual(
        detail([lecture(1), lecture(2), lecture(99)]),
    )
})

it("clears unsafe history when detail reload fails after a successful write", async () => {
    const { result, writes, server, failDetailReads } = await setup([block])
    await act(async () => {
        expect(
            await result.current.editor.updateCustomBlock(10, {
                ...block.data,
                place: "Edited",
            } as never),
        ).toBe(true)
    })
    expect(result.current.editor.canUndo).toBe(true)
    failDetailReads(
        Object.assign(new Error("Forbidden"), {
            isAxiosError: true,
            response: { status: 403 },
        }),
    )
    await act(async () => {
        expect(await result.current.editor.addItems([lecture(2)])).toBe(false)
    })
    expect(writes.map(({ method }) => method)).toEqual(["PATCH", "POST"])
    expect(server.get(1)).toContainEqual(lecture(2))
    expect(result.current.editor.canUndo).toBe(false)
    expect(result.current.editor.canRedo).toBe(false)
    failDetailReads(null)
    await act(async () => {
        await result.current.query.refetch()
    })
    await waitFor(() => expect(result.current.query.data).toEqual(detail(server.get(1)!)))
})

it("keeps replacement and its undo/redo in one atomic PATCH each", async () => {
    const { result, writes } = await setup()
    await act(async () => {
        expect(
            await result.current.editor.addItems([lecture(2)], [lecture(1), block]),
        ).toBe(true)
    })
    expect(writes[0]?.data).toEqual({
        changes: [
            { op: "remove", kind: "lecture", id: 1 },
            { op: "remove", kind: "custom", id: 10 },
            { op: "add", kind: "lecture", lectureId: 2 },
        ],
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(result.current.query.data).toEqual(
        detail([
            {
                kind: "custom",
                data: {
                    ...block.data,
                    id: 101,
                    times: [{ day: 1, begin: 600, end: 660 }],
                },
            },
            lecture(1),
        ]),
    )
    await act(async () => {
        expect(await result.current.editor.redo()).toBe(true)
    })
    expect(writes.map(({ method }) => method)).toEqual(["PATCH", "PATCH", "PATCH"])
    expect(writes[2]?.changes).toContainEqual({ op: "remove", kind: "custom", id: 101 })
    expect(result.current.query.data).toEqual(detail([lecture(2)]))
})

it.each(["POST", "DELETE", "PATCH"])(
    "does not retry %s after a lost response and invalidates my shared timetable",
    async (method) => {
        const { result, writes, intercept, queryClient, server } = await setup([block])
        const sharedKey = [
            "/timetables/shared",
            { year: 2026, semester: 1 },
            "ko",
            "/api/v2",
        ]
        queryClient.setQueryData(sharedKey, detail([block]))
        intercept(async (apply) => {
            apply()
            throw new Error("Network Error")
        })
        await act(async () => {
            const succeeded =
                method === "POST"
                    ? await result.current.editor.addItems([lecture(2)])
                    : method === "DELETE"
                      ? await result.current.editor.removeItems([block])
                      : await result.current.editor.updateCustomBlock(10, {
                            ...block.data,
                            place: "Edited",
                        } as never)
            expect(succeeded).toBe(false)
        })
        expect(writes).toHaveLength(1)
        expect(writes[0]?.method).toBe(method)
        expect(result.current.query.data).toEqual(detail(server.get(1)!))
        expect(queryClient.getQueryState(sharedKey)?.isInvalidated).toBe(true)
        expect(result.current.editor.canUndo).toBe(false)
        expect(result.current.editor.canRedo).toBe(false)
    },
)

it("flashes only explicitly animated edits and history replay", async () => {
    const { result } = await setup([lecture(1)])

    await act(async () => {
        expect(
            await result.current.editor.addLectures([
                (lecture(2) as { kind: "lecture"; data: Lecture }).data,
            ]),
        ).toBe(true)
    })
    expect(useTimetableUIStore.getState().flashItemKeys).toBeNull()

    await act(async () => {
        expect(await result.current.editor.removeItems([lecture(1)])).toBe(true)
    })
    expect(useTimetableUIStore.getState().flashItemKeys).toBeNull()

    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(useTimetableUIStore.getState().flashItemKeys).toEqual(["lecture:1"])

    useTimetableUIStore.setState({ flashItemKeys: null })
    await act(async () => {
        expect(
            await result.current.editor.addItems([lecture(3)], [], { flash: true }),
        ).toBe(true)
    })
    expect(useTimetableUIStore.getState().flashItemKeys).toEqual(["lecture:3"])
})

it("commits a mixed-kind deletion and history only after success, blocks concurrent edits, and preserves other locales", async () => {
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
    const sharedKey = ["/timetables/shared", { year: 2026, semester: 1 }, "ko", "/api/v2"]
    queryClient.setQueryData(sharedKey, detail([lecture(1), block]))
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
    expect(queryClient.getQueryState(sharedKey)?.isInvalidated).toBe(true)
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
    expect(result.current.query.data).toEqual(
        detail([
            {
                kind: "custom",
                data: {
                    ...block.data,
                    id: 102,
                    place: "Edited",
                    times: [{ day: 1, begin: 600, end: 660 }],
                },
            },
        ]),
    )
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
    const multiTimeBlock: TimetableItem = {
        kind: "custom",
        data: result.current.query.data!.customBlocks[0]!,
    }
    expect(result.current.query.data!.customBlocks).toHaveLength(1)
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
    expect(result.current.query.data).toEqual(
        detail([{ kind: "custom", data: { ...multiTimeBlock.data, id: 101 } }]),
    )
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
    expect(result.current.query.data).toEqual(
        detail([{ kind: "custom", data: { ...multiTimeBlock.data, id: 101 } }]),
    )
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
    const lastDetailRead = vi
        .mocked(axiosClient.request)
        .mock.calls.map(([request]) => request)
        .filter(({ method, url }) => method === "GET" && /\/timetables\/\d+$/.test(url!))
        .at(-1)
    expect(lastDetailRead).toMatchObject({
        url: "/api/v2/timetables/1",
        headers: { "Accept-Language": "ko" },
    })
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

it("navigates seasonal semesters in API order and stops at the boundaries", async () => {
    const { result, queryClient, rerender } = await setup()
    await act(async () => {
        queryClient.setQueriesData(
            { queryKey: ["/semesters"] },
            {
                semesters: [1, 2, 3, 4].map((semester) => ({ year: 2026, semester })),
            },
        )
    })
    rerender()
    act(() => result.current.editor.changeSemester("prev"))
    expect(useTimetableUIStore.getState().semesterEnum).toBe(1)
    act(() => result.current.editor.changeSemester("next"))
    expect(useTimetableUIStore.getState()).toMatchObject({
        year: 2026,
        semesterEnum: 2,
        currentTimetableId: null,
    })
    act(() => result.current.editor.changeSemester("next"))
    expect(useTimetableUIStore.getState().semesterEnum).toBe(3)
    act(() => result.current.editor.changeSemester("next"))
    expect(useTimetableUIStore.getState().semesterEnum).toBe(4)
    act(() => result.current.editor.changeSemester("next"))
    expect(useTimetableUIStore.getState().semesterEnum).toBe(4)
})
