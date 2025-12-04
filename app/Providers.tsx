import React from "react"

import { ThemeProvider } from "@emotion/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { I18nextProvider } from "react-i18next"

import i18n from "@/libs/i18n"
import themes from "@/styles/themes"
import useThemeStore from "@/utils/zustand/useThemeStore"

export const queryClient = new QueryClient()

const Providers: React.FC<React.PropsWithChildren> = (props) => {
    const { displayedTheme } = useThemeStore()

    const extractedTheme = React.useMemo(() => {
        return themes[displayedTheme]
    }, [displayedTheme])

    return (
        <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={extractedTheme}>{props.children}</ThemeProvider>
            </I18nextProvider>
        </QueryClientProvider>
    )
}

export default Providers
