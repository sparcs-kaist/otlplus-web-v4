import type { ThemeType } from ".."
import baseTheme from "../_base"
import type { Elevation } from "../_base/variables/elevation"
import { darkThemeColors } from "./variables/colors"

const darkElevation: Elevation = {
    low: "0 0 0 1px rgba(255, 255, 255, 0.06)",
    surface: "0 0 0 1px rgba(255, 255, 255, 0.07), 0 1px 3px rgba(0, 0, 0, 0.5)",
    dropdown: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 2px 8px rgba(0, 0, 0, 0.5)",
    raised: "0 0 0 1px rgba(255, 255, 255, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.5)",
}

const darkTheme: ThemeType = {
    ...baseTheme,
    colors: darkThemeColors,
    elevation: darkElevation,
}

export default darkTheme
