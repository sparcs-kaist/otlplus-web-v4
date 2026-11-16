import type { Lecture } from "@/common/schemas/lecture"
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection"

export default function FriendLectureDetail(selection: {
    lecture: Lecture | null
    year: number
    semester: number
}) {
    return <LectureDetailSection readOnlySelection={selection} />
}
