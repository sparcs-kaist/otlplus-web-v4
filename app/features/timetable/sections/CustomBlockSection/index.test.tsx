import { afterEach, beforeEach, expect, it, vi } from "vitest"

import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { act, fireEvent, render, screen, waitFor } from "@/test/test-utils"

import CustomBlockSection from "."

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string, options?: { index?: number }) =>
            options?.index ? `${key} ${options.index}` : key,
    }),
}))

const block = {
    id: 11,
    block_name: "Study",
    place: "Library",
    day: 0,
    begin: 540,
    end: 600,
}
const firstTime = { day: block.day, begin: block.begin, end: block.end }
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
    vi.unstubAllGlobals()
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
            times: [firstTime],
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

it("keeps edited grouped time slots when a save fails", async () => {
    callbacks.updateCustomBlock.mockResolvedValue(false)
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    fireEvent.change(screen.getByPlaceholderText("timetable.customBlock.name"), {
        target: { value: "Revised study" },
    })
    fireEvent.click(screen.getByRole("button", { name: "timetable.customBlock.addTime" }))
    fireEvent.change(screen.getAllByLabelText("timetable.customBlock.endTime")[1]!, {
        target: { value: "660" },
    })
    fireEvent.click(screen.getByRole("button", { name: "timetable.customBlock.save" }))
    await waitFor(() =>
        expect(callbacks.updateCustomBlock).toHaveBeenCalledExactlyOnceWith(11, {
            block_name: "Revised study",
            place: "Library",
            ...firstTime,
            times: [firstTime, { day: 1, begin: 540, end: 660 }],
        }),
    )
    expect(useTimetableUIStore.getState().isCustomBlockSectionOpen).toBe(true)
    expect(screen.getByPlaceholderText("timetable.customBlock.name")).toHaveValue(
        "Revised study",
    )
    expect(screen.getAllByLabelText("timetable.customBlock.endTime")).toHaveLength(2)
    expect(screen.getAllByLabelText("timetable.customBlock.endTime")[1]).toHaveValue(
        "660",
    )
})

it("appends separate grid drags to one new block and suppresses duplicate ranges", async () => {
    useTimetableUIStore.setState({ selectedCustomBlock: null, timeFilter: null })
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    fireEvent.change(screen.getByPlaceholderText("timetable.customBlock.name"), {
        target: { value: "  Study  " },
    })
    const times = [
        firstTime,
        { day: 0, begin: 660, end: 720 },
        { day: 2, begin: 540, end: 600 },
    ]
    for (const timeFilter of [...times, { ...times[0]! }]) {
        act(() => useTimetableUIStore.setState({ timeFilter }))
    }
    expect(screen.getAllByRole("group")).toHaveLength(3)
    fireEvent.click(screen.getByRole("button", { name: "timetable.customBlock.add" }))
    await waitFor(() =>
        expect(callbacks.addCustomBlock).toHaveBeenCalledExactlyOnceWith({
            block_name: "Study",
            place: "",
            ...firstTime,
            times,
        }),
    )
    expect(callbacks.updateCustomBlock).not.toHaveBeenCalled()
})

it("preserves grouped ranges while editing native controls and removing one range", async () => {
    const secondTime = { day: 2, begin: 615, end: 690 }
    const thirdTime = { day: 4, begin: 1380, end: 1440 }
    useTimetableUIStore.setState({
        selectedCustomBlock: { ...block, times: [firstTime, secondTime, thirdTime] },
        timeFilter: firstTime,
    })
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    expect(screen.getAllByRole("group")).toHaveLength(3)
    expect(screen.getAllByLabelText("timetable.customBlock.startTime")[1]).toHaveValue(
        "615",
    )
    expect(screen.getAllByLabelText("timetable.customBlock.endTime")[2]).toHaveValue(
        "1440",
    )
    fireEvent.change(screen.getAllByLabelText("timetable.customBlock.day")[1]!, {
        target: { value: "6" },
    })
    fireEvent.change(screen.getAllByLabelText("timetable.customBlock.startTime")[1]!, {
        target: { value: "1320" },
    })
    fireEvent.change(screen.getAllByLabelText("timetable.customBlock.endTime")[1]!, {
        target: { value: "1440" },
    })
    fireEvent.click(
        screen.getByRole("button", { name: "timetable.customBlock.removeTime 1" }),
    )
    expect(screen.getAllByRole("group")).toHaveLength(2)
    fireEvent.click(screen.getByRole("button", { name: "timetable.customBlock.save" }))
    const editedTime = { day: 6, begin: 1320, end: 1440 }
    await waitFor(() =>
        expect(callbacks.updateCustomBlock).toHaveBeenCalledExactlyOnceWith(11, {
            block_name: "Study",
            place: "Library",
            ...editedTime,
            times: [editedTime, thirdTime],
        }),
    )
})

it("rejects overlapping draft ranges without losing them, then allows adjacent ranges", async () => {
    const alert = vi.fn()
    vi.stubGlobal("alert", alert)
    render(<CustomBlockSection {...callbacks} isPending={false} />)
    act(() =>
        useTimetableUIStore.setState({
            timeFilter: { day: 0, begin: 570, end: 660 },
        }),
    )
    fireEvent.click(screen.getByRole("button", { name: "timetable.customBlock.save" }))
    expect(alert).toHaveBeenCalledWith("timetable.customBlock.errorTimeOverlap")
    expect(callbacks.updateCustomBlock).not.toHaveBeenCalled()
    expect(screen.getAllByRole("group")).toHaveLength(2)
    fireEvent.change(screen.getAllByLabelText("timetable.customBlock.startTime")[1]!, {
        target: { value: "600" },
    })
    fireEvent.click(screen.getByRole("button", { name: "timetable.customBlock.save" }))
    await waitFor(() =>
        expect(callbacks.updateCustomBlock).toHaveBeenCalledExactlyOnceWith(11, {
            block_name: "Study",
            place: "Library",
            ...firstTime,
            times: [firstTime, { day: 0, begin: 600, end: 660 }],
        }),
    )
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
            selectedCustomBlock: {
                ...block,
                id: 12,
                times: [
                    { day: 3, begin: 720, end: 780 },
                    { day: 5, begin: 900, end: 960 },
                ],
            },
        }),
    )
    await act(async () => {
        resolve(true)
    })
    expect(useTimetableUIStore.getState().isCustomBlockSectionOpen).toBe(true)
    expect(useTimetableUIStore.getState().selectedCustomBlock?.id).toBe(12)
    expect(screen.getAllByRole("group")).toHaveLength(2)
    expect(screen.getAllByLabelText("timetable.customBlock.day")[0]).toHaveValue("3")
    expect(screen.getAllByLabelText("timetable.customBlock.day")[1]).toHaveValue("5")
})
