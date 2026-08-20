import type { PlannerCourse, PlannerDetail, PlannerItem } from "@/common/schemas/planner"

export type CourseDuplicateDecision = "none" | "future" | "taken"

export function isRepeatableCourse(course: PlannerCourse): boolean {
    return (
        course.title.includes("특강") ||
        course.title_en.includes("Special Lectures") ||
        course.title_en.includes("Special Topics")
    )
}

export function getCourseDuplicateDecision(
    planner: PlannerDetail,
    course: PlannerCourse,
): CourseDuplicateDecision {
    if (isRepeatableCourse(course)) return "none"
    if (
        planner.future_items.some(
            (item) => !item.is_excluded && item.course.id === course.id,
        )
    ) {
        return "future"
    }
    if (
        planner.taken_items.some(
            (item) => !item.is_excluded && item.course.id === course.id,
        )
    ) {
        return "taken"
    }
    return "none"
}

function itemCourseId(item: PlannerItem): number | null {
    if (item.item_type === "TAKEN" || item.item_type === "FUTURE") {
        return item.course.id
    }
    return null
}

export function isActiveDuplicateItem(
    planner: PlannerDetail,
    item: PlannerItem,
): boolean {
    const courseId = itemCourseId(item)
    if (courseId === null || item.is_excluded) return false
    const matching = [...planner.taken_items, ...planner.future_items].filter(
        (candidate) => !candidate.is_excluded && itemCourseId(candidate) === courseId,
    )
    return matching.length > 1
}
