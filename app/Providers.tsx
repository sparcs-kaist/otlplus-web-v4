import React from "react"

import { ThemeProvider } from "@emotion/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { I18nextProvider } from "react-i18next"

import i18n from "@/libs/i18n"
import themes, { type ThemeKeys } from "@/styles/themes"
import useThemeStore from "@/utils/useThemeStore"

export const SelectedThemeContext = React.createContext<{
    theme: ThemeKeys
    setTheme: (theme: ThemeKeys) => void
}>({
    theme: "light",
    setTheme: () => {},
})

const queryClient = new QueryClient()

const Providers: React.FC<React.PropsWithChildren> = (props) => {
    const { theme, setTheme } = useThemeStore()

    const extractedTheme = React.useMemo(() => {
        return themes[theme]
    }, [theme])

    return (
        <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
                <SelectedThemeContext.Provider
                    value={{ theme: theme, setTheme: setTheme }}
                >
                    <ThemeProvider theme={extractedTheme}>{props.children}</ThemeProvider>
                </SelectedThemeContext.Provider>
            </I18nextProvider>
        </QueryClientProvider>
    )
}

export default Providers
