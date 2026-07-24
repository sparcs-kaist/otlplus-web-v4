import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Close } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { type TimeBlock } from "@/common/schemas/timeblock"
import { formatTimeAreaToString } from "@/utils/timetable/formatTimeblockToString"

const TimeFilterInner = styled(FlexWrapper)`
    width: 100%;
`

const TimeFilterPlaceholder = styled(Typography)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({ theme }) => theme.colors.Background.Button.default};
`

interface TimeFilterProps {
    timeFilters: TimeBlock[] | undefined | null
    setTimeFilters: ((timeFilter: TimeBlock[] | null) => void) | undefined
}

function TimeFilterArea({ timeFilters, setTimeFilters }: TimeFilterProps) {
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <FlexWrapper direction="column" gap={0} style={{ width: "100%" }}>
            <TimeFilterInner direction="column" gap={0}>
                {!timeFilters ? (
                    <TimeFilterPlaceholder color="Text.light" type="Normal">
                        {t("common.search.timeFilterPlaceholder")}
                    </TimeFilterPlaceholder>
                ) : (
                    timeFilters.map((timeFilter, index) => (
                        <FlexWrapper
                            direction="row"
                            justify="space-between"
                            gap={10}
                            align="center"
                        >
                            <Typography
                                color="Text.default"
                                type="Normal"
                            >{`${formatTimeAreaToString(timeFilter)}`}</Typography>
                            <Icon
                                size={15}
                                onClick={() => {
                                    if (!setTimeFilters) return
                                    setTimeFilters(null)
                                }}
                                color={theme.colors.Text.default}
                            >
                                <Close />
                            </Icon>
                        </FlexWrapper>
                    ))
                )}
            </TimeFilterInner>
        </FlexWrapper>
    )
}

export default TimeFilterArea
