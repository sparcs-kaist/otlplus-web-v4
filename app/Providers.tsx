import React from "react"

import { ThemeProvider } from "@emotion/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { I18nextProvider } from "react-i18next"

import i18n from "@/libs/i18n"
import themes from "@/styles/themes"
import useThemeStore, { type Theme } from "@/utils/useThemeStore"

export const SelectedThemeContext = React.createContext<{
    selectedTheme: Theme
    setSelectedTheme: (theme: Theme) => void
}>({
    selectedTheme: "light",
    setSelectedTheme: () => {},
})

const Providers: React.FC<React.PropsWithChildren> = (props) => {
    const queryClient = new QueryClient()

    const { selectedTheme, setSelectedTheme } = useThemeStore()

    const extractedTheme = React.useMemo(() => {
        return themes[selectedTheme]
    }, [selectedTheme])

    return (
        <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
                <SelectedThemeContext.Provider
                    value={{ selectedTheme, setSelectedTheme }}
                >
                    <ThemeProvider theme={extractedTheme}>{props.children}</ThemeProvider>
                </SelectedThemeContext.Provider>
            </I18nextProvider>
        </QueryClientProvider>
    )
}

export default Providers
