import "mixpanel-browser"

declare module "mixpanel-browser" {
    interface Config {
        /** Enable the Mixpanel feature-flags subsystem (v2.71+). */
        flags?: boolean
    }

    interface FlagsManager {
        /** Resolves once the initial flag payload has loaded (or timed out). */
        whenReady(): Promise<void>
        /** Synchronous read; echoes `fallback` when the flag is not defined. */
        is_enabled_sync(key: string, fallback: boolean): boolean
    }
}
