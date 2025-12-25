import type { ExamTime } from "@/common/schemas/lecture"

export default function formatExamTime(examTimes: ExamTime[]): string {
    const sortedExamTimes = examTimes.slice().sort((a, b) => {
        const dayA = a.day
        const dayB = b.day

        if (dayA !== dayB) {
            return dayA - dayB
        }
        return a.begin - b.begin
    })

    return sortedExamTimes.map((examTime) => examTime.str).join(" / ")
}
