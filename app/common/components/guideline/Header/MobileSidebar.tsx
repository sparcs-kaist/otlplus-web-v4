import React, { useEffect, useRef } from "react"

import styled from "@emotion/styled"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { AnimatePresence, motion } from "framer-motion"
import ReactDOM from "react-dom"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(51, 51, 51, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
    pointer-events: auto;
`

const Sidebar = styled(motion.div)`
    width: 200px;
    height: 100dvh;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.Background.Page.default};
    padding: 24px 20px;
    display: flex;
    transition: max-height 1s ease-in-out;
    overflow: hidden;
    justify-content: space-between;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.default};
    }
`

interface MobileSidebarProps {
    mobileSidebarOpen: boolean
    setMobileSidebarOpen: (open: boolean) => void
    sidebarHeader: React.ReactNode
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
    mobileSidebarOpen,
    setMobileSidebarOpen,
    sidebarHeader,
}) => {
    const { t } = useTranslation()

    const mouseDownTargetRef = useRef<EventTarget | null>(null)

    useEffect(() => {
        if (mobileSidebarOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [mobileSidebarOpen])

    const handleLinkClick = () => {
        setMobileSidebarOpen(false)
    }

    const frameVariants = {
        hidden: { right: "-50%" },
        visible: { right: 0 },
    }

    return ReactDOM.createPortal(
        <AnimatePresence>
            {mobileSidebarOpen && (
                <Overlay
                    onMouseDown={(e) => {
                        mouseDownTargetRef.current = e.target
                    }}
                    onMouseUp={(e) => {
                        if (
                            mouseDownTargetRef.current === e.currentTarget &&
                            e.target === e.currentTarget
                        ) {
                            setMobileSidebarOpen(false)
                        }
                    }}
                >
                    <Sidebar
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={frameVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <FlexWrapper direction="column" gap={35} align="flex-end">
                            {sidebarHeader}
                            <FlexWrapper direction="column" gap={20} align="flex-end">
                                <StyledLink to="/dictionary" onClick={handleLinkClick}>
                                    {t("header.dictionary")}
                                </StyledLink>
                                <StyledLink to="/write-reviews" onClick={handleLinkClick}>
                                    {t("header.writeReviews")}
                                </StyledLink>
                                <StyledLink to="/timetable" onClick={handleLinkClick}>
                                    {t("header.timetable")}
                                </StyledLink>
                            </FlexWrapper>
                        </FlexWrapper>
                        <Icon size={20} onClick={() => setMobileSidebarOpen(false)}>
                            <KeyboardArrowRightIcon />
                        </Icon>
                    </Sidebar>
                </Overlay>
            )}
        </AnimatePresence>,
        document.body,
    )
}

export default MobileSidebar
