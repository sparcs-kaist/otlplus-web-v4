import { create } from "zustand"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"

interface TimetableUIState {
    // 1. 시간표 & 리스트 상호작용
    hoveredLectures: Lecture[]
    selectedLectures: Lecture[]
    timeFilters: TimeBlock[] | null

    // 2. 검색 상태 (단축키 훅과 리스트 섹션 공유용)
    searchLectures: Lecture[]

    // 3. 모달 및 UI 토글
    isShortcutModalOpen: boolean
    mobileSearchOpen: boolean
    isKeyboardNavigating: boolean

    // 4. 시간표 메타데이터 (Operations 훅 등에서 사용)
    currentTimetableId: number | null
    currentTimetableName: string
    year: number
    semesterEnum: SemesterEnum

    // 5. Flash State (잘라내기, undo 등 효과)
    flashLectureIds: number[] | null

    timeBlocks: TimeBlock[] | null
    selectedCustomBlock: CustomBlock | null
    setSelectedCustomBlock: (
        blockOrUpdater:
            | CustomBlock
            | null
            | ((prev: CustomBlock | null) => CustomBlock | null),
    ) => void
    isCustomBlockSectionOpen: boolean

    // Actions
    setHoveredLectures: (
        lecturesOrUpdater: Lecture[] | ((prev: Lecture[]) => Lecture[]),
    ) => void
    setSelectedLectures: (
        lecturesOrUpdater: Lecture[] | ((prev: Lecture[]) => Lecture[]),
    ) => void
    setTimeFilters: (
        filtersOrUpdater:
            | TimeBlock[]
            | null
            | ((prev: TimeBlock[] | null) => TimeBlock[] | null),
    ) => void
    setSearchLectures: (
        lecturesOrUpdater: Lecture[] | ((prev: Lecture[]) => Lecture[]),
    ) => void
    setIsShortcutModalOpen: (val: boolean | ((prev: boolean) => boolean)) => void
    setMobileSearchOpen: (val: boolean | ((prev: boolean) => boolean)) => void
    setIsKeyboardNavigating: (val: boolean | ((prev: boolean) => boolean)) => void

    setCurrentTimetableId: (
        idOrUpdater: number | null | ((prev: number | null) => number | null),
    ) => void
    setCurrentTimetableName: (nameOrUpdater: string | ((prev: string) => string)) => void
    setYear: (yearOrUpdater: number | ((prev: number) => number)) => void
    setSemesterEnum: (
        semesterOrUpdater: SemesterEnum | ((prev: SemesterEnum) => SemesterEnum),
    ) => void
    setTimeBlocks: (
        blocksOrUpdater:
            | TimeBlock[]
            | null
            | ((prev: TimeBlock[] | null) => TimeBlock[] | null),
    ) => void
    setIsCustomBlockSectionOpen: (val: boolean | ((prev: boolean) => boolean)) => void

    // Flash Action
    triggerFlash: (ids: number[]) => void
}

export const useTimetableUIStore = create<TimetableUIState>((set) => ({
    // Initial States
    hoveredLectures: [],
    selectedLectures: [],
    timeFilters: null,
    searchLectures: [],
    isShortcutModalOpen: false,
    mobileSearchOpen: false,
    isKeyboardNavigating: false,

    currentTimetableId: null,
    currentTimetableName: "",
    year: -1,
    semesterEnum: SemesterEnum.SPRING,

    flashLectureIds: null,

    timeBlocks: [],
    selectedCustomBlock: null,
    isCustomBlockSectionOpen: false,

    // Actions
    setHoveredLectures: (val) =>
        set((state) => ({
            hoveredLectures: typeof val === "function" ? val(state.hoveredLectures) : val,
        })),
    setSelectedLectures: (val) =>
        set((state) => ({
            selectedLectures:
                typeof val === "function" ? val(state.selectedLectures) : val,
        })),
    setTimeFilters: (val) =>
        set((state) => ({
            timeFilters: typeof val === "function" ? val(state.timeFilters) : val,
        })),
    setSearchLectures: (val) =>
        set((state) => ({
            searchLectures: typeof val === "function" ? val(state.searchLectures) : val,
        })),
    setIsShortcutModalOpen: (val) =>
        set((state) => ({
            isShortcutModalOpen:
                typeof val === "function" ? val(state.isShortcutModalOpen) : val,
        })),
    setMobileSearchOpen: (val) =>
        set((state) => ({
            mobileSearchOpen:
                typeof val === "function" ? val(state.mobileSearchOpen) : val,
        })),
    setIsKeyboardNavigating: (val) =>
        set((state) => ({
            isKeyboardNavigating:
                typeof val === "function" ? val(state.isKeyboardNavigating) : val,
        })),

    setCurrentTimetableId: (val) =>
        set((state) => ({
            currentTimetableId:
                typeof val === "function" ? val(state.currentTimetableId) : val,
        })),
    setCurrentTimetableName: (val) =>
        set((state) => ({
            currentTimetableName:
                typeof val === "function" ? val(state.currentTimetableName) : val,
        })),
    setYear: (val) =>
        set((state) => ({
            year: typeof val === "function" ? val(state.year) : val,
        })),
    setSemesterEnum: (val) =>
        set((state) => ({
            semesterEnum: typeof val === "function" ? val(state.semesterEnum) : val,
        })),
    setTimeBlocks: (val) =>
        set((state) => ({
            timeBlocks: typeof val === "function" ? val(state.timeBlocks) : val,
        })),
    setIsCustomBlockSectionOpen: (val) =>
        set((state) => ({
            isCustomBlockSectionOpen:
                typeof val === "function" ? val(state.isCustomBlockSectionOpen) : val,
        })),
    setSelectedCustomBlock: (val) =>
        set((state) => ({
            selectedCustomBlock:
                typeof val === "function" ? val(state.selectedCustomBlock) : val,
        })),

    triggerFlash: (ids) => {
        set({ flashLectureIds: ids })
        setTimeout(() => {
            set((state) => {
                // Only clear if the current flash state matches what we just set
                if (state.flashLectureIds === ids) {
                    return { flashLectureIds: null }
                }
                return {}
            })
        }, 300)
    },
}))
