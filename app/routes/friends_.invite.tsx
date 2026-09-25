import { useEffect, useRef } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"
import { HttpStatusCode, isAxiosError } from "axios"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { FriendCodeSchema } from "@/common/schemas/friend"
import FriendLoginButton from "@/features/friends/FriendLoginButton"
import { invalidateFriendQueries } from "@/features/friends/friendQueries"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

export const meta = () => [
    { title: "OTL 시간표 친구 초대" },
    {
        name: "description",
        content: "친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.",
    },
    { name: "referrer", content: "no-referrer" },
    { property: "og:title", content: "OTL 시간표 친구 초대" },
    {
        property: "og:description",
        content: "친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.",
    },
]

const Page = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
    text-align: center;
`

const Card = styled(FlexWrapper)`
    width: min(100%, 440px);
    padding: 32px;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`

export default function FriendInvitePage() {
    const { t } = useTranslation()
    const location = useLocation()
    let code = ""
    try {
        const parsed = FriendCodeSchema.safeParse(
            decodeURIComponent(location.hash.slice(1)),
        )
        if (parsed.success) code = parsed.data
    } catch {
        // Malformed links should show the invalid-invite message, not crash the page.
    }
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { status } = useUserStore()
    const acceptingCode = useRef<string | null>(null)
    const { mutation, requestFunction } = useAPI("POST", "/friends", {
        onSuccess: async ({ friend }) => {
            await invalidateFriendQueries(queryClient)
            navigate(`/friends?friendId=${friend.id}`, {
                replace: true,
                state: { friendAddedName: friend.name },
            })
        },
    })

    useEffect(() => {
        if (status === "idle") acceptingCode.current = null
        if (status !== "success" || !code || acceptingCode.current === code) return
        acceptingCode.current = code
        requestFunction({ code })
    }, [status, code, requestFunction])

    const errorStatus = isAxiosError(mutation.error)
        ? mutation.error.response?.status
        : undefined
    const errorMessage =
        !code ||
        errorStatus === HttpStatusCode.BadRequest ||
        errorStatus === HttpStatusCode.NotFound
            ? "friends.inviteInvalid"
            : errorStatus === HttpStatusCode.TooManyRequests
              ? "friends.inviteRateLimited"
              : "friends.inviteAddError"

    return (
        <Page direction="column" gap={0} align="center" justify="center">
            <Card direction="column" gap={20} align="center">
                <Typography type="BigBold" color="Text.default">
                    {t("friends.inviteTitle")}
                </Typography>
                {!code || (mutation.isError && status !== "idle") ? (
                    <Typography type="Normal" color="Highlight.default" role="alert">
                        {t(errorMessage)}
                    </Typography>
                ) : status === "idle" ? (
                    <>
                        <Typography type="Normal" color="Text.placeholder">
                            {t("friends.inviteLogin")}
                        </Typography>
                        <FriendLoginButton />
                    </>
                ) : (
                    <Typography type="Normal" color="Text.placeholder">
                        {t("friends.inviteAccepting")}
                    </Typography>
                )}
            </Card>
        </Page>
    )
}
