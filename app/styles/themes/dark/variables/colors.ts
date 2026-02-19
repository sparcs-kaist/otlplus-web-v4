import type { ThemeType } from "../.."

export const darkThemeColors: ThemeType["colors"] = {
    primary: "#000000",
    secondary: "#2d2d2d",
    tertiary: "#2f2f2f",
    background: "#000000",
    backgroundText: "#000000",
    gradient: {
        blue: "linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)",
        purple: "linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #7B1FA2 100%)",
        peach: "linear-gradient(135deg, #BF360C 0%, #D84315 50%, #E64A19 100%)",
        mint: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)",
        sunset: "linear-gradient(135deg, #B71C1C 0%, #C62828 50%, #D32F2F 100%)",
    },

    Background: {
        Block: {
            default: "#505050",
            dark: "#2f2f2f",
            darker: "#1e1e1e",
            highlight: "#000000",
        },
        Page: {
            default: "#4b4b4b",
        },
        Section: {
            default: "#414141",
            transparent: "#1C1C1CDD",
        },
        Tab: {
            default: "#000000",
            dark: "#3f3f3f",
            darker: "#565656",
        },
        Button: {
            default: "#333333",
            dark: "#262626",
            highlight: "#262626",
            highlightDark: "#494545",
        },
        Tile: {
            highlight: "#E54C65",
        },
    },
    Highlight: {
        default: "#E54C65",
        dark: "#461720",
    },
    Line: {
        default: "#2f2f2f",
        divider: "#2f2f2f",
        block: "#343434",
        dark: "#000000",
        darker: "#000000",
    },
    Text: {
        bright: "#000000",
        disable: "#606060",
        placeholder: "#949494",
        lighter: "#9f9f9f",
        light: "#838383",
        default: "#bdbdbd",
        dark: "#ffffff",
    },
    Tile: {
        TimeTable: {
            default: {
                red: {
                    1: "#EDA0A0",
                    2: "#F5837A",
                },
                orange: {
                    1: "#F49A6B",
                    2: "#F0BE78",
                },
                yellow: {
                    1: "#F1D676",
                    2: "#F4F180",
                },
                green: {
                    1: "#C3F38C",
                    2: "#8FE9BF",
                    3: "#8BDBD4",
                },
                blue: {
                    1: "#99DDF1",
                    2: "#84BCEA",
                },
                purple: {
                    1: "#89A0EA",
                    2: "#BE92EC",
                },
                pink: {
                    1: "#E19DE9",
                    2: "#F487C5",
                },
            },
        },
    },
}
