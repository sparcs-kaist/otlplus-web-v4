import React, { useCallback, useRef } from "react"

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

import useDialogFocusTrap from "./useDialogFocusTrap"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.Background.Overlay.default};
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

const CloseButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Button.default};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

interface MobileSidebarProps {
    readonly mobileSidebarOpen: boolean
    readonly setMobileSidebarOpen: (open: boolean) => void
    readonly sidebarHeader: React.ReactNode
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
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const dialogRef = useRef<HTMLDivElement>(null)
    const closeSidebar = useCallback(
        () => setMobileSidebarOpen(false),
        [setMobileSidebarOpen],
    )

    useDialogFocusTrap({
        dialogRef,
        initialFocusRef: closeButtonRef,
        onClose: closeSidebar,
        open: mobileSidebarOpen,
    })

    const renderNavLink = (path: string, label: string) => {
        if (isOfflineMode && path !== "/" && path !== "/timetable") {
            return <DisabledLink>{label}</DisabledLink>
        }
        return (
            <StyledLink to={path} onClick={closeSidebar}>
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
                    data-mobile-sidebar-overlay
                    onMouseDown={(event) => {
                        mouseDownTargetRef.current = event.target
                    }}
                    onMouseUp={(event) => {
                        if (
                            mouseDownTargetRef.current === event.currentTarget &&
                            event.target === event.currentTarget
                        ) {
                            closeSidebar()
                        }
                    }}
                >
                    <Sidebar
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label={t("header.navigationMenu")}
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
                                {renderNavLink("/planner", t("header.planner"))}
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
                        <CloseButton
                            ref={closeButtonRef}
                            type="button"
                            aria-label={t("common.search.close")}
                            title={t("common.search.close")}
                            onClick={closeSidebar}
                        >
                            <Icon size={20} color={theme.colors.Text.default}>
                                <KeyboardArrowRightIcon />
                            </Icon>
                        </CloseButton>
                    </Sidebar>
                </Overlay>
            )}
        </AnimatePresence>,
        document.body,
    )
}

export default MobileSidebar
