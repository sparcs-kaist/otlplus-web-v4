export function shouldCaptureApiError(status: number | undefined): boolean {
    return status !== undefined && status >= 500 && status < 600
}
