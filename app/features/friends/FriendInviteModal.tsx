import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import LinkIcon from "@mui/icons-material/Link"
import RefreshIcon from "@mui/icons-material/Refresh"
import ShareIcon from "@mui/icons-material/Share"
import { useTranslation } from "react-i18next"

import Modal from "@/common/components/Modal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import useIsDevice from "@/utils/useIsDevice"

import FriendInviteButton, {
    FriendInviteButtonContent,
} from "./components/FriendInviteButton"
import FriendInviteQR from "./components/FriendInviteQR"
import useFriendInviteCode from "./hooks/useFriendInviteCode"
import {
    copyFriendInvite,
    copyTextToClipboard,
    friendInviteMessage,
    shareFriendInvite,
} from "./utils/shareFriendInvite"

const Preview = styled.div`
    padding: 14px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.Background.Block.default};
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: 14px;
    line-height: 21px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`

const ShareButton = styled(FriendInviteButton)`
    background: ${({ theme }) => theme.colors.Highlight.default};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.Highlight.dark};
    }
`

const InviteActions = styled.div<{ $isMobile: boolean }>`
    display: grid;
    grid-template-columns: ${({ $isMobile }) =>
        $isMobile ? "minmax(0, 1fr) auto" : "auto minmax(0, 1fr) auto"};
    grid-template-areas: ${({ $isMobile }) =>
        $isMobile ? '"copy copy" "regenerate share"' : '"regenerate copy share"'};
    align-items: end;
    gap: 8px 16px;
`

interface FriendInviteModalProps {
    isOpen: boolean
    onClose: () => void
    userName: string
}

export default function FriendInviteModal({
    isOpen,
    onClose,
    userName,
}: FriendInviteModalProps) {
    const { t } = useTranslation()
    const isMobile = useIsDevice("mobile")
    const [feedback, setFeedback] = useState<{
        action: "regenerate" | "link" | "message" | "share"
    } | null>(null)
    const reportedError = useRef<unknown>(null)
    const [qrBusy, setQrBusy] = useState(false)
    const [confirmRegenerate, setConfirmRegenerate] = useState(false)
    const { query, regenerate, regenerateCode, code } = useFriendInviteCode(isOpen, () =>
        setConfirmRegenerate(false),
    )
    const { reset: resetRegenerate } = regenerate

    const inviteUrl = code
        ? `${new URL("/friends/invite", window.location.origin)}#${code}`
        : ""

    useEffect(() => {
        setFeedback(null)
        setQrBusy(false)
    }, [isOpen, inviteUrl])

    useEffect(() => {
        if (isOpen && regenerate.isSuccess) setFeedback({ action: "regenerate" })
    }, [isOpen, regenerate.isSuccess])

    useEffect(() => {
        if (!feedback) return
        const timeout = setTimeout(() => setFeedback(null), 2000)
        return () => clearTimeout(timeout)
    }, [feedback])

    const codeError = regenerate.isPending ? null : (regenerate.error ?? query.error)
    const codeErrorMessage = regenerate.error ? "regenerateError" : "inviteError"
    useEffect(() => {
        if (!isOpen) {
            reportedError.current = null
        } else if (codeError && reportedError.current !== codeError) {
            reportedError.current = codeError
            window.alert(t(`friends.${codeErrorMessage}`))
        }
    }, [isOpen, codeError, codeErrorMessage, t])

    const handleCopy = async (kind: "link" | "message") => {
        if (!inviteUrl) return
        setFeedback(null)
        try {
            if (kind === "link") await copyTextToClipboard(inviteUrl)
            else await copyFriendInvite(userName, inviteUrl)
            setFeedback({ action: kind })
        } catch {
            window.alert(t("friends.copyError"))
        }
    }

    const handleShare = async () => {
        if (!inviteUrl) return
        setFeedback(null)
        try {
            const result = await shareFriendInvite(userName, inviteUrl)
            if (result !== "cancelled") setFeedback({ action: "share" })
        } catch {
            window.alert(t("friends.shareError"))
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                setConfirmRegenerate(false)
                if (!regenerate.isPending) resetRegenerate()
                onClose()
            }}
            title={t("friends.inviteTitle")}
            fullScreen={isMobile}
        >
            <FlexWrapper direction="column" gap={16} align="stretch">
                <Typography
                    type="Normal"
                    color={confirmRegenerate ? "Text.default" : "Text.placeholder"}
                    aria-live="polite"
                >
                    {t(
                        confirmRegenerate
                            ? "friends.regenerateConfirm"
                            : "friends.inviteDescription",
                    )}
                </Typography>
                {query.isPending && (
                    <Typography type="Normal" color="Text.placeholder" role="status">
                        {t("friends.inviteLoading")}
                    </Typography>
                )}
                {regenerate.isPending && (
                    <Typography type="Normal" color="Text.placeholder" role="status">
                        {t("friends.regeneratingCode")}
                    </Typography>
                )}
                {code && (
                    <>
                        <Typography
                            type="BigBold"
                            color="Text.default"
                            className="mp-block mp-sensitive"
                        >
                            {t("friends.code")}: {code}
                        </Typography>
                        <Preview className="mp-block mp-sensitive">
                            {friendInviteMessage(userName, inviteUrl)}
                        </Preview>
                        <FriendInviteQR
                            key={inviteUrl}
                            inviteUrl={inviteUrl}
                            qrBusy={qrBusy}
                            setQrBusy={setQrBusy}
                        />
                    </>
                )}
                <InviteActions $isMobile={isMobile}>
                    <FlexWrapper
                        direction="row"
                        gap={8}
                        style={{ gridArea: "regenerate", flexWrap: "wrap-reverse" }}
                    >
                        <FriendInviteButton
                            type="button"
                            disabled={!code || regenerate.isPending || qrBusy}
                            onClick={() => {
                                if (confirmRegenerate) regenerateCode({})
                                else {
                                    setFeedback(null)
                                    resetRegenerate()
                                    setConfirmRegenerate(true)
                                }
                            }}
                        >
                            <FriendInviteButtonContent
                                icon={<RefreshIcon />}
                                label={t("friends.regenerateCode")}
                                successLabel={t("friends.regenerateSuccess")}
                                succeeded={feedback?.action === "regenerate"}
                            />
                        </FriendInviteButton>
                        {confirmRegenerate && (
                            <FriendInviteButton
                                type="button"
                                disabled={regenerate.isPending}
                                onClick={() => setConfirmRegenerate(false)}
                            >
                                {t("friends.cancel")}
                            </FriendInviteButton>
                        )}
                    </FlexWrapper>
                    <FlexWrapper
                        direction="row"
                        gap={8}
                        justify="flex-end"
                        style={{ gridArea: "copy", flexWrap: "wrap" }}
                    >
                        <FriendInviteButton
                            type="button"
                            disabled={!code}
                            onClick={() => handleCopy("link")}
                        >
                            <FriendInviteButtonContent
                                icon={<LinkIcon />}
                                label={t("friends.copyLink")}
                                successLabel={t("friends.copySuccess")}
                                succeeded={feedback?.action === "link"}
                            />
                        </FriendInviteButton>
                        <FriendInviteButton
                            type="button"
                            disabled={!code}
                            onClick={() => handleCopy("message")}
                        >
                            <FriendInviteButtonContent
                                icon={<ContentCopyIcon />}
                                label={t("friends.copy")}
                                successLabel={t("friends.copySuccess")}
                                succeeded={feedback?.action === "message"}
                            />
                        </FriendInviteButton>
                    </FlexWrapper>
                    <ShareButton
                        type="button"
                        disabled={!code}
                        onClick={handleShare}
                        style={{ gridArea: "share" }}
                    >
                        <FriendInviteButtonContent
                            icon={<ShareIcon />}
                            label={t("friends.share")}
                            successLabel={t("friends.shareSuccess")}
                            succeeded={feedback?.action === "share"}
                        />
                    </ShareButton>
                </InviteActions>
            </FlexWrapper>
        </Modal>
    )
}
