import { useEffect, useRef } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import ReactDOM from "react-dom"

import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: rgba(51, 51, 51, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: auto;
`

const ModalContainer = styled.div<{ fullScreen: boolean }>`
    background: white;
    border-radius: ${(props) => (props.fullScreen ? "0px" : "12px")};
    min-width: ${(props) => (props.fullScreen ? "100dvw" : "630px")};
    width: ${(props) => (props.fullScreen ? "100dvw" : "auto")};
    height: ${(props) => (props.fullScreen ? "100dvh" : "auto")};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    pointer-events: auto;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    header?: boolean
    fullScreen?: boolean
}

const CloseIconWrapper = styled.div`
    width: 32px;
    height: 32px;
    padding: 6px;
    color: ${({ theme }) => theme.colors.Text.placeholder};
`

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title = "",
    header = true,
    fullScreen = false,
}) => {
    const mouseDownTargetRef = useRef<EventTarget | null>(null)

    // 모달 밖 스크롤 방지
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <Overlay
            onMouseDown={(e) => {
                mouseDownTargetRef.current = e.target
            }}
            onMouseUp={(e) => {
                if (
                    mouseDownTargetRef.current === e.currentTarget &&
                    e.target === e.currentTarget
                ) {
                    onClose()
                }
            }}
        >
            <ModalContainer onClick={(e) => e.stopPropagation()} fullScreen={fullScreen}>
                {header && (
                    <HeaderWrapper>
                        <Typography type="BigBold">{title}</Typography>
                        <CloseIconWrapper>
                            <Icon onClick={onClose} size={20}>
                                <CloseIcon />
                            </Icon>
                        </CloseIconWrapper>
                    </HeaderWrapper>
                )}
                {children}
            </ModalContainer>
        </Overlay>,
        document.body,
    )
}

export default Modal
