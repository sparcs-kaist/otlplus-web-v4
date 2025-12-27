import { reactRouter } from "@react-router/dev/vite"
import { sentryVitePlugin } from "@sentry/vite-plugin"
import { type PluginOption, defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

import { APIConstructor } from "./plugin/api-constructor"

const isProduction = process.env.NODE_ENV === "production"
const sentryProject = process.env.SENTRY_PROJECT
const sentryAuthToken = process.env.SENTRY_AUTH_TOKEN

const conditionalPlugins: PluginOption[] = []

if (isProduction && sentryAuthToken && sentryProject) {
    conditionalPlugins.push(
        sentryVitePlugin({
            org: "sentry",
            project: sentryProject,
            authToken: sentryAuthToken,
            url: "https://sentry.sparcs.org",
        }),
    )
}

export default defineConfig({
    base: process.env.VITE_BASE_PATH || "/",
    plugins: [
        reactRouter(),
        tsconfigPaths(),
        svgr(),
        APIConstructor({
            baseUrl: "/",
        }),
        ...conditionalPlugins,
    ],
    server: {
        watch: {
            ignored: ["**/node_modules/**", "**/.pnpm/**", "**/build/**"],
        },
    },
    build: {
        sourcemap: true,
        chunkSizeWarningLimit: 1000,
    },
})
