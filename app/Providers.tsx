import React from "react"

import { ThemeProvider } from "@emotion/react"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { I18nextProvider } from "react-i18next"

import ChannelTalkProvider from "@/libs/channeltalk"
import i18n from "@/libs/i18n"
import useDocumentLanguage from "@/libs/i18n/useDocumentLanguage"
import { idbPersister } from "@/libs/offline/queryPersister"
import {
    QUERY_CACHE_BUSTER,
    QUERY_CACHE_MAX_AGE,
    queryClient,
    shouldPersistQuery,
} from "@/libs/query/queryClient"
import themes from "@/styles/themes"
import useThemeStore from "@/utils/zustand/useThemeStore"

const Providers: React.FC<React.PropsWithChildren> = (props) => {
    const { displayedTheme } = useThemeStore()

    useDocumentLanguage()

    const extractedTheme = React.useMemo(() => {
        return themes[displayedTheme]
    }, [displayedTheme])

    const handleRestoreSuccess = React.useCallback(() => {
        if (navigator.onLine) {
            queryClient.invalidateQueries({
                predicate: shouldPersistQuery,
            })
        }
    }, [])

    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{
                persister: idbPersister,
                maxAge: QUERY_CACHE_MAX_AGE,
                buster: QUERY_CACHE_BUSTER,
                dehydrateOptions: {
                    shouldDehydrateQuery: shouldPersistQuery,
                },
            }}
            onSuccess={handleRestoreSuccess}
        >
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={extractedTheme}>
                    <ChannelTalkProvider />
                    {props.children}
                </ThemeProvider>
            </I18nextProvider>
        </PersistQueryClientProvider>
    )
}

export default Providers
