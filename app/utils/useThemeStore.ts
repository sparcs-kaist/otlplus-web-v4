import { useEffect, useState } from "react"

import type { ThemeKeys } from "@/styles/themes"

const getInitialTheme = (): ThemeKeys => {
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme") as ThemeKeys | null
        if (savedTheme) return savedTheme
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    }
    return "light"
}

const useTheme = () => {
    const [theme, setTheme] = useState<ThemeKeys>(getInitialTheme)

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return { theme, setTheme }
}

export default useTheme
