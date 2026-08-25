import { describe, expect, it } from "vitest"

import baseTheme from "./_base"
import { colors } from "./_base/variables/colors"
import darkTheme from "./dark"

function relativeLuminance(hexColor: string): number {
    const value = hexColor.replace("#", "")
    const channel = (offset: number): number => {
        const raw = Number.parseInt(value.slice(offset, offset + 2), 16) / 255
        return raw <= 0.03928 ? raw / 12.92 : ((raw + 0.055) / 1.055) ** 2.4
    }
    return 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4)
}

function contrast(first: string, second: string): number {
    const firstLuminance = relativeLuminance(first)
    const secondLuminance = relativeLuminance(second)
    const lighter = Math.max(firstLuminance, secondLuminance)
    const darker = Math.min(firstLuminance, secondLuminance)
    return (lighter + 0.05) / (darker + 0.05)
}

describe("theme notice tokens", () => {
    it("keeps light notice text readable on its background", () => {
        expect(
            contrast(colors.Notice.text, colors.Notice.background),
        ).toBeGreaterThanOrEqual(4.5)
    })

    it("makes dark notice text readable on its background", () => {
        expect(
            contrast(darkTheme.colors.Notice.text, darkTheme.colors.Notice.background),
        ).toBeGreaterThanOrEqual(4.5)
    })

    it("raises dark disabled text above the block surface", () => {
        expect(
            contrast(
                darkTheme.colors.Text.disable,
                darkTheme.colors.Background.Block.default,
            ),
        ).toBeGreaterThanOrEqual(3)
    })

    it("preserves the established light disabled convention", () => {
        expect(
            contrast(colors.Text.disable, colors.Background.Block.default),
        ).toBeGreaterThanOrEqual(2)
    })
})

describe("theme elevation", () => {
    it("keeps the light surface shadow unchanged", () => {
        expect(baseTheme.elevation.surface).toBe(
            "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        )
    })

    it("replaces black shadows with a hairline ring in dark mode", () => {
        expect(darkTheme.elevation.surface).toContain("rgba(255, 255, 255")
        expect(darkTheme.elevation.low).toContain("rgba(255, 255, 255")
    })

    it("exposes dropdown and raised elevations in both themes", () => {
        for (const theme of [baseTheme, darkTheme]) {
            expect(typeof theme.elevation.dropdown).toBe("string")
            expect(theme.elevation.dropdown.length).toBeGreaterThan(0)
            expect(typeof theme.elevation.raised).toBe("string")
            expect(theme.elevation.raised.length).toBeGreaterThan(0)
        }
        expect(darkTheme.elevation.dropdown).toContain("rgba(255, 255, 255")
        expect(darkTheme.elevation.raised).toContain("rgba(0, 0, 0, 0.5)")
    })
})
