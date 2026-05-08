import Modal from "@/common/components/Modal"
import type { DeviceType } from "@/styles/themes/_base/variables/breakpoints"
import useIsDevice from "@/utils/useIsDevice"

interface ResponsiveModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    header?: boolean
    fullScreenBelow?: DeviceType
}

export default function ResponsiveModal({
    isOpen,
    onClose,
    children,
    title,
    header,
    fullScreenBelow = "tablet",
}: ResponsiveModalProps) {
    const fullScreen = useIsDevice(fullScreenBelow)

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            header={header}
            fullScreen={fullScreen}
        >
            {children}
        </Modal>
    )
}
