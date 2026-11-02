import { useState } from "react"

import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import DeveloperLoginModal from "@/features/account/DeveloperLoginModal"
import { handleLogin } from "@/utils/handleLoginLogout"

export default function FriendLoginButton() {
    const { t } = useTranslation()
    const [developerLoginOpen, setDeveloperLoginOpen] = useState(false)
    const login = () => {
        if (process.env.NODE_ENV === "development") setDeveloperLoginOpen(true)
        else handleLogin()
    }

    return (
        <>
            <Button
                type="highlighted"
                role="button"
                tabIndex={0}
                onClick={login}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        login()
                    }
                }}
            >
                {t("friends.login")}
            </Button>
            {process.env.NODE_ENV === "development" && (
                <DeveloperLoginModal
                    developerLoginModalOpen={developerLoginOpen}
                    setDeveloperLoginModalOpen={setDeveloperLoginOpen}
                />
            )}
        </>
    )
}
