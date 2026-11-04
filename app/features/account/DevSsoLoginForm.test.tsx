import userEvent from "@testing-library/user-event"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { axiosClient } from "@/libs/axios"
import { clearQueryCache } from "@/libs/offline"
import LoginSuccessPage from "@/routes/login.success"
import { render, screen, waitFor } from "@/test/test-utils"

vi.mock("@/env", () => ({
    clientEnv: { VITE_APP_API_URL: "https://api.otl.dev.sparcs.org" },
}))
vi.mock("@/libs/axios", () => ({ axiosClient: { get: vi.fn() } }))
vi.mock("@/libs/offline", () => ({ clearQueryCache: vi.fn() }))
vi.mock("@/libs/mixpanel", () => ({ identifyUser: vi.fn(), trackEvent: vi.fn() }))
vi.mock("react-i18next", () => ({
    useTranslation: () => ({ i18n: { resolvedLanguage: "ko" } }),
}))

const fetchMock = vi.fn()
const showPage = (hash = "devLogin=1") =>
    render(
        <MemoryRouter initialEntries={[`/login/success#${hash}`]}>
            <Routes>
                <Route path="/login/success" element={<LoginSuccessPage />} />
                <Route path="/" element={<p>Logged in</p>} />
            </Routes>
        </MemoryRouter>,
    )

beforeEach(() => {
    vi.clearAllMocks()
    fetchMock.mockReset()
    vi.stubGlobal("fetch", fetchMock)
    vi.mocked(axiosClient.get).mockResolvedValue({ data: { semesters: [] } })
})
afterEach(() => vi.unstubAllGlobals())

describe("dev SSO login", () => {
    it("waits for a student ID, exchanges the HttpOnly cookie and finishes the existing login flow", async () => {
        fetchMock.mockResolvedValue({
            ok: true,
            json: async () => ({ accessToken: "access", refreshToken: "refresh" }),
        })
        const user = userEvent.setup()
        showPage()
        expect(
            screen.getByRole("heading", { name: "Dev 테스트 로그인" }),
        ).toBeInTheDocument()
        expect(axiosClient.get).not.toHaveBeenCalled()
        await user.type(screen.getByLabelText("학번"), "20201234")
        await user.click(screen.getByRole("button", { name: "이 계정으로 테스트하기" }))
        await screen.findByText("Logged in")
        expect(fetchMock).toHaveBeenCalledWith(
            new URL("https://api.otl.dev.sparcs.org/session/dev/login"),
            {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ studentId: "20201234" }),
            },
        )
        expect(clearQueryCache).toHaveBeenCalled()
        expect(axiosClient.get).toHaveBeenCalledWith(
            "/api/v2/users/info",
            expect.any(Object),
        )
    })

    it.each([
        [401, "SSO 인증이 만료되었습니다. 다시 인증해 주세요."],
        [404, "해당 학번의 사용자가 dev DB에 없습니다."],
    ])(
        "keeps the form and offers SSO reauthentication on HTTP %s",
        async (status, message) => {
            fetchMock.mockResolvedValue({ ok: false, status })
            const user = userEvent.setup()
            showPage()
            await user.type(screen.getByLabelText("학번"), "20201234")
            await user.click(
                screen.getByRole("button", { name: "이 계정으로 테스트하기" }),
            )
            expect(await screen.findByRole("alert")).toHaveTextContent(message)
            expect(
                screen.getByRole("link", { name: "SPARCS SSO 다시 인증" }),
            ).toHaveAttribute("href", "https://api.otl.dev.sparcs.org/session/login")
            expect(axiosClient.get).not.toHaveBeenCalled()
        },
    )

    it("uses native input validation before sending a student ID", async () => {
        const user = userEvent.setup()
        showPage()
        await user.click(screen.getByRole("button", { name: "이 계정으로 테스트하기" }))
        await user.type(screen.getByLabelText("학번"), "not-a-number")
        await user.click(screen.getByRole("button", { name: "이 계정으로 테스트하기" }))
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it("allows retrying a network failure", async () => {
        fetchMock.mockRejectedValue(new Error("offline"))
        const user = userEvent.setup()
        showPage()
        await user.type(screen.getByLabelText("학번"), "20201234")
        await user.click(screen.getByRole("button", { name: "이 계정으로 테스트하기" }))
        await screen.findByRole("alert")
        expect(
            screen.getByRole("button", { name: "이 계정으로 테스트하기" }),
        ).toBeEnabled()
    })

    it("preserves the normal SSO token callback", async () => {
        showPage("accessToken=normal-access&refreshToken=normal-refresh")
        await waitFor(() => expect(screen.getByText("Logged in")).toBeInTheDocument())
        expect(fetchMock).not.toHaveBeenCalled()
        expect(screen.queryByLabelText("학번")).not.toBeInTheDocument()
    })
})
