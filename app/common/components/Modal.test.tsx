import { useState } from "react"

import { describe, expect, it, vi } from "vitest"

import { fireEvent, render, screen, waitFor } from "@/test/test-utils"

import Modal from "./Modal"

vi.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

const renderModal = (isOpen: boolean, onClose: () => void) => (
    <>
        <button data-testid="outside-action" type="button">
            Outside action
        </button>
        <Modal
            ariaLabel="Lecture details"
            header={false}
            isOpen={isOpen}
            onClose={onClose}
        >
            <input aria-label="Search lectures" />
        </Modal>
    </>
)

function NestedModalHarness() {
    const [outerOpen, setOuterOpen] = useState(false)
    const [innerOpen, setInnerOpen] = useState(false)

    return (
        <>
            <button type="button" onClick={() => setOuterOpen(true)}>
                Open outer
            </button>
            <Modal
                isOpen={outerOpen}
                onClose={() => setOuterOpen(false)}
                title="Outer dialog"
            >
                <button type="button" onClick={() => setInnerOpen(true)}>
                    Open inner
                </button>
                <Modal
                    isOpen={innerOpen}
                    onClose={() => setInnerOpen(false)}
                    title="Inner dialog"
                >
                    Inner content
                </Modal>
            </Modal>
        </>
    )
}

describe("Modal", () => {
    it("traps focus and closes on Escape from an input", async () => {
        const onClose = vi.fn()
        const { rerender } = render(renderModal(false, onClose))
        const outsideAction = screen.getByTestId("outside-action")
        outsideAction.focus()

        rerender(renderModal(true, onClose))

        const dialog = screen.getByRole("dialog", { name: "Lecture details" })
        const searchInput = screen.getByRole("textbox", { name: "Search lectures" })
        await waitFor(() => expect(dialog).toHaveFocus())
        expect(dialog).toHaveAttribute("aria-modal", "true")
        expect(outsideAction.parentElement).toHaveAttribute("aria-hidden", "true")
        expect(outsideAction.parentElement?.inert).toBe(true)

        searchInput.focus()
        fireEvent.keyDown(searchInput, { key: "Escape" })
        expect(onClose).toHaveBeenCalledOnce()

        rerender(renderModal(false, onClose))
        await waitFor(() => expect(outsideAction).toHaveFocus())
        expect(outsideAction.parentElement).not.toHaveAttribute("aria-hidden")
        expect(outsideAction.parentElement?.inert).toBe(false)
    })

    it("labels the title and exposes a semantic close button", async () => {
        render(
            <Modal isOpen={true} onClose={vi.fn()} title="Account settings">
                Content
            </Modal>,
        )

        expect(screen.getByRole("dialog", { name: "Account settings" })).toHaveAttribute(
            "aria-modal",
            "true",
        )
        await waitFor(() =>
            expect(screen.getByRole("button", { name: "common.search.close" })).toHaveFocus(),
        )
    })

    it("closes only the topmost dialog on Escape", async () => {
        render(<NestedModalHarness />)
        const openOuter = screen.getByRole("button", { name: "Open outer" })
        openOuter.focus()
        fireEvent.click(openOuter)
        await waitFor(() =>
            expect(screen.getByRole("dialog", { name: "Outer dialog" })).toBeInTheDocument(),
        )

        const openInner = screen.getByRole("button", { name: "Open inner" })
        openInner.focus()
        fireEvent.click(openInner)
        await waitFor(() =>
            expect(screen.getByRole("dialog", { name: "Inner dialog" })).toBeInTheDocument(),
        )

        fireEvent.keyDown(document, { key: "Escape" })
        await waitFor(() =>
            expect(
                screen.queryByRole("dialog", { name: "Inner dialog" }),
            ).not.toBeInTheDocument(),
        )
        expect(screen.getByRole("dialog", { name: "Outer dialog" })).toBeInTheDocument()
        expect(openInner).toHaveFocus()

        fireEvent.keyDown(document, { key: "Escape" })
        await waitFor(() =>
            expect(
                screen.queryByRole("dialog", { name: "Outer dialog" }),
            ).not.toBeInTheDocument(),
        )
        expect(openOuter).toHaveFocus()
        expect(document.body.style.overflow).toBe("")
    })
})
