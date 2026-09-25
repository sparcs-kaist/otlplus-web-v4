import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import DownloadIcon from "@mui/icons-material/Download"
import ShareIcon from "@mui/icons-material/Share"
import { QRCodeCanvas } from "qrcode.react"
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
import { copyFriendQr, downloadFriendQr } from "./shareFriendQr"

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

const QrActions = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
`

const QrButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 44px;
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.Background.Button.default};
    color: ${({ theme }) => theme.colors.Text.default};
    font: inherit;
    font-size: 14px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.Background.Button.dark};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`

type QrError = "qrImageError" | "qrDownloadError" | "qrCopyError" | "qrCopyUnsupported"

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
    const qrCanvasRef = useRef<HTMLCanvasElement>(null)
    const [qrReadyUrl, setQrReadyUrl] = useState<string | null>(null)
    const [qrBusy, setQrBusy] = useState(false)
    const [qrFeedback, setQrFeedback] = useState<"qrDownloaded" | "qrCopied" | null>(null)
    const [qrError, setQrError] = useState<QrError | null>(null)
    const { query } = useAPI("GET", "/friends/code", {
        enabled: isOpen,
        staleTime: 0,
        gcTime: 0,
    })

    const code = query.isSuccess ? query.data.code : null
    const inviteUrl = code
        ? `${new URL("/friends/invite", window.location.origin)}#${code}`
        : ""
    const qrReady = Boolean(inviteUrl && qrReadyUrl === inviteUrl)

    useEffect(() => {
        setCopied(false)
        setActionError(false)
        if (!isOpen) setQrReadyUrl(null)
        setQrBusy(false)
        setQrFeedback(null)
        setQrError(null)
    }, [isOpen, inviteUrl])

    const handleQrAction = async (action: "download" | "copy") => {
        const canvas = qrCanvasRef.current
        if (!canvas || !qrReady || qrBusy) return
        setQrFeedback(null)
        setQrError(null)
        setQrBusy(true)
        try {
            if (action === "download") await downloadFriendQr(canvas)
            else await copyFriendQr(canvas)
            setQrFeedback(action === "download" ? "qrDownloaded" : "qrCopied")
        } catch (error) {
            setQrError(
                action === "download"
                    ? "qrDownloadError"
                    : error instanceof DOMException && error.name === "NotSupportedError"
                      ? "qrCopyUnsupported"
                      : "qrCopyError",
            )
        } finally {
            setQrBusy(false)
        }
    }

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
                        <FlexWrapper
                            direction="row"
                            justify="center"
                            gap={0}
                            onLoadCapture={(event) => {
                                if (event.target instanceof HTMLImageElement) {
                                    setQrReadyUrl(inviteUrl)
                                }
                            }}
                            onErrorCapture={(event) => {
                                if (event.target instanceof HTMLImageElement) {
                                    setQrReadyUrl(null)
                                    setQrError("qrImageError")
                                }
                            }}
                        >
                            <QRCodeCanvas
                                key={inviteUrl}
                                ref={qrCanvasRef}
                                value={inviteUrl}
                                aria-label={t("friends.inviteQr")}
                                title={t("friends.inviteQr")}
                                role="img"
                                size={512}
                                style={{ width: 200, height: 200 }}
                                level="H"
                                marginSize={4}
                                bgColor="#FFFFFF"
                                fgColor="#000000"
                                imageSettings={{
                                    src: "/static/favicon-192.png",
                                    width: 88,
                                    height: 88,
                                    excavate: true,
                                }}
                                className="mp-block mp-sensitive"
                            />
                        </FlexWrapper>
                        <QrActions>
                            <QrButton
                                type="button"
                                disabled={!qrReady || qrBusy}
                                onClick={() => handleQrAction("download")}
                            >
                                <Icon size={16}>
                                    <DownloadIcon />
                                </Icon>
                                {t("friends.downloadQr")}
                            </QrButton>
                            <QrButton
                                type="button"
                                disabled={!qrReady || qrBusy}
                                onClick={() => handleQrAction("copy")}
                            >
                                <Icon size={16}>
                                    <ContentCopyIcon />
                                </Icon>
                                {t("friends.copyQr")}
                            </QrButton>
                        </QrActions>
                        {qrFeedback && (
                            <Typography
                                type="Small"
                                color="Highlight.default"
                                role="status"
                            >
                                {t(`friends.${qrFeedback}`)}
                            </Typography>
                        )}
                        {qrError && (
                            <Typography
                                type="Small"
                                color="Highlight.default"
                                role="alert"
                            >
                                {t(`friends.${qrError}`)}
                            </Typography>
                        )}
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
