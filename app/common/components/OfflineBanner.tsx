import React from "react"

import styled from "@emotion/styled"
import CloudOffIcon from "@mui/icons-material/CloudOff"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { useNetworkStatus } from "@/utils/useNetworkStatus"

const Banner = styled(FlexWrapper)`
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 8px;
    padding: 8px 12px;
`

const OfflineBanner: React.FC = () => {
    const isOnline = useNetworkStatus()
    const { t } = useTranslation()

    if (isOnline) return null

    return (
        <Banner direction="row" align="center" gap={8}>
            <Icon size={16} color="inherit">
                <CloudOffIcon />
            </Icon>
            <Typography type="Normal" color="Text.placeholder">
                {t("common.offline.banner")}
            </Typography>
        </Banner>
    )
}

export default OfflineBanner
