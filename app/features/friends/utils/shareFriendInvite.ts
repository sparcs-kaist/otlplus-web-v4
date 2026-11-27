export const friendInviteText = (name: string) =>
    `${name}님과 OTL 시간표 친구를 맺어보세요!`

export const friendInviteMessage = (name: string, url: string) =>
    `${friendInviteText(name)}\n${url}`

export async function copyFriendInvite(name: string, url: string) {
    await copyTextToClipboard(friendInviteMessage(name, url))
}

export async function copyTextToClipboard(text: string) {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
        return
    }

    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.style.position = "fixed"
    textarea.style.opacity = "0"
    document.body.appendChild(textarea)
    textarea.select()
    try {
        if (!document.execCommand("copy")) throw new Error("Clipboard unavailable")
    } finally {
        textarea.remove()
    }
}

export async function shareFriendInvite(name: string, url: string) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "OTL 시간표 친구 초대",
                text: friendInviteText(name),
                url,
            })
            return "shared" as const
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") {
                return "cancelled" as const
            }
        }
    }
    await copyFriendInvite(name, url)
    return "copied" as const
}
