import React, { useEffect, useRef } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CloudOffIcon from "@mui/icons-material/CloudOff"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { AnimatePresence, motion } from "framer-motion"
import ReactDOM from "react-dom"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import useBackendStatusStore from "@/utils/zustand/useBackendStatusStore"
import useUserStore from "@/utils/zustand/useUserStore"

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

const DisabledLink = styled.span`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Text.disable};
    font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
    white-space: nowrap;
    cursor: not-allowed;
    opacity: 0.5;
`

const OfflineBanner = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 6px;
    padding: 8px 12px;
    margin-top: 12px;
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
    const theme = useTheme()
    const { t } = useTranslation()
    const isBackendReachable = useBackendStatusStore((state) => state.isBackendReachable)
    const { status } = useUserStore()

    const isOfflineMode = !isBackendReachable && status === "success"

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

    const renderNavLink = (path: string, label: string) => {
        if (isOfflineMode && path !== "/" && path !== "/timetable") {
            return <DisabledLink>{label}</DisabledLink>
        }
        return (
            <StyledLink to={path} onClick={handleLinkClick}>
                {label}
            </StyledLink>
        )
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
                                {renderNavLink("/dictionary", t("header.dictionary"))}
                                {renderNavLink(
                                    "/write-reviews",
                                    t("header.writeReviews"),
                                )}
                                {renderNavLink("/timetable", t("header.timetable"))}
                            </FlexWrapper>
                            {isOfflineMode && (
                                <OfflineBanner
                                    direction="column"
                                    align="flex-end"
                                    gap={6}
                                >
                                    <FlexWrapper direction="row" align="center" gap={6}>
                                        <Icon
                                            size={14}
                                            color={theme.colors.Text.placeholder}
                                        >
                                            <CloudOffIcon />
                                        </Icon>
                                        <Typography type="Small" color="Text.placeholder">
                                            {t("common.offline.banner")}
                                        </Typography>
                                    </FlexWrapper>
                                    <Typography type="Smaller" color="Text.disable">
                                        {t("common.offline.navDisabled")}
                                    </Typography>
                                </OfflineBanner>
                            )}
                        </FlexWrapper>
                        <Icon
                            size={20}
                            onClick={() => setMobileSidebarOpen(false)}
                            color={theme.colors.Text.default}
                        >
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
