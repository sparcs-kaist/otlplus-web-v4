import { describe, expect, it } from "vitest"

import {
    createPlanner,
    csCourse,
    csDepartment,
    csMajorTrack,
    eeDepartment,
    eeMajorTrack,
    generalTrack,
} from "./testFixtures"
import {
    countItemsOutsideRange,
    entryYearFromStudentNumber,
    findAdditionalTrackIssue,
    getDefaultTrackSelection,
    isAdditionalTrackDisabled,
    plannerStartYears,
} from "./trackPolicy"

const doubleEe = {
    id: 10,
    start_year: 2020,
    end_year: 2030,
    type: "DOUBLE" as const,
    department: eeDepartment,
    major_required: 3,
    major_elective: 12,
}

describe("planner track policy", () => {
    it("derives a bounded entry year and exposes 2015 through current year", () => {
        expect(entryYearFromStudentNumber(20231234, 2026)).toBe(2023)
        expect(entryYearFromStudentNumber(19991234, 2026)).toBeNull()
        expect(plannerStartYears(2017)).toEqual([2015, 2016, 2017])
    })

    it("selects a domestic general track and the user's major for four years", () => {
        const selection = getDefaultTrackSelection(
            {
                general: [{ ...generalTrack, id: 9, is_foreign: true }, generalTrack],
                major: [eeMajorTrack, csMajorTrack],
                additional: [],
            },
            {
                studentNumber: 20231234,
                majorDepartments: [{ code: "CS" }],
            },
            2026,
        )
        expect(selection).toMatchObject({
            startYear: 2023,
            endYear: 2026,
            generalTrack: { id: generalTrack.id },
            majorTrack: { id: csMajorTrack.id },
        })
    })

    it("enforces additional-track department combinations", () => {
        expect(isAdditionalTrackDisabled(doubleEe, 2023, csMajorTrack)).toBe(false)
        expect(
            isAdditionalTrackDisabled(
                { ...doubleEe, department: csDepartment },
                2023,
                csMajorTrack,
            ),
        ).toBe(true)
        expect(
            findAdditionalTrackIssue(
                [doubleEe, { ...doubleEe, id: 11, type: "MINOR" }],
                csMajorTrack,
            ),
        ).toBe("duplicateDepartment")
    })

    it("counts items removed by a shorter planner range", () => {
        const planner = createPlanner({
            future_items: [
                {
                    id: -2,
                    item_type: "FUTURE",
                    is_excluded: false,
                    year: 2026,
                    semester: 1,
                    course: csCourse,
                },
            ],
        })
        expect(countItemsOutsideRange(planner, 2023, 2025)).toBe(1)
    })
})
