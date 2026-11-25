import { useCallback, useEffect, useRef, useState } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { isAxiosError } from "axios"
import { useTranslation } from "react-i18next"
import { match } from "ts-pattern"

import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableChange, TimetableItem } from "@/common/schemas/timetableItem"
import { getCustomBlockTimes, timetableItemKey } from "@/common/utils/timetableItems"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { axiosClient } from "@/libs/axios"
import { queryKeys } from "@/libs/query/queryKeys"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

export type TimetableEdit = { before?: TimetableItem; after?: TimetableItem }
export type TimetableEditOptions = { flash?: boolean }
type Transaction = TimetableEdit[]
type Stack = { undo: Transaction[]; redo: Transaction[] }
const emptyStack = (): Stack => ({ undo: [], redo: [] })
const customInput = (block: CustomBlock) => {
    const { id: _id, ...data } = block
    const times = getCustomBlockTimes(block)
    return { ...data, ...times[0], times }
}

export const timetableHistoryKey = (id: number | null, year: number, semester: number) =>
    `${id ?? "my"}-${year}-${semester}`

function changeForEdit({ before, after }: TimetableEdit): TimetableChange {
    if (!after) {
        if (before) return { op: "remove", kind: before.kind, id: before.data.id }
        throw new Error("Empty timetable edit")
    }
    return match(after)
        .returnType<TimetableChange>()
        .with({ kind: TimetableItemKind.LECTURE }, ({ data }) => ({
            op: "add",
            kind: TimetableItemKind.LECTURE,
            lectureId: data.id,
        }))
        .with({ kind: TimetableItemKind.CUSTOM }, ({ data }) =>
            before
                ? {
                      op: "update",
                      kind: TimetableItemKind.CUSTOM,
                      id: before.data.id,
                      data: customInput(data),
                  }
                : { op: "add", kind: TimetableItemKind.CUSTOM, data: customInput(data) },
        )
        .exhaustive()
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
    const { mutation: addMutation } = useAPI("POST", path, {
        mutationKey: [path, language, "POST"],
        retry: false,
    })
    const { mutation: removeMutation } = useAPI("DELETE", path, {
        mutationKey: [path, language, "DELETE"],
        retry: false,
    })
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
        const cached = queryClient.getQueriesData<{ timetableItems: TimetableItem[] }>({
            queryKey: [queryKeys.timetableDetail(currentTimetableId ?? 0)],
            predicate: (query) =>
                query.queryKey[2] === language && query.queryKey[3] === "/api/v2",
        })
        return (
            cached.find(([, data]) => data)?.[1]?.timetableItems ?? currentTimetableItems
        )
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
                const changes = edits.map(changeForEdit)
                let createdCustomIds: number[] | null = null
                let patchResponse: Awaited<
                    ReturnType<typeof mutation.mutateAsync>
                > | null = null
                if (changes.every((change) => change.op === "add")) {
                    const response = await addMutation.mutateAsync({
                        lectureIds: changes.flatMap((change) =>
                            change.kind === TimetableItemKind.LECTURE
                                ? [change.lectureId]
                                : [],
                        ),
                        customBlocks: changes.flatMap((change) =>
                            change.kind === TimetableItemKind.CUSTOM ? [change.data] : [],
                        ),
                    })
                    createdCustomIds = response.customBlocks.map(({ id }) => id)
                } else if (changes.every((change) => change.op === "remove")) {
                    await removeMutation.mutateAsync({
                        lectureIds: changes.flatMap((change) =>
                            change.kind === TimetableItemKind.LECTURE ? [change.id] : [],
                        ),
                        customBlockIds: changes.flatMap((change) =>
                            change.kind === TimetableItemKind.CUSTOM ? [change.id] : [],
                        ),
                    })
                } else patchResponse = await mutation.mutateAsync({ changes })
                mutationCompleted = true
                if (!sameUser()) return false
                if (patchResponse) finalItems = patchResponse.timetableItems
                else {
                    const { data } = await axiosClient.request<{
                        timetableItems: TimetableItem[]
                    }>({
                        method: "GET",
                        url: `/api/v2${detailPath}`,
                        headers: { "Accept-Language": language },
                    })
                    if (!sameUser()) return false
                    finalItems = data.timetableItems
                }
                let customIndex = 0
                applied = edits.map((edit, index) => {
                    if (edit.before || edit.after?.kind !== TimetableItemKind.CUSTOM)
                        return edit
                    const createdId =
                        createdCustomIds === null
                            ? patchResponse?.results.find(
                                  (result) =>
                                      result.index === index &&
                                      result.kind === TimetableItemKind.CUSTOM,
                              )?.id
                            : createdCustomIds[customIndex++]
                    if (createdId === undefined)
                        throw new Error("Missing created timetable item")
                    remappedIds.set(edit.after.data.id, createdId)
                    return {
                        after: {
                            kind: TimetableItemKind.CUSTOM,
                            data: { ...edit.after.data, id: createdId },
                        },
                    }
                })
                const detail = {
                    timetableItems: finalItems,
                    lectures: finalItems.flatMap((item) =>
                        item.kind === TimetableItemKind.LECTURE ? [item.data] : [],
                    ),
                }
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
                void queryClient.invalidateQueries({ queryKey: ["/timetables/home"] })
                void queryClient.invalidateQueries({ queryKey: ["/timetables/shared"] })
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
                void queryClient.invalidateQueries({ queryKey: ["/timetables/home"] })
                void queryClient.invalidateQueries({ queryKey: ["/timetables/shared"] })
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
