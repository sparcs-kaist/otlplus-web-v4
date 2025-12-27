import { reactRouter } from "@react-router/dev/vite"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

import { APIConstructor } from "./plugin/api-constructor"

export default defineConfig({
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
        rollupOptions: {
            output: {
                manualChunks: {
                    "vendor-react": [
                        "react",
                        "react-dom",
                        "react-router",
                        "react-router-dom",
                    ],
                    "vendor-emotion": [
                        "@emotion/react",
                        "@emotion/styled",
                        "@emotion/css",
                    ],
                    "vendor-mui": ["@mui/material", "@mui/icons-material"],
                    "vendor-query": ["@tanstack/react-query"],
                    "vendor-i18n": ["i18next", "react-i18next"],
                    "vendor-framer": ["framer-motion"],
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
})
