import { useState } from "react"

import styled from "@emotion/styled"

import Button from "@/common/components/Button"
import ResponsiveModal from "@/common/components/ResponsiveModal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import { setLocalStorageItem } from "@/utils/localStorage"

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
        <ResponsiveModal
            isOpen={developerLoginModalOpen}
            onClose={() => setDeveloperLoginModalOpen(false)}
            title={"DEV 로그인"}
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
        </ResponsiveModal>
    )
}

export default DeveloperLoginModal
