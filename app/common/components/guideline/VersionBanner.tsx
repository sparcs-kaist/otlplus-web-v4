import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"

import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

const BANNER_DISMISSED_KEY = "v4-banner-dismissed"

const BannerWrapper = styled.div`
    width: 100%;
    height: 36px;
    background: ${({ theme }) => theme.colors.Highlight.default};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    position: relative;
    flex-shrink: 0;
`

const BannerLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Text.default};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const CloseButton = styled.div`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.Text.default};

    &:hover {
        opacity: 0.7;
    }
`

const VersionBanner: React.FC = () => {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = useState(false)
    const [isApp, setIsApp] = useState(false)

    useEffect(() => {
        if (typeof navigator !== "undefined" && navigator.userAgent.includes("otl-app")) {
            setIsApp(true)
            return
        }

        const dismissed = sessionStorage.getItem(BANNER_DISMISSED_KEY)
        if (!dismissed) {
            setIsVisible(true)
        }
    }, [])

    const handleDismiss = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        sessionStorage.setItem(BANNER_DISMISSED_KEY, "true")
        setIsVisible(false)
    }

    const handleSwitchToV3 = () => {
        window.location.href = "/__switch/v3"
    }

    if (isApp || !isVisible) {
        return null
    }

    return (
        <BannerWrapper>
            <BannerLink onClick={handleSwitchToV3}>
                <Typography type="Normal" color="Text.default">
                    {t("general.versionBanner.switchToV3")}
                </Typography>
            </BannerLink>
            <CloseButton onClick={handleDismiss}>
                <Icon size={18}>
                    <CloseIcon />
                </Icon>
            </CloseButton>
        </BannerWrapper>
    )
}

export default VersionBanner
