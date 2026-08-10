import { describe, expect, it } from "vitest"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import type { Timetables } from "@/common/schemas/timetables"

import getSemesterTimetables from "./getSemesterTimetables"
import getTimetableAutoSelection from "./getTimetableAutoSelection"

const timetable = {
    id: 42,
    name: "Spring timetable",
    year: 2026,
    semester: SemesterEnum.SPRING,
    timeTableOrder: 0,
} as Timetables

describe("getTimetableAutoSelection", () => {
    it("selects the first editable timetable once per semester", () => {
        expect(
            getTimetableAutoSelection({
                status: "success",
                currentTimetableId: null,
                semesterKey: "2026-1",
                autoSelectedSemesterKeys: [],
                timetables: [timetable],
            }),
        ).toEqual({ semesterKey: "2026-1", timetableId: 42 })
    })

    it("waits until the requested semester has a timetable", () => {
        expect(
            getTimetableAutoSelection({
                status: "success",
                currentTimetableId: null,
                semesterKey: "2026-3",
                autoSelectedSemesterKeys: [],
                timetables: [],
            }),
        ).toBeNull()
    })

    it("preserves an explicit My Timetable selection after auto-selection", () => {
        expect(
            getTimetableAutoSelection({
                status: "success",
                currentTimetableId: null,
                semesterKey: "2026-1",
                autoSelectedSemesterKeys: ["2026-1"],
                timetables: [timetable],
            }),
        ).toBeNull()
    })

    it("preserves My Timetable after visiting another semester", () => {
        expect(
            getTimetableAutoSelection({
                status: "success",
                currentTimetableId: null,
                semesterKey: "2026-1",
                autoSelectedSemesterKeys: ["2026-1", "2026-3"],
                timetables: [timetable],
            }),
        ).toBeNull()
    })

    it("auto-selects a semester that has not been visited", () => {
        expect(
            getTimetableAutoSelection({
                status: "success",
                currentTimetableId: null,
                semesterKey: "2026-3",
                autoSelectedSemesterKeys: ["2026-1"],
                timetables: [timetable],
            }),
        ).toEqual({ semesterKey: "2026-3", timetableId: 42 })
    })

    it("preserves My Timetable selected before timetable data arrives", () => {
        expect(
            getTimetableAutoSelection({
                status: "success",
                currentTimetableId: null,
                semesterKey: "2026-3",
                autoSelectedSemesterKeys: ["2026-3"],
                timetables: [timetable],
            }),
        ).toBeNull()
    })
})

describe("getSemesterTimetables", () => {
    it("does not treat stale previous-semester data as selectable", () => {
        const staleTimetable = { ...timetable, semester: SemesterEnum.SPRING }

        expect(getSemesterTimetables([staleTimetable], 2026, SemesterEnum.FALL)).toEqual(
            [],
        )
    })
})
