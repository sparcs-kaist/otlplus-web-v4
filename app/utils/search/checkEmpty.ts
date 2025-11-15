import type { SearchParamsType } from "@/common/components/search/SearchArea"

export default function checkEmpty(params: SearchParamsType): boolean {
    if (params.keyword && params.keyword.trim() !== "") return false
    if (params.type && params.type.length > 0) return false
    if (params.department && params.department.length > 0) return false
    if (params.level && params.level.length > 0) return false
    if (params.term !== undefined) return false
    if (params.time !== undefined) return false
    return true
}
