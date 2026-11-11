export async function downloadFriendQr(canvas: HTMLCanvasElement): Promise<void> {
    const url = canvas.toDataURL("image/png")
    if (!url.startsWith("data:image/png;")) {
        throw new Error("Could not encode the QR code as PNG")
    }

    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = "otl-friend-qr.png"
    document.body.appendChild(anchor)
    try {
        anchor.click()
    } finally {
        anchor.remove()
    }
}

export async function copyFriendQr(canvas: HTMLCanvasElement): Promise<void> {
    if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") {
        throw new DOMException("Image clipboard is unavailable", "NotSupportedError")
    }

    // Keep write() in the click handler's activation scope, including on Safari.
    await navigator.clipboard.write([
        new ClipboardItem({
            "image/png": new Promise<Blob>((resolve, reject) => {
                canvas.toBlob((blob) => {
                    if (blob) resolve(blob)
                    else reject(new Error("Could not encode the QR code as PNG"))
                }, "image/png")
            }),
        }),
    ])
}
