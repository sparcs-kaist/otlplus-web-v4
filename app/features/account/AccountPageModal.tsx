import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { GETUserInfoResponse } from "@/api/users/info"
import ResponsiveModal from "@/common/components/ResponsiveModal"
import Typography from "@/common/primitives/Typography"
import AccountInfoSection from "@/features/account/sections/AccountInfoSection"
import AccountInterestedMajorSection from "@/features/account/sections/AccountInterestedMajorSection"
import { handleLogout } from "@/utils/handleLoginLogout"

const LogoutButton = styled(Typography)`
    cursor: pointer;
`

interface AccountPageModalProps {
    userInfo: GETUserInfoResponse | null
    accountPageOpen: boolean
    setAccountPageOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountPageModal: React.FC<AccountPageModalProps> = ({
    userInfo,
    accountPageOpen,
    setAccountPageOpen,
}) => {
    const { t } = useTranslation()

    return (
        <ResponsiveModal
            isOpen={accountPageOpen}
            onClose={() => setAccountPageOpen(false)}
            title={t("account.title")}
        >
            <AccountInfoSection userInfo={userInfo} />
            <AccountInterestedMajorSection userInfo={userInfo} />
            <LogoutButton type="Normal" color="Highlight.default" onClick={handleLogout}>
                {t("account.logout")}
            </LogoutButton>
        </ResponsiveModal>
    )
}

export default AccountPageModal
