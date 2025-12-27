import { useState } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import type { GETUserInfoResponse } from "@/api/users/info"
import Button from "@/common/components/Button"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Department } from "@/common/schemas/department"
import DepartmentSearchArea from "@/features/account/components/DepartmentSearchArea"
import { useAPI } from "@/utils/api/useAPI"

const AccountInterestedMajorSectionWrapper = styled(FlexWrapper)`
    margin: 10px 0;
`

const EditButton = styled.button`
    height: 32px;
    padding: 8px 10px;
    border-radius: 6px;
    border: none;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Block.dark};
    }
`

interface AccountInterestedMajorSectionProps {
    userInfo: GETUserInfoResponse | null
}

const Index: React.FC<AccountInterestedMajorSectionProps> = ({ userInfo }) => {
    const { t, i18n } = useTranslation()
    const queryClient = useQueryClient()

    const { query } = useAPI("GET", "/department-options")
    const { requestFunction } = useAPI(
        "PUT",
        `/users/${userInfo?.id}/interested-departments`,
        {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["/users/info"] })
            },
        },
    )

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [temporaryMajor, setTemporaryMajor] = useState<Department[]>([])

    const startEditing = () => {
        setTemporaryMajor(userInfo ? [...userInfo.interestedDepartments] : [])
        setIsEditing(true)
    }

    function findDepartmentNameById(id: number): string | undefined {
        const department = query.data?.departments?.find((dept) => dept.id === id)
        return department
            ? i18n.language === "en"
                ? department.code
                : department.name
            : undefined
    }

    function saveInterestedMajors() {
        requestFunction({
            interestedDepartmentIds: temporaryMajor.map((dept) => dept.id),
        })
        setIsEditing(false)
    }

    return (
        <AccountInterestedMajorSectionWrapper direction="column" gap={12}>
            <FlexWrapper
                direction={"row"}
                gap={0}
                align="center"
                justify="space-between"
                style={{ width: "100%" }}
            >
                <Typography type="NormalBold" color="Text.default">
                    {t("account.interestedDepartments")}
                </Typography>
                {!isEditing && (
                    <FlexWrapper direction={"row"} gap={8} align="center">
                        <Typography type="Normal" color="Text.default">
                            {userInfo?.interestedDepartments
                                .map((department) => {
                                    return findDepartmentNameById(department.id) || ""
                                })
                                .join(", ")}
                        </Typography>
                        <EditButton onClick={startEditing}>{t("common.edit")}</EditButton>
                    </FlexWrapper>
                )}
            </FlexWrapper>
            {isEditing && (
                <>
                    <DepartmentSearchArea
                        currentDepartment={temporaryMajor}
                        setCurrentDepartment={setTemporaryMajor}
                    />
                    <Button
                        type="selected"
                        style={{ width: "100%", height: "48px" }}
                        onClick={saveInterestedMajors}
                    >
                        {t("common.save")}
                    </Button>
                </>
            )}
        </AccountInterestedMajorSectionWrapper>
    )
}

export default Index
