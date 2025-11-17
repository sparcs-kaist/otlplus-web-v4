import { useCallback, useEffect, useState } from "react"

import type { ThemeKeys } from "@/styles/themes"

const useTheme = () => {
    const [theme, setTheme] = useState<ThemeKeys>(() => {
        if (typeof window === "undefined") {
            return "light"
        }
        const savedTheme = localStorage.getItem("theme") as ThemeKeys | null
        if (savedTheme) {
            return savedTheme
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    })

    const [hasStoredTheme, setHasStoredTheme] = useState(
        () => typeof window !== "undefined" && localStorage.getItem("theme") !== null,
    )

    useEffect(() => {
        if (hasStoredTheme) {
            return
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light")
        }

        mediaQuery.addEventListener("change", handleChange)

        return () => {
            mediaQuery.removeEventListener("change", handleChange)
        }
    }, [hasStoredTheme])

    const handleSetTheme = useCallback((newTheme: ThemeKeys) => {
        localStorage.setItem("theme", newTheme)
        setHasStoredTheme(true)
        setTheme(newTheme)
    }, [])

    return { theme, setTheme: handleSetTheme }
}

export default useTheme
