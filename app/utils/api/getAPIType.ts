import { APIEndPoints } from ".api/types/endpoint"
import { type RequestMap } from ".api/types/request"
import { type ResponseMap } from ".api/types/response"

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

type test = "/courses/fififi" | `/courses/${string}`

export type DynamicPath = ConvertDynamicPath<Path>

export type GetOriginalPath<T extends DynamicPath> = {
    [P in Path]: T extends ConvertDynamicPath<P> ? P : never
}[Path]

export type getAPIRequestType<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
> = RequestMap[GetOriginalPath<P>][Extract<M, keyof RequestMap[GetOriginalPath<P>]>]

export type getAPIResponseType<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
> = ResponseMap[GetOriginalPath<P>][Extract<M, keyof ResponseMap[GetOriginalPath<P>]>]

export { type RequestMap, type ResponseMap }
