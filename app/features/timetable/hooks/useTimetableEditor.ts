import { useCallback, useRef, useState } from "react"

import { useQueryClient } from "@tanstack/react-query"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import type { Lecture } from "@/common/schemas/lecture"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { trackEvent } from "@/libs/mixpanel"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

export type TimetableAction = {
    type: "add" | "delete"
    lectures: { lecture: Lecture; lectureId: number }[]
}

export type TimetableTransaction = TimetableAction[]

export type StackState = {
    undo: TimetableTransaction[]
    redo: TimetableTransaction[]
}

const MAX_HISTORY_SIZE = 50

interface UseTimetableEditorOptions {
    currentTimetableLectures: Lecture[]
    nonLoginTimetable: Lecture[]
    setNonLoginTimetable: React.Dispatch<React.SetStateAction<Lecture[]>>
}

export function useTimetableEditor({
    currentTimetableLectures,
    nonLoginTimetable,
    setNonLoginTimetable,
}: UseTimetableEditorOptions) {
    const { status } = useUserStore()
    const queryClient = useQueryClient()

    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const setCurrentTimetableId = useTimetableUIStore((s) => s.setCurrentTimetableId)
    const year = useTimetableUIStore((s) => s.year)
    const setYear = useTimetableUIStore((s) => s.setYear)
    const semesterEnum = useTimetableUIStore((s) => s.semesterEnum)
    const setSemesterEnum = useTimetableUIStore((s) => s.setSemesterEnum)

    // History Local State
    const [historyStacks, setHistoryStacks] = useState<Record<string, StackState>>({})
    const isUndoRedoActionRef = useRef<boolean>(false)

    const key = `${currentTimetableId ?? "my"}-${year}-${semesterEnum}`
    const stack = historyStacks[key] || { undo: [], redo: [] }
    const canUndo = stack.undo.length > 0
    const canRedo = stack.redo.length > 0

    const recordAction = useCallback(
        (action: TimetableAction | TimetableTransaction) => {
            if (isUndoRedoActionRef.current) return

            setHistoryStacks((prev) => {
                const currentStack = prev[key] || { undo: [], redo: [] }
                const transaction = Array.isArray(action) ? action : [action]

                return {
                    ...prev,
                    [key]: {
                        undo: [...currentStack.undo, transaction].slice(
                            -MAX_HISTORY_SIZE,
                        ),
                        redo: [],
                    },
                }
            })
        },
        [key],
    )

    const { query: semestersRequest } = useAPI("GET", "/semesters")

    const changeSemester = useCallback(
        (direction: "prev" | "next") => {
            let isFirstSemester = false
            let isLastSemester = false

            if (semestersRequest.data && semestersRequest.data.semesters.length > 0) {
                const semestersList = semestersRequest.data.semesters
                const firstSemester = semestersList[0]
                const lastSemester = semestersList[semestersList.length - 1]

                if (firstSemester && lastSemester) {
                    isFirstSemester =
                        year === firstSemester.year &&
                        semesterEnum === firstSemester.semester
                    isLastSemester =
                        year === lastSemester.year &&
                        semesterEnum === lastSemester.semester
                }
            }

            if (direction === "prev") {
                if (isFirstSemester) return
                if (semesterEnum === SemesterEnum.SPRING) {
                    setSemesterEnum(SemesterEnum.FALL)
                    setYear(year - 1)
                } else {
                    setSemesterEnum(SemesterEnum.SPRING)
                }
                setCurrentTimetableId(null)
            } else {
                if (isLastSemester) return
                if (semesterEnum === SemesterEnum.FALL) {
                    setSemesterEnum(SemesterEnum.SPRING)
                    setYear(year + 1)
                } else {
                    setSemesterEnum(SemesterEnum.FALL)
                }
                setCurrentTimetableId(null)
            }
        },
        [
            semestersRequest.data,
            semesterEnum,
            setSemesterEnum,
            setYear,
            setCurrentTimetableId,
            year,
        ],
    )

    // 한번의 undo, redo로 시간표 GET이 여러번 호출되는 것을 방지
    const invalidateTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const debounceInvalidate = useCallback(() => {
        if (invalidateTimeoutRef.current) clearTimeout(invalidateTimeoutRef.current)
        invalidateTimeoutRef.current = setTimeout(() => {
            queryClient.invalidateQueries({
                queryKey: [`/timetables/${currentTimetableId}`],
            })
        }, 100)
    }, [queryClient, currentTimetableId])

    const { requestFunction: addLectureFunction } = useAPI(
        "PATCH",
        `/timetables/${currentTimetableId}`,
        {
            onMutate: async (variables: any) => {
                await queryClient.cancelQueries({
                    queryKey: [`/timetables/${currentTimetableId}`],
                })
                const previousTimetable = queryClient.getQueryData([
                    `/timetables/${currentTimetableId}`,
                ])

                if (variables.lecture) {
                    queryClient.setQueriesData(
                        { queryKey: [`/timetables/${currentTimetableId}`] },
                        (old: any) => {
                            if (!old) return old
                            return {
                                ...old,
                                lectures: [...old.lectures, variables.lecture],
                            }
                        },
                    )
                }

                return { previousTimetable }
            },
            onError: (err, variables, context: any) => {
                queryClient.setQueriesData(
                    { queryKey: [`/timetables/${currentTimetableId}`] },
                    context?.previousTimetable,
                )
            },
            onSettled: debounceInvalidate,
        },
    )

    const { requestFunction: removeLectureFunction } = useAPI(
        "PATCH",
        `/timetables/${currentTimetableId}`,
        {
            onMutate: async (variables: any) => {
                await queryClient.cancelQueries({
                    queryKey: [`/timetables/${currentTimetableId}`],
                })
                const previousTimetable = queryClient.getQueryData([
                    `/timetables/${currentTimetableId}`,
                ])

                queryClient.setQueriesData(
                    { queryKey: [`/timetables/${currentTimetableId}`] },
                    (old: any) => {
                        if (!old) return old
                        return {
                            ...old,
                            lectures: old.lectures.filter(
                                (l: any) => l.id !== variables.lectureId,
                            ),
                        }
                    },
                )

                return { previousTimetable }
            },
            onError: (err, variables, context: any) => {
                queryClient.setQueriesData(
                    { queryKey: [`/timetables/${currentTimetableId}`] },
                    context?.previousTimetable,
                )
            },
            onSettled: debounceInvalidate,
        },
    )

    const addLectures = useCallback(
        (lectures: Lecture[], options: { record?: boolean } = { record: true }) => {
            if (status !== "success") {
                setNonLoginTimetable((prev) => {
                    const newLectures = lectures.filter(
                        (l) => !prev.some((p) => p.id === l.id),
                    )
                    return [...prev, ...newLectures]
                })
                if (options.record !== false) {
                    recordAction({
                        type: "add",
                        lectures: lectures.map((lecture) => ({
                            lecture,
                            lectureId: lecture.id,
                        })),
                    })
                }
                return
            }

            if (currentTimetableId) {
                lectures.forEach((lecture) => {
                    addLectureFunction({
                        action: "add",
                        lectureId: lecture.id,
                        lecture,
                    } as any)
                })
                if (options.record !== false) {
                    recordAction({
                        type: "add",
                        lectures: lectures.map((lecture) => ({
                            lecture,
                            lectureId: lecture.id,
                        })),
                    })
                }
            }
        },
        [
            status,
            currentTimetableId,
            addLectureFunction,
            setNonLoginTimetable,
            recordAction,
        ],
    )

    const removeLectures = useCallback(
        (
            lectureIds: number[],
            options: { record?: boolean; delay?: boolean } = {
                record: true,
                delay: false,
            },
        ) => {
            const removedNonLogin =
                status !== "success"
                    ? nonLoginTimetable.filter((lec) => lectureIds.includes(lec.id))
                    : []
            const removedLogin =
                status === "success" && currentTimetableId
                    ? currentTimetableLectures.filter((lec) =>
                          lectureIds.includes(lec.id),
                      )
                    : []

            const executeRemove = () => {
                if (status !== "success") {
                    setNonLoginTimetable((prev) =>
                        prev.filter((lecture) => !lectureIds.includes(lecture.id)),
                    )
                    if (removedNonLogin.length > 0 && options.record !== false) {
                        recordAction({
                            type: "delete",
                            lectures: removedNonLogin.map((l) => ({
                                lecture: l,
                                lectureId: l.id,
                            })),
                        })
                    }
                } else if (currentTimetableId) {
                    lectureIds.forEach((id) => {
                        removeLectureFunction({
                            action: "delete",
                            lectureId: id,
                        } as any)
                        trackEvent("Remove Lecture from Timetable", {
                            lectureId: id,
                            timetableId: currentTimetableId,
                        })
                    })
                    if (removedLogin.length > 0 && options.record !== false) {
                        recordAction({
                            type: "delete",
                            lectures: removedLogin.map((l) => ({
                                lecture: l,
                                lectureId: l.id,
                            })),
                        })
                    }
                }
            }

            if (options.delay) {
                setTimeout(executeRemove, 300)
            } else {
                executeRemove()
            }
        },
        [
            status,
            currentTimetableId,
            nonLoginTimetable,
            currentTimetableLectures,
            removeLectureFunction,
            setNonLoginTimetable,
            recordAction,
        ],
    )

    const executeAction = useCallback(
        (action: TimetableAction) => {
            if (action.type === "add") {
                addLectures(
                    action.lectures.map((l) => l.lecture),
                    { record: false },
                )
            } else {
                removeLectures(
                    action.lectures.map((l) => l.lectureId),
                    { record: false, delay: true },
                )
            }
        },
        [addLectures, removeLectures],
    )

    const reverseAction = (action: TimetableAction): TimetableAction => ({
        ...action,
        type: action.type === "add" ? "delete" : "add",
    })

    const reverseTransaction = (transaction: TimetableAction[]): TimetableAction[] => {
        return [...transaction].reverse().map(reverseAction)
    }

    const undo = useCallback(() => {
        const currentStack = historyStacks[key] || { undo: [], redo: [] }
        if (currentStack.undo.length === 0) return null

        const transactionToUndo = currentStack.undo[currentStack.undo.length - 1]
        if (!transactionToUndo) return null

        setHistoryStacks((prev: Record<string, StackState>) => ({
            ...prev,
            [key]: {
                undo: (prev[key]?.undo || []).slice(0, -1),
                redo: [...(prev[key]?.redo || []), transactionToUndo].slice(
                    -MAX_HISTORY_SIZE,
                ),
            },
        }))

        isUndoRedoActionRef.current = true
        const reversedTransaction = reverseTransaction(transactionToUndo)
        reversedTransaction.forEach(executeAction)
        isUndoRedoActionRef.current = false

        return reversedTransaction.flatMap((action: TimetableAction) =>
            action.lectures.map((l: any) => l.lectureId),
        )
    }, [key, executeAction, historyStacks])

    const redo = useCallback(() => {
        const currentStack = historyStacks[key] || { undo: [], redo: [] }
        if (currentStack.redo.length === 0) return null

        const transactionToRedo = currentStack.redo[currentStack.redo.length - 1]
        if (!transactionToRedo) return null

        setHistoryStacks((prev: Record<string, StackState>) => ({
            ...prev,
            [key]: {
                undo: [...(prev[key]?.undo || []), transactionToRedo].slice(
                    -MAX_HISTORY_SIZE,
                ),
                redo: (prev[key]?.redo || []).slice(0, -1),
            },
        }))

        isUndoRedoActionRef.current = true
        transactionToRedo.forEach(executeAction)
        isUndoRedoActionRef.current = false

        return transactionToRedo.flatMap((action: TimetableAction) =>
            action.lectures.map((l: any) => l.lectureId),
        )
    }, [key, executeAction, historyStacks])

    return {
        addLectures,
        removeLectures,
        changeSemester,
        undo,
        redo,
        recordAction,
        canUndo,
        canRedo,
    }
}
