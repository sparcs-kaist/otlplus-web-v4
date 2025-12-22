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
    flex-grow: 1;
`

export default function License() {
    return (
        <FlexWrapper
            direction="column"
            gap={0}
            align="center"
            padding="20px"
            style={{ minHeight: "calc(100vh - 60px)" }}
        >
            <StyledWidget direction="column" gap={20}>
                <Typography color="Text.default" type="BiggerBold">
                    Licenses
                </Typography>
                <Typography
                    color="Text.default"
                    type="Normal"
                >{`Copyright © 2016-${new Date().getFullYear()}, SPARCS OTL Team. All rights reserved.`}</Typography>
            </StyledWidget>
        </FlexWrapper>
    )
}
