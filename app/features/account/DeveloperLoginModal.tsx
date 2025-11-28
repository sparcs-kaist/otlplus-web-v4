import { useState } from "react"

import styled from "@emotion/styled"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import { setLocalStorageItem } from "@/utils/localStorage"
import useIsDevice from "@/utils/useIsDevice"

const IdInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    color: ${({ theme }) => theme.colors.Text.default};
    margin: 10px 0;

    &:focus {
        outline: none;
    }
`

interface DeveloperLoginModalProps {
    developerLoginModalOpen: boolean
    setDeveloperLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DeveloperLoginModal: React.FC<DeveloperLoginModalProps> = ({
    developerLoginModalOpen,
    setDeveloperLoginModalOpen,
}) => {
    const isTablet = useIsDevice("tablet")

    const [idInput, setIdInput] = useState<string>("")

    const handleLogin = () => {
        if (!idInput) {
            alert("학번을 입력해주세요.")
            return
        }
        if (idInput.match(/[^0-9]/)) {
            alert("학번은 숫자만 입력 가능합니다.")
            return
        }
        setLocalStorageItem("devStudentId", idInput)
        location.reload()
    }

    return (
        <Modal
            isOpen={developerLoginModalOpen}
            onClose={() => setDeveloperLoginModalOpen(false)}
            title={"DEV 로그인"}
            fullScreen={isTablet}
        >
            <IdInput
                type="text"
                placeholder="학번을 입력해주세요."
                value={idInput}
                onChange={(e) => setIdInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleLogin()
                    }
                }}
            />
            <FlexWrapper direction="row" gap={0} justify="flex-end" align="center">
                <Button type="selected" onClick={handleLogin}>
                    로그인
                </Button>
            </FlexWrapper>
        </Modal>
    )
}

export default DeveloperLoginModal
