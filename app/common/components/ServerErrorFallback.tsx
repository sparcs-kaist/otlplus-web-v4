import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import FlexWrapper from "../primitives/FlexWrapper"
import Typography from "../primitives/Typography"
import Button from "./Button"

interface ServerErrorFallbackProps {
    onRetry?: () => void
    showOfflineOption?: boolean
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    box-sizing: border-box;
`

const IconSvg = styled.svg`
    width: 64px;
    height: 64px;
    stroke: ${({ theme }) => theme.colors.Text.disable};
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
`

const DescriptionText = styled(Typography)`
    text-align: center;
    max-width: 280px;
`

const CloudOffIcon = () => (
    <IconSvg viewBox="0 0 24 24">
        <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </IconSvg>
)

const ButtonContainer = styled(FlexWrapper)`
    width: 100%;
`

const ServerErrorFallback: React.FC<ServerErrorFallbackProps> = ({
    onRetry,
    showOfflineOption = true,
}) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate("/")
    }

    const handleViewOffline = () => {
        navigate("/timetable/offline")
    }

    return (
        <Container>
            <FlexWrapper direction="column" align="center" justify="center" gap={24}>
                <FlexWrapper direction="column" align="center" gap={12}>
                    <CloudOffIcon />
                    <FlexWrapper direction="column" align="center" gap={8}>
                        <Typography type="BiggerBold" color="Text.default">
                            {t("common.offline.title")}
                        </Typography>
                        <DescriptionText type="Normal" color="Text.placeholder">
                            {t("common.offline.description")}
                        </DescriptionText>
                    </FlexWrapper>
                </FlexWrapper>

                <ButtonContainer direction="column" align="center" gap={12}>
                    {showOfflineOption && (
                        <Button type="highlighted" onClick={handleViewOffline} $isFlexRow>
                            {t("common.offline.viewOfflineTimetable")}
                        </Button>
                    )}

                    {onRetry && (
                        <Button type="default" onClick={onRetry} $isFlexRow>
                            {t("common.offline.retry")}
                        </Button>
                    )}

                    <Button type="default" onClick={handleGoHome} $isFlexRow>
                        {t("common.offline.goHome")}
                    </Button>
                </ButtonContainer>
            </FlexWrapper>
        </Container>
    )
}

export default ServerErrorFallback
