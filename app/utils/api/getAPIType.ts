import { APIEndPoints } from ".api/types/endpoint"
import { type RequestMap } from ".api/types/request"
import { type ResponseMap } from ".api/types/response"

type APIEndPointsType = typeof APIEndPoints

export type Path = keyof APIEndPointsType
export type Method<P extends Path> = APIEndPointsType[P][number]

type ConvertDynamicPath<T extends string> =
    T extends `${infer Start}:${infer Param}/${infer Rest}`
        ? `${Start}${string}/${ConvertDynamicPath<Rest>}`
        : T extends `${infer Start}:${infer Param}`
          ? `${Start}${string}`
          : T

export type DynamicPath = ConvertDynamicPath<Path>

export type GetOriginalPath<T extends DynamicPath> = {
    [P in Path]: T extends ConvertDynamicPath<P> ? P : never
}[Path]

type APIMapType<P extends Path> = {
    [K in P]: Record<Method<K>, any>
}
type APIMapTypeAssertion<T extends APIMapType<Path>> = T

type APIRequestMap = APIMapTypeAssertion<RequestMap>
type APIResponseMap = APIMapTypeAssertion<ResponseMap>

export type getAPIRequestType<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
> = APIRequestMap[GetOriginalPath<P>][Extract<M, keyof APIRequestMap[GetOriginalPath<P>]>]

export type getAPIResponseType<
    M extends Method<GetOriginalPath<P>>,
    P extends DynamicPath,
> = APIResponseMap[GetOriginalPath<P>][Extract<
    M,
    keyof APIResponseMap[GetOriginalPath<P>]
>]
