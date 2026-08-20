import { useEffect } from "react"

import styled from "@emotion/styled"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlined"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LanguageIcon from "@mui/icons-material/Language"
import LightModeIcon from "@mui/icons-material/LightMode"
import PersonIcon from "@mui/icons-material/Person"
import SettingsIcon from "@mui/icons-material/Settings"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { axiosClient } from "@/libs/axios"
import { usePreferenceStore } from "@/utils/zustand/usePreferenceStore"
import useThemeStore from "@/utils/zustand/useThemeStore"

const SettingWrapper = styled(FlexWrapper)<{ mobileSidebar: boolean }>`
    color: ${({ theme }) => theme.colors.Text.default};
    width: ${({ mobileSidebar }) => (mobileSidebar ? "100%" : "auto")};
`

const SettingButton = styled.button<{ mobileSidebar: boolean }>`
    display: flex;
    flex-direction: ${({ mobileSidebar }) => (mobileSidebar ? "row" : "column")};
    align-items: center;
    gap: 4px;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
`

interface SettingProps {
    readonly handleAccountButtonClick: () => void
    readonly userName: string
    readonly mobileSidebar: boolean
    readonly isLoading: boolean
}

const Setting: React.FC<SettingProps> = ({
    handleAccountButtonClick,
    userName,
    mobileSidebar,
    isLoading,
}) => {
    const { t, i18n } = useTranslation()
    const { themeSetting, setTheme } = useThemeStore()
    const channelTalkEnabled = usePreferenceStore((state) => state.channelTalkEnabled)
    const setChannelTalkEnabled = usePreferenceStore(
        (state) => state.setChannelTalkEnabled,
    )

    const changeThemeMode = () => {
        switch (themeSetting) {
            case "dark":
                setTheme("light")
                break
            case "light":
                setTheme("system")
                break
            case "system":
                setTheme("dark")
                break
            default:
                setTheme("system")
                break
        }
    }

    const ThemeIcon = () => {
        switch (themeSetting) {
            case "dark":
                return <DarkModeIcon />
            case "light":
                return <LightModeIcon />
            case "system":
                return <SettingsIcon />
            default:
                return <SettingsIcon />
        }
    }

    const changeLanguage = () => {
        const newLanguage = i18n.resolvedLanguage === "ko" ? "en" : "ko"
        i18n.changeLanguage(newLanguage)
        axiosClient.defaults.headers.common["Accept-Language"] = newLanguage
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
                <SettingButton
                    type="button"
                    aria-label={t("header.changeTheme")}
                    mobileSidebar={false}
                    onClick={changeThemeMode}
                    title={t("header.changeTheme")}
                >
                    <Icon size={16}>
                        <ThemeIcon />
                    </Icon>
                </SettingButton>
            )}
            <SettingButton
                type="button"
                aria-label={t("common.language")}
                mobileSidebar={mobileSidebar}
                onClick={changeLanguage}
                title={t("common.language")}
            >
                <Icon size={16}>
                    <LanguageIcon />
                </Icon>
                {mobileSidebar && t("common.language")}
            </SettingButton>
            <SettingButton
                type="button"
                aria-label={t(
                    channelTalkEnabled
                        ? "header.hideChannelTalk"
                        : "header.showChannelTalk",
                )}
                mobileSidebar={mobileSidebar}
                onClick={() => setChannelTalkEnabled(!channelTalkEnabled)}
                title={t(
                    channelTalkEnabled
                        ? "header.hideChannelTalk"
                        : "header.showChannelTalk",
                )}
            >
                <Icon size={16}>
                    {channelTalkEnabled ? <ChatBubbleIcon /> : <ChatBubbleOutlineIcon />}
                </Icon>
                {mobileSidebar &&
                    t(
                        channelTalkEnabled
                            ? "header.hideChannelTalk"
                            : "header.showChannelTalk",
                    )}
            </SettingButton>
            {isLoading ? (
                "Loading..."
            ) : (
                <SettingButton
                    type="button"
                    aria-label={userName}
                    mobileSidebar={true}
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
                </SettingButton>
            )}
        </SettingWrapper>
    )
}

export default Setting
