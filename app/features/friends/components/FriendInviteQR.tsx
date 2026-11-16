import { useRef, useState } from "react"

import styled from "@emotion/styled"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import DownloadIcon from "@mui/icons-material/Download"
import { QRCodeCanvas } from "qrcode.react"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

import { copyFriendQr, downloadFriendQr } from "../utils/shareFriendQR"
import FriendInviteButton from "./FriendInviteButton"

const QrActions = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
`

type QrError = "qrImageError" | "qrDownloadError" | "qrCopyError" | "qrCopyUnsupported"
export default function FriendInviteQR({
    inviteUrl,
    qrBusy,
    setQrBusy,
}: {
    inviteUrl: string
    qrBusy: boolean
    setQrBusy: (busy: boolean) => void
}) {
    const { t } = useTranslation()
    const qrCanvasRef = useRef<HTMLCanvasElement>(null)
    const [qrReadyUrl, setQrReadyUrl] = useState<string | null>(null)
    const [qrFeedback, setQrFeedback] = useState<"qrDownloaded" | "qrCopied" | null>(null)
    const [qrError, setQrError] = useState<QrError | null>(null)
    const qrReady = qrReadyUrl === inviteUrl
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

    return (
        <>
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
                <FriendInviteButton
                    type="button"
                    disabled={!qrReady || qrBusy}
                    onClick={() => handleQrAction("download")}
                >
                    <Icon size={16}>
                        <DownloadIcon />
                    </Icon>
                    {t("friends.downloadQr")}
                </FriendInviteButton>
                <FriendInviteButton
                    type="button"
                    disabled={!qrReady || qrBusy}
                    onClick={() => handleQrAction("copy")}
                >
                    <Icon size={16}>
                        <ContentCopyIcon />
                    </Icon>
                    {t("friends.copyQr")}
                </FriendInviteButton>
            </QrActions>
            {qrFeedback && (
                <Typography type="Small" color="Highlight.default" role="status">
                    {t(`friends.${qrFeedback}`)}
                </Typography>
            )}
            {qrError && (
                <Typography type="Small" color="Highlight.default" role="alert">
                    {t(`friends.${qrError}`)}
                </Typography>
            )}
        </>
    )
}
