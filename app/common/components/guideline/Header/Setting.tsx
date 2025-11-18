import { useContext, useEffect, useState } from "react"

import styled from "@emotion/styled"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LanguageIcon from "@mui/icons-material/Language"
import LightModeIcon from "@mui/icons-material/LightMode"
import PersonIcon from "@mui/icons-material/Person"
import { useTranslation } from "react-i18next"

import { SelectedThemeContext } from "@/Providers"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { axiosClient } from "@/libs/axios"

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
    handleAccountButtonClick: () => void
    userName: string
    mobileSidebar: boolean
}

const Setting: React.FC<SettingProps> = ({
    handleAccountButtonClick,
    userName,
    mobileSidebar,
}) => {
    const { t, i18n } = useTranslation()
    const { theme, setTheme } = useContext(SelectedThemeContext)

    const changeThemeMode = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.resolvedLanguage === "ko" ? "en" : "ko")
        axiosClient.defaults.headers.common["Accept-Language"] = i18n.resolvedLanguage
    }

    useEffect(() => {
        axiosClient.defaults.headers.common["Accept-Language"] = i18n.resolvedLanguage
    }, [])

    return (
        <SettingWrapper
            direction={mobileSidebar ? "column-reverse" : "row"}
            justify="space-between"
            align="center"
            gap={mobileSidebar ? 9 : 16}
            mobileSidebar={mobileSidebar}
        >
            {!mobileSidebar && (
                <Icon size={16} onClick={changeThemeMode}>
                    {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </Icon>
            )}
            <LanguageButtonWrapper
                direction={mobileSidebar ? "row" : "column"}
                gap={4}
                align="center"
                onClick={changeLanguage}
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
                onClick={handleAccountButtonClick}
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
