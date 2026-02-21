import styled from "@emotion/styled"
import CloudOffIcon from "@mui/icons-material/CloudOff"
import RefreshIcon from "@mui/icons-material/Refresh"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { media } from "@/styles/themes/media"
import useIsDevice from "@/utils/useIsDevice"
import useBackendStatusStore from "@/utils/zustand/useBackendStatusStore"
import useUserStore from "@/utils/zustand/useUserStore"

const MenuWrapper = styled(FlexWrapper)`
    gap: 231px;

    ${media.tablet} {
        flex: 1;
        gap: 0;
    }
`

const StyledImg = styled.img<{ src: string }>`
    min-width: 55px;
    height: 27px;
    background: transparent;
`

const LinkWrapper = styled(FlexWrapper)`
    ${media.mobile} {
        display: none;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }
`

const StyledHyperLink = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.colors.Highlight.default};
`

const DisabledLink = styled.span`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Text.disable};
    font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
    cursor: not-allowed;
    opacity: 0.5;
    position: relative;

    &:hover::after {
        content: attr(data-tooltip);
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 8px;
        padding: 6px 10px;
        background-color: ${({ theme }) => theme.colors.Background.Section.default};
        border-radius: 6px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        color: ${({ theme }) => theme.colors.Text.placeholder};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
`

const OfflineIndicator = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 6px;
    padding: 4px 8px;
`

interface MenuProps {
    setMobileSidebarOpen: () => void
}

const Menu: React.FC<MenuProps> = ({ setMobileSidebarOpen }) => {
    const { t } = useTranslation()
    const isBackendReachable = useBackendStatusStore((state) => state.isBackendReachable)
    const { status } = useUserStore()
    const isMobile = useIsDevice("mobile")

    const isOfflineMode = !isBackendReachable && status === "success"

    const renderNavLink = (path: string, label: string) => {
        if (isOfflineMode && path !== "/" && path !== "/timetable") {
            return (
                <DisabledLink data-tooltip={t("common.offline.navDisabled")}>
                    {label}
                </DisabledLink>
            )
        }
        return <StyledLink to={path}>{label}</StyledLink>
    }

    return (
        <MenuWrapper direction="row" justify="space-between" align="center" gap={0}>
            <FlexWrapper direction="row" gap={20} align="center">
                <StyledLink to="/" onClick={setMobileSidebarOpen}>
                    <StyledImg
                        src={`${import.meta.env.BASE_URL}headerIcon.png`}
                        alt="Logo"
                    />
                </StyledLink>
                {!isMobile && (
                    <StyledHyperLink href="/__switch/v3">
                        <Typography
                            type="Big"
                            color="Highlight.default"
                            style={{ lineHeight: "1px" }}
                        >
                            {t("common.toOTLV3")}
                        </Typography>
                        <Icon
                            size={20}
                            color="Highlight.default"
                            style={{ transform: "rotate(180deg)" }}
                        >
                            <RefreshIcon />
                        </Icon>
                    </StyledHyperLink>
                )}
            </FlexWrapper>
            <LinkWrapper direction="row" gap={24} align="center">
                {renderNavLink("/dictionary", t("header.dictionary"))}
                {renderNavLink("/write-reviews", t("header.writeReviews"))}
                {renderNavLink("/timetable", t("header.timetable"))}
                {isOfflineMode && (
                    <OfflineIndicator direction="row" align="center" gap={6}>
                        <Icon size={14} color="inherit">
                            <CloudOffIcon />
                        </Icon>
                        <Typography type="Small" color="Text.placeholder">
                            {t("common.offline.banner")}
                        </Typography>
                    </OfflineIndicator>
                )}
            </LinkWrapper>
        </MenuWrapper>
    )
}

export default Menu
