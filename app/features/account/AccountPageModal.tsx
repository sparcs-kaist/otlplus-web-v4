import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { GETUserInfoResponse } from "@/api/users/info"
import Modal from "@/common/components/Modal"
import Typography from "@/common/primitives/Typography"
import AccountInfoSection from "@/features/account/sections/AccountInfoSection"
import AccountInterestedMajorSection from "@/features/account/sections/AccountInterestedMajorSection"
import { handleLogout } from "@/utils/handleLoginLogout"
import useIsDevice from "@/utils/useIsDevice"

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
    const isTablet = useIsDevice("tablet")

    const { t } = useTranslation()

    return (
        <Modal
            isOpen={accountPageOpen}
            onClose={() => setAccountPageOpen(false)}
            title={t("account.title")}
            fullScreen={isTablet}
        >
            <AccountInfoSection userInfo={userInfo} />
            <AccountInterestedMajorSection userInfo={userInfo} />
            <LogoutButton type="Normal" color="Highlight.default" onClick={handleLogout}>
                {t("account.logout")}
            </LogoutButton>
        </Modal>
    )
}

export default AccountPageModal
