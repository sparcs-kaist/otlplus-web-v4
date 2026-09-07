import { memo, useId, useRef } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import ReactDOM from "react-dom"
import { useTranslation } from "react-i18next"

import useDialogFocusTrap from "@/common/components/guideline/Header/useDialogFocusTrap"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: ${({ theme }) => theme.colors.Background.Overlay.default};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: auto;
`

const ModalContainer = styled.div<{ fullScreen: boolean }>`
    background: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: ${(props) => (props.fullScreen ? "0px" : "12px")};
    min-width: ${(props) => (props.fullScreen ? "100dvw" : "630px")};
    width: ${(props) => (props.fullScreen ? "100dvw" : "auto")};
    height: ${(props) => (props.fullScreen ? "100dvh" : "auto")};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    pointer-events: auto;
    overflow: auto;

    &:focus {
        outline: none;
    }
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CloseButton = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.placeholder};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Button.default};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

interface ModalProps {
    readonly ariaLabel?: string
    readonly isOpen: boolean
    readonly onClose: () => void
    readonly children: React.ReactNode
    readonly title?: string
    readonly header?: boolean
    readonly fullScreen?: boolean
}

const Modal: React.FC<ModalProps> = ({
    ariaLabel,
    isOpen,
    onClose,
    children,
    title = "",
    header = true,
    fullScreen = false,
}) => {
    const { t } = useTranslation()
    const titleId = useId()
    const mouseDownTargetRef = useRef<EventTarget | null>(null)
    const dialogRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const hasTitle = header && title.length > 0

    useDialogFocusTrap({
        dialogRef,
        initialFocusRef: header ? closeButtonRef : dialogRef,
        onClose,
        open: isOpen,
    })

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <Overlay
            onMouseDown={(event) => {
                mouseDownTargetRef.current = event.target
            }}
            onMouseUp={(event) => {
                if (
                    mouseDownTargetRef.current === event.currentTarget &&
                    event.target === event.currentTarget
                ) {
                    onClose()
                }
            }}
        >
            <ModalContainer
                ref={dialogRef}
                aria-label={hasTitle ? undefined : ariaLabel}
                aria-labelledby={hasTitle ? titleId : undefined}
                aria-modal="true"
                fullScreen={fullScreen}
                role="dialog"
                tabIndex={-1}
                onClick={(event) => event.stopPropagation()}
            >
                {header && (
                    <HeaderWrapper>
                        <Typography id={titleId} type="BigBold" color="Text.default">
                            {title}
                        </Typography>
                        <CloseButton
                            ref={closeButtonRef}
                            type="button"
                            aria-label={t("common.search.close")}
                            title={t("common.search.close")}
                            onClick={onClose}
                        >
                            <Icon size={24}>
                                <CloseIcon />
                            </Icon>
                        </CloseButton>
                    </HeaderWrapper>
                )}
                {children}
            </ModalContainer>
        </Overlay>,
        document.body,
    )
}

export default memo(Modal)
