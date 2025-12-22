import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"

const StyledWidget = styled(Widget)`
    width: 100%;
    max-width: 1000px;
    padding: 20px;
    align-items: center;
    height: 100%;
    flex: 1 0 auto;
`

export default function PrivacyPolicy() {
    return (
        <FlexWrapper
            direction="column"
            gap={0}
            align="center"
            padding="20px"
            style={{ minHeight: "100vh" }}
        >
            <StyledWidget direction="column" gap={20}>
                <Typography color="Text.default" type="BiggerBold">
                    Privacy Policy
                </Typography>
            </StyledWidget>
        </FlexWrapper>
    )
}
