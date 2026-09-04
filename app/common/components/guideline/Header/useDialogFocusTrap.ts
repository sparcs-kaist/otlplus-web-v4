import { type RefObject, useEffect, useRef } from "react"

const FOCUSABLE_SELECTOR = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
].join(",")

const dialogStack: symbol[] = []

interface DialogFocusTrapOptions {
    readonly dialogRef: RefObject<HTMLElement | null>
    readonly initialFocusRef: RefObject<HTMLElement | null>
    readonly onClose: () => void
    readonly open: boolean
}

export default function useDialogFocusTrap({
    dialogRef,
    initialFocusRef,
    onClose,
    open,
}: DialogFocusTrapOptions) {
    const onCloseRef = useRef(onClose)

    useEffect(() => {
        onCloseRef.current = onClose
    }, [onClose])

    useEffect(() => {
        if (!open) return

        const dialogId = Symbol("dialog")
        dialogStack.push(dialogId)
        const previousActiveElement =
            document.activeElement instanceof HTMLElement ? document.activeElement : null
        const previousOverflow = document.body.style.overflow
        const dialog = dialogRef.current
        const backgroundElements = Array.from(document.body.children)
            .filter((element) => dialog !== null && !element.contains(dialog))
            .filter((element): element is HTMLElement => element instanceof HTMLElement)
            .map((element) => ({
                element,
                inert: element.inert,
                ariaHidden: element.getAttribute("aria-hidden"),
            }))

        document.body.style.overflow = "hidden"
        backgroundElements.forEach(({ element }) => {
            element.inert = true
            element.setAttribute("aria-hidden", "true")
        })

        const focusFrame = requestAnimationFrame(() => initialFocusRef.current?.focus())
        const handleKeyDown = (event: KeyboardEvent) => {
            if (dialogStack[dialogStack.length - 1] !== dialogId) return
            if (event.key === "Escape") {
                event.preventDefault()
                onCloseRef.current()
                return
            }
            if (event.key !== "Tab" || dialogRef.current === null) return

            const focusableElements = Array.from(
                dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
            ).filter((element) => element.offsetParent !== null)
            const first = focusableElements[0]
            const last = focusableElements[focusableElements.length - 1]
            if (first === undefined || last === undefined) {
                event.preventDefault()
                initialFocusRef.current?.focus()
                return
            }

            const activeElement = document.activeElement
            if (
                event.shiftKey &&
                (activeElement === first || activeElement === dialogRef.current)
            ) {
                event.preventDefault()
                last.focus()
            } else if (!event.shiftKey && activeElement === last) {
                event.preventDefault()
                first.focus()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            const stackIndex = dialogStack.lastIndexOf(dialogId)
            if (stackIndex !== -1) dialogStack.splice(stackIndex, 1)
            cancelAnimationFrame(focusFrame)
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = previousOverflow
            backgroundElements.forEach(({ element, inert, ariaHidden }) => {
                element.inert = inert
                if (ariaHidden === null) element.removeAttribute("aria-hidden")
                else element.setAttribute("aria-hidden", ariaHidden)
            })
            previousActiveElement?.focus()
        }
    }, [dialogRef, initialFocusRef, open])
}
