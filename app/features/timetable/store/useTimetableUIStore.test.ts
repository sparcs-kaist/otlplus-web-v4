import { beforeEach, describe, expect, it, vi } from "vitest"

import { useTimetableUIStore } from "./useTimetableUIStore"

describe("timetable auto-selection state", () => {
    beforeEach(() => {
        useTimetableUIStore.setState({
            autoSelectedSemesterKeys: [],
            pendingMyTimetableSelection: false,
        })
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

    it("does not notify subscribers when marking an existing semester", () => {
        useTimetableUIStore.getState().markSemesterAutoSelected("2026-1")
        const subscriber = vi.fn()
        const unsubscribe = useTimetableUIStore.subscribe(subscriber)

        useTimetableUIStore.getState().markSemesterAutoSelected("2026-1")

        expect(subscriber).not.toHaveBeenCalled()
        unsubscribe()
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

    it("does not notify subscribers when resetting an empty list", () => {
        const subscriber = vi.fn()
        const unsubscribe = useTimetableUIStore.subscribe(subscriber)

        useTimetableUIStore.getState().resetAutoSelectedSemesters()

        expect(subscriber).not.toHaveBeenCalled()
        unsubscribe()
    })

    it("does not notify subscribers when pending selection is unchanged", () => {
        const subscriber = vi.fn()
        const unsubscribe = useTimetableUIStore.subscribe(subscriber)

        useTimetableUIStore.getState().setPendingMyTimetableSelection(false)

        expect(subscriber).not.toHaveBeenCalled()
        unsubscribe()
    })
})
