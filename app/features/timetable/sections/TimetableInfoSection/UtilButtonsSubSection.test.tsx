import { beforeEach, describe, expect, it, vi } from "vitest"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { act, fireEvent, render, screen, waitFor } from "@/test/test-utils"

import UtilButtonsSubSection from "./UtilButtonsSubSection"

const mocks = vi.hoisted(() => ({
    captureException: vi.fn(),
    copyImage: vi.fn(),
    downloadCalendar: vi.fn(),
    downloadImage: vi.fn(),
    loggerError: vi.fn(),
}))

vi.mock("@sentry/react", () => ({
    captureException: mocks.captureException,
}))
vi.mock("@/features/timetable/sections/TimetableInfoSection/util/shareFunctions", () => ({
    copyTimetableImageToClipboard: mocks.copyImage,
    downloadTimetableCalendar: mocks.downloadCalendar,
    downloadTimetableImage: mocks.downloadImage,
}))
vi.mock("@/utils/api/useAPI", () => ({
    useAPI: () => ({
        query: {
            data: {
                semesters: [
                    {
                        year: 2026,
                        semester: SemesterEnum.SPRING,
                        beginning: "2026-02-01",
                        end: "2026-06-30",
                    },
                ],
            },
        },
    }),
}))
vi.mock("@/utils/logger", () => ({
    default: { error: mocks.loggerError },
}))
vi.mock("@/utils/useIsDevice", () => ({
    default: () => false,
}))
vi.mock("@/utils/zustand/useThemeStore", () => ({
    default: () => ({ displayedTheme: "light" }),
}))

const renderSubject = () =>
    render(
        <UtilButtonsSubSection
            timetableName="Test timetable"
            timetableLectures={[]}
            year={2026}
            semester={SemesterEnum.SPRING}
        />,
    )

function getExportButtons() {
    const [copyButton, imageButton, calendarButton] = screen.getAllByRole("button")
    if (!copyButton || !imageButton || !calendarButton) {
        throw new Error("Expected all timetable export buttons to render")
    }
    return { copyButton, imageButton, calendarButton }
}

describe("UtilButtonsSubSection", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("blocks duplicate and cross-export actions while an export is pending", async () => {
        let resolveCopy: ((copied: boolean) => void) | undefined
        mocks.copyImage.mockImplementation(
            () =>
                new Promise<boolean>((resolve) => {
                    resolveCopy = resolve
                }),
        )

        renderSubject()
        const { copyButton, imageButton } = getExportButtons()

        fireEvent.click(copyButton)
        fireEvent.click(copyButton)
        fireEvent.click(imageButton)

        expect(mocks.copyImage).toHaveBeenCalledOnce()
        expect(mocks.downloadImage).not.toHaveBeenCalled()
        expect(copyButton).toBeDisabled()
        expect(imageButton).toBeDisabled()

        await act(async () => {
            resolveCopy?.(true)
        })
    })

    it("captures unexpected export failures once and restores the buttons", async () => {
        const error = new Error("canvas failed")
        mocks.copyImage.mockRejectedValueOnce(error)

        renderSubject()
        const { copyButton } = getExportButtons()
        fireEvent.click(copyButton)

        await waitFor(() => expect(copyButton).toBeEnabled())
        expect(mocks.captureException).toHaveBeenCalledWith(error, {
            tags: { type: "timetable_export", action: "image_copy" },
        })
        expect(mocks.loggerError).toHaveBeenCalledOnce()
    })
})
