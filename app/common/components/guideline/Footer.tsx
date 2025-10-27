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
        const araIOSLink = "https://apps.apple.com/us/app/ara-for-kaist/id6457209147"
        const araAndroidLink =
            "https://play.google.com/store/apps/details?id=org.sparcs.newara"
        switch (service) {
            case "taxi":
                if (os == "ios" || os == "mac") return taxiIOSLink
                else return taxiAndroidLink
            case "otl":
                if (os == "ios" || os == "mac") return otlIOSLink
                else return otlAndroidLink
            case "ara":
                if (os == "ios" || os == "mac") return araIOSLink
                else return araAndroidLink
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
                padding="0px 0px 55px 0px"
            >
                <FlexWrapper
                    direction="row"
                    justify="center"
                    align="flex-start"
                    gap={100}
                >
                    <StyledImg src="/headerIcon.png" />
                    <FlexWrapper
                        direction="row"
                        justify="flex-start"
                        align="flex-start"
                        gap={100}
                        padding="12.5px 0"
                    >
                        <MobileDisabledWrapper>
                            <FlexWrapper
                                direction="column"
                                justify="flex-start"
                                align="flex-start"
                                gap={30}
                            >
                                <Typography type="BigBold" color="Highlight.default">
                                    SPARCS
                                </Typography>
                                <FlexWrapper direction="column" gap={10}>
                                    <StyledLink
                                        href="https://www.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="SmallBold" color="Text.default">
                                            About SPARCS
                                        </Typography>
                                    </StyledLink>
                                    <StyledLink
                                        href="https://www.instagram.com/sparcs.kaist"
                                        target="_blank"
                                    >
                                        <Typography type="SmallBold" color="Text.default">
                                            Instagram
                                        </Typography>
                                    </StyledLink>
                                </FlexWrapper>
                            </FlexWrapper>
                        </MobileDisabledWrapper>
                        <MobileDisabledWrapper>
                            <FlexWrapper
                                direction="column"
                                justify="flex-start"
                                align="flex-start"
                                gap={30}
                            >
                                <Typography type="BigBold" color="Highlight.default">
                                    Services
                                </Typography>
                                <FlexWrapper direction="column" gap={10}>
                                    <StyledLink
                                        href="https://newara.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="SmallBold" color="Text.default">
                                            Ara
                                        </Typography>
                                    </StyledLink>
                                    <StyledLink
                                        href="https://taxi.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="SmallBold" color="Text.default">
                                            Taxi
                                        </Typography>
                                    </StyledLink>
                                    <StyledLink
                                        href="https://clubs.sparcs.org/"
                                        target="_blank"
                                    >
                                        <Typography type="SmallBold" color="Text.default">
                                            Clubs
                                        </Typography>
                                    </StyledLink>
                                    <Typography type="SmallBold" color="Text.default">
                                        Students
                                    </Typography>
                                </FlexWrapper>
                            </FlexWrapper>
                        </MobileDisabledWrapper>
                        <FlexWrapper
                            direction="column"
                            justify="flex-start"
                            align="flex-start"
                            gap={30}
                        >
                            <Typography type="BigBold" color="Highlight.default">
                                Apps
                            </Typography>
                            <FlexWrapper direction="column" gap={10}>
                                {/*{useDetectOS() == "ios" && (*/}
                                {/*    <StyledLink href="">*/}
                                {/*        <Typography type="SmallBold" color="Text.default">*/}
                                {/*            Buddy app*/}
                                {/*        </Typography>*/}
                                {/*    </StyledLink>*/}
                                {/*)}*/}
                                <StyledLink href={serviceLink("otl")} target="_blank">
                                    <Typography type="SmallBold" color="Text.default">
                                        OTL app
                                    </Typography>
                                </StyledLink>
                                <StyledLink href={serviceLink("taxi")} target="_blank">
                                    <Typography type="SmallBold" color="Text.default">
                                        Taxi
                                    </Typography>
                                </StyledLink>
                                <StyledLink href={serviceLink("ara")} target="_blank">
                                    <Typography type="SmallBold" color="Text.default">
                                        Ara
                                    </Typography>
                                </StyledLink>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper
                            direction="column"
                            justify="flex-start"
                            align="flex-start"
                            gap={30}
                        >
                            <Typography type="BigBold" color="Highlight.default">
                                Resources
                            </Typography>
                            <FlexWrapper direction="column" gap={10}>
                                <StyledReactLink to="">
                                    <Typography type="SmallBold" color="Text.default">
                                        {t("credits.privacyPolicy")}
                                    </Typography>
                                </StyledReactLink>
                                <StyledReactLink to="">
                                    <Typography type="SmallBold" color="Text.default">
                                        {t("credits.license")}
                                    </Typography>
                                </StyledReactLink>
                                <StyledReactLink to="/makers">
                                    <Typography type="SmallBold" color="Text.default">
                                        {t("credits.credits")}
                                    </Typography>
                                </StyledReactLink>
                                <MobileOnlyWrapper>
                                    <StyledLink
                                        href="https://www.instagram.com/sparcs.kaist"
                                        target="_blank"
                                    >
                                        <Typography type="SmallBold" color="Text.default">
                                            Instagram
                                        </Typography>
                                    </StyledLink>
                                </MobileOnlyWrapper>
                                <StyledReactLink to="">
                                    <Typography type="SmallBold" color="Text.default">
                                        {t("credits.contact")}
                                    </Typography>
                                </StyledReactLink>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            <Line height={5} color="Highlight.default" />
        </FooterWrapper>
    )
}

export default Footer
