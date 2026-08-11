import { beforeEach, describe, expect, it, vi } from "vitest"

import { useTimetableUIStore } from "./useTimetableUIStore"

describe("timetable auto-selection state", () => {
    beforeEach(() => {
        useTimetableUIStore.setState({ autoSelectedSemesterKeys: [] })
    })

    it("marks a semester as auto-selected", () => {
        useTimetableUIStore.getState().markSemesterAutoSelected("2026-1")

        expect(useTimetableUIStore.getState().autoSelectedSemesterKeys).toEqual([
            "2026-1",
        ])
    })

    it("preserves the array reference when marking an existing semester", () => {
        useTimetableUIStore.getState().markSemesterAutoSelected("2026-1")
        const previous = useTimetableUIStore.getState().autoSelectedSemesterKeys

        useTimetableUIStore.getState().markSemesterAutoSelected("2026-1")

        expect(useTimetableUIStore.getState().autoSelectedSemesterKeys).toBe(previous)
    })

    it("resets auto-selected semesters", () => {
        useTimetableUIStore.getState().markSemesterAutoSelected("2026-1")
        useTimetableUIStore.getState().resetAutoSelectedSemesters()

        expect(useTimetableUIStore.getState().autoSelectedSemesterKeys).toEqual([])
    })

    it("preserves the array reference when resetting an empty list", () => {
        const previous = useTimetableUIStore.getState().autoSelectedSemesterKeys

        useTimetableUIStore.getState().resetAutoSelectedSemesters()

        expect(useTimetableUIStore.getState().autoSelectedSemesterKeys).toBe(previous)
    })
})

describe("timetable selection reset", () => {
    beforeEach(() => {
        useTimetableUIStore.setState({
            currentTimetableId: null,
            currentTimetableName: "",
            autoSelectedSemesterKeys: [],
        })
    })

    it("clears account-scoped selection and metadata", () => {
        useTimetableUIStore.setState({
            currentTimetableId: 42,
            currentTimetableName: "시간표 1",
            autoSelectedSemesterKeys: ["2026-1"],
        })

        useTimetableUIStore.getState().resetTimetableSelection()

        const state = useTimetableUIStore.getState()
        expect(state.currentTimetableId).toBeNull()
        expect(state.currentTimetableName).toBe("")
        expect(state.autoSelectedSemesterKeys).toEqual([])
    })

    it("does not notify subscribers when the selection is already cleared", () => {
        const subscriber = vi.fn()
        const unsubscribe = useTimetableUIStore.subscribe(subscriber)

        useTimetableUIStore.getState().resetTimetableSelection()

        expect(subscriber).not.toHaveBeenCalled()
        unsubscribe()
    })
})
