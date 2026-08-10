import type { SearchParamsType } from "@/common/components/search/SearchArea"

export default function createDictionarySearchParams(
    params: SearchParamsType,
): URLSearchParams {
    const queryString = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((val) => {
                if (val === undefined || val === null) return
                queryString.append(key, val.toString())
            })
        } else if (value !== undefined && value !== null && value !== "") {
            queryString.append(key, value.toString())
        }
    })

    return queryString
}
