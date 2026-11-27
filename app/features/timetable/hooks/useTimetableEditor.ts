import { useCallback, useEffect, useRef, useState } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { isAxiosError } from "axios"
import { useTranslation } from "react-i18next"

import type { GETTimetableByIdResponse } from "@/api/timetables/$timetableId"
import type { PATCHTimetableItemsBody } from "@/api/timetables/$timetableId/items"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { queryKeys } from "@/libs/query/queryKeys"
import { useAPI } from "@/utils/api/useAPI"
import { timetableItemKey, toTimetableItems } from "@/utils/timetable/timetableItems"
import useUserStore from "@/utils/zustand/useUserStore"

export type TimetableEdit = { before?: TimetableItem; after?: TimetableItem }
export type TimetableEditOptions = { flash?: boolean }
type Transaction = TimetableEdit[]
type Stack = { undo: Transaction[]; redo: Transaction[] }
const emptyStack = (): Stack => ({ undo: [], redo: [] })
const customInput = (block: CustomBlock) => {
    const { id: _id, ...data } = block
    return data
}

export const timetableHistoryKey = (id: number | null, year: number, semester: number) =>
    `${id ?? "my"}-${year}-${semester}`

function buildPatch(edits: Transaction): PATCHTimetableItemsBody {
    const request: PATCHTimetableItemsBody = {
        adds: { lectureIds: [], customBlocks: [] },
        deletes: { lectureIds: [], customBlockIds: [] },
        updates: { customBlocks: [] },
    }
    for (const { before, after } of edits) {
        if (!after) {
            if (!before) throw new Error("Empty timetable edit")
            const { id } = before.data
            if (before.kind === TimetableItemKind.LECTURE)
                request.deletes.lectureIds.push(id)
            else request.deletes.customBlockIds.push(id)
        } else if (after.kind === TimetableItemKind.LECTURE) {
            request.adds.lectureIds.push(after.data.id)
        } else if (before) {
            request.updates.customBlocks.push({
                ...customInput(after.data),
                id: before.data.id,
            })
        } else {
            request.adds.customBlocks.push(customInput(after.data))
        }
    }
    return request
}

function sameCustomBlockContent(left: CustomBlock, right: CustomBlock) {
    if (left.block_name !== right.block_name || left.place !== right.place) return false
    const times = left.times
    const otherTimes = right.times
    return (
        times.length === otherTimes.length &&
        times.every(({ day, begin, end }) =>
            otherTimes.some(
                (time) => time.day === day && time.begin === begin && time.end === end,
            ),
        )
    )
}

interface UseTimetableEditorOptions {
    currentTimetableItems: TimetableItem[]
    nonLoginTimetable: TimetableItem[]
    setNonLoginTimetable: React.Dispatch<React.SetStateAction<TimetableItem[]>>
}

export function useTimetableEditor({
    currentTimetableItems,
    nonLoginTimetable,
    setNonLoginTimetable,
}: UseTimetableEditorOptions) {
    const { status, user } = useUserStore()
    const { t, i18n } = useTranslation()
    const queryClient = useQueryClient()
    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const year = useTimetableUIStore((s) => s.year)
    const semesterEnum = useTimetableUIStore((s) => s.semesterEnum)
    const key = timetableHistoryKey(currentTimetableId, year, semesterEnum)
    const language = i18n.resolvedLanguage
    const path = `/timetables/${currentTimetableId}/items` as const
    const { mutation } = useAPI("PATCH", path, {
        mutationKey: [path, language],
        retry: false,
    })
    const { query: semestersRequest } = useAPI("GET", "/semesters")
    const histories = useRef<Record<string, Stack>>({})
    const authGeneration = useRef(0)
    const pending = useRef(new Set<string>())
    const nextLocalId = useRef(-1)
    const localItems = useRef(nonLoginTimetable)
    localItems.current = nonLoginTimetable
    const [revision, setRevision] = useState(0)
    const refresh = () => setRevision((value) => value + 1)
    void revision

    useEffect(() => {
        authGeneration.current += 1
        histories.current = {}
        useTimetableUIStore.getState().setClipboard(null)
        refresh()
    }, [status, user?.id])

    const isCurrent = () => {
        const state = useTimetableUIStore.getState()
        return (
            i18n.resolvedLanguage === language &&
            useUserStore.getState().user?.id === user?.id &&
            key ===
                timetableHistoryKey(
                    state.currentTimetableId,
                    state.year,
                    state.semesterEnum,
                )
        )
    }

    // Read from the canonical cache too: another key event can precede React's next render.
    const currentItems = () => {
        if (status !== "success") return localItems.current
        const cached = queryClient.getQueriesData<GETTimetableByIdResponse>({
            queryKey: [queryKeys.timetableDetail(currentTimetableId ?? 0)],
            predicate: (query) =>
                query.queryKey[2] === language && query.queryKey[3] === "/api/v2",
        })
        const detail = cached.find(([, data]) => data)?.[1]
        return detail ? toTimetableItems(detail) : currentTimetableItems
    }

    const execute = async (
        edits: Transaction,
        mode: "record" | "undo" | "redo" = "record",
        options: TimetableEditOptions = {},
    ) => {
        if (
            !edits.length ||
            !isCurrent() ||
            status === "loading" ||
            pending.current.has(key) ||
            (status === "success" && currentTimetableId === null)
        )
            return false
        const generation = authGeneration.current
        const sameUser = () =>
            generation === authGeneration.current &&
            useUserStore.getState().user?.id === user?.id &&
            useUserStore.getState().status === status
        pending.current.add(key)
        refresh()
        const detailPath = queryKeys.timetableDetail(currentTimetableId ?? 0)
        let mutationCompleted = false
        try {
            let finalItems: TimetableItem[]
            let applied = edits
            const remappedIds = new Map<number, number>()
            if (status === "success") {
                void queryClient.cancelQueries({ queryKey: [detailPath] })
                const previousBlockIds = new Set(
                    currentItems().flatMap((item) =>
                        item.kind === TimetableItemKind.CUSTOM ? [item.data.id] : [],
                    ),
                )
                const detail = await mutation.mutateAsync(buildPatch(edits))
                mutationCompleted = true
                if (!sameUser()) return false
                finalItems = toTimetableItems(detail)
                const createdBlocks = detail.customBlocks.filter(
                    (block) => !previousBlockIds.has(block.id),
                )
                applied = edits.map((edit) => {
                    if (edit.before || edit.after?.kind !== TimetableItemKind.CUSTOM)
                        return edit
                    const added = edit.after.data
                    const [created, duplicate] = createdBlocks.filter((block) =>
                        sameCustomBlockContent(block, added),
                    )
                    if (!created || duplicate)
                        throw new Error("Cannot identify created timetable item")
                    createdBlocks.splice(createdBlocks.indexOf(created), 1)
                    remappedIds.set(added.id, created.id)
                    return { after: { kind: TimetableItemKind.CUSTOM, data: created } }
                })
                queryClient.setQueriesData(
                    {
                        queryKey: [detailPath],
                        predicate: (query) =>
                            query.queryKey[2] === language &&
                            query.queryKey[3] === "/api/v2",
                    },
                    detail,
                )
                void queryClient.invalidateQueries({
                    queryKey: [detailPath],
                    predicate: (query) =>
                        query.queryKey[2] !== language && query.queryKey[3] === "/api/v2",
                })
                void queryClient.invalidateQueries({
                    queryKey: [queryKeys.homeTimetable],
                })
                void queryClient.invalidateQueries({
                    queryKey: [queryKeys.sharedTimetable],
                })
                void queryClient.invalidateQueries({
                    queryKey: [queryKeys.sharedTimetableSemesters],
                })
                void queryClient.invalidateQueries({ queryKey: [queryKeys.timetables] })
            } else {
                const removed = new Set(
                    edits.flatMap((edit) =>
                        edit.before ? [timetableItemKey(edit.before)] : [],
                    ),
                )
                finalItems = [
                    ...currentItems().filter(
                        (item) => !removed.has(timetableItemKey(item)),
                    ),
                    ...edits.flatMap((edit) => (edit.after ? [edit.after] : [])),
                ]
                localItems.current = finalItems
                setNonLoginTimetable(finalItems)
            }

            const remap = (item: TimetableItem): TimetableItem =>
                item.kind === TimetableItemKind.CUSTOM && remappedIds.has(item.data.id)
                    ? {
                          kind: TimetableItemKind.CUSTOM,
                          data: { ...item.data, id: remappedIds.get(item.data.id)! },
                      }
                    : item
            const remapTransaction = (transaction: Transaction): Transaction =>
                transaction.map((edit) => ({
                    before: edit.before ? remap(edit.before) : undefined,
                    after: edit.after ? remap(edit.after) : undefined,
                }))
            let stack = histories.current[key] ?? emptyStack()
            if (mode !== "record" && remappedIds.size > 0) {
                stack = {
                    undo: stack.undo.map(remapTransaction),
                    redo: stack.redo.map(remapTransaction),
                }
                const ui = useTimetableUIStore.getState()
                if (ui.clipboard?.sourceKey === key) {
                    ui.setClipboard({
                        ...ui.clipboard,
                        items: ui.clipboard.items.map(remap),
                    })
                }
                if (isCurrent()) {
                    ui.setSelectedItems((items) => items.map(remap))
                    if (
                        ui.selectedCustomBlock &&
                        remappedIds.has(ui.selectedCustomBlock.id)
                    ) {
                        ui.setSelectedCustomBlock({
                            ...ui.selectedCustomBlock,
                            id: remappedIds.get(ui.selectedCustomBlock.id)!,
                        })
                    }
                }
            }
            if (mode === "record") {
                histories.current[key] = {
                    undo: [...stack.undo, applied].slice(-50),
                    redo: [],
                }
            } else if (mode === "undo") {
                const original = stack.undo[stack.undo.length - 1]!
                histories.current[key] = {
                    undo: stack.undo.slice(0, -1),
                    redo: [...stack.redo, original].slice(-50),
                }
            } else {
                const original = stack.redo[stack.redo.length - 1]!
                histories.current[key] = {
                    undo: [...stack.undo, original].slice(-50),
                    redo: stack.redo.slice(0, -1),
                }
            }
            if (isCurrent()) {
                const ui = useTimetableUIStore.getState()
                const byKey = new Map(
                    finalItems.map((item) => [timetableItemKey(item), item]),
                )
                ui.setSelectedItems((items) =>
                    items.flatMap((item) => byKey.get(timetableItemKey(item)) ?? []),
                )
                if (mode !== "record" || options.flash) {
                    ui.triggerFlash(
                        applied.flatMap((edit) =>
                            edit.after ? [timetableItemKey(edit.after)] : [],
                        ),
                    )
                }
                if (
                    ui.selectedCustomBlock &&
                    !byKey.has(`custom:${ui.selectedCustomBlock.id}`)
                ) {
                    ui.setSelectedCustomBlock(null)
                    ui.setIsCustomBlockSectionOpen(false)
                }
            }
            return true
        } catch (error) {
            if (!sameUser()) return false
            const definiteFailure =
                !mutationCompleted &&
                isAxiosError(error) &&
                error.response &&
                error.response.status < 500
            if (!definiteFailure) {
                histories.current[key] = emptyStack()
                await queryClient.invalidateQueries({ queryKey: [detailPath] })
                if (sameUser() && isCurrent()) {
                    const ui = useTimetableUIStore.getState()
                    const byKey = new Map(
                        currentItems().map((item) => [timetableItemKey(item), item]),
                    )
                    ui.setSelectedItems((items) =>
                        items.flatMap((item) => byKey.get(timetableItemKey(item)) ?? []),
                    )
                    if (
                        ui.selectedCustomBlock &&
                        !byKey.has(`custom:${ui.selectedCustomBlock.id}`)
                    ) {
                        ui.setSelectedCustomBlock(null)
                        ui.setIsCustomBlockSectionOpen(false)
                    }
                }
                void queryClient.invalidateQueries({
                    queryKey: [queryKeys.homeTimetable],
                })
                void queryClient.invalidateQueries({
                    queryKey: [queryKeys.sharedTimetable],
                })
                void queryClient.invalidateQueries({
                    queryKey: [queryKeys.sharedTimetableSemesters],
                })
            }
            if (isCurrent())
                alert(
                    t("timetable.editFailed", {
                        defaultValue:
                            "시간표를 변경하지 못했습니다. 새로 불러온 시간표를 확인해 주세요.",
                    }),
                )
            return false
        } finally {
            pending.current.delete(key)
            refresh()
        }
    }

    const addItems = async (
        items: TimetableItem[],
        replaceItems: TimetableItem[] = [],
        options: TimetableEditOptions = {},
    ) => {
        const existing = currentItems()
        const removed = new Set(replaceItems.map(timetableItemKey))
        const existingKeys = new Set(
            existing
                .filter((item) => !removed.has(timetableItemKey(item)))
                .map(timetableItemKey),
        )
        const toAdd = items.filter(
            (item) =>
                item.kind === TimetableItemKind.CUSTOM ||
                !existingKeys.has(timetableItemKey(item)),
        )
        const unique = toAdd.filter(
            (item, index) =>
                item.kind === TimetableItemKind.CUSTOM ||
                toAdd.findIndex(
                    (other) => timetableItemKey(other) === timetableItemKey(item),
                ) === index,
        )
        if (!unique.length) return false
        return execute(
            [
                ...existing
                    .filter((item) => removed.has(timetableItemKey(item)))
                    .map((before) => ({ before })),
                ...unique.map((after) => ({ after })),
            ],
            "record",
            options,
        )
    }
    const removeItems = async (items: TimetableItem[]) => {
        const keys = new Set(items.map(timetableItemKey))
        return execute(
            currentItems()
                .filter((item) => keys.has(timetableItemKey(item)))
                .map((before) => ({ before })),
        )
    }
    const addLectures = (lectures: Lecture[]) =>
        addItems(lectures.map((data) => ({ kind: TimetableItemKind.LECTURE, data })))
    const removeLectures = (ids: number[]) =>
        removeItems(
            currentItems().filter(
                (item) =>
                    item.kind === TimetableItemKind.LECTURE && ids.includes(item.data.id),
            ),
        )
    const addCustomBlock = (data: Omit<CustomBlock, "id">) =>
        addItems([
            {
                kind: TimetableItemKind.CUSTOM,
                data: { ...data, id: nextLocalId.current-- },
            },
        ])
    const updateCustomBlock = async (id: number, data: Omit<CustomBlock, "id">) => {
        const before = currentItems().find(
            (item) => item.kind === TimetableItemKind.CUSTOM && item.data.id === id,
        )
        return before
            ? execute([
                  {
                      before,
                      after: { kind: TimetableItemKind.CUSTOM, data: { ...data, id } },
                  },
              ])
            : false
    }
    const undo = async () => {
        const transaction = histories.current[key]?.undo.at(-1)
        return transaction
            ? execute(
                  [...transaction]
                      .reverse()
                      .map(({ before, after }) => ({ before: after, after: before })),
                  "undo",
              )
            : false
    }
    const redo = async () => {
        const transaction = histories.current[key]?.redo.at(-1)
        return transaction ? execute(transaction, "redo") : false
    }

    const changeSemester = useCallback(
        (direction: "prev" | "next") => {
            const semesters = semestersRequest.data?.semesters
            const currentIndex = semesters?.findIndex(
                (item) => item.year === year && item.semester === semesterEnum,
            )
            const adjacentSemester =
                currentIndex === undefined || currentIndex === -1
                    ? undefined
                    : semesters?.[currentIndex + (direction === "prev" ? -1 : 1)]
            if (!adjacentSemester) return
            const state = useTimetableUIStore.getState()
            state.setYear(adjacentSemester.year)
            state.setSemesterEnum(adjacentSemester.semester)
            state.setCurrentTimetableId(null)
        },
        [semestersRequest.data, year, semesterEnum],
    )

    return {
        addLectures,
        removeLectures,
        addItems,
        removeItems,
        addCustomBlock,
        updateCustomBlock,
        changeSemester,
        undo,
        redo,
        canUndo: Boolean(histories.current[key]?.undo.length),
        canRedo: Boolean(histories.current[key]?.redo.length),
        isPending: pending.current.has(key),
    }
}
