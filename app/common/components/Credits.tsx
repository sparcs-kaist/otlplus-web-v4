import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import useIsDevice from "@/utils/useIsDevice"

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledAnchor = styled.a`
    text-decoration: none;
`

const Credits: React.FC = () => {
    const { t } = useTranslation()
    const isLaptop = useIsDevice("laptop")

    return (
        <FlexWrapper direction="column" gap={12} align={"center"} justify={"stretch"}>
            <Typography color={"Text.placeholder"} type={"Bigger"}>
                OTL PLUS
            </Typography>
            <FlexWrapper
                direction="row"
                gap={isLaptop ? 10 : 12}
                justify={"space-between"}
            >
                <StyledLink to="/makers">
                    <Typography
                        color={"Text.placeholder"}
                        type={isLaptop ? "Normal" : "Big"}
                    >
                        {t("credits.credits")}
                    </Typography>
                </StyledLink>
                <Typography color={"Text.placeholder"} type={isLaptop ? "Normal" : "Big"}>
                    |
                </Typography>
                <StyledLink to="/license">
                    <Typography
                        color={"Text.placeholder"}
                        type={isLaptop ? "Normal" : "Big"}
                    >
                        {t("credits.license")}
                    </Typography>
                </StyledLink>
                <Typography color={"Text.placeholder"} type={isLaptop ? "Normal" : "Big"}>
                    |
                </Typography>
                <StyledLink to="/privacy-policy">
                    <Typography
                        color={"Text.placeholder"}
                        type={isLaptop ? "Normal" : "Big"}
                    >
                        {t("credits.privacyPolicy")}
                    </Typography>
                </StyledLink>
            </FlexWrapper>
            <StyledAnchor href="mailto:otlplus@sparcs.org">
                <Typography color={"Text.placeholder"} type={"Big"}>
                    otlplus@sparcs.org
                </Typography>
            </StyledAnchor>
            <Typography color={"Text.placeholder"} type={"Big"}>
                Ⓒ 2026, SPARCS OTL TEAM
            </Typography>
        </FlexWrapper>
    )
}

export default Credits
