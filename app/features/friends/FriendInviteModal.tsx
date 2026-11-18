import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import CheckIcon from "@mui/icons-material/Check"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import LinkIcon from "@mui/icons-material/Link"
import RefreshIcon from "@mui/icons-material/Refresh"
import ShareIcon from "@mui/icons-material/Share"
import { useTranslation } from "react-i18next"

import Modal from "@/common/components/Modal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import useIsDevice from "@/utils/useIsDevice"

import FriendInviteButton from "./components/FriendInviteButton"
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
        action: "regenerate" | "link" | "message" | "share" | "shareCopy"
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
            if (result !== "cancelled")
                setFeedback({ action: result === "copied" ? "shareCopy" : "share" })
        } catch {
            window.alert(t("friends.shareError"))
        }
    }

    const regenerationControls = (
        <FlexWrapper direction="column" gap={8} align="stretch">
            <Typography type="Normal" color="Text.default">
                {t("friends.regenerateConfirm")}
            </Typography>
            <FlexWrapper direction="row" gap={8} justify="flex-end">
                <FriendInviteButton
                    type="button"
                    disabled={regenerate.isPending}
                    onClick={() => setConfirmRegenerate(false)}
                >
                    {t("friends.cancel")}
                </FriendInviteButton>
                <FriendInviteButton
                    type="button"
                    disabled={regenerate.isPending || qrBusy}
                    onClick={() => regenerateCode({})}
                >
                    {t("friends.regenerateCode")}
                </FriendInviteButton>
            </FlexWrapper>
        </FlexWrapper>
    )

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
                <Typography type="Normal" color="Text.placeholder">
                    {t("friends.inviteDescription")}
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
                {confirmRegenerate && regenerationControls}
                {code && (
                    <>
                        <FlexWrapper direction="row" gap={8} justify="space-between">
                            <Typography
                                type="BigBold"
                                color="Text.default"
                                className="mp-block mp-sensitive"
                            >
                                {t("friends.code")}: {code}
                            </Typography>
                            {!confirmRegenerate && (
                                <FriendInviteButton
                                    type="button"
                                    disabled={qrBusy}
                                    onClick={() => {
                                        setFeedback(null)
                                        resetRegenerate()
                                        setConfirmRegenerate(true)
                                    }}
                                >
                                    <Icon size={16}>
                                        {feedback?.action === "regenerate" ? (
                                            <CheckIcon />
                                        ) : (
                                            <RefreshIcon />
                                        )}
                                    </Icon>
                                    {t(
                                        feedback?.action === "regenerate"
                                            ? "friends.regenerateSuccess"
                                            : "friends.regenerateCode",
                                    )}
                                </FriendInviteButton>
                            )}
                        </FlexWrapper>
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
                <FlexWrapper
                    direction="row"
                    gap={8}
                    justify="flex-end"
                    style={{ flexWrap: "wrap" }}
                >
                    <FriendInviteButton
                        type="button"
                        disabled={!code}
                        onClick={() => handleCopy("link")}
                    >
                        <Icon size={16}>
                            {feedback?.action === "link" ? <CheckIcon /> : <LinkIcon />}
                        </Icon>
                        {t(
                            feedback?.action === "link"
                                ? "friends.copySuccess"
                                : "friends.copyLink",
                        )}
                    </FriendInviteButton>
                    <FriendInviteButton
                        type="button"
                        disabled={!code}
                        onClick={() => handleCopy("message")}
                    >
                        <Icon size={16}>
                            {feedback?.action === "message" ? (
                                <CheckIcon />
                            ) : (
                                <ContentCopyIcon />
                            )}
                        </Icon>
                        {t(
                            feedback?.action === "message"
                                ? "friends.copySuccess"
                                : "friends.copy",
                        )}
                    </FriendInviteButton>
                    <ShareButton type="button" disabled={!code} onClick={handleShare}>
                        <Icon size={16}>
                            {feedback?.action === "share" ||
                            feedback?.action === "shareCopy" ? (
                                <CheckIcon />
                            ) : (
                                <ShareIcon />
                            )}
                        </Icon>
                        {t(
                            feedback?.action === "share"
                                ? "friends.shareSuccess"
                                : feedback?.action === "shareCopy"
                                  ? "friends.copySuccess"
                                  : "friends.share",
                        )}
                    </ShareButton>
                </FlexWrapper>
            </FlexWrapper>
        </Modal>
    )
}
