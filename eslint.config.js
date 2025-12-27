import js from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
    // Global ignores should be at the top level
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/coverage/**",
            "**/+types/**",
            "**/.react-router/**",
        ],
    },

    // Base configurations
    js.configs.recommended,
    tseslint.configs.recommended,
    // This config is for projects using React 17's new JSX transform.
    // It disables rules like `react/react-in-jsx-scope`.
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: { globals: { ...globals.browser } },
        rules: {
            "no-empty-pattern": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
        settings: { react: { version: "detect" } },
    },

    // Custom configurations for your project
    pluginReact.configs.flat["jsx-runtime"],
])
