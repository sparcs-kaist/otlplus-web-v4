import { useState } from "react"

import styled from "@emotion/styled"

import { clientEnv } from "@/env"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: min(100%, 420px);
    margin: 48px auto;
    padding: 24px;
    color: ${({ theme }) => theme.colors.Text.default};
    background: ${({ theme }) => theme.colors.Background.Section.default};
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-radius: 12px;

    input,
    button {
        padding: 12px;
        font: inherit;
        color: inherit;
        background: ${({ theme }) => theme.colors.Background.Block.default};
        border: 1px solid ${({ theme }) => theme.colors.Line.default};
        border-radius: 6px;
    }

    button {
        cursor: pointer;
    }

    button:disabled {
        cursor: wait;
        opacity: 0.6;
    }
`

type Tokens = { accessToken: string; refreshToken: string }

export default function DevSsoLoginForm({
    onSuccess,
}: {
    onSuccess: (tokens: Tokens) => void
}) {
    const [studentId, setStudentId] = useState("")
    const [pending, setPending] = useState(false)
    const [error, setError] = useState("")

    const login = async () => {
        if (pending) return
        setPending(true)
        setError("")
        try {
            const response = await fetch(
                new URL("/session/dev/login", clientEnv.VITE_APP_API_URL),
                {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ studentId }),
                },
            )
            if (!response.ok) {
                const message =
                    response.status === 401
                        ? "SSO 인증이 만료되었습니다. 다시 인증해 주세요."
                        : response.status === 404
                          ? "해당 학번의 사용자가 dev DB에 없습니다."
                          : response.status === 400
                            ? "입력한 학번과 해당 계정의 로그인 정보를 확인해 주세요."
                            : "로그인에 실패했습니다. 잠시 후 다시 시도해 주세요."
                setError(message)
                return
            }
            const tokens: Tokens = await response.json()
            if (!tokens.accessToken || !tokens.refreshToken)
                throw new Error("Missing tokens")
            onSuccess(tokens)
        } catch {
            setError("로그인 요청을 완료하지 못했습니다. 다시 시도해 주세요.")
        } finally {
            setPending(false)
        }
    }

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                void login()
            }}
        >
            <h1>Dev 테스트 로그인</h1>
            <p>
                SSO 인증 후 테스트할 계정의 학번을 입력해 주세요. 인증은 10분간
                유효합니다.
            </p>
            <label htmlFor="dev-student-id">학번</label>
            <input
                id="dev-student-id"
                name="studentId"
                inputMode="numeric"
                autoComplete="off"
                pattern="[1-9][0-9]{0,14}"
                maxLength={15}
                required
                value={studentId}
                onChange={(event) => setStudentId(event.target.value)}
                disabled={pending}
                aria-describedby={error ? "dev-login-error" : undefined}
            />
            {error && (
                <p id="dev-login-error" role="alert">
                    {error}
                </p>
            )}
            <button type="submit" disabled={pending}>
                {pending ? "로그인 중…" : "이 계정으로 테스트하기"}
            </button>
            <a href={`${clientEnv.VITE_APP_API_URL}/session/login`}>
                SPARCS SSO 다시 인증
            </a>
        </Form>
    )
}
