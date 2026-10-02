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
    overflow-y: auto;
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

const SelfInviteContent = styled(FlexWrapper)`
    width: min(100%, 560px);
    flex-shrink: 0;
    margin: auto;
`

const SelfInviteImage = styled.img`
    width: min(100%, 340px);
    height: auto;
    max-height: 36svh;
    object-fit: contain;
`

const SelfInviteTitle = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.BiggerBold.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.BiggerBold.fontWeight};
    line-height: 1.5;
    word-break: keep-all;
    overflow-wrap: anywhere;
`

const ReturnButton = styled.button`
    min-height: 44px;
    padding: 12px 24px;
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.Highlight.default};
    color: ${({ theme }) => theme.colors.Text.onHighlight.default};
    font: inherit;
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.Highlight.dark};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 3px;
    }
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
    const { status, user } = useUserStore()
    const acceptingInvite = useRef<string | null>(null)
    const inviteKey = user && code ? `${user.id}:${code}` : null
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
        if (status === "idle") acceptingInvite.current = null
        if (status !== "success" || !inviteKey || acceptingInvite.current === inviteKey)
            return
        acceptingInvite.current = inviteKey
        requestFunction({ code })
    }, [status, code, inviteKey, requestFunction])

    const errorResponse = isAxiosError<{ message?: { code?: string } }>(mutation.error)
        ? mutation.error.response
        : undefined
    const errorStatus = errorResponse?.status
    const isSelfInvite =
        status === "success" &&
        inviteKey !== null &&
        acceptingInvite.current === inviteKey &&
        mutation.isError &&
        errorStatus === HttpStatusCode.BadRequest &&
        errorResponse?.data?.message?.code === "SELF_FRIENDSHIP"
    const errorMessage =
        !code ||
        errorStatus === HttpStatusCode.BadRequest ||
        errorStatus === HttpStatusCode.NotFound
            ? "friends.inviteInvalid"
            : errorStatus === HttpStatusCode.TooManyRequests
              ? "friends.inviteRateLimited"
              : "friends.inviteAddError"

    if (isSelfInvite) {
        return (
            <Page direction="column" gap={0} align="center" justify="flex-start">
                <SelfInviteContent direction="column" gap={24} align="center">
                    <SelfInviteImage
                        src="/images/friends/self-invite.png"
                        alt={t("friends.selfInviteImageAlt")}
                        width={1024}
                        height={1024}
                    />
                    <FlexWrapper direction="column" gap={12} align="center" role="status">
                        <SelfInviteTitle>
                            {t("friends.selfInviteTitle", { name: user?.name })}
                        </SelfInviteTitle>
                        <Typography type="Big" color="Text.light">
                            {t("friends.selfInviteDescription")}
                        </Typography>
                    </FlexWrapper>
                    <ReturnButton
                        type="button"
                        onClick={() => navigate("/friends", { replace: true })}
                    >
                        {t("friends.backToFriends")}
                    </ReturnButton>
                </SelfInviteContent>
            </Page>
        )
    }

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
