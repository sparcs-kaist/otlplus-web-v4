import { afterEach, beforeEach, expect, it, vi } from "vitest"

import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { act, fireEvent, render, screen, waitFor } from "@/test/test-utils"

import CustomBlockSection from "."

vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))

const block = {
    id: 11,
    block_name: "Study",
    place: "Library",
    day: 0,
    begin: 540,
    end: 600,
}
const selection: TimetableItem[] = [
    { kind: "custom", data: block },
    { kind: "lecture", data: { id: 11 } } as TimetableItem,
]
const callbacks = {
    addCustomBlock: vi.fn(),
    updateCustomBlock: vi.fn(),
    removeItems: vi.fn(),
}

beforeEach(() => {
    Object.values(callbacks).forEach((callback) =>
        callback.mockReset().mockResolvedValue(true),
    )
    useTimetableUIStore.setState({
        currentTimetableId: 42,
        selectedItems: selection,
        selectedCustomBlock: block,
        isCustomBlockSectionOpen: true,
    })
})

afterEach(() => {
    useTimetableUIStore.setState(useTimetableUIStore.getInitialState())
})

it("does not submit during IME composition, then saves through the unified editor", async () => {
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    const name = screen.getByPlaceholderText("timetable.customBlock.name")
    fireEvent.change(name, { target: { value: "New name" } })
    fireEvent.keyDown(name, { key: "Enter", isComposing: true })
    fireEvent.keyDown(name, { key: "Enter", keyCode: 229 })
    expect(callbacks.updateCustomBlock).not.toHaveBeenCalled()
    fireEvent.keyDown(name, { key: "Enter" })
    await waitFor(() =>
        expect(callbacks.updateCustomBlock).toHaveBeenCalledExactlyOnceWith(11, {
            block_name: "New name",
            place: "Library",
            day: 0,
            begin: 540,
            end: 600,
        }),
    )
    expect(useTimetableUIStore.getState().isCustomBlockSectionOpen).toBe(false)
})

it("closes on Escape while retaining mixed selection", () => {
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    fireEvent.keyDown(screen.getByPlaceholderText("timetable.customBlock.name"), {
        key: "Escape",
    })
    const current = useTimetableUIStore.getState()
    expect(current.isCustomBlockSectionOpen).toBe(false)
    expect(current.selectedCustomBlock).toBeNull()
    expect(current.selectedItems).toEqual(selection)
    expect(callbacks.updateCustomBlock).not.toHaveBeenCalled()
})

it("keeps the form open when an edit fails", async () => {
    callbacks.updateCustomBlock.mockResolvedValue(false)
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    fireEvent.click(screen.getByRole("button", { name: "timetable.customBlock.save" }))
    await waitFor(() => expect(callbacks.updateCustomBlock).toHaveBeenCalledOnce())
    expect(useTimetableUIStore.getState().isCustomBlockSectionOpen).toBe(true)
})

it("routes deletion through item identity rather than deleting the whole timetable", async () => {
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    fireEvent.click(screen.getByRole("button", { name: "Delete custom block" }))
    await waitFor(() =>
        expect(callbacks.removeItems).toHaveBeenCalledExactlyOnceWith([
            { kind: "custom", data: block },
        ]),
    )
})

it("does not close a different editor when a pending request finishes", async () => {
    let resolve!: (success: boolean) => void
    callbacks.updateCustomBlock.mockReturnValue(
        new Promise<boolean>((done) => {
            resolve = done
        }),
    )
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    fireEvent.keyDown(screen.getByPlaceholderText("timetable.customBlock.name"), {
        key: "Enter",
    })
    act(() =>
        useTimetableUIStore.setState({
            currentTimetableId: 43,
            selectedCustomBlock: { ...block, id: 12 },
        }),
    )
    await act(async () => {
        resolve(true)
    })
    expect(useTimetableUIStore.getState().isCustomBlockSectionOpen).toBe(true)
    expect(useTimetableUIStore.getState().selectedCustomBlock?.id).toBe(12)
})
