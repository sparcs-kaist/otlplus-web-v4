import * as ChannelService from "@channel.io/channel-web-sdk-loader"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { media } from "@/styles/themes/media"
import { useDetectOS } from "@/utils/useDetectOS"

const FooterWrapper = styled(FlexWrapper)`
    width: 100%;
`

const StyledLink = styled.a`
    text-decoration: none;
`

const StyledReactLink = styled(Link)`
    text-decoration: none;
`

const StyledTypographyLink = styled(Typography)`
    cursor: pointer;
    text-decoration: none;
`

const StyledImg = styled.img<{ src: string }>`
    height: 45px;
    background: transparent;

    ${media.tablet} {
        display: none;
    }
`

const MobileDisabledWrapper = styled.div`
    ${media.mobile} {
        display: none;
    }
`

const MobileOnlyWrapper = styled.div`
    display: none;

    ${media.mobile} {
        display: block;
    }
`

const FooterSection = styled(FlexWrapper)`
    width: 118px;
`

function Footer() {
    const { t } = useTranslation()
    const os = useDetectOS()

    function serviceLink(service: string) {
        const taxiIOSLink = "https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158"
        const taxiAndroidLink =
            "https://play.google.com/store/apps/details?id=org.sparcs.taxi_app"
        const otlIOSLink = "https://apps.apple.com/kr/app/otl/id1579878255"
        const otlAndroidLink =
            "https://play.google.com/store/apps/details?id=org.sparcs.otlplus"
        const araIOSLink = "https://apps.apple.com/kr/app/ara-for-kaist/id6457209147"
        const araAndroidLink =
            "https://play.google.com/store/apps/details?id=org.sparcs.newara"
        const buddyIOSLink = "https://apps.apple.com/kr/app/kaist-buddy/id6502600498"
        const buddyAndroidLink =
            "https://play.google.com/store/apps/details?id=org.sparcs.buddy"
        switch (service) {
            case "taxi":
                if (os === "ios" || os === "mac") return taxiIOSLink
                else return taxiAndroidLink
            case "otl":
                if (os === "ios" || os === "mac") return otlIOSLink
                else return otlAndroidLink
            case "ara":
                if (os === "ios" || os === "mac") return araIOSLink
                else return araAndroidLink
            case "buddy":
                if (os === "ios" || os === "mac") return buddyIOSLink
                else return buddyAndroidLink
            default:
                return ""
        }
    }

    return (
        <FooterWrapper direction="column" justify="center" align="stretch" gap={0}>
            <FlexWrapper
                direction="column"
                justify="center"
                align="stretch"
                gap={0}
                padding="0px 20px 55px 20px"
            >
                <FlexWrapper direction="row" justify="center" align="center" gap={127}>
                    <StyledImg src={`${import.meta.env.BASE_URL}headerIcon.png`} />
                    <FlexWrapper
                        direction="row"
                        justify="flex-start"
                        align="flex-start"
                        gap={47}
                    >
                        <MobileDisabledWrapper>
                            <FooterSection
                                direction="column"
                                justify="flex-start"
                                align="flex-start"
                                gap={40}
                            >
                                <Typography type="BiggerBold" color="Highlight.default">
                                    SPARCS
                                </Typography>
                                <FlexWrapper direction="column" gap={20}>
                                    <StyledLink
                                        href="https://www.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="Big" color="Text.dark">
                                            About SPARCS
                                        </Typography>
                                    </StyledLink>
                                    <StyledLink
                                        href="https://www.instagram.com/sparcs.kaist"
                                        target="_blank"
                                    >
                                        <Typography type="Big" color="Text.dark">
                                            Instagram
                                        </Typography>
                                    </StyledLink>
                                </FlexWrapper>
                            </FooterSection>
                        </MobileDisabledWrapper>
                        <MobileDisabledWrapper>
                            <FooterSection
                                direction="column"
                                justify="flex-start"
                                align="flex-start"
                                gap={40}
                            >
                                <Typography type="BiggerBold" color="Highlight.default">
                                    Services
                                </Typography>
                                <FlexWrapper direction="column" gap={20}>
                                    <StyledLink
                                        href="https://newara.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="Big" color="Text.dark">
                                            Ara
                                        </Typography>
                                    </StyledLink>
                                    <StyledLink
                                        href="https://taxi.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="Big" color="Text.dark">
                                            Taxi
                                        </Typography>
                                    </StyledLink>
                                    <StyledLink
                                        href="https://clubs.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="Big" color="Text.dark">
                                            Clubs
                                        </Typography>
                                    </StyledLink>
                                    <Typography type="Big" color="Text.dark">
                                        Students
                                    </Typography>
                                </FlexWrapper>
                            </FooterSection>
                        </MobileDisabledWrapper>
                        <FooterSection
                            direction="column"
                            justify="flex-start"
                            align="flex-start"
                            gap={40}
                        >
                            <Typography type="BiggerBold" color="Highlight.default">
                                Apps
                            </Typography>
                            <FlexWrapper direction="column" gap={20}>
                                {/*<StyledLink href={serviceLink("buddy")} target="_blank">*/}
                                {/*    <Typography type="Big" color="Text.dark">*/}
                                {/*        Buddy app*/}
                                {/*    </Typography>*/}
                                {/*</StyledLink>*/}
                                <StyledLink href={serviceLink("otl")} target="_blank">
                                    <Typography type="Big" color="Text.dark">
                                        OTL app
                                    </Typography>
                                </StyledLink>
                                <StyledLink href={serviceLink("taxi")} target="_blank">
                                    <Typography type="Big" color="Text.dark">
                                        Taxi
                                    </Typography>
                                </StyledLink>
                                <StyledLink href={serviceLink("ara")} target="_blank">
                                    <Typography type="Big" color="Text.dark">
                                        Ara
                                    </Typography>
                                </StyledLink>
                            </FlexWrapper>
                        </FooterSection>
                        <FooterSection
                            direction="column"
                            justify="flex-start"
                            align="flex-start"
                            gap={40}
                        >
                            <Typography type="BiggerBold" color="Highlight.default">
                                Resources
                            </Typography>
                            <FlexWrapper direction="column" gap={20}>
                                <StyledReactLink to="/privacy-policy">
                                    <Typography type="Big" color="Text.dark">
                                        {t("credits.privacyPolicy")}
                                    </Typography>
                                </StyledReactLink>
                                <StyledReactLink to="/license">
                                    <Typography type="Big" color="Text.dark">
                                        {t("credits.license")}
                                    </Typography>
                                </StyledReactLink>
                                <StyledReactLink to="/makers">
                                    <Typography type="Big" color="Text.dark">
                                        {t("credits.credits")}
                                    </Typography>
                                </StyledReactLink>
                                <MobileOnlyWrapper>
                                    <StyledLink
                                        href="https://www.instagram.com/sparcs.kaist"
                                        target="_blank"
                                    >
                                        <Typography type="Big" color="Text.dark">
                                            Instagram
                                        </Typography>
                                    </StyledLink>
                                </MobileOnlyWrapper>
                                <StyledTypographyLink>
                                    <Typography
                                        type="Big"
                                        color="Text.dark"
                                        onClick={() => {
                                            ChannelService.showMessenger()
                                        }}
                                    >
                                        {t("credits.contact")}
                                    </Typography>
                                </StyledTypographyLink>
                            </FlexWrapper>
                        </FooterSection>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            <Line height={5} color="Highlight.default" />
        </FooterWrapper>
    )
}

export default Footer
