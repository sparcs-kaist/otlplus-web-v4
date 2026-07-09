import { useCallback, useEffect, useRef } from "react"

import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import type { Lecture } from "@/common/schemas/lecture"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { useAPI } from "@/utils/api/useAPI"
import { getPlatform } from "@/utils/getPlatform"
import checkOverlap from "@/utils/timetable/checkOverlap"

export type ClipboardState = {
    lectures: Lecture[]
    sourceTimetableId: number | null
} | null

interface UseTimetableKeyboardOptions {
    currentTimetableLectures: Lecture[]

    // Undo/Redo
    undo: () => number[] | null
    redo: () => number[] | null

    // Timetable operations
    addLectures: (lectures: Lecture[], options?: { record?: boolean }) => void
    removeLectures: (
        lectureIds: number[],
        options?: { record?: boolean; delay?: boolean },
    ) => void

    // Tab switching
    timetableIds: (number | null)[] // ordered tab IDs (null for 'my timetable')

    // Context
    isLoggedIn: boolean

    changeSemester: (direction: "prev" | "next") => void
    recordAction: (action: any) => void
}

export function useTimetableKeyboard({
    currentTimetableLectures,
    undo,
    redo,
    addLectures,
    removeLectures,
    timetableIds,
    isLoggedIn,
    changeSemester,
    recordAction,
}: UseTimetableKeyboardOptions) {
    const { t } = useTranslation()
    const platform = getPlatform()
    const queryClient = useQueryClient()

    const selectedLectures = useTimetableUIStore((s) => s.selectedLectures)
    const setSelectedLectures = useTimetableUIStore((s) => s.setSelectedLectures)
    const year = useTimetableUIStore((s) => s.year)
    const semesterEnum = useTimetableUIStore((s) => s.semesterEnum)
    const setCurrentTimetableId = useTimetableUIStore((s) => s.setCurrentTimetableId)
    const searchLectures = useTimetableUIStore((s) => s.searchLectures)
    const hover = useTimetableUIStore((s) => s.hoveredLectures)
    const setHover = useTimetableUIStore((s) => s.setHoveredLectures)
    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)

    const isShortcutModalOpen = useTimetableUIStore((s) => s.isShortcutModalOpen)
    const setIsShortcutModalOpen = useTimetableUIStore((s) => s.setIsShortcutModalOpen)
    const toggleShortcutModal = useCallback(
        () => setIsShortcutModalOpen((prev) => !prev),
        [setIsShortcutModalOpen],
    )

    const lastSelectedTimeRef = useRef<number | null>(null)

    // 다중 선택을 위한 코드
    const onLectureSelect = useCallback(
        (lecture: Lecture, e?: React.MouseEvent) => {
            let clickedTime: number | null = null
            if (e) {
                const target = (e.target as HTMLElement).closest("[data-class-time]")
                if (target) {
                    clickedTime = Number(target.getAttribute("data-class-time"))
                }
            }

            setSelectedLectures((prev) => {
                const isMod =
                    platform === "ios" || platform === "mac" ? e?.metaKey : e?.ctrlKey
                const isShift = e?.shiftKey

                if (isMod) {
                    lastSelectedTimeRef.current = clickedTime
                    if (prev.some((l) => l.id === lecture.id)) {
                        return prev.filter((l) => l.id !== lecture.id)
                    } else {
                        return [...prev, lecture]
                    }
                } else if (isShift) {
                    const lastSelected = prev[prev.length - 1]

                    if (
                        !lastSelected ||
                        clickedTime === null ||
                        lastSelectedTimeRef.current === null
                    ) {
                        lastSelectedTimeRef.current = clickedTime
                        return [...prev, lecture]
                    }

                    const minTime = Math.min(lastSelectedTimeRef.current, clickedTime)
                    const maxTime = Math.max(lastSelectedTimeRef.current, clickedTime)

                    const getAllClassTimes = (l: Lecture) => {
                        if (!l.classes || l.classes.length === 0) return []
                        return l.classes.map((c) => c.day * 24 * 60 + c.begin)
                    }

                    const newRange = currentTimetableLectures.filter((l) => {
                        if (l.id === lastSelected.id || l.id === lecture.id) return true

                        const times = getAllClassTimes(l)
                        return times.some((t) => t >= minTime && t <= maxTime)
                    })

                    const rangeIds = new Set(newRange.map((l) => l.id))
                    const filteredPrev = prev.filter((l) => !rangeIds.has(l.id))
                    lastSelectedTimeRef.current = clickedTime
                    return [...filteredPrev, ...newRange]
                } else {
                    lastSelectedTimeRef.current = clickedTime
                    return prev.length === 1 && prev[0]?.id === lecture.id
                        ? []
                        : [lecture]
                }
            })
        },
        [currentTimetableLectures, platform, setSelectedLectures],
    )

    const handleAddToTimetable = (lecture: Lecture) => {
        const isAdded = currentTimetableLectures.some((l) => l.id === lecture.id)
        if (isAdded) {
            removeLectures([lecture.id])
        } else {
            if (
                currentTimetableLectures.some((lec) =>
                    checkOverlap(lec.classes, lecture.classes),
                )
            ) {
                alert(t("timetable.addLectureConflict"))
                return
            }
            addLectures([lecture])
        }
    }

    const { requestFunction: addTimetableFunction } = useAPI("POST", "/timetables", {
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["/timetables"] })
            setCurrentTimetableId(data.id)
        },
    })
    const addTimetable = useCallback(
        (lectureIds: number[]) => {
            if (isLoggedIn) {
                addTimetableFunction({ year, semester: semesterEnum, lectureIds })
            }
        },
        [isLoggedIn, addTimetableFunction, year, semesterEnum],
    )

    const { requestFunction: deleteTimetableFunction } = useAPI("DELETE", "/timetables", {
        onMutate: (variables) => {
            if (currentTimetableId === variables.id) {
                setCurrentTimetableId(null)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/timetables"] })
        },
    })
    const deleteTimetable = useCallback(
        (id: number) => {
            deleteTimetableFunction({ id })
        },
        [deleteTimetableFunction],
    )

    const clipboardRef = useRef<ClipboardState>(null)
    const triggerFlash = useTimetableUIStore((state) => state.triggerFlash)

    useEffect(() => {
        clipboardRef.current = null
    }, [year, semesterEnum])

    const handleKeyDownRef = useRef<(e: KeyboardEvent) => void>(() => {})

    handleKeyDownRef.current = (e: KeyboardEvent) => {
        const target = e.target as HTMLElement
        if (
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable
        ) {
            return
        }

        const isMod = platform === "ios" || platform === "mac" ? e.metaKey : e.ctrlKey

        // 1. Shortcut Help Modal: Ctrl + /
        if (isMod && e.key === "/") {
            e.preventDefault()
            toggleShortcutModal()
            return
        }

        if (isShortcutModalOpen) return

        // 2. Undo/Redo: Ctrl+Z / Ctrl+Shift+Z, Ctrl+Y
        if (isMod && e.key.toLowerCase() === "z") {
            e.preventDefault()
            if (isLoggedIn && currentTimetableId === null) return
            const ids = e.shiftKey ? redo() : undo()
            if (ids && ids.length > 0) triggerFlash(ids)
            return
        }
        if (isMod && e.key.toLowerCase() === "y") {
            e.preventDefault()
            if (isLoggedIn && currentTimetableId === null) return
            const ids = redo()
            if (ids && ids.length > 0) triggerFlash(ids)
            return
        }

        // 3. Select All: Ctrl+A
        if (isMod && e.key.toLowerCase() === "a") {
            e.preventDefault()
            setSelectedLectures(currentTimetableLectures)
            return
        }

        // 4. Copy: Ctrl+C
        if (isMod && e.key.toLowerCase() === "c") {
            if (selectedLectures.length > 0) {
                e.preventDefault()
                clipboardRef.current = {
                    lectures: selectedLectures,
                    sourceTimetableId: currentTimetableId,
                }
                triggerFlash(selectedLectures.map((l) => l.id))
            }
            return
        }

        // 5. Cut: Ctrl+X
        if (isMod && e.key.toLowerCase() === "x") {
            if (selectedLectures.length > 0) {
                e.preventDefault()
                clipboardRef.current = {
                    lectures: selectedLectures,
                    sourceTimetableId: currentTimetableId,
                }
                triggerFlash(selectedLectures.map((l) => l.id))
                if (!isLoggedIn || currentTimetableId !== null) {
                    removeLectures(
                        selectedLectures.map((l) => l.id),
                        { delay: true },
                    )
                    setSelectedLectures([])
                }
            }
            return
        }

        // 6. Paste: Ctrl+V
        if (isMod && e.key.toLowerCase() === "v") {
            if (isLoggedIn && currentTimetableId === null) {
                e.preventDefault()
                return
            }
            const cb = clipboardRef.current
            if (cb && cb.lectures.length > 0) {
                e.preventDefault()

                const lecturesToAdd = cb.lectures.filter(
                    (newLec) =>
                        !currentTimetableLectures.some(
                            (existingLec) => existingLec.id === newLec.id,
                        ),
                )

                if (lecturesToAdd.length === 0) {
                    triggerFlash(cb.lectures.map((l) => l.id))
                    return
                }

                const overlappingLectures = currentTimetableLectures.filter(
                    (existingLec) =>
                        lecturesToAdd.some((newLec) =>
                            checkOverlap(existingLec.classes, newLec.classes),
                        ),
                )

                if (overlappingLectures.length > 0) {
                    const confirmMsg = t("timetable.pasteLectureConflict")
                    if (window.confirm(confirmMsg)) {
                        removeLectures(
                            overlappingLectures.map((l) => l.id),
                            { record: false, delay: true },
                        )
                        addLectures(lecturesToAdd, { record: false })

                        recordAction([
                            {
                                type: "delete",
                                lectures: overlappingLectures.map((l) => ({
                                    lecture: l,
                                    lectureId: l.id,
                                })),
                            },
                            {
                                type: "add",
                                lectures: lecturesToAdd.map((l) => ({
                                    lecture: l,
                                    lectureId: l.id,
                                })),
                            },
                        ])

                        triggerFlash(cb.lectures.map((l) => l.id))
                    }
                } else {
                    addLectures(lecturesToAdd)
                    triggerFlash(cb.lectures.map((l) => l.id))
                }
            }
            return
        }

        // 7. Timetable Creation: Ctrl+M
        if (isMod && e.key.toLowerCase() === "m") {
            e.preventDefault()
            if (isLoggedIn) {
                addTimetable([])
            }
            return
        }

        // 8. Timetable Duplication: Ctrl+D
        if (isMod && e.key.toLowerCase() === "d") {
            e.preventDefault()
            if (isLoggedIn) {
                addTimetable(currentTimetableLectures.map((l) => l.id))
            }
            return
        }

        // 9. Delete Selection / Timetable: Delete or Backspace
        if (e.key === "Delete" || e.key === "Backspace") {
            if (isLoggedIn && currentTimetableId === null) {
                e.preventDefault()
                return
            }
            if (selectedLectures.length > 0) {
                e.preventDefault()
                removeLectures(selectedLectures.map((l) => l.id))
                setSelectedLectures([])
            } else {
                if (isLoggedIn && currentTimetableId !== null) {
                    e.preventDefault()
                    if (window.confirm(t("timetable.timetableKeyboardDeleteConfirm"))) {
                        deleteTimetable(currentTimetableId)
                    }
                }
            }
            return
        }

        // 10. Change Semester: [ and ]
        if (!isMod && e.key === "[") {
            e.preventDefault()
            changeSemester("prev")
            return
        }
        if (!isMod && e.key === "]") {
            e.preventDefault()
            changeSemester("next")
            return
        }

        // 11. Escape: Clear selection and hover
        if (!isMod && e.key === "Escape") {
            let handled = false
            if (selectedLectures.length > 0) {
                setSelectedLectures([])
                handled = true
            }
            if (hover.length > 0) {
                setHover([])
                handled = true
            }
            if (handled) e.preventDefault()
            return
        }

        // 12. Tab switching: 1~9
        if (!isMod && /^[1-9]$/.test(e.key)) {
            e.preventDefault()
            const idx = parseInt(e.key) - 1
            if (idx < timetableIds.length) {
                const id = timetableIds[idx]
                if (id !== undefined) setCurrentTimetableId(id)
            }
            return
        }

        // 13. Search navigation: ArrowUp / ArrowDown / Space / Enter
        if (!isMod && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key)) {
            if (searchLectures.length > 0) {
                e.preventDefault()
                const hoverId = hover[0]?.id
                const currentIndex = hoverId
                    ? searchLectures.findIndex((l) => l.id === hoverId)
                    : -1

                const scrollToLecture = (lectureId: number) => {
                    requestAnimationFrame(() => {
                        const el = document.querySelector(
                            `[data-search-lecture-id="${lectureId}"]`,
                        )
                        if (el) {
                            useTimetableUIStore.setState({ isKeyboardNavigating: true })
                            el.scrollIntoView({ block: "nearest" })
                        }
                    })
                }

                if (e.key === "ArrowUp") {
                    const nextIdx = Math.max(0, currentIndex - 1)
                    const nextLec = searchLectures[nextIdx]
                    if (nextLec) {
                        setHover([nextLec])
                        scrollToLecture(nextLec.id)
                    }
                } else if (e.key === "ArrowDown") {
                    if (currentIndex === searchLectures.length - 1) {
                        window.dispatchEvent(new CustomEvent("request-next-page"))
                    }
                    const nextIdx = Math.min(searchLectures.length - 1, currentIndex + 1)
                    const nextLec = searchLectures[nextIdx]
                    if (nextLec) {
                        setHover([nextLec])
                        scrollToLecture(nextLec.id)
                    }
                } else if (e.key === " " || e.key === "Enter") {
                    if (isLoggedIn && currentTimetableId === null) {
                        e.preventDefault()
                        return
                    }
                    if (currentIndex >= 0 && currentIndex < searchLectures.length) {
                        const currLec = searchLectures[currentIndex]
                        if (currLec) handleAddToTimetable(currLec)
                    }
                }
            }
            return
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => handleKeyDownRef.current(e)
        const handleMouseMove = (e: MouseEvent) => {
            if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
                useTimetableUIStore.setState({ isKeyboardNavigating: false })
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("mousemove", handleMouseMove)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    return { onLectureSelect }
}
