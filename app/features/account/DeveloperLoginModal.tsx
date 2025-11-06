import { useState } from "react"

import styled from "@emotion/styled"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import { axiosClient } from "@/libs/axios"
import { setLocalStorageItem } from "@/utils/localStorage"
import useIsDevice from "@/utils/useIsDevice"

const IdInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #ccc;

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

    const [input, setInput] = useState<string>("")

    const handleLogin = () => {
        if (input) {
            setLocalStorageItem("devStudentId", input)
            axiosClient.defaults.headers.common["X-AUTH-SID"] = input
            location.reload()
        } else {
            alert("학번을 입력해주세요.")
        }
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
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
