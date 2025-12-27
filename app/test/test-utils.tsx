import type { ReactNode } from "react"
import React from "react"

import { ThemeProvider } from "@emotion/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type RenderOptions, render } from "@testing-library/react"

import themes from "@/styles/themes"

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                gcTime: 0,
                staleTime: 0,
            },
            mutations: {
                retry: false,
            },
        },
    })

interface ProvidersProps {
    children: ReactNode
}

function TestProviders({ children }: ProvidersProps) {
    const queryClient = createTestQueryClient()
    const theme = themes["light"]

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
    )
}

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) {
    return render(ui, { wrapper: TestProviders, ...options })
}

export * from "@testing-library/react"
export { customRender as render }
export { TestProviders }
