import { useEffect, useState } from "react"

import styled from "@emotion/styled"
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
    const [copied, setCopied] = useState<"link" | "message" | null>(null)
    const [actionError, setActionError] = useState(false)
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
        setCopied(null)
        setActionError(false)
        setQrBusy(false)
    }, [isOpen, inviteUrl])

    const handleCopy = async (kind: "link" | "message") => {
        if (!inviteUrl) return
        setCopied(null)
        setActionError(false)
        try {
            if (kind === "link") await copyTextToClipboard(inviteUrl)
            else await copyFriendInvite(userName, inviteUrl)
            setCopied(kind)
        } catch {
            setActionError(true)
        }
    }

    const handleShare = async () => {
        if (!inviteUrl) return
        setCopied(null)
        setActionError(false)
        try {
            const result = await shareFriendInvite(userName, inviteUrl)
            if (result === "copied") setCopied("message")
        } catch {
            setActionError(true)
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
                {query.isError && (
                    <Typography type="Normal" color="Highlight.default" role="alert">
                        {t("friends.inviteError")}
                    </Typography>
                )}
                {actionError && (
                    <Typography type="Normal" color="Highlight.default">
                        {t("friends.inviteError")}
                    </Typography>
                )}
                {regenerate.isPending && (
                    <Typography type="Normal" color="Text.placeholder" role="status">
                        {t("friends.regeneratingCode")}
                    </Typography>
                )}
                {regenerate.isError && (
                    <Typography type="Normal" color="Highlight.default" role="alert">
                        {t("friends.regenerateError")}
                    </Typography>
                )}
                {regenerate.isSuccess && (
                    <Typography type="Small" color="Highlight.default" role="status">
                        {t("friends.regeneratedCode")}
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
                                        resetRegenerate()
                                        setConfirmRegenerate(true)
                                    }}
                                >
                                    <Icon size={16}>
                                        <RefreshIcon />
                                    </Icon>
                                    {t("friends.regenerateCode")}
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
                {copied && (
                    <Typography type="Small" color="Highlight.default">
                        {t(copied === "link" ? "friends.linkCopied" : "friends.copied")}
                    </Typography>
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
                            <LinkIcon />
                        </Icon>
                        {t("friends.copyLink")}
                    </FriendInviteButton>
                    <FriendInviteButton
                        type="button"
                        disabled={!code}
                        onClick={() => handleCopy("message")}
                    >
                        <Icon size={16}>
                            <ContentCopyIcon />
                        </Icon>
                        {t("friends.copy")}
                    </FriendInviteButton>
                    <ShareButton type="button" disabled={!code} onClick={handleShare}>
                        <Icon size={16}>
                            <ShareIcon />
                        </Icon>
                        {t("friends.share")}
                    </ShareButton>
                </FlexWrapper>
            </FlexWrapper>
        </Modal>
    )
}
