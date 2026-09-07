import { breakpoints } from "./variables/breakpoints"
import { colors } from "./variables/colors"
import { elevation } from "./variables/elevation"
import { fonts } from "./variables/fonts"

const baseTheme = {
    colors,
    elevation,
    fonts,
    breakpoints,
}

export type ThemeType = typeof baseTheme

export default baseTheme
