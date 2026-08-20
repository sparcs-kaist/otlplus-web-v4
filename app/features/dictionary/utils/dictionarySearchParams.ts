import type { SearchParamsType } from "@/common/components/search/SearchArea"

type DictionarySelection = {
    readonly courseId: number | null
    readonly professorId: number | null
}

function getPositiveInteger(params: URLSearchParams, key: string): number | null {
    const value = params.get(key)
    if (value === null || !/^\d+$/.test(value)) return null

    const parsed = Number(value)
    return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : null
}

function getIntegerList(params: URLSearchParams, key: string): number[] {
    return params
        .getAll(key)
        .filter((value) => /^\d+$/.test(value))
        .map(Number)
        .filter((value) => Number.isSafeInteger(value))
}

export function createDictionarySearchParams(params: SearchParamsType): URLSearchParams {
    const queryString = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                if (item !== undefined && item !== null) {
                    queryString.append(key, item.toString())
                }
            })
        } else if (value !== undefined && value !== null && value !== "") {
            queryString.append(key, value.toString())
        }
    })

    return queryString
}

export function getDictionarySearch(params: URLSearchParams): SearchParamsType {
    const term = getPositiveInteger(params, "term")
    return {
        keyword: params.get("keyword") ?? "",
        type: params.getAll("type"),
        department: getIntegerList(params, "department"),
        level: getIntegerList(params, "level"),
        ...(term !== null ? { term } : {}),
    }
}

export function getDictionarySelection(params: URLSearchParams): DictionarySelection {
    const courseId = getPositiveInteger(params, "courseId")
    return {
        courseId,
        professorId: courseId === null ? null : getPositiveInteger(params, "professorId"),
    }
}

export function normalizeDictionarySearchParams(
    params: URLSearchParams,
): URLSearchParams {
    const normalized = new URLSearchParams(params)
    const { courseId, professorId } = getDictionarySelection(params)

    if (courseId === null) normalized.delete("courseId")
    if (professorId === null) normalized.delete("professorId")
    return normalized
}

export function setDictionaryCourse(
    params: URLSearchParams,
    courseId: number | null,
): URLSearchParams {
    const next = new URLSearchParams(params)
    next.delete("professorId")
    if (courseId === null) {
        next.delete("courseId")
    } else {
        next.set("courseId", courseId.toString())
    }
    return next
}

export function setDictionaryProfessor(
    params: URLSearchParams,
    professorId: number | null,
): URLSearchParams {
    const next = new URLSearchParams(params)
    if (getPositiveInteger(next, "courseId") === null || professorId === null) {
        next.delete("professorId")
    } else {
        next.set("professorId", professorId.toString())
    }
    return next
}
