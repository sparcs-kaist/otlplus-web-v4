import { APIEndPoints } from ".api/types/endpoint"
import { type RequestMap, requestMap } from ".api/types/request"
import { type ResponseMap, responseMap } from ".api/types/response"

type APIEndPointsType = typeof APIEndPoints

export type Path = keyof APIEndPointsType
export type Method<P extends Path> = APIEndPointsType[P][number]

type FixedPath<T extends string> = T extends `${infer Start}:${string}` ? never : T
type FixedPaths = FixedPath<keyof APIEndPointsType>

type ConvertDynamicPath<T extends string> =
    T extends `${infer Start}:${infer Param}/${infer Rest}`
        ? `${Start}${string}/${ConvertDynamicPath<Rest>}`
        : T extends `${infer Start}:${infer Param}`
          ? `${Start}${string}`
          : T

export type DynamicPath = ConvertDynamicPath<Path>

type Comparison<
    A extends string,
    B extends string,
> = A extends `${infer First1}/${infer Rest1}`
    ? B extends `${infer First2}/${infer Rest2}`
        ? First1 extends First2
            ? Comparison<Rest1, Rest2>
            : false
        : false
    : A extends B
      ? true
      : false

type ExactMatchPath<A extends string> = Extract<FixedPaths, A>

type MatchingMembers<A extends DynamicPath, U extends Path> = U extends Path
    ? Comparison<A, ConvertDynamicPath<U>> extends true
        ? U
        : never
    : never

export type GetOriginalPath<A extends DynamicPath> = [ExactMatchPath<A>] extends [never]
    ? MatchingMembers<A, Path>
    : ExactMatchPath<A>

export type getAPIRequestType<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
> = RequestMap[GetOriginalPath<P>][Extract<M, keyof RequestMap[GetOriginalPath<P>]>]

export type getAPIResponseType<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
> = ResponseMap[GetOriginalPath<P>][Extract<M, keyof ResponseMap[GetOriginalPath<P>]>]

const originalPaths = Object.keys(APIEndPoints) as Path[]
const originalPathRegexCache = new Map<Path, RegExp>()

function buildOriginalPathRegex(path: Path): RegExp {
    let cached = originalPathRegexCache.get(path)
    if (!cached) {
        const pattern = path
            .split("/")
            .map((segment) =>
                segment.startsWith(":")
                    ? "[^/]+"
                    : segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            )
            .join("/")
        cached = new RegExp(`^${pattern}$`)
        originalPathRegexCache.set(path, cached)
    }
    return cached
}

export function getOriginalPathValue<P extends DynamicPath>(path: P): GetOriginalPath<P> {
    for (const originalPath of originalPaths) {
        if (originalPath === path) {
            return originalPath as GetOriginalPath<P>
        }
    }

    for (const originalPath of originalPaths) {
        if (buildOriginalPathRegex(originalPath).test(path)) {
            return originalPath as GetOriginalPath<P>
        }
    }
    throw new Error(`Unknown API path: ${path}`)
}

// TODO: 나중에 방법 알아내면 타입 좁힐 예정

export function getZodSchemaRequest<M extends Method<P>, P extends Path>(
    method: M,
    path: P,
): (typeof requestMap)[P][Extract<M, keyof (typeof requestMap)[P]>] {
    return (requestMap as any)[path][method]
}

export function getZodSchemaResponse<M extends Method<P>, P extends Path>(
    method: M,
    path: P,
): (typeof responseMap)[P][any] {
    return (responseMap as any)[path][method]
}
