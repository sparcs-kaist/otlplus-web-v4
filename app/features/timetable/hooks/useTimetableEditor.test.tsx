import type { ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, expect, it, vi } from "vitest"

import {
    PATCHRequest,
    type PATCHTimetableItemsBody,
} from "@/api/timetables/$timetableId/items"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { axiosClient } from "@/libs/axios"
import { useAPI } from "@/utils/api/useAPI"
import { toTimetableItems } from "@/utils/timetable/timetableItems"
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
        times: [{ day: 1, begin: 600, end: 660 }],
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
    let intercept: ((apply: () => unknown) => Promise<unknown>) | null = null
    const writes: {
        id: number
        method: string
        data: PATCHTimetableItemsBody
    }[] = []
    vi.mocked(axiosClient.request).mockImplementation(async ({ method, url, data }) => {
        if (url === "/api/v2/semesters") return { data: { semesters: [] } }
        const id = Number(url?.match(/timetables\/(\d+)/)?.[1])
        if (method === "GET") return { data: detail(server.get(id) ?? []) }
        expect(method).toBe("PATCH")
        const patch = PATCHRequest.parse(data)
        writes.push({ id, method: method!, data: patch })
        const apply = () => {
            const { adds, deletes, updates } = patch
            const items = (server.get(id) ?? []).flatMap((item): TimetableItem[] => {
                if (item.kind === "lecture")
                    return deletes.lectureIds.includes(item.data.id) ? [] : [item]
                if (deletes.customBlockIds.includes(item.data.id)) return []
                const update = updates.customBlocks.find(({ id }) => id === item.data.id)
                return [{ kind: "custom", data: { ...item.data, ...update } }]
            })
            items.push(
                ...adds.lectureIds.map((id) => lecture(id)),
                ...adds.customBlocks.map(
                    (data): TimetableItem => ({
                        kind: "custom",
                        data: { ...data, id: ++customId },
                    }),
                ),
            )
            server.set(id, items)
            return { data: detail(items) }
        }
        return (intercept ? await intercept(apply) : apply()) as never
    })
    const hook = renderHook(
        () => {
            const id = useTimetableUIStore((state) => state.currentTimetableId)
            const { query } = useAPI("GET", `/timetables/${id}/items`)
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
        intercept: (handler: typeof intercept) => {
            intercept = handler
        },
    }
}

it("requires all PATCH groups and at least one operation", () => {
    const empty = {
        adds: { lectureIds: [], customBlocks: [] },
        deletes: { lectureIds: [], customBlockIds: [] },
        updates: { customBlocks: [] },
    }
    expect(PATCHRequest.safeParse({}).success).toBe(false)
    expect(PATCHRequest.safeParse(empty).success).toBe(false)
    expect(PATCHRequest.safeParse({ ...empty, adds: { lectureIds: [1] } }).success).toBe(
        false,
    )
    for (const id of [0, 1, -1, 1.5, "1", { id: 1 }, null]) {
        for (const request of [
            { ...empty, adds: { ...empty.adds, lectureIds: [id] } },
            { ...empty, deletes: { ...empty.deletes, lectureIds: [id] } },
            { ...empty, deletes: { ...empty.deletes, customBlockIds: [id] } },
        ]) {
            expect(PATCHRequest.safeParse(request).success).toBe(id === 1)
        }
    }
})

it("uses grouped PATCH fields and remaps custom IDs through undo and redo", async () => {
    const { result, writes } = await setup([lecture(1)])
    await act(async () => {
        expect(await result.current.editor.addItems([block, lecture(2)])).toBe(true)
    })
    const customData = {
        block_name: "Study",
        place: "Original",
        times: [{ day: 1, begin: 600, end: 660 }],
    }
    expect(writes[0]?.method).toBe("PATCH")
    expect(writes[0]?.data).toEqual({
        adds: { lectureIds: [2], customBlocks: [customData] },
        deletes: { lectureIds: [], customBlockIds: [] },
        updates: { customBlocks: [] },
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(writes[1]?.method).toBe("PATCH")
    expect(writes[1]?.data.deletes).toEqual({
        lectureIds: [2],
        customBlockIds: [101],
    })
    expect(result.current.query.data).toEqual(detail([lecture(1)]))
    await act(async () => {
        expect(await result.current.editor.redo()).toBe(true)
    })
    expect(writes.map(({ method }) => method)).toEqual(["PATCH", "PATCH", "PATCH"])
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
    expect(writes[3]?.data.deletes).toEqual({
        lectureIds: [2],
        customBlockIds: [102],
    })
})

it("matches added blocks by content in a reordered full response", async () => {
    const { result, writes, server, intercept } = await setup([])
    const secondBlock: TimetableItem = {
        kind: "custom",
        data: { ...block.data, id: 11, times: [{ day: 2, begin: 600, end: 660 }] },
    }
    intercept(async (apply) => {
        apply()
        return { data: detail([...server.get(1)!].reverse()) }
    })
    await act(async () => {
        expect(
            await result.current.editor.addItems([block, lecture(2), secondBlock]),
        ).toBe(true)
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(writes[1]?.data.deletes).toEqual({
        lectureIds: [2],
        customBlockIds: [102, 101],
    })
    expect(result.current.query.data).toEqual(detail([]))
})

it("only remaps to newly returned IDs when an existing block has matching content", async () => {
    const { result, writes } = await setup([block])
    await act(async () => {
        expect(await result.current.editor.addItems([block])).toBe(true)
    })
    await act(async () => {
        expect(await result.current.editor.undo()).toBe(true)
    })
    expect(writes[1]?.data.deletes.customBlockIds).toEqual([101])
    expect(result.current.query.data).toEqual(detail([block]))
})

it("uses the full PATCH response without a follow-up detail read", async () => {
    const { result, server, intercept } = await setup([lecture(1)])
    intercept(async (apply) => {
        server.set(1, [...server.get(1)!, lecture(99)])
        return apply()
    })
    await act(async () => {
        expect(await result.current.editor.addItems([lecture(2)])).toBe(true)
    })
    expect(result.current.query.data).toEqual(
        detail([lecture(1), lecture(99), lecture(2)]),
    )
    const reads = vi
        .mocked(axiosClient.request)
        .mock.calls.filter(
            ([request]) =>
                request.method === "GET" && request.url === "/api/v2/timetables/1/items",
        )
    expect(reads).toHaveLength(1)
})

it("refetches and clears unsafe history if a successful response omits the created block", async () => {
    const { result, writes, server, intercept } = await setup([lecture(1)])
    await act(async () => {
        expect(await result.current.editor.addItems([lecture(2)])).toBe(true)
    })
    expect(result.current.editor.canUndo).toBe(true)
    intercept(async (apply) => {
        apply()
        return { data: detail([lecture(1), lecture(2)]) }
    })
    await act(async () => {
        expect(await result.current.editor.addItems([block])).toBe(false)
    })
    expect(writes.map(({ method }) => method)).toEqual(["PATCH", "PATCH"])
    expect(server.get(1)).toContainEqual(expect.objectContaining({ kind: "custom" }))
    expect(result.current.editor.canUndo).toBe(false)
    expect(result.current.editor.canRedo).toBe(false)
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
        adds: { lectureIds: [2], customBlocks: [] },
        deletes: { lectureIds: [1], customBlockIds: [10] },
        updates: { customBlocks: [] },
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
    expect(writes[2]?.data.deletes.customBlockIds).toEqual([101])
    expect(result.current.query.data).toEqual(detail([lecture(2)]))
})

it.each(["add", "delete", "update"])(
    "does not retry a lost PATCH response for %s and invalidates my shared timetable",
    async (operation) => {
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
                operation === "add"
                    ? await result.current.editor.addItems([lecture(2)])
                    : operation === "delete"
                      ? await result.current.editor.removeItems([block])
                      : await result.current.editor.updateCustomBlock(10, {
                            ...block.data,
                            place: "Edited",
                        } as never)
            expect(succeeded).toBe(false)
        })
        expect(writes).toHaveLength(1)
        expect(writes[0]?.method).toBe("PATCH")
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
    const englishKey = ["/timetables/1/items", null, "en", "/api/v2"]
    const english = detail([
        {
            ...lecture(1),
            data: { ...lecture(1).data, name: "English lecture" },
        } as TimetableItem,
    ])
    queryClient.setQueryData(englishKey, english)
    const otherKey = ["/timetables/2/items", null, "ko", "/api/v2"]
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
    expect(writes.at(-1)?.data.updates.customBlocks).toEqual([
        {
            id: 101,
            block_name: "Study",
            place: "Original",
            times: [{ day: 1, begin: 600, end: 660 }],
        },
    ])
    await act(async () => {
        await result.current.editor.redo()
    })
    await act(async () => {
        await result.current.editor.redo()
    })
    expect(writes.at(-1)?.data.deletes.customBlockIds).toEqual([101])
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
                times,
            }),
        ).toBe(true)
    })
    expect(writes.at(-1)?.data.updates.customBlocks).toEqual([
        expect.objectContaining({ id: 10, times }),
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
    expect(writes.at(-1)?.data.deletes.customBlockIds).toEqual([10])
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
    expect(writes.at(-1)?.data.updates.customBlocks).toEqual([
        expect.objectContaining({ id: 101, times: [times[0]] }),
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
        .filter(
            ({ method, url }) =>
                method === "GET" && /\/timetables\/\d+\/items$/.test(url!),
        )
        .at(-1)
    expect(lastDetailRead).toMatchObject({
        url: "/api/v2/timetables/2/items",
        headers: { "Accept-Language": "ko" },
    })
    expect(result.current.query.data).toEqual(detail([lecture(2)]))
    expect(useTimetableUIStore.getState().selectedItems).toEqual([lecture(2)])
    expect(result.current.editor.canUndo).toBe(false)
    expect(
        queryClient.getQueryData(["/timetables/1/items", null, "ko", "/api/v2"]),
    ).toEqual(detail([]))
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
    queryClient.setQueryData(
        ["/timetables/1/items", null, "en", "/api/v2"],
        detail([english]),
    )
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
        ["/timetables/1/items", null, "ko", "/api/v2"],
        detail([lecture(2)]),
    )
    await act(async () => {
        finish()
        expect(await pending).toBe(false)
    })
    expect(
        queryClient.getQueryData(["/timetables/1/items", null, "ko", "/api/v2"]),
    ).toEqual(detail([lecture(2)]))
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
