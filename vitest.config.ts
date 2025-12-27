import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        environment: "happy-dom",
        globals: true,
        setupFiles: ["./app/test/setup.ts"],
        include: ["app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            exclude: [
                "node_modules/",
                "app/test/",
                "**/*.d.ts",
                "**/*.config.*",
                "**/+types/**",
            ],
        },
    },
})
