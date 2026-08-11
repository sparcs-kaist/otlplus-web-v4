import { useEffect } from "react"

import i18n from "@/libs/i18n"

import resolveDocumentLanguage from "./resolveDocumentLanguage"

export default function useDocumentLanguage(): void {
    useEffect(() => {
        const syncDocumentLanguage = () => {
            document.documentElement.lang = resolveDocumentLanguage(i18n.resolvedLanguage)
        }

        syncDocumentLanguage()
        i18n.on("languageChanged", syncDocumentLanguage)

        return () => {
            i18n.off("languageChanged", syncDocumentLanguage)
        }
    }, [])
}
