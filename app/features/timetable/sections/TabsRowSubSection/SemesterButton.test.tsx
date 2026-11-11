import { expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"

import SemesterButton from "./SemesterButton"

vi.mock("@/utils/api/useAPI", () => ({
    useAPI: (_method: string, path: string) => ({
        query: {
            data:
                path === "/semesters/current"
                    ? { year: 2026, semester: 2 }
                    : {
                          semesters: [1, 2, 3, 4].map((semester) => ({
                              year: 2026,
                              semester,
                          })),
                      },
        },
    }),
}))
vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))

it("initializes from the current semester, preserves an explicit choice, and navigates seasonal terms", () => {
    const onChange = vi.fn()
    const { rerender } = render(
        <SemesterButton year={-1} semester={1} onChange={onChange} />,
    )
    expect(onChange).toHaveBeenCalledWith(2026, 2)
    onChange.mockClear()
    rerender(<SemesterButton year={2026} semester={3} onChange={onChange} />)
    expect(onChange).not.toHaveBeenCalled()
    fireEvent.click(screen.getByLabelText("friends.previousSemester"))
    expect(onChange).toHaveBeenLastCalledWith(2026, 2)
    fireEvent.click(screen.getByLabelText("friends.nextSemester"))
    expect(onChange).toHaveBeenLastCalledWith(2026, 4)
})
