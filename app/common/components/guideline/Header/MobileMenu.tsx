import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Menu = styled(motion.div)`
  width: 100%;
  position: absolute;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.Background.Page.default};
  border-width: 10px 20px;
  border-color: ${({ theme }) => theme.colors.Background.Page.default};
  border-style: solid;
  display: flex;
  flex-direction: column;
  transition: max-height 1s ease-in-out;
  overflow: hidden;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Text.default};
  font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
  padding-bottom: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.Highlight.default};
  }
`

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setMobileMenuOpen }) => {
  const { t } = useTranslation()

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const frameVariants = {
    hidden: { height: 0 },
    visible: { height: "auto" },
  }

  return (
    <Menu
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={frameVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <StyledLink to="/dictionary" onClick={handleLinkClick}>
        {t("header.dictionary")}
      </StyledLink>
      <StyledLink to="/write-reviews" onClick={handleLinkClick}>
        {t("header.writeReviews")}
      </StyledLink>
      <StyledLink to="/timetable" onClick={handleLinkClick}>
        {t("header.timetable")}
      </StyledLink>
    </Menu>
  )
}

export default MobileMenu
