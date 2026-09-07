import { HttpStatusCode, isAxiosError } from "axios"

export default function isInvalidTimetableError(error: unknown): boolean {
    return isAxiosError(error) && error.response?.status === HttpStatusCode.BadRequest
}
