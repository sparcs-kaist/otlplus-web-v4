import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type Theme = "light" | "dark"

interface ThemeState {
  selectedTheme: Theme
  setSelectedTheme: (theme: Theme) => void
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      selectedTheme: "light",
      setSelectedTheme: (theme) => set({ selectedTheme: theme }),
    }),
    {
      name: "theme-storage", // localStorage에 저장될 키 이름
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useThemeStore
