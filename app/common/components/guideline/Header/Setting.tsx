import styled from "@emotion/styled"
import LanguageIcon from "@mui/icons-material/Language"
import PersonIcon from "@mui/icons-material/Person"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

const SettingWrapper = styled(FlexWrapper)<{ mobileSidebar: boolean }>`
    color: ${({ theme }) => theme.colors.Text.default};
    width: ${({ mobileSidebar }) => (mobileSidebar ? "100%" : "auto")};
`

const LanguageButtonWrapper = styled(FlexWrapper)`
    cursor: pointer;
`

const AccountButtonWrapper = styled(FlexWrapper)`
    cursor: pointer;
`

interface SettingProps {
    setAccountPageOpen: (open: boolean) => void
    userName: string
    mobileSidebar: boolean
}

const Setting: React.FC<SettingProps> = ({
    setAccountPageOpen,
    userName,
    mobileSidebar,
}) => {
    const { t, i18n } = useTranslation()

    return (
        <SettingWrapper
            direction={mobileSidebar ? "column-reverse" : "row"}
            justify="space-between"
            align="center"
            gap={mobileSidebar ? 9 : 16}
            mobileSidebar={mobileSidebar}
        >
            <LanguageButtonWrapper
                direction={mobileSidebar ? "row" : "column"}
                gap={4}
                align="center"
                onClick={() => i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko")}
            >
                <Icon size={16}>
                    <LanguageIcon />
                </Icon>
                {mobileSidebar && t("common.language")}
            </LanguageButtonWrapper>
            <AccountButtonWrapper
                direction="row"
                gap={4}
                align="center"
                onClick={() => {
                    setAccountPageOpen(true)
                }}
            >
                <Icon size={16}>
                    <PersonIcon />
                </Icon>
                <Typography
                    type={mobileSidebar ? "NormalBold" : "Normal"}
                    color={"Text.default"}
                >
                    {userName}
                </Typography>
            </AccountButtonWrapper>
        </SettingWrapper>
    )
}

export default Setting
