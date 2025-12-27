import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import { media } from "@/styles/themes/media"

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

interface MenuProps {
    setMobileSidebarOpen: () => void
}

const Menu: React.FC<MenuProps> = ({ setMobileSidebarOpen }) => {
    const { t } = useTranslation()

    return (
        <MenuWrapper direction="row" justify="space-between" align="center" gap={0}>
            <StyledLink to="/" onClick={setMobileSidebarOpen}>
                <StyledImg src={`${import.meta.env.BASE_URL}headerIcon.png`} alt="Logo" />
            </StyledLink>
            <LinkWrapper direction="row" gap={24}>
                <StyledLink to="/dictionary">{t("header.dictionary")}</StyledLink>
                <StyledLink to="/write-reviews">{t("header.writeReviews")}</StyledLink>
                <StyledLink to="/timetable">{t("header.timetable")}</StyledLink>
            </LinkWrapper>
        </MenuWrapper>
    )
}

export default Menu
