import React from "react"

import { ThemeProvider } from "@emotion/react"
import { QueryClient } from "@tanstack/react-query"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { I18nextProvider } from "react-i18next"

import ChannelTalkProvider from "@/libs/channeltalk"
import i18n from "@/libs/i18n"
import { idbPersister } from "@/libs/offline/queryPersister"
import themes from "@/styles/themes"
import useThemeStore from "@/utils/zustand/useThemeStore"

const CACHE_TIME_24H = 1000 * 60 * 60 * 24

const PERSISTABLE_QUERY_PREFIXES = ["/timetables", "/semesters"]

function shouldPersistQuery(queryKey: readonly unknown[]): boolean {
    const key = queryKey[0]
    if (typeof key !== "string") return false
    return PERSISTABLE_QUERY_PREFIXES.some((prefix) => key.startsWith(prefix))
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: CACHE_TIME_24H,
            staleTime: 1000 * 60 * 5,
            retry: 1,
        },
    },
})

queryClient.setQueryDefaults(["/timetables"], {
    gcTime: Infinity,
    staleTime: 1000 * 60 * 5,
    networkMode: "offlineFirst",
})

queryClient.setQueryDefaults(["/semesters"], {
    gcTime: CACHE_TIME_24H,
    staleTime: 1000 * 60 * 60,
    networkMode: "offlineFirst",
})

const Providers: React.FC<React.PropsWithChildren> = (props) => {
    const { displayedTheme } = useThemeStore()

    const extractedTheme = React.useMemo(() => {
        return themes[displayedTheme]
    }, [displayedTheme])

    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{
                persister: idbPersister,
                maxAge: Infinity,
                dehydrateOptions: {
                    shouldDehydrateQuery: (query) => shouldPersistQuery(query.queryKey),
                },
            }}
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
