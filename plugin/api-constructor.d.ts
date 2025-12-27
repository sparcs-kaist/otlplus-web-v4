import type { Plugin } from "vite"

export interface APIConstructorOptions {
    extensions?: string[]
    baseUrl?: string
    apiDir?: string
    lazy?: boolean
}

export declare function APIConstructor(opts?: APIConstructorOptions): Plugin
