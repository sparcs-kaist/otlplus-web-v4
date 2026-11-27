// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest"

import { GETResponse as FriendSharedResponse } from "@/api/friends/$friendId/timetables/shared"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { toTimetableItems } from "@/common/utils/timetableItems"
import themes from "@/styles/themes"
import { fireEvent, render, screen } from "@/test/test-utils"

import CustomTimeTableGrid from "./CustomTimeTableGrid"

vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))
vi.mock("@mui/icons-material/Close", () => ({ default: () => null }))

const block: CustomBlock = {
    id: 7,
    block_name: "Study group",
    place: "Library",
    times: [
        { day: 0, begin: 600, end: 660 },
        { day: 2, begin: 840, end: 900 },
        { day: 5, begin: 635, end: 695 },
    ],
}
const lecture = {
    id: 7,
    courseId: 3,
    name: "Physics",
    subtitle: "",
    professors: [],
    classes: [
        {
            day: 1,
            begin: 600,
            end: 660,
            buildingCode: "E1",
            roomName: "101",
        },
    ],
} as unknown as Lecture

describe("unified timetable item reads", () => {
    it("keeps all custom block times in a shared friend response", () => {
        const response = {
            timetableType: "timetable",
            timetableId: 42,
            name: "Shared timetable",
            year: 2026,
            semester: 3,
            lectures: [],
            customBlocks: [block],
        }
        expect(FriendSharedResponse.parse(response).customBlocks).toEqual([block])
        expect(
            FriendSharedResponse.safeParse({
                ...response,
                customBlocks: [{ ...block, times: [] }],
            }).success,
        ).toBe(false)
    })

    it("renders each slot once, including weekend/exact-minute overflow, without editing controls", () => {
        const onItemSelect = vi.fn()
        const lectureItem: TimetableItem = { kind: "lecture", data: lecture }
        const customItem: TimetableItem = { kind: "custom", data: block }
        const items = toTimetableItems({ lectures: [lecture], customBlocks: [block] })
        const { container } = render(
            <CustomTimeTableGrid
                timetableItems={items}
                needTimeFilter={false}
                needLectureDeletable={false}
                onItemSelect={onItemSelect}
            />,
        )

        expect(screen.getAllByText("Study group")).toHaveLength(3)
        expect(container.querySelectorAll('[data-custom-block-id="7"]')).toHaveLength(3)
        expect(
            container.querySelector('.overflow-grid-wrapper [data-class-time="7835"]'),
        ).toHaveAttribute("title", "Study group · common.days.saturday 10:35–11:35")
        expect(container.querySelector(".custom-timetable")).toHaveAttribute(
            "data-interaction",
            "true",
        )
        expect(container.querySelectorAll("button")).toHaveLength(0)

        fireEvent.pointerDown(screen.getAllByText("Study group")[0]!)
        expect(onItemSelect).toHaveBeenLastCalledWith(customItem, expect.anything())
        fireEvent.pointerDown(screen.getByText("Physics"))
        expect(onItemSelect).toHaveBeenLastCalledWith(lectureItem, expect.anything())
    })

    it("supports single-slot blocks and updates when only timetableItems changes", () => {
        const singleBlock = { ...block, times: block.times.slice(0, 1) }
        const { rerender } = render(
            <CustomTimeTableGrid
                timetableItems={[{ kind: "custom", data: singleBlock }]}
            />,
        )
        expect(screen.getAllByText("Study group")).toHaveLength(1)
        rerender(
            <CustomTimeTableGrid timetableItems={[{ kind: "custom", data: block }]} />,
        )
        expect(screen.getAllByText("Study group")).toHaveLength(3)
    })

    it("selects a custom block from every slot without exposing editing controls", () => {
        const onItemSelect = vi.fn()
        const customItem: TimetableItem = { kind: "custom", data: block }
        const { container } = render(
            <CustomTimeTableGrid
                timetableItems={[{ kind: "lecture", data: lecture }, customItem]}
                needTimeFilter={false}
                needLectureDeletable={false}
                onItemSelect={onItemSelect}
            />,
        )

        for (const title of screen.getAllByText("Study group")) {
            fireEvent.pointerDown(title)
            expect(onItemSelect).toHaveBeenLastCalledWith(customItem, expect.anything())
        }
        expect(onItemSelect).toHaveBeenCalledTimes(3)
        expect(container.querySelectorAll("button")).toHaveLength(0)

        const slots = screen.getAllByRole("button")
        expect(slots).toHaveLength(3)
        for (const slot of slots) {
            expect(slot).toHaveAttribute("tabindex", "0")
            fireEvent.keyDown(slot, { key: "Enter" })
            fireEvent.keyDown(slot, { key: " " })
        }
        expect(onItemSelect).toHaveBeenCalledTimes(9)
        expect(onItemSelect).toHaveBeenLastCalledWith(customItem, undefined)
    })

    it("dims other item kinds across normal and overflow tiles using unified items props", () => {
        const mixedLecture = {
            ...lecture,
            classes: [
                ...lecture.classes,
                { ...lecture.classes[0]!, day: 6, begin: 600, end: 660 },
            ],
        }
        const otherBlock = { ...block, id: 9, block_name: "Other block" }
        const lectureItem: TimetableItem = { kind: "lecture", data: mixedLecture }
        const customItem: TimetableItem = { kind: "custom", data: block }
        const timetableItems: TimetableItem[] = [
            lectureItem,
            customItem,
            { kind: "custom", data: otherBlock },
        ]
        const props = {
            timetableItems,
            needTimeFilter: false,
            needLectureDeletable: false,
            onItemSelect: vi.fn(),
        }
        const { container, rerender } = render(<CustomTimeTableGrid {...props} />)
        const expectOpacity = (selector: string, opacity: string, count: number) => {
            const tiles = container.querySelectorAll(selector)
            expect(tiles).toHaveLength(count)
            tiles.forEach((tile) => expect(tile).toHaveStyle({ opacity }))
        }
        const customTiles = '[data-custom-block-id="7"] .custom-block-tile'
        const otherCustomTiles = '[data-custom-block-id="9"] .custom-block-tile'

        expectOpacity(".lecture-tile", "1", 2)
        expectOpacity(customTiles, "1", 3)
        expectOpacity(otherCustomTiles, "1", 3)

        rerender(<CustomTimeTableGrid {...props} selectedItems={[lectureItem]} />)
        expect(container.querySelector(".custom-timetable")).toHaveAttribute(
            "data-selected-items",
            "lecture:7",
        )
        expectOpacity(".lecture-tile", "1", 2)
        expectOpacity(customTiles, "0.5", 3)
        expectOpacity(otherCustomTiles, "0.5", 3)

        rerender(<CustomTimeTableGrid {...props} selectedItems={[customItem]} />)
        expect(container.querySelector(".custom-timetable")).toHaveAttribute(
            "data-selected-items",
            "custom:7",
        )
        expectOpacity(".lecture-tile", "0.5", 2)
        expectOpacity(customTiles, "1", 3)
        expectOpacity(otherCustomTiles, "0.5", 3)

        rerender(<CustomTimeTableGrid {...props} />)
        expectOpacity(".lecture-tile", "1", 2)
        expectOpacity(customTiles, "1", 3)
        expectOpacity(otherCustomTiles, "1", 3)
    })

    it("disables selection and dimming for a noninteractive export after rerender", () => {
        const onItemSelect = vi.fn()
        const mixedLecture = {
            ...lecture,
            classes: [
                ...lecture.classes,
                { ...lecture.classes[0]!, day: 6, begin: 600, end: 660 },
            ],
        }
        const customItem: TimetableItem = { kind: "custom", data: block }
        const props = {
            timetableItems: [
                { kind: "lecture" as const, data: mixedLecture },
                customItem,
            ],
            selectedItems: [customItem],
            needTimeFilter: false,
            needLectureDeletable: false,
            onItemSelect,
        }
        const { container, rerender } = render(<CustomTimeTableGrid {...props} />)
        const titles = screen.getAllByText("Physics")
        fireEvent.pointerDown(titles[0]!)
        fireEvent.pointerDown(titles[1]!)
        expect(onItemSelect).toHaveBeenCalledTimes(2)
        onItemSelect.mockClear()

        rerender(<CustomTimeTableGrid {...props} needLectureInteraction={false} />)
        for (const title of screen.getAllByText(/Study group|Physics/)) {
            fireEvent.pointerDown(title)
        }
        expect(onItemSelect).not.toHaveBeenCalled()
        expect(container.querySelector(".custom-timetable")).toHaveAttribute(
            "data-selected-items",
            "",
        )
        container
            .querySelectorAll(".custom-block-tile, .lecture-tile")
            .forEach((tile) => {
                expect(tile).toHaveStyle({ opacity: "1" })
            })
        expect(container.querySelectorAll("button")).toHaveLength(0)
        expect(screen.queryAllByRole("button")).toHaveLength(0)
    })

    it("preserves unified multi-selection, draft ranges, flash and item callbacks", () => {
        const otherBlock = { ...block, id: 9, block_name: "Other block" }
        const lectureItem: TimetableItem = { kind: "lecture", data: lecture }
        const customItem: TimetableItem = { kind: "custom", data: block }
        const onItemSelect = vi.fn()
        const { container } = render(
            <CustomTimeTableGrid
                timetableItems={[
                    lectureItem,
                    customItem,
                    { kind: "custom", data: otherBlock },
                ]}
                selectedItems={[lectureItem, customItem]}
                onItemSelect={onItemSelect}
                flashItemKeys={["lecture:7", "custom:7"]}
                isCustomBlockSectionOpen
                customBlockDraftTimes={block.times!.slice(0, 2)}
                needTimeFilter={false}
                needLectureDeletable={false}
            />,
        )

        const grid = container.querySelector(".custom-timetable")
        expect(grid).toHaveAttribute("data-selected-items", "lecture:7 custom:7")
        expect(grid).toHaveAttribute("data-selected-custom-blocks", "7")
        expect(grid).toHaveAttribute("data-flash-lectures", "7")
        expect(grid).toHaveAttribute("data-flash-custom-blocks", "7")
        expect(container.querySelectorAll(".custom-block-draft-time")).toHaveLength(2)
        for (const tile of container.querySelectorAll(
            ".lecture-tile, [data-custom-block-id='7'] .custom-block-tile",
        )) {
            expect(tile).toHaveStyle({ opacity: "1" })
        }
        for (const tile of container.querySelectorAll(
            "[data-custom-block-id='9'] .custom-block-tile",
        )) {
            expect(tile).toHaveStyle({ opacity: "0.5" })
        }
        fireEvent.pointerDown(screen.getAllByText("Study group")[0]!)
        expect(onItemSelect).toHaveBeenLastCalledWith(customItem, expect.anything())
        fireEvent.pointerDown(screen.getByText("Physics"))
        expect(onItemSelect).toHaveBeenLastCalledWith(lectureItem, expect.anything())
    })

    it("keeps editor deletion separate from keyboard selection and removes controls in readonly mode", () => {
        const customItem: TimetableItem = { kind: "custom", data: block }
        const onItemSelect = vi.fn()
        const onItemDelete = vi.fn()
        const props = {
            timetableItems: [customItem],
            selectedItems: [customItem],
            onItemSelect,
            onItemDelete,
            needTimeFilter: false,
        }
        const { container, rerender } = render(<CustomTimeTableGrid {...props} />)
        const deleteButtons = screen.getAllByRole("button", {
            name: "Delete custom block: Study group",
        })
        expect(deleteButtons).toHaveLength(3)
        for (const button of deleteButtons) {
            expect(fireEvent.keyDown(button, { key: "Enter" })).toBe(true)
            expect(fireEvent.keyDown(button, { key: " " })).toBe(true)
            fireEvent.pointerDown(button)
            fireEvent.click(button)
        }
        expect(onItemSelect).not.toHaveBeenCalled()
        expect(onItemDelete).toHaveBeenCalledTimes(3)
        expect(onItemDelete).toHaveBeenLastCalledWith(customItem)

        rerender(<CustomTimeTableGrid {...props} needLectureDeletable={false} />)
        expect(container.querySelectorAll("button")).toHaveLength(0)
        expect(screen.getAllByRole("button")).toHaveLength(3)

        rerender(<CustomTimeTableGrid {...props} needLectureInteraction={false} />)
        expect(screen.queryAllByRole("button")).toHaveLength(0)
        expect(container.querySelector(".custom-timetable")).toHaveAttribute(
            "data-interaction",
            "false",
        )
        fireEvent.pointerDown(screen.getAllByText("Study group")[0]!)
        expect(onItemSelect).not.toHaveBeenCalled()
        expect(onItemDelete).toHaveBeenCalledTimes(3)
    })

    it("refreshes unified selection callbacks for normal and overflow lecture tiles", () => {
        const mixedLecture = {
            ...lecture,
            classes: [...lecture.classes, { ...lecture.classes[0]!, day: 6 }],
        }
        const timetableItems: TimetableItem[] = [{ kind: "lecture", data: mixedLecture }]
        const previousSelect = vi.fn()
        const nextSelect = vi.fn()
        const { rerender } = render(
            <CustomTimeTableGrid
                timetableItems={timetableItems}
                onItemSelect={previousSelect}
                needTimeFilter={false}
            />,
        )
        rerender(
            <CustomTimeTableGrid
                timetableItems={timetableItems}
                onItemSelect={nextSelect}
                needTimeFilter={false}
            />,
        )
        for (const title of screen.getAllByText("Physics")) fireEvent.pointerDown(title)
        expect(previousSelect).not.toHaveBeenCalled()
        expect(nextSelect).toHaveBeenCalledTimes(2)
        expect(nextSelect).toHaveBeenLastCalledWith(timetableItems[0], expect.anything())
    })

    it("marks matching friend lectures in normal and overflow tiles, without marking custom blocks or ordinary timetables", () => {
        const sharedLecture = {
            ...lecture,
            classes: [...lecture.classes, { ...lecture.classes[0]!, day: 6 }],
        }
        const otherLecture = { ...lecture, id: 8, name: "Another section" }
        const timetableItems: TimetableItem[] = [
            { kind: "lecture", data: sharedLecture },
            { kind: "lecture", data: otherLecture },
            { kind: "custom", data: block },
        ]
        const { container, rerender } = render(
            <CustomTimeTableGrid
                timetableItems={timetableItems}
                overlappedLectureIds={[sharedLecture.id]}
                needLectureDeletable={false}
                needTimeFilter={false}
            />,
        )

        expect(screen.getAllByText("friends.overlapLabel")).toHaveLength(2)
        const overlapTiles = container.querySelectorAll('[data-friend-overlap="true"]')
        expect(overlapTiles).toHaveLength(2)
        const ordinaryTile = screen.getByText("Another section").closest(".lecture-tile")!
        const originalBackground = getComputedStyle(ordinaryTile).backgroundColor
        for (const tile of overlapTiles) {
            expect(tile).toHaveStyle({
                backgroundColor: originalBackground,
            })
            expect(tile).not.toHaveStyle({ boxShadow: themes.light.elevation.raised })
            expect(tile.querySelector(".friend-overlap-label")).toHaveStyle({
                color: themes.light.colors.TimeTable.title,
            })
        }
        expect(ordinaryTile).not.toHaveAttribute("data-friend-overlap")
        for (const tile of container.querySelectorAll(".custom-block-tile")) {
            expect(tile).not.toHaveAttribute("data-friend-overlap")
        }
        expect(container.querySelectorAll("button")).toHaveLength(0)

        for (const selectedItem of timetableItems) {
            rerender(
                <CustomTimeTableGrid
                    timetableItems={timetableItems}
                    overlappedLectureIds={[sharedLecture.id]}
                    selectedItems={[selectedItem]}
                    needLectureDeletable={false}
                    needTimeFilter={false}
                />,
            )
            const sharedIsSelected =
                selectedItem.kind === "lecture" &&
                selectedItem.data.id === sharedLecture.id
            for (const tile of container.querySelectorAll(
                '[data-friend-overlap="true"]',
            )) {
                expect(tile).toHaveStyle({ opacity: sharedIsSelected ? "1" : "0.5" })
            }
            expect(ordinaryTile).toHaveStyle({
                opacity:
                    selectedItem.kind === "lecture" &&
                    selectedItem.data.id === otherLecture.id
                        ? "1"
                        : "0.5",
            })
        }

        rerender(
            <CustomTimeTableGrid
                timetableItems={timetableItems}
                needLectureDeletable={false}
                needTimeFilter={false}
            />,
        )
        expect(screen.queryByText("friends.overlapLabel")).not.toBeInTheDocument()
        expect(container.querySelectorAll("[data-friend-overlap]")).toHaveLength(0)
    })

    it("shows weekend lecture and custom slots in a seven-day grid while keeping exact-minute slots in overflow", () => {
        const weekendLecture = {
            ...lecture,
            classes: [
                { ...lecture.classes[0]!, day: 5 },
                { ...lecture.classes[0]!, day: 6 },
            ],
        }
        const weekendBlock = {
            ...block,
            times: [
                { day: 6, begin: 840, end: 900 },
                { day: 5, begin: 635, end: 695 },
            ],
        }
        const timetableItems: TimetableItem[] = [
            { kind: "lecture", data: weekendLecture },
            { kind: "custom", data: weekendBlock },
        ]
        const { container, rerender } = render(
            <CustomTimeTableGrid timetableItems={timetableItems} displayedDayCount={7} />,
        )
        const mainGrid = container.querySelector(".timetable-grid-wrapper")!
        const overflowGrid = container.querySelector(".overflow-grid-wrapper")!
        expect(screen.getByText("common.days.saturday")).toBeInTheDocument()
        expect(screen.getByText("common.days.sunday")).toBeInTheDocument()
        expect(mainGrid.querySelectorAll(".background-grid-block")).toHaveLength(7 * 32)
        expect(mainGrid.querySelectorAll(".lecture-tile")).toHaveLength(2)
        expect(mainGrid.querySelectorAll(".custom-block-tile")).toHaveLength(1)
        expect(mainGrid.querySelector('[data-custom-block-id="7"]')).toHaveStyle({
            gridColumn: "7",
        })
        expect(overflowGrid.querySelectorAll(".lecture-tile")).toHaveLength(0)
        expect(overflowGrid.querySelectorAll(".custom-block-tile")).toHaveLength(1)
        expect(overflowGrid.querySelector('[data-custom-block-id="7"]')).toHaveStyle({
            gridColumn: "6",
        })

        rerender(<CustomTimeTableGrid timetableItems={timetableItems} />)
        expect(screen.queryByText("common.days.saturday")).not.toBeInTheDocument()
        expect(screen.queryByText("common.days.sunday")).not.toBeInTheDocument()
        expect(mainGrid.querySelectorAll(".background-grid-block")).toHaveLength(5 * 32)
        expect(
            mainGrid.querySelectorAll(".lecture-tile, .custom-block-tile"),
        ).toHaveLength(0)
        expect(overflowGrid.querySelectorAll(".lecture-tile")).toHaveLength(2)
        expect(overflowGrid.querySelectorAll(".custom-block-tile")).toHaveLength(2)
        for (const tile of overflowGrid.querySelectorAll('[data-custom-block-id="7"]')) {
            expect(tile).toHaveStyle({ gridColumn: "5" })
        }
    })

    it("ignores a single-cell click when adding custom block times, and only commits multi-slot drags", () => {
        const setTimeFilter = vi.fn()
        const { container } = render(
            <CustomTimeTableGrid
                timetableItems={[]}
                isCustomBlockSectionOpen
                setTimeFilter={setTimeFilter}
            />,
        )
        const cell1 = container.querySelector(
            '.background-grid-block[data-day-idx="1"][data-time-idx="4"]',
        )!
        const cell2 = container.querySelector(
            '.background-grid-block[data-day-idx="1"][data-time-idx="5"]',
        )!
        const grid = cell1.parentElement!
        const originalElementFromPoint = document.elementFromPoint
        document.elementFromPoint = vi.fn((x: number) =>
            x === 10 ? cell1 : cell2,
        ) as typeof document.elementFromPoint
        try {
            fireEvent.pointerDown(grid, { clientX: 10, clientY: 10 })
            fireEvent.pointerUp(grid, { clientX: 10, clientY: 10 })
            expect(setTimeFilter).not.toHaveBeenCalled()

            fireEvent.pointerDown(grid, { clientX: 10, clientY: 10 })
            fireEvent.pointerMove(grid, { clientX: 20, clientY: 20 })
            fireEvent.pointerUp(grid, { clientX: 20, clientY: 20 })
            expect(setTimeFilter).toHaveBeenCalledExactlyOnceWith({
                day: 1,
                begin: 600,
                end: 660,
            })
        } finally {
            document.elementFromPoint = originalElementFromPoint
        }
    })
})
