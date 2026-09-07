const EXPECTED_CLIPBOARD_ERROR_NAMES = new Set(["NotAllowedError", "NotReadableError"])

export function isExpectedClipboardError(error: unknown): boolean {
    return error instanceof DOMException && EXPECTED_CLIPBOARD_ERROR_NAMES.has(error.name)
}
