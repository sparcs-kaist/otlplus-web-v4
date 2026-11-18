import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import DownloadIcon from "@mui/icons-material/Download"
import { QRCodeCanvas } from "qrcode.react"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"

import { copyFriendQr, downloadFriendQr } from "../utils/shareFriendQR"
import FriendInviteButton, { FriendInviteButtonContent } from "./FriendInviteButton"

const QrActions = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
`

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
    const [qrFeedback, setQrFeedback] = useState<{ action: "download" | "copy" } | null>(
        null,
    )
    useEffect(() => {
        if (!qrFeedback) return
        const timeout = setTimeout(() => setQrFeedback(null), 2000)
        return () => clearTimeout(timeout)
    }, [qrFeedback])
    const qrReady = qrReadyUrl === inviteUrl
    const handleQrAction = async (action: "download" | "copy") => {
        const canvas = qrCanvasRef.current
        if (!canvas || !qrReady || qrBusy) return
        setQrFeedback(null)
        setQrBusy(true)
        try {
            if (action === "download") await downloadFriendQr(canvas)
            else await copyFriendQr(canvas)
            setQrFeedback({ action })
        } catch (error) {
            window.alert(
                t(
                    action === "download"
                        ? "friends.qrDownloadError"
                        : error instanceof DOMException &&
                            error.name === "NotSupportedError"
                          ? "friends.qrCopyUnsupported"
                          : "friends.qrCopyError",
                ),
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
                        window.alert(t("friends.qrImageError"))
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
                    <FriendInviteButtonContent
                        icon={<DownloadIcon />}
                        label={t("friends.downloadQr")}
                        successLabel={t("friends.downloadSuccess")}
                        succeeded={qrFeedback?.action === "download"}
                    />
                </FriendInviteButton>
                <FriendInviteButton
                    type="button"
                    disabled={!qrReady || qrBusy}
                    onClick={() => handleQrAction("copy")}
                >
                    <FriendInviteButtonContent
                        icon={<ContentCopyIcon />}
                        label={t("friends.copyQr")}
                        successLabel={t("friends.copySuccess")}
                        succeeded={qrFeedback?.action === "copy"}
                    />
                </FriendInviteButton>
            </QrActions>
        </>
    )
}
