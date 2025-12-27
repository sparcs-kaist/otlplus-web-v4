/// <reference types="vite-plugin-svgr/client" />

// not important, as this will be handled by env.ts
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaEnv {
    readonly BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
