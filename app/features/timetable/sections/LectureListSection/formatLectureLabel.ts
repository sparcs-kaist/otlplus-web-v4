export default function formatLectureLabel(classNo: string, subtitle: string): string {
    return [classNo, subtitle]
        .map((part) => part.trim())
        .filter(Boolean)
        .join(" ")
}
