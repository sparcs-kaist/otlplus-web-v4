/**
 * @file colors.ts
 * @breif Color constants for themes and components
 * @author ryan@sparcs.org (Ryan Lee)
 */

const colors = {
  BACKGROUND: {
    BLOCK: {
      DEFAULT: "#F5F5F5",
      DARK: "#EBEBEB",
      HIGHLIGHT: "#FFFFFF",
    },
    PAGE: {
      DEFAULT: "#F9F0F0",
    },
    SECTION: {
      DEFAULT: "#FFFFFF",
      TRANSPARENT: "rgba(255, 255, 255, 0)",
    },
    TAB: {
      DEFAULT: "#FFFFFF",
      DARK: "E0E0E0",
      DARKER: "#D6D6D6",
    },
    BUTTON: {
      DEFAULT: "#F5F5F5",
      DARK: "#EBEBEB",
      HIGHLIGHT: "#F9F0F0",
      HIGHLIGHT_DARK: "#FAE6E6",
    },
    TILE: {
      HIGHLIGHT: "E54C65",
    },
  },
  HIGHLIGHT: {
    DEFAULT: "#E54C65",
    DARK: "#963246",
  },
  LINE: {
    DEFAULT: "#E8E8E8",
    DIVIDER: "#EDD1DC",
    BLOCK: "#D6D6D6",
    DEFAULT_DARK: "#D6D6D6",
  },
  TEXT: {
    DISABLE: "#AAAAAA",
    PLACEHOLDER: "#AAAAAA",
    LIGHTER: "#888888",
    LIGHT: "#555555",
    DEFAULT: "#333333",
    DARK: "#000000",
  },
  TILE: {
    TIMETABLE: {
      DEFAULT: {
        "RED-1": "TODO",
        "RED-2": "TODO",
        "ORANGE-1": "TODO",
        "ORANGE-2": "TODO",
        "YELLOW-1": "TODO",
        "YELLOW-2": "TODO",
        "GREEN-1": "TODO",
        "GREEN-2": "TODO",
        "GREEN-3": "TODO",
        "BLUE-1": "TODO",
        "BLUE-2": "TODO",
        "PURPLE-1": "TODO",
        "PURPLE-2": "TODO",
        "PINK-1": "TODO",
        "PINK-2": "TODO",
      },
      DARK: {
        "RED-1": "TODO",
        "RED-2": "TODO",
        "ORANGE-1": "TODO",
        "ORANGE-2": "TODO",
        "YELLOW-1": "TODO",
        "YELLOW-2": "TODO",
        "GREEN-1": "TODO",
        "GREEN-2": "TODO",
        "GREEN-3": "TODO",
        "BLUE-1": "TODO",
        "BLUE-2": "TODO",
        "PURPLE-1": "TODO",
        "PURPLE-2": "TODO",
        "PINK-1": "TODO",
        "PINK-2": "TODO",
      },
    },
    PLANNER: {
      DEFAULT: {
        "RED-1": "TODO",
        "RED-2": "TODO",
        "ORANGE-1": "TODO",
        "ORANGE-2": "TODO",
        "YELLOW-1": "TODO",
        "GREEN-1": "TODO",
        "GREEN-2": "TODO",
        "GREEN-3": "TODO",
        "GREEN-4": "TODO",
        "GREEN-5": "TODO",
        "BLUE-1": "TODO",
        "BLUE-2": "TODO",
        "BLUE-3": "TODO",
        "PURPLE-1": "TODO",
        "PURPLE-2": "TODO",
        "PINK-1": "TODO",
        "GREY-1": "TODO",
        "GREY-2": "TODO",
      },
      DARK: {
        "RED-1": "TODO",
        "RED-2": "TODO",
        "ORANGE-1": "TODO",
        "ORANGE-2": "TODO",
        "YELLOW-1": "TODO",
        "GREEN-1": "TODO",
        "GREEN-2": "TODO",
        "GREEN-3": "TODO",
        "GREEN-4": "TODO",
        "GREEN-5": "TODO",
        "BLUE-1": "TODO",
        "BLUE-2": "TODO",
        "BLUE-3": "TODO",
        "PURPLE-1": "TODO",
        "PURPLE-2": "TODO",
        "PINK-1": "TODO",
        "GREY-1": "TODO",
        "GREY-2": "TODO",
      },
    },
  },
};

export const TIMETABLE_COLOR_KEYS = Object.keys(colors.TILE.TIMETABLE.DEFAULT);
export const PLANNER_COLOR_KEYS = Object.keys(colors.TILE.PLANNER.DEFAULT);

export default colors;
