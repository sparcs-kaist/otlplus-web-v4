import { beforeEach, expect, it, vi } from "vitest"

import { fireEvent, render, screen } from "@/test/test-utils"
import { useAPI } from "@/utils/api/useAPI"

import FriendRow from "./FriendRow"

vi.mock("@/utils/api/useAPI", () => ({ useAPI: vi.fn() }))
vi.mock("react-i18next", () => ({ useTranslation: () => ({ t: (key: string) => key }) }))

const requests = new Map<string, ReturnType<typeof vi.fn>>()
beforeEach(() => {
    requests.clear()
    vi.mocked(useAPI).mockImplementation((_method, path) => {
        if (!requests.has(path)) requests.set(path, vi.fn())
        return {
            mutation: { isPending: false },
            requestFunction: requests.get(path),
        } as unknown as ReturnType<typeof useAPI>
    })
})

it("updates a newly selected friend's favorite and reflects changed data for the same ID", () => {
    const props = {
        selected: true,
        showSchedule: true,
        onSelect: vi.fn(),
        onDelete: vi.fn(),
    }
    const friend = {
        id: 7,
        name: "First friend",
        isFavorite: false,
        hasScheduleNow: false,
    }
    const { rerender } = render(<FriendRow {...props} friend={friend} />)
    fireEvent.click(screen.getByRole("button", { name: "friends.favorite" }))
    expect(requests.get("/friends/7/favorite")).toHaveBeenCalledWith({ isFavorite: true })
    expect(props.onSelect).not.toHaveBeenCalled()

    rerender(
        <FriendRow
            {...props}
            friend={{
                ...friend,
                name: "Renamed friend",
                isFavorite: true,
                hasScheduleNow: true,
            }}
        />,
    )
    expect(screen.getByText("Renamed friend")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "friends.favorite" })).toHaveAttribute(
        "aria-pressed",
        "true",
    )
    expect(screen.getByRole("img", { name: "friends.scheduleNow" })).toBeInTheDocument()

    rerender(<FriendRow {...props} friend={{ ...friend, id: 8 }} />)
    fireEvent.click(screen.getByRole("button", { name: "friends.favorite" }))
    expect(requests.get("/friends/8/favorite")).toHaveBeenCalledWith({ isFavorite: true })
    expect(requests.get("/friends/7/favorite")).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(screen.getByRole("button", { name: /First friend/ }), {
        key: "Enter",
    })
    expect(props.onSelect).toHaveBeenCalledOnce()
})
