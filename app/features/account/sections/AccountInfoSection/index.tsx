import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import type { GETUserInfoResponse } from "@/api/users/$userId/info"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const LinkText = styled(Typography)`
    cursor: pointer;
    display: inline-block;
`

const Caption = styled(Typography)`
    opacity: 50%;
`

interface AccountInfoSectionProps {
    userInfo: GETUserInfoResponse | null
}

const Index: React.FC<AccountInfoSectionProps> = ({ userInfo }) => {
    const { t } = useTranslation()

    return (
        <FlexWrapper direction={"column"} gap={12}>
            {[
                [t("account.name"), userInfo?.name],
                [t("account.email"), userInfo?.mail],
            ].map(([label, value], index) => (
                <FlexWrapper key={index} direction={"row"} gap={8} align={"center"}>
                    <Typography type={"NormalBold"} color={"Text.default"}>
                        {label}
                    </Typography>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {value}
                    </Typography>
                </FlexWrapper>
            ))}
            <Caption type={"Smaller"} color={"Text.default"}>
                <Trans
                    i18nKey="account.sparcsssoCaption"
                    components={{
                        bold: (
                            <LinkText
                                type={"Smaller"}
                                color={"Highlight.default"}
                                onClick={() => {
                                    window.open(
                                        "https://sparcssso.kaist.ac.kr/account/profile/",
                                    )
                                }}
                                children={undefined}
                            />
                        ),
                    }}
                />
            </Caption>
            {[
                [t("account.schoolId"), userInfo?.studentNumber],
                [t("account.course"), userInfo?.course],
                [
                    t("account.major"),
                    userInfo?.majorDepartments.map((dept) => dept.name).join(", "),
                ],
            ].map(([label, value], index) => (
                <FlexWrapper key={index} direction={"row"} gap={8} align={"center"}>
                    <Typography type={"NormalBold"} color={"Text.default"}>
                        {label}
                    </Typography>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {value}
                    </Typography>
                </FlexWrapper>
            ))}
            <Caption type={"Smaller"} color={"Text.default"}>
                <Trans
                    i18nKey="account.kaistPortalCaption"
                    components={{
                        bold: (
                            <LinkText
                                type={"Smaller"}
                                color={"Highlight.default"}
                                onClick={() => {
                                    window.location.href = "mailto:otlplus@sparcs.org"
                                }}
                                children={undefined}
                            />
                        ),
                    }}
                />
            </Caption>
        </FlexWrapper>
    )
}

export default Index
