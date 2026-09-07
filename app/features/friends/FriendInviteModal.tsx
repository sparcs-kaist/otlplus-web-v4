import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ShareIcon from "@mui/icons-material/Share"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"

import {
    copyFriendInvite,
    friendInviteMessage,
    shareFriendInvite,
} from "./shareFriendInvite"

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
    const [invite, setInvite] = useState<{ token: string; expiresAt: string } | null>(
        null,
    )
    const [copied, setCopied] = useState(false)
    const [actionError, setActionError] = useState(false)
    const { mutation, requestFunction } = useAPI("POST", "/friends/invites", {
        onSuccess: setInvite,
    })

    useEffect(() => {
        if (!isOpen) return
        setInvite(null)
        setCopied(false)
        setActionError(false)
        requestFunction({})
    }, [isOpen, requestFunction])

    const inviteUrl = invite
        ? `${new URL("/friends/invite", window.location.origin)}#${encodeURIComponent(invite.token)}`
        : ""

    const handleCopy = async () => {
        try {
            await copyFriendInvite(userName, inviteUrl)
            setCopied(true)
        } catch {
            setActionError(true)
        }
    }

    const handleShare = async () => {
        try {
            const result = await shareFriendInvite(userName, inviteUrl)
            if (result === "copied") setCopied(true)
        } catch {
            setActionError(true)
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={t("friends.inviteTitle")}
            fullScreen={isMobile}
        >
            <FlexWrapper direction="column" gap={16} align="stretch">
                <Typography type="Normal" color="Text.placeholder">
                    {t("friends.inviteDescription")}
                </Typography>
                {mutation.isPending && (
                    <Typography type="Normal" color="Text.placeholder">
                        {t("friends.inviteLoading")}
                    </Typography>
                )}
                {mutation.isError && (
                    <Typography type="Normal" color="Highlight.default">
                        {t("friends.inviteError")}
                    </Typography>
                )}
                {actionError && (
                    <Typography type="Normal" color="Highlight.default">
                        {t("friends.inviteError")}
                    </Typography>
                )}
                {invite && (
                    <Preview className="mp-block mp-sensitive">
                        {friendInviteMessage(userName, inviteUrl)}
                    </Preview>
                )}
                {copied && (
                    <Typography type="Small" color="Highlight.default">
                        {t("friends.copied")}
                    </Typography>
                )}
                <FlexWrapper direction="row" gap={8} justify="flex-end">
                    <Button type={invite ? "default" : "disabled"} onClick={handleCopy}>
                        <Icon size={16}>
                            <ContentCopyIcon />
                        </Icon>
                        {t("friends.copy")}
                    </Button>
                    <Button
                        type={invite ? "highlighted" : "disabled"}
                        onClick={handleShare}
                    >
                        <Icon size={16}>
                            <ShareIcon />
                        </Icon>
                        {t("friends.share")}
                    </Button>
                </FlexWrapper>
            </FlexWrapper>
        </Modal>
    )
}
