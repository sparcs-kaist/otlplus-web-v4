export const DEFAULT_DOCUMENT_LANGUAGE = "ko"

export default function resolveDocumentLanguage(language: string | undefined): string {
    return language?.split("-")[0] || DEFAULT_DOCUMENT_LANGUAGE
}
