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

function itemCourse(item: PlannerItem): PlannerCourse | null {
    if (item.item_type === "TAKEN" || item.item_type === "FUTURE") {
        return item.course
    }
    return null
}

export function isActiveDuplicateItem(
    planner: PlannerDetail,
    item: PlannerItem,
): boolean {
    const course = itemCourse(item)
    if (course === null || item.is_excluded || isRepeatableCourse(course)) return false
    const matching = [...planner.taken_items, ...planner.future_items].filter(
        (candidate) => !candidate.is_excluded && itemCourse(candidate)?.id === course.id,
    )
    return matching.length > 1
}
