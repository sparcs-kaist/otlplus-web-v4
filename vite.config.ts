import { reactRouter } from "@react-router/dev/vite"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

import { APIConstructor } from "./plugin/api-constructor"

export default defineConfig({
    base: process.env.VITE_BASE_PATH || "/",
    plugins: [
        reactRouter(),
        tsconfigPaths(),
        svgr(),
        APIConstructor({
            baseUrl: "/",
        }),
    ],
    server: {
        watch: {
            ignored: ["**/node_modules/**", "**/.pnpm/**", "**/build/**"],
        },
    },
    build: {
        chunkSizeWarningLimit: 1000,
    },
})
