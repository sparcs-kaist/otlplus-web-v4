import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ShareIcon from "@mui/icons-material/Share"
import { QRCodeSVG } from "qrcode.react"
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
    const [copied, setCopied] = useState(false)
    const [actionError, setActionError] = useState(false)
    const { query } = useAPI("GET", "/friends/code", {
        enabled: isOpen,
        staleTime: 0,
        gcTime: 0,
    })

    useEffect(() => {
        if (!isOpen) return
        setCopied(false)
        setActionError(false)
    }, [isOpen])

    const code = query.isSuccess ? query.data.code : null
    const inviteUrl = code
        ? `${new URL("/friends/invite", window.location.origin)}#${code}`
        : ""

    const handleCopy = async () => {
        if (!inviteUrl) return
        try {
            await copyFriendInvite(userName, inviteUrl)
            setCopied(true)
        } catch {
            setActionError(true)
        }
    }

    const handleShare = async () => {
        if (!inviteUrl) return
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
                        <FlexWrapper direction="row" justify="center" gap={0}>
                            <QRCodeSVG
                                value={inviteUrl}
                                title={t("friends.inviteQr")}
                                role="img"
                                size={180}
                                marginSize={4}
                                className="mp-block mp-sensitive"
                            />
                        </FlexWrapper>
                    </>
                )}
                {copied && (
                    <Typography type="Small" color="Highlight.default">
                        {t("friends.copied")}
                    </Typography>
                )}
                <FlexWrapper direction="row" gap={8} justify="flex-end">
                    <Button type={code ? "default" : "disabled"} onClick={handleCopy}>
                        <Icon size={16}>
                            <ContentCopyIcon />
                        </Icon>
                        {t("friends.copy")}
                    </Button>
                    <Button
                        type={code ? "highlighted" : "disabled"}
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
