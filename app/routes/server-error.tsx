import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import Button from "@/common/components/Button"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { media } from "@/styles/themes/media"

const PageWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.Background.Page.default};
`

const ContentContainer = styled(FlexWrapper)`
    max-width: 400px;
    width: 100%;
`

const LogoImage = styled.img`
    width: 120px;
    height: auto;
    margin-bottom: 16px;

    ${media.mobile} {
        width: 100px;
    }
`

const ApologyText = styled(Typography)`
    text-align: center;
`

const DescriptionText = styled(Typography)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`

const ButtonContainer = styled(FlexWrapper)`
    width: 100%;
    max-width: 280px;
`

export default function ServerErrorPage() {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate("/")
    }

    const handleRetry = () => {
        window.location.reload()
    }

    return (
        <PageWrapper>
            <ContentContainer direction="column" align="center" justify="center" gap={32}>
                <FlexWrapper direction="column" align="center" gap={16}>
                    <LogoImage
                        src={`${import.meta.env.BASE_URL}headerIcon.png`}
                        alt="OTL Logo"
                    />
                    <FlexWrapper direction="column" align="center" gap={8}>
                        <Typography type="BiggerBold" color="Highlight.default">
                            {t("common.serverError.title")}
                        </Typography>
                        <ApologyText type="Big" color="Text.dark">
                            {t("common.serverError.apology")}
                        </ApologyText>
                    </FlexWrapper>
                    <DescriptionText type="Normal" color="Text.light">
                        {t("common.serverError.description")}
                    </DescriptionText>
                </FlexWrapper>

                <ButtonContainer direction="column" align="center" gap={12}>
                    <Button type="highlighted" onClick={handleRetry} $isFlexRow>
                        <Typography type="Normal" color="Text.bright">
                            {t("common.serverError.retry")}
                        </Typography>
                    </Button>
                    <Button type="default" onClick={handleGoHome} $isFlexRow>
                        <Typography type="Normal">
                            {t("common.serverError.goHome")}
                        </Typography>
                    </Button>
                </ButtonContainer>
            </ContentContainer>
        </PageWrapper>
    )
}
