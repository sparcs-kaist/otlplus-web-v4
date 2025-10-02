import { useContext, useState } from "react"

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

const ContentRightWrapper = styled(FlexWrapper)`
  color: ${({ theme }) => theme.colors.Text.default};
`

const AccountButtonWrapper = styled(FlexWrapper)`
  cursor: pointer;
`

interface ContentRightProps {
  setAccountPageOpen: (open: boolean) => void
  userName: string
}

const ContentRight: React.FC<ContentRightProps> = ({ setAccountPageOpen, userName }) => {
  const [language, setLanguage] = useState<string>("ko")
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const { i18n } = useTranslation()
  const { setSelectedTheme } = useContext(SelectedThemeContext)

  const changeLanguage = () => {
    if (language === "ko") {
      setLanguage("en")
      i18n.changeLanguage("en")
    } else {
      setLanguage("ko")
      i18n.changeLanguage("ko")
    }
  }

  const changeThemeMode = () => {
    setDarkMode(!darkMode)
    setSelectedTheme(darkMode ? "light" : "dark")
  }

  return (
    <ContentRightWrapper direction="row" justify="space-between" align="center" gap={16}>
      <Icon size={16} onClick={changeThemeMode}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </Icon>
      <Icon size={16} onClick={changeLanguage}>
        <LanguageIcon />
      </Icon>
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
        <Typography type={"Normal"} color={"Text.default"}>
          {userName}
        </Typography>
      </AccountButtonWrapper>
    </ContentRightWrapper>
  )
}

export default ContentRight
