import { describe, expect, it } from "vitest"

import { DepartmentSchema } from "./department"
import { LectureSchema } from "./lecture"
import { ProfessorSchema } from "./professor"

describe("Schema validations", () => {
    describe("ProfessorSchema", () => {
        it("validates valid professor data", () => {
            const validProfessor = { id: 1, name: "John Doe" }
            const result = ProfessorSchema.safeParse(validProfessor)
            expect(result.success).toBe(true)
        })

        it("rejects professor without id", () => {
            const invalidProfessor = { name: "John Doe" }
            const result = ProfessorSchema.safeParse(invalidProfessor)
            expect(result.success).toBe(false)
        })

        it("rejects professor without name", () => {
            const invalidProfessor = { id: 1 }
            const result = ProfessorSchema.safeParse(invalidProfessor)
            expect(result.success).toBe(false)
        })

        it("rejects non-integer id", () => {
            const invalidProfessor = { id: 1.5, name: "John Doe" }
            const result = ProfessorSchema.safeParse(invalidProfessor)
            expect(result.success).toBe(false)
        })
    })

    describe("DepartmentSchema", () => {
        it("validates valid department data", () => {
            const validDepartment = { id: 1, name: "Computer Science", code: "CS" }
            const result = DepartmentSchema.safeParse(validDepartment)
            expect(result.success).toBe(true)
        })

        it("validates department without optional code", () => {
            const deptWithoutCode = { id: 1, name: "Computer Science" }
            const result = DepartmentSchema.safeParse(deptWithoutCode)
            expect(result.success).toBe(true)
        })

        it("rejects department without name", () => {
            const invalidDepartment = { id: 1, code: "CS" }
            const result = DepartmentSchema.safeParse(invalidDepartment)
            expect(result.success).toBe(false)
        })
    })

    describe("LectureSchema", () => {
        const validLecture = {
            id: 1,
            courseId: 100,
            classNo: "001",
            name: "Introduction to CS",
            code: "CS101",
            department: { id: 1, name: "CS", code: "CS" },
            type: "Major Required",
            limitPeople: 50,
            numPeople: 45,
            classDuration: 3,
            expDuration: 3,
            credit: 3,
            creditAU: 0,
            averageGrade: 3.5,
            averageLoad: 2.5,
            averageSpeech: 4.0,
            isEnglish: true,
            professors: [{ id: 1, name: "Prof. Kim" }],
            classes: [
                {
                    day: 1,
                    begin: 540,
                    end: 630,
                    buildingCode: "E3",
                    buildingName: "Engineering Building 3",
                    roomName: "Room 101",
                },
            ],
            examTimes: [],
        }

        it("validates valid lecture data", () => {
            const result = LectureSchema.safeParse(validLecture)
            expect(result.success).toBe(true)
        })

        it("rejects lecture with invalid average grade (> 5)", () => {
            const invalidLecture = { ...validLecture, averageGrade: 6 }
            const result = LectureSchema.safeParse(invalidLecture)
            expect(result.success).toBe(false)
        })

        it("rejects lecture with negative average grade", () => {
            const invalidLecture = { ...validLecture, averageGrade: -1 }
            const result = LectureSchema.safeParse(invalidLecture)
            expect(result.success).toBe(false)
        })

        it("validates lecture with empty classes array", () => {
            const lectureNoClasses = { ...validLecture, classes: [] }
            const result = LectureSchema.safeParse(lectureNoClasses)
            expect(result.success).toBe(true)
        })

        it("validates lecture with multiple professors", () => {
            const lectureMultiProf = {
                ...validLecture,
                professors: [
                    { id: 1, name: "Prof. Kim" },
                    { id: 2, name: "Prof. Lee" },
                ],
            }
            const result = LectureSchema.safeParse(lectureMultiProf)
            expect(result.success).toBe(true)
        })
    })
})
