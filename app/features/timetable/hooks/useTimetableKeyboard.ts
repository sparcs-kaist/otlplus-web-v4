import { useCallback, useEffect, useRef } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import { OSEnum } from "@/common/enum/osEnum"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import {
    getTimetableItemTimes,
    timetableItemKey,
    timetableItemsOverlap,
} from "@/common/utils/timetableItems"
import { timetableHistoryKey } from "@/features/timetable/hooks/useTimetableEditor"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { queryKeys } from "@/libs/query/queryKeys"
import { useAPI } from "@/utils/api/useAPI"
import { getPlatform } from "@/utils/getPlatform"

interface UseTimetableKeyboardOptions {
    currentTimetableItems: TimetableItem[]
    undo: () => Promise<boolean>
    redo: () => Promise<boolean>
    addItems: (items: TimetableItem[], replaceItems?: TimetableItem[]) => Promise<boolean>
    removeItems: (items: TimetableItem[]) => Promise<boolean>
    addLectures: (lectures: Lecture[]) => Promise<boolean>
    removeLectures: (lectureIds: number[]) => Promise<boolean>
    timetableIds: (number | null)[]
    isLoggedIn: boolean
    changeSemester: (direction: "prev" | "next") => void
    duplicateTimetable: () => void
}

export function useTimetableKeyboard({
    currentTimetableItems,
    undo,
    redo,
    addItems,
    removeItems,
    addLectures,
    removeLectures,
    timetableIds,
    isLoggedIn,
    changeSemester,
    duplicateTimetable,
}: UseTimetableKeyboardOptions) {
    const { t } = useTranslation()
    const platform = getPlatform()
    const queryClient = useQueryClient()
    const selectedItems = useTimetableUIStore((s) => s.selectedItems)
    const setSelectedItems = useTimetableUIStore((s) => s.setSelectedItems)
    const year = useTimetableUIStore((s) => s.year)
    const semesterEnum = useTimetableUIStore((s) => s.semesterEnum)
    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const setCurrentTimetableId = useTimetableUIStore((s) => s.setCurrentTimetableId)
    const searchLectures = useTimetableUIStore((s) => s.searchLectures)
    const hover = useTimetableUIStore((s) => s.hoveredLectures)
    const setHover = useTimetableUIStore((s) => s.setHoveredLectures)
    const isShortcutModalOpen = useTimetableUIStore((s) => s.isShortcutModalOpen)
    const setIsShortcutModalOpen = useTimetableUIStore((s) => s.setIsShortcutModalOpen)
    const lastSelectedTime = useRef<number | null>(null)

    const onItemSelect = useCallback(
        (item: TimetableItem, event?: React.MouseEvent) => {
            const target = event?.target as HTMLElement | undefined
            const classTime = target
                ?.closest("[data-class-time]")
                ?.getAttribute("data-class-time")
            const firstTime = getTimetableItemTimes(item)[0]
            const clickedTime =
                classTime != null
                    ? Number(classTime)
                    : firstTime
                      ? firstTime.day * 1440 + firstTime.begin
                      : null
            const isMod =
                platform === OSEnum.IOS || platform === OSEnum.MAC
                    ? event?.metaKey
                    : event?.ctrlKey
            setSelectedItems((previous) => {
                const key = timetableItemKey(item)
                if (isMod) {
                    lastSelectedTime.current = clickedTime
                    return previous.some((other) => timetableItemKey(other) === key)
                        ? previous.filter((other) => timetableItemKey(other) !== key)
                        : [...previous, item]
                }
                if (event?.shiftKey) {
                    const min = Math.min(
                        lastSelectedTime.current ?? clickedTime ?? 0,
                        clickedTime ?? lastSelectedTime.current ?? 0,
                    )
                    const max = Math.max(
                        lastSelectedTime.current ?? clickedTime ?? 0,
                        clickedTime ?? lastSelectedTime.current ?? 0,
                    )
                    const range = currentTimetableItems.filter(
                        (other) =>
                            timetableItemKey(other) === key ||
                            (clickedTime !== null &&
                                lastSelectedTime.current !== null &&
                                getTimetableItemTimes(other).some((time) => {
                                    const start = time.day * 1440 + time.begin
                                    return start >= min && start <= max
                                })),
                    )
                    const combined = [...previous, ...range, item]
                    lastSelectedTime.current = clickedTime
                    return [
                        ...new Map(
                            combined.map((entry) => [timetableItemKey(entry), entry]),
                        ).values(),
                    ]
                }
                lastSelectedTime.current = clickedTime
                return previous.length === 1 && timetableItemKey(previous[0]!) === key
                    ? []
                    : [item]
            })
        },
        [currentTimetableItems, platform, setSelectedItems],
    )

    const onLectureSelect = (lecture: Lecture, event?: React.MouseEvent) =>
        onItemSelect({ kind: TimetableItemKind.LECTURE, data: lecture }, event)

    const { requestFunction: addTimetable } = useAPI("POST", "/timetables", {
        onSuccess: (data, variables) => {
            void queryClient.invalidateQueries({ queryKey: [queryKeys.timetables] })
            const state = useTimetableUIStore.getState()
            if (
                state.year === variables.year &&
                state.semesterEnum === variables.semester
            )
                setCurrentTimetableId(data.id)
        },
    })
    const { requestFunction: deleteTimetable } = useAPI("DELETE", "/timetables", {
        onSuccess: (_, variables) => {
            if (useTimetableUIStore.getState().currentTimetableId === variables.id)
                setCurrentTimetableId(null)
            void queryClient.invalidateQueries({ queryKey: [queryKeys.timetables] })
            void queryClient.invalidateQueries({ queryKey: ["/timetables/home"] })
        },
    })

    useEffect(() => {
        useTimetableUIStore.getState().setClipboard(null)
        lastSelectedTime.current = null
    }, [year, semesterEnum])

    const handleKeyDownRef = useRef<(event: KeyboardEvent) => Promise<void>>(
        async () => {},
    )
    handleKeyDownRef.current = async (event) => {
        if (event.isComposing) return
        const isMod =
            platform === OSEnum.IOS || platform === OSEnum.MAC
                ? event.metaKey
                : event.ctrlKey
        const key = event.key.toLowerCase()
        const ui = useTimetableUIStore.getState()
        if (!isMod && event.key === "Escape") {
            ui.setSelectedItems([])
            ui.setHoveredLectures([])
            ui.setSelectedCustomBlock(null)
            ui.setIsCustomBlockSectionOpen(false)
            ui.setTimeFilter(null)
            if (isShortcutModalOpen) setIsShortcutModalOpen(false)
            event.preventDefault()
            return
        }
        const target = event.target as HTMLElement
        if (
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT" ||
            (target.tagName === "BUTTON" && ["Enter", " "].includes(event.key)) ||
            target.isContentEditable
        )
            return
        if (isMod && key === "/") {
            event.preventDefault()
            setIsShortcutModalOpen((previous) => !previous)
            return
        }
        if (isShortcutModalOpen) return
        const editable = !isLoggedIn || currentTimetableId !== null
        if (isMod && (key === "z" || key === "y")) {
            event.preventDefault()
            if (editable) await (key === "y" || event.shiftKey ? redo() : undo())
            return
        }
        if (isMod && key === "a") {
            event.preventDefault()
            setSelectedItems(currentTimetableItems)
            return
        }
        if (isMod && (key === "c" || key === "x")) {
            if (selectedItems.length) {
                event.preventDefault()
                ui.setClipboard({
                    items: selectedItems,
                    sourceKey: timetableHistoryKey(
                        currentTimetableId,
                        year,
                        semesterEnum,
                    ),
                })
                ui.triggerFlash(selectedItems.map(timetableItemKey))
                if (key === "x" && editable) await removeItems(selectedItems)
            }
            return
        }
        if (isMod && key === "v") {
            if (!editable) {
                event.preventDefault()
                return
            }
            if (!ui.clipboard?.items.length) return
            event.preventDefault()
            const items = ui.clipboard.items.filter(
                (item) =>
                    item.kind === TimetableItemKind.CUSTOM ||
                    !currentTimetableItems.some(
                        (existing) =>
                            timetableItemKey(existing) === timetableItemKey(item),
                    ),
            )
            if (!items.length) {
                ui.triggerFlash(ui.clipboard.items.map(timetableItemKey))
                return
            }
            const retainedLectureKeys = new Set(
                ui.clipboard.items
                    .filter((item) => item.kind === TimetableItemKind.LECTURE)
                    .map(timetableItemKey),
            )
            const overlapping = currentTimetableItems.filter(
                (existing) =>
                    !retainedLectureKeys.has(timetableItemKey(existing)) &&
                    items.some((item) => timetableItemsOverlap(existing, item)),
            )
            if (
                !overlapping.length ||
                window.confirm(t("timetable.pasteLectureConflict"))
            )
                await addItems(items, overlapping)
            return
        }
        if (isMod && key === "m") {
            event.preventDefault()
            if (isLoggedIn) addTimetable({ year, semester: semesterEnum, lectureIds: [] })
            return
        }
        if (isMod && key === "d") {
            event.preventDefault()
            if (isLoggedIn) duplicateTimetable()
            return
        }
        if (event.key === "Delete" || event.key === "Backspace") {
            event.preventDefault()
            if (!editable) return
            if (selectedItems.length) await removeItems(selectedItems)
            else if (
                isLoggedIn &&
                currentTimetableId !== null &&
                window.confirm(t("timetable.timetableKeyboardDeleteConfirm"))
            ) {
                deleteTimetable({ id: currentTimetableId })
            }
            return
        }
        if (!isMod && (key === "[" || key === "]")) {
            event.preventDefault()
            changeSemester(key === "[" ? "prev" : "next")
            return
        }
        if (!isMod && /^[1-9]$/.test(key)) {
            event.preventDefault()
            const id = timetableIds[parseInt(key) - 1]
            if (id !== undefined) setCurrentTimetableId(id)
            return
        }
        if (
            !isMod &&
            ["ArrowUp", "ArrowDown", " ", "Enter"].includes(event.key) &&
            searchLectures.length
        ) {
            event.preventDefault()
            const index = searchLectures.findIndex(
                (lecture) => lecture.id === hover[0]?.id,
            )
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                if (event.key === "ArrowDown" && index === searchLectures.length - 1)
                    window.dispatchEvent(new CustomEvent("request-next-page"))
                const next =
                    searchLectures[
                        event.key === "ArrowUp"
                            ? Math.max(0, index - 1)
                            : Math.min(searchLectures.length - 1, index + 1)
                    ]
                if (next) {
                    setHover([next])
                    requestAnimationFrame(() => {
                        const element = document.querySelector(
                            `[data-search-lecture-id="${next.id}"]`,
                        )
                        if (element) {
                            useTimetableUIStore.setState({ isKeyboardNavigating: true })
                            element.scrollIntoView({ block: "nearest" })
                        }
                    })
                }
            } else if (editable) {
                const lecture = searchLectures[index]
                if (!lecture) return
                const item = { kind: TimetableItemKind.LECTURE, data: lecture } as const
                if (
                    currentTimetableItems.some(
                        (existing) =>
                            timetableItemKey(existing) === timetableItemKey(item),
                    )
                )
                    await removeLectures([lecture.id])
                else if (
                    currentTimetableItems.some((existing) =>
                        timetableItemsOverlap(existing, item),
                    )
                )
                    alert(t("timetable.addLectureConflict"))
                else await addLectures([lecture])
            }
        }
    }

    useEffect(() => {
        const keyDown = (event: KeyboardEvent) => {
            void handleKeyDownRef.current(event)
        }
        const mouseMove = (event: MouseEvent) => {
            if (event.movementX || event.movementY)
                useTimetableUIStore.setState({ isKeyboardNavigating: false })
        }
        document.addEventListener("keydown", keyDown)
        document.addEventListener("mousemove", mouseMove)
        return () => {
            document.removeEventListener("keydown", keyDown)
            document.removeEventListener("mousemove", mouseMove)
        }
    }, [])
    return { onItemSelect, onLectureSelect }
}
