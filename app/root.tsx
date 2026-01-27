import React, { useEffect } from "react"

import styled from "@emotion/styled"
import * as Sentry from "@sentry/react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
} from "react-router"

import Header from "@/common/components/guideline/Header"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import { clientEnv } from "@/env"
import { initMixpanel } from "@/libs/mixpanel"
import { useGoogleAnalytics } from "@/utils/googleAnalytics"

import type { Route } from "./+types/root"
import Providers from "./Providers"
import "./globals.css"

export const links: Route.LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
    },
]

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    as="style"
                    crossOrigin="anonymous"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
                />

                <Meta />
                <Links />
                {clientEnv.VITE_GA_MEASUREMENT_ID && (
                    <>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${clientEnv.VITE_GA_MEASUREMENT_ID}`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${clientEnv.VITE_GA_MEASUREMENT_ID}', {
                                        page_path: window.location.pathname,
                                    });
                                `,
                            }}
                        />
                    </>
                )}
            </head>
            <body>
                <Providers>{children}</Providers>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

const AppWrapper = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.Background.Page.default};
`

const OutletWrapper = styled(FlexWrapper)`
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default function App() {
    useGoogleAnalytics()

    useEffect(() => {
        initMixpanel()
    }, [])

    return (
        <AppWrapper
            direction="column"
            align="stretch"
            justify="stretch"
            gap={0}
            flex="0 1 auto"
        >
            <Header />
            <OutletWrapper direction="column" gap={0} align="stretch" flex="1 1 auto">
                <Outlet />
            </OutletWrapper>
            <ReactQueryDevtools initialIsOpen={false} />
        </AppWrapper>
    )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!"
    let details = "An unexpected error occurred."
    let stack: string | undefined

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error"
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details
    } else if (error && error instanceof Error) {
        Sentry.captureException(error)
        if (process.env.NODE_ENV === "development") {
            details = error.message
            stack = error.stack
        }
    }

    return (
        <main>
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre>
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    )
}
