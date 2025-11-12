import { type GETCoursesQuery, type GETCoursesResponse } from "@/api/courses"

const APIEndPoints = {
    "/api/v2/courses": ["GET", "POST"],
    "/api/v2/users": ["GET"],
} as const

type APIEndPointsType = typeof APIEndPoints

export type Path = keyof APIEndPointsType
export type Method<P extends Path> = APIEndPointsType[P][number]

type APIMapType<P extends Path> = {
    [K in P]: Record<Method<K>, any>
}
type APIMapTypeAssertion<T extends APIMapType<Path>> = T

type APIRequestMap = APIMapTypeAssertion<{
    "/api/v2/courses": {
        GET: GETCoursesQuery
        POST: { id: number }
    }
    "/api/v2/users": {
        GET: { id: string }
    }
}>

type APIResponseMap = APIMapTypeAssertion<{
    "/api/v2/courses": {
        GET: GETCoursesResponse
        POST: { name: string }
    }
    "/api/v2/users": {
        GET: { id: string; name: string }
    }
}>

export type getAPIRequestType<
    M extends Method<P>,
    P extends Path,
> = APIRequestMap[P][Extract<M, keyof APIRequestMap[P]>]
export type getAPIResponseType<
    M extends Method<P>,
    P extends Path,
> = APIResponseMap[P][Extract<M, keyof APIResponseMap[P]>]
